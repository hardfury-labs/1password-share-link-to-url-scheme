import * as bo from "../shared/backoffice";
import { JwkEcPubKey } from "../util/crypto";
import * as billing from "./billing";
import { Session } from "./session";
export declare const getBackoffice: (s: Session) => Promise<bo.Section[]>;
export declare const getBackofficeInvoice: (s: Session, invoiceUID: string) => Promise<billing.Invoice>;
export declare const getBackofficeList: (s: Session, objectID: number, listType: string) => Promise<bo.SelectInputOptionList>;
export declare const getBackofficeNextInvoice: (s: Session, customerUID: string) => Promise<billing.Invoice>;
export declare const performBackofficeAction: (s: Session, action: bo.Action, params: Record<string, string>) => Promise<bo.ActionResult>;
export interface BackofficeUserSigningKeysetsResponse {
    keySets: BackofficeUserSigningKeyset[];
}
export interface BackofficeUserSigningKeyset {
    uuid: string;
    sn: number;
    encryptedBy: string;
    spubKey: JwkEcPubKey;
}
export declare const getBackofficeSigningKeysetsForUser: (s: Session, userUuid: string) => Promise<BackofficeUserSigningKeysetsResponse>;
