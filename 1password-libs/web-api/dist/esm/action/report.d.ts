import * as api from "../api";
import { GetAccountReportCSVResponse, VaultsReportAttributes, VaultsReportTypes } from "../api/report";
import * as model from "../model";
import { Context } from "./context";
export { VaultsReportAttributes, VaultsReportTypes, GetAccountReportCSVResponse, };
export declare const getDashboardReport: (c: Context) => Promise<model.ReportDashboardOverview>;
export declare const getUserReport: (c: Context, uuid: string) => Promise<model.ReportUser>;
export interface UsageReports {
    apiReportItem: api.ReportItem;
    itemUsages: model.ReportSectionItemUsage[];
}
export declare const getUsageReportsWithFilters: (c: Context, reportParams: api.ReportTypeParams, filters: api.ReportDateFilters) => Promise<UsageReports>;
export declare const getUsageReportsWithCursors: (c: Context, reportParams: api.ReportTypeParams, cursors: api.ReportCursors) => Promise<UsageReports>;
export declare const getVaultReport: (c: Context, uuid: string) => Promise<model.ReportVault>;
export declare const getVaultsReport: (c: Context, name: VaultsReportTypes, attrs: api.VaultsReportAttributes[]) => Promise<model.ReportVaults[]>;
export declare const getAccountReport: (c: Context, sections: api.ReportSections[]) => Promise<model.ReportAccount>;
export declare const getOverviewReport: (c: Context) => Promise<api.ReportOverview>;
export declare const getOldDevicesReport: (c: Context) => Promise<model.ReportOldDevices>;
export declare const getAccountReportCSV: (c: Context) => Promise<api.GetAccountReportCSVResponse>;
