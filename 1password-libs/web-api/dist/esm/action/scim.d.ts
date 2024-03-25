import * as api from "../api";
import * as model from "../model";
import { MpCredentials, ProvisionManagerCredentials } from "./auth";
import { Context } from "./context";
export interface GeneratedSCIMData {
    readonly bearerToken: string;
    readonly healthVerifierBearerToken: string;
    readonly fileContents: string;
}
export declare const createProvisionManagersGroup: (c: Context) => Promise<model.Group>;
export declare const createProvisionManagerSA: (c: Context, provisionManagerGroup: model.Group, grpMembershipOptions?: model.GroupMembershipOptions | undefined) => Promise<{
    user: model.Person;
    creds: model.LocalAuthCredentials;
}>;
export declare const createProvisionManager: (c: Context, email: string, provisionManagerGroup: model.Group) => Promise<{
    user: model.Person;
    creds: MpCredentials;
}>;
export declare const getProvisionManagersV2: (c: Context, group: model.Group) => Promise<api.ExtendedPartialUser<"combinedPermissions">[] | undefined>;
export declare const getProvisionManager: (c: Context, group: model.Group) => Promise<model.Person | undefined>;
export declare const addAdminToProvisioningGroup: (c: Context, group: model.Group) => Promise<void>;
export declare const removeSCIMSetupAdministrator: (c: Context) => () => Promise<void>;
export declare const createHealthMonitoringCheck: (c: Context, scimUrl: string, bearerToken: string) => Promise<void>;
export declare const generateSessionFile: (c: Context, domain: string) => (credentials: ProvisionManagerCredentials, provisionManager: model.Person, scimUrl?: string | undefined, checklyEnabled?: boolean | undefined) => Promise<GeneratedSCIMData>;
export declare const generateSessionFileWithServiceAccount: (c: Context, credentials: model.LocalAuthCredentials, domain?: string | undefined) => Promise<GeneratedSCIMData>;
export declare type CombinedServiceAccountUserPerson = model.Person | api.ServiceAccountsPartialUser;
export declare const recreateProvisionManager: (c: Context, provisionManager: CombinedServiceAccountUserPerson, provisionManagerGroup: model.Group) => Promise<{
    user: model.Person;
    creds: model.LocalAuthCredentials;
}>;
