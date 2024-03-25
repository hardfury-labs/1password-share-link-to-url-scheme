import { ServiceAccountUser } from "../../../../api";
import { IntegrationSummary } from "../../../../model";
import { Context } from "../../../context";
export interface DataStreamingSummaryProps {
    CTX: Context;
    sa: ServiceAccountUser;
}
/**
 * getDataStreamingSummaryInfo
 *
 * @param props : getStreamingSummaryProps
 * @param props.CTX : Context
 * @param props.sa : Service account user
 *
 * @returns IntegrationSummary
 */
export declare const getDataStreamingSummaryInfo: ({ CTX, sa, }: DataStreamingSummaryProps) => Promise<IntegrationSummary>;
