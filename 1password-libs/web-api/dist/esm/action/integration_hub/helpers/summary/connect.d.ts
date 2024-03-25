import { ServiceAccountUser } from "../../../../api";
import * as model from "../../../../model";
import { Device } from "../../../../shared";
import { Context } from "../../../context";
interface ConnectSummaryProps {
    CTX: Context;
    sa: ServiceAccountUser;
    devices?: Device.Type[];
    usersVaults?: model.Vault[];
}
/**
 * getConnectSummaryInfo
 *
 * @param props ConnectSummaryProps
 * @param props.CTX : context
 * @param props.sa  : serviceaccount
 * @param props.devices : device information
 * @param props.usersVaults : list of users vaults
 *
 * @returns Promise<IntegrationSummary>
 */
export declare const getConnectSummaryInfo: ({ CTX, sa, devices, usersVaults, }: ConnectSummaryProps) => Promise<model.IntegrationSummary>;
export {};
