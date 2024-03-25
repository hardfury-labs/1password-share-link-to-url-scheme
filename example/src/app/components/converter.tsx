'use client';

import { useCallback, useState } from 'react';
import { action, model, util } from '@1password/web-api';
import { Alert, AlertIcon, Button, Container, Textarea, VStack } from '@chakra-ui/react';

interface ItemShareResponse {
  readonly uuid: string;
  readonly templateUuid: string;
  readonly encOverview: util.crypto.JweB;
  readonly encDetails: util.crypto.JweB;
  readonly maxViews?: number;
  readonly expiresAt: string;
  readonly canJoinTeam: boolean;
  readonly template?: model.VaultItemTemplate;
  readonly accountName?: string;
  readonly accountType?: string;
}

interface ServerError {
  reason: string;
}

async function parseShareLink(link: string) {
  const url = new URL(link);
  const { hostname, pathname, hash } = url;

  if (hostname !== 'share.1password.com' || pathname !== '/s' || !hash.startsWith('#')) {
    return Promise.reject(new Error('Invalid URL. Must be a 1Password share link.'));
  }

  return Promise.resolve(getSharedItem(hash.slice(1)));
}

/**
 * Gets the shared item, including encrypted overview/details and metadata.
 */
async function getSharedItem(shareSecret: string) {
  const derivedParts = action.derivePartsFromShareSecret(shareSecret);

  return getSharedItemAndParse(derivedParts);
}

async function getSharedItemAndParse(derivedParts: { readonly uuid: string; readonly token: string; readonly rawKey: Uint8Array }) {
  const { uuid } = derivedParts;

  const headers = new Headers();
  // This token proves access to the share secret
  headers.set('OP-Share-Token', derivedParts.token);

  let itemShare: ItemShareResponse;
  try {
    const response = await fetch(`/api/v1/share/${uuid}`, { headers });
    if (response.ok) {
      itemShare = await response.json();
    } else {
      const serverError: ServerError = await response.json();
      console.error('Failed to getSharedItem', response.status, serverError);
      if (
        serverError.reason === 'unauthorized' ||
        serverError.reason === 'max_views' ||
        serverError.reason === 'expired' ||
        serverError.reason === 'not_found'
      ) {
        return { type: serverError.reason, uuid };
      }
      throw new Error('Unknown error');
    }
  } catch (error) {
    console.error('Failed to getSharedItem', error);
    throw error;
  }

  const item = await action.decryptItemShare(itemShare, derivedParts.rawKey);

  return {
    type: 'success',
    uuid,
    item,
    metadata: {
      accountName: itemShare.accountName,
      accountType: itemShare.accountType || '',
      maxViews: itemShare.maxViews,
      expiresAt: util.dateFromGolang(itemShare.expiresAt),
      canJoinTeam: itemShare.canJoinTeam,
      template: itemShare.template,
    },
  };
}

export default function Converter() {
  const [link, setLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const convert = useCallback(() => {
    setErrorMsg(null);
    setIsLoading(true);

    parseShareLink(link)
      .then((item) => console.log(item))
      .catch((err) => {
        console.log(err.message);
        setErrorMsg(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [link]);

  return (
    <Container as='main' py={12}>
      <VStack>
        <Textarea
          placeholder='The 1Password share link, like: https://share.1password.com/s#VaJN8nY-oEk4uunYwsAY_Wt2qQ-Em4GL3GYb12eGTug'
          value={link}
          onChange={(event) => setLink(event.target.value)}
        />
        {errorMsg && (
          <Alert status='error'>
            <AlertIcon />
            {errorMsg}
          </Alert>
        )}
        <Button isLoading={isLoading} isDisabled={!link} onClick={convert}>
          Convert
        </Button>
      </VStack>
    </Container>
  );
}
