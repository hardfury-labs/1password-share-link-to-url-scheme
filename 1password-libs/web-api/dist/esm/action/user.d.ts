import { PartialUser } from "../api";
import * as api from "../api";
import * as model from "../model";
import * as util from "../util";
import { Context } from "./context";
export declare const updateUser: (c: Context, user?: model.Person | undefined) => Promise<void>;
/**
 * Find a person in the local cache.
 * Use `getPerson` unless you're sure this person is cached.
 */
export declare const findCachedUser: (c: Context, uuid: string) => model.Person | undefined;
/**
 * Set all users in the local cache.
 * Get rid of this once the action methods always take care of it.
 */
export declare const setCachedUsers: (c: Context, users: model.Person[]) => void;
/**
 * Clears the user cache.
 */
export declare const clearUserCache: () => void;
/**
 * Clears the user cache for a given context.
 */
export declare const clearUserCacheForContext: (c: Context) => void;
/**
 * Set active user in the local cache.
 * Get rid of this once the action methods always take care of it.
 */
export declare const setActiveUser: (c: Context, user: model.Person) => void;
export interface GetPersonOptions {
    attrs: BitMask;
    mustReload: boolean;
}
/**
 * Get a person with the given UUID or object reference.
 * If we have a local copy with the specified attributes, return it.
 * Otherwise, request the person and attrs from the server.
 */
export declare const getPerson: (c: Context, userRef: util.UuidRef, options?: Partial<GetPersonOptions> | undefined) => Promise<model.Person>;
export declare const confirmUsers: (c: Context, users: readonly PartialUser[], vaultAccesses?: model.PartialUserVaultAccess[] | undefined) => Promise<void>;
export declare const suspendUsers: (c: Context, users: util.UuidRef[]) => Promise<void>;
export declare const markAwayForTravel: (c: Context, users: readonly util.UuidRef[]) => Promise<void>;
export declare const markBackFromTravel: (c: Context, users: util.UuidRef[]) => Promise<void>;
export declare const beginUserRecovery: (c: Context, users: readonly util.UuidRef[]) => Promise<void>;
export declare const cancelUserRecovery: (c: Context, users: util.UuidRef[]) => Promise<void>;
export declare const completeUserRecovery: (c: Context, userRefs: util.UuidRef[]) => Promise<void>;
export declare const reactivateUsers: (c: Context, users: util.UuidRef[]) => Promise<void>;
export declare const deleteUsers: (c: Context, users: readonly PartialUser[]) => Promise<void>;
export declare const deletePerson: (c: Context, user: PartialUser, reason: string) => Promise<void>;
export declare const changeUserAvatar: (c: Context, person: model.Person, newAvatar: string) => Promise<void>;
export declare const changeUserName: (c: Context, person: model.Person, name: string) => Promise<void>;
export declare const getRecoveryDetails: (c: Context, uuid: string, token: string) => Promise<api.Recovery>;
/**
 * Creates a Service Account "user." Authentication values are derived from
 * randomly generated values; a human user should not be able to log in as a Service Account.
 */
export declare const prepProvisionUser: (c: Context, email: string, name: string, uuid?: string | undefined) => Promise<{
    user: model.OldUser;
    userAuth: model.Auth;
}>;
