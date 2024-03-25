import * as t from "io-ts";
import * as util from "../util";
import { JwkRsaPubKey } from "../util/crypto";
import { Session } from "./session";
declare const WatchtowerPubkey: t.ReadonlyC<t.TypeC<{
    pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
        kty: t.LiteralC<"RSA">;
        alg: t.StringC;
        e: t.StringC;
        n: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"enc">;
    }>]>>;
}>>;
export declare type WatchtowerPubkey = t.TypeOf<typeof WatchtowerPubkey>;
export interface WatchtowerReport {
    version: number;
    vaultContentVersion: number;
    encData: util.crypto.Jwe;
}
export declare const WatchtowerReportVaultData: t.ReadonlyC<t.TypeC<{
    encryptedBy: t.StringC;
    vaultKeySn: t.NumberC;
    encVaultKey: t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        enc: t.StringC;
        cty: t.StringC;
        data: t.StringC;
    }>, t.PartialC<{
        iv: t.StringC;
        alg: t.StringC;
        p2c: t.NumberC;
        p2s: t.StringC;
    }>]>;
    encVaultAttrs: t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        enc: t.StringC;
        cty: t.StringC;
        data: t.StringC;
    }>, t.PartialC<{
        iv: t.StringC;
        alg: t.StringC;
        p2c: t.NumberC;
        p2s: t.StringC;
    }>]>;
    combinedAcl: t.NumberC;
}>>;
export declare type WatchtowerReportVaultData = t.TypeOf<typeof WatchtowerReportVaultData>;
export declare const WatchtowerReportItem: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    uuid: t.StringC;
    vaultUuid: t.StringC;
    updatedAt: t.StringC;
    isOutdated: t.BooleanC;
    encData: t.ReadonlyC<t.TypeC<{
        protected: t.StringC;
        encrypted_key: t.StringC;
        iv: t.StringC;
        ciphertext: t.StringC;
        tag: t.StringC;
    }>>;
}>, t.PartialC<{
    vaultData: t.ReadonlyC<t.TypeC<{
        encryptedBy: t.StringC;
        vaultKeySn: t.NumberC;
        encVaultKey: t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>;
        encVaultAttrs: t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>;
        combinedAcl: t.NumberC;
    }>>;
}>]>>;
export declare const WatchtowerReports: t.ReadonlyC<t.TypeC<{
    reports: t.ArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        uuid: t.StringC;
        vaultUuid: t.StringC;
        updatedAt: t.StringC;
        isOutdated: t.BooleanC;
        encData: t.ReadonlyC<t.TypeC<{
            protected: t.StringC;
            encrypted_key: t.StringC;
            iv: t.StringC;
            ciphertext: t.StringC;
            tag: t.StringC;
        }>>;
    }>, t.PartialC<{
        vaultData: t.ReadonlyC<t.TypeC<{
            encryptedBy: t.StringC;
            vaultKeySn: t.NumberC;
            encVaultKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
            encVaultAttrs: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
            combinedAcl: t.NumberC;
        }>>;
    }>]>>>;
    nextStartUuid: t.StringC;
    accountVaultCount: t.NumberC;
}>>;
export declare type WatchtowerReports = t.TypeOf<typeof WatchtowerReports>;
export declare type WatchtowerReportItem = t.TypeOf<typeof WatchtowerReportItem>;
/** getWatchtowerPubkey gets the admin watchtower public key **/
export declare const getWatchtowerPubkey: (s: Session) => Promise<WatchtowerPubkey>;
/** uploadWatchtowerReport uploads an admin watchtower reports for a vault **/
export declare const uploadWatchtowerReport: (s: Session, vaultUuid: string, report: WatchtowerReport) => Promise<void>;
/** getWatchtowerReport gets up to 1000 admin watchtower reports starting with a provided start_uuid or 0 **/
/** ex: vaultTypes: "U,E" **/
export declare const getWatchtowerReport: (s: Session, vaultTypes?: string | undefined, startUuid?: string | undefined) => Promise<WatchtowerReports>;
/** createWatchtowerPubkey creates the admin watchtower public key **/
export declare const createWatchtowerPubkey: (s: Session, uuid: string, pubKey: JwkRsaPubKey) => Promise<void>;
export {};
