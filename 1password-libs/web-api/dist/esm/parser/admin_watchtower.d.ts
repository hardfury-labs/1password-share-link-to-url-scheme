import { Context } from "../action/context";
import { WatchtowerReportItem } from "../api";
import * as model from "../model";
/** parseAdminWatchtowerReports decrypts the server reports and vault attrs and returns a model WatchtowerReportItem **/
export declare const parseAdminWatchtowerReports: (c: Context, serverReports: WatchtowerReportItem[], watchtowerPrivateKey: model.ObjectData<model.AdminWatchtowerKeysetObjectDataValue>) => Promise<model.WatchtowerReportItem[]>;
