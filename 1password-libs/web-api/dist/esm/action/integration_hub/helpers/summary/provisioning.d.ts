import { ServiceAccountUser } from "../../../../api";
import { IntegrationSummary } from "../../../../model";
import { AppReleases } from "../../../../shared/app_releases";
import { Context } from "../../../context";
export interface ProvisioningSummaryProps {
    CTX: Context;
    sa: ServiceAccountUser;
    releases?: AppReleases;
}
/**
 * getProvisioningSummaryInfo
 *
 * @param props : ProvisioningSummaryProps
 * @param props.CTX : Context
 * @param props.sa : Service account user
 * @param props.releases : App build releases
 *
 * @returns IntegrationSummary
 */
export declare const getProvisioningSummaryInfo: ({ CTX, sa, releases, }: ProvisioningSummaryProps) => Promise<IntegrationSummary>;
