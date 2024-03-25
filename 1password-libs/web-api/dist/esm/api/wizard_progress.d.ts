import { Session } from "./session";
export interface CreateProvisioningProgressParams {
    stepNum: number;
    stepName: string;
    deployment?: string;
    idp?: string;
}
/** Create a Log entry indicating a completed step in the Provisioning setup flow */
export declare const createProvisioningProgressStep: (s: Session, progressParams: CreateProvisioningProgressParams) => Promise<void>;
