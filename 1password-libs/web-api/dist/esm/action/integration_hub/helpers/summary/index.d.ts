import { ServiceAccountType, ServiceAccountUser } from "../../../../api";
import { IntegrationSummary, SlackApp, Vault, VaultItem } from "../../../../model";
import { AppReleases, Device } from "../../../../shared";
import { Context } from "../../../context";
interface BuildSummaryObjectProps {
    serviceAccount?: ServiceAccountUser;
    devices?: Device.Type[];
    releases?: AppReleases;
    slackApp?: SlackApp;
    type: ServiceAccountType;
    CTX: Context;
    usersVaults?: Vault[];
    vaultItem?: VaultItem;
}
/**
 * buildSummaryObject
 *
 *  This function will take the integration data and transform that to the summary object
 *
 * @param props : buildSummaryObjectProps
 * @param props.serviceAccount : full serviceAccount object
 * @param props.devices : integration device information
 * @param props.releases : build release information useful for alerting customers of outdated integration versions
 * @param props.slackApp : full slack app
 * @param props.type : the integration type
 * @param props.CTX : Context for older integrations to get info from
 * @param props.usersVaults : List of users vaults
 * @param props.vaultItem : Used for Fastmail, as config data is stored in a VaultItem in the system vault
 */
export declare const buildSummaryObject: ({ serviceAccount, devices, releases, slackApp, type, CTX, usersVaults, vaultItem, }: BuildSummaryObjectProps) => Promise<IntegrationSummary>;
export {};
