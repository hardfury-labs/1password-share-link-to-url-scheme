import * as api from '../api';
import * as util from '../util';
import { Person } from './person';
import { SymmetricKey } from './symmetric_key';
import { Vault } from './vault';
import { VaultItem } from './vault_item';
import { Group, Keyset } from '.';
export declare class Package {
  uuid: string | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  item: VaultItem | undefined;
  sender: Person;
  recipient: api.UserPubKey;
  templateUuid: string | undefined;
  itemUuid: string | undefined;
  itemVersion: number | undefined;
  clientCreatedAt: Date | undefined;
  clientUpdatedAt: Date | undefined;
  key: SymmetricKey | undefined;
  encKey: util.crypto.JweB | undefined;
  recoverableEncKey: util.crypto.JweB | undefined;
  encOverview: util.crypto.JweB | undefined;
  encDetails: util.crypto.JweB | undefined;
  signature: util.crypto.JwsB | undefined;
  constructor(sender: Person, recipient: api.UserPubKey, item?: VaultItem);
  encryptAndSign: (recoveryGroup: Group) => Promise<Package>;
  _enableKeyRecovery: (recoveryGroup: Group) => Promise<Package>;
  verifyAndDecrypt: (vault: Vault, keyset: Keyset) => Promise<Package>;
}
export declare namespace PackageV2 {
  const encryptAndSign: (_item: VaultItem, _recipientUuid: string, _expiresIn: api.ExpiresIn) => Promise<api.OutgoingPackageV2 | void>;
  const verifyAndDecrypt: (_package: api.IncomingPackageV2) => Promise<VaultItem | void>;
}
