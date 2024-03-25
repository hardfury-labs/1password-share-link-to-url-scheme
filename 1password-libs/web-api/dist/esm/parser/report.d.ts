import { Context } from "../action/context";
import * as api from "../api";
import * as model from "../model";
export declare const userReportFromAPI: (c: Context, apiReport: api.ReportUser, user: model.Person | undefined) => Promise<model.ReportUser>;
export declare const vaultReportFromAPI: (c: Context, apiReport: api.ReportVault) => Promise<model.ReportVault>;
export declare const vaultsReportFromAPI: (c: Context, report: api.ReportVaults) => Promise<model.ReportVaults[]>;
