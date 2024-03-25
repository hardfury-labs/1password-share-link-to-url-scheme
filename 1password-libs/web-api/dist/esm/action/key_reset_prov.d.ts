import * as api from "../api";
import { Context } from "./context";
export declare type ProvisionedUsersInfo = NotAffected | AffectedProvGroup | AffectedProvUsers;
interface NotAffected {
    readonly type: "not_affected";
    readonly groupUuid: string | undefined;
}
interface AffectedProvGroup {
    readonly type: "affected_prov_group";
    readonly users: readonly api.PartialUser[];
    readonly groupUuid: string;
    readonly groupName: string;
}
interface AffectedProvUsers {
    readonly type: "affected_prov_users";
    readonly users: readonly api.PartialUser[];
    readonly groupUuid: string;
}
export declare const getCliAffectedProvisionedUsersInfo: (c: Context, apiProvInfo?: {
    readonly provisionedUsers: readonly api.PartialUser[];
    readonly provisionManagersGroupUuid: string;
} | undefined) => Promise<ProvisionedUsersInfo>;
export declare const getCliProvEffort: (info: ProvisionedUsersInfo) => number;
export interface CorrectProvisionedUsersResult {
    readonly oldGroupUuid?: string;
    readonly groupUuid: string;
    readonly usersToDeprovision: readonly api.PartialUser[];
}
export declare const correctCliAffectedProvisionedUsers: (c: Context, originalInfo: AffectedProvGroup | AffectedProvUsers, updateProgress: (percentage: number) => void) => Promise<CorrectProvisionedUsersResult>;
export {};
