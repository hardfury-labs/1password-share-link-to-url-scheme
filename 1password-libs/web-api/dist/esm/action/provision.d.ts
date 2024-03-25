import * as api from "../api";
import * as model from "../model";
import * as util from "../util";
import { Context } from "./context";
import { GetGroupOptions } from "./group";
export interface ResendDetails {
    lastResendAt: Date | undefined;
    resendAllCooldown: number;
}
export declare const createProvisionUser: (c: Context, provisionUser: model.OldUser, provisionUserAuth: model.Auth) => Promise<model.Person>;
export declare const startUserProvision: (c: Context, user: model.Person, options?: {
    token?: boolean | undefined;
} | undefined) => Promise<void>;
export declare const getProvisionDetails: (c: Context, uuid: string, token: string) => Promise<api.Provision>;
export declare const completeUserProvision: (c: Context, person: model.Person) => Promise<void>;
export declare const resendUserProvision: (c: Context, users: model.Person[], useToken?: boolean | undefined) => Promise<void>;
export declare const resendAllUserProvision: (c: Context) => Promise<void>;
export declare const getResendDetails: (c: Context) => Promise<ResendDetails>;
export declare const getProvisionManagersGroup: (c: Context, options?: Partial<GetGroupOptions> | undefined) => Promise<model.Group | undefined>;
export declare const replaceProvisionedUserKeyset: (c: Context, person: util.UuidRef, provisionManagerGroup: model.Group) => Promise<{
    readonly type: "cannot_decrypt" | "success";
}>;
