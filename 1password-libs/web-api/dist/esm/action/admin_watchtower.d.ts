import * as api from "../api";
import { WatchtowerDataStructureV1 } from "../model";
import * as model from "../model";
import { JwkRsaPubKey } from "../util/crypto";
import { Context } from "./context";
import { WatchtowerReport } from "./vault_item_watchtower";
/** getWatchtowerReportCounts is a utility function that calculates all of the admin watchtower report counts **/
export declare const getWatchtowerReportCounts: (reports: Record<string, WatchtowerReport>, hibpEnabled: boolean) => WatchtowerDataStructureV1;
/** uploadWatchtowerReports kicks off the process of uploading admin watchtower reports. **/
export declare const uploadWatchtowerReports: (c: Context, hibpEnabled: boolean, shouldThrottle: boolean) => Promise<void>;
/** createWatchtowerPubkey creates the admin watchtower public key **/
export declare const createWatchtowerPubkey: (c: Context, uuid: string, pubKey: JwkRsaPubKey) => Promise<void>;
/** getWatchtowerPubkey gets the admin watchtower public key **/
export declare const getWatchtowerPubkey: (c: Context) => Promise<api.WatchtowerPubkey>;
/** getWatchtowerReport gets up to 1000 admin watchtower reports starting with a provided startUuid or 0 **/
export declare const getWatchtowerReports: (c: Context, vaultTypes?: string | undefined) => Promise<model.WatchtowerReport>;
export interface WatchtowerReportResponse {
    reports: api.WatchtowerReportItem[];
    accountVaultCount: number;
}
/**
 * batchGetWatchtowerReports gets batches of 1000 watchtower reports and
 * returns a list of all of them
 */
export declare const batchGetWatchtowerReports: (c: Context, vaultTypes?: string | undefined) => Promise<WatchtowerReportResponse>;
