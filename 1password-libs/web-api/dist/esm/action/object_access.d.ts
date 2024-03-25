import * as t from "io-ts";
import * as api from "../api";
import { DataType, Group, ObjectData, ObjectDataAccess, ObjectDataAccessAcl, ObjectDataAccessorType, ObjectDataAccessScope, ObjectDataType, ObjectType, UserCombinedObjectDataAccess } from "../model";
import { Context } from "./context";
/**
 * Ask the server for the combined object data access for the current user and a given object type.
 * Useful for single Integration Hub pages
 */
export declare const getUserCombinedObjectDataAccess: (c: Context, objectType: ObjectType) => Promise<UserCombinedObjectDataAccess>;
/**
 * Ask the server for the combined object data access for the current user and all object types.
 * Useful for the Active and Directory pages of the Integration Hub.
 *
 * @returns each object type is one entry in the array
 */
export declare const getUserCombinedObjectDataAccesses: (c: Context) => Promise<UserCombinedObjectDataAccess[]>;
export interface GetCombinedObjectAccessorsOpts {
    readonly accessorDetails?: boolean;
}
/**
 * Get data about the Accessors and their combined
 * ObjectData & ObjectDataAccess permissions for an Object.
 */
export declare const getCombinedObjectAccessors: (c: Context, objectType: ObjectType, objectUuid: string, options?: GetCombinedObjectAccessorsOpts | undefined) => Promise<api.GetCombinedObjectAccessorsResponse>;
/**
 * Find and decrypt a specific ObjectData record,
 * given combined ObjectDataAccess.
 *
 * 	TODO: [dg/jpc 24 Aug 2021]: Caller should pass in the api.DataType of the data they want.
 *  	The caller could have multiple OD records containing different pieces data.
 */
export declare const getObjectData: <T extends Readonly<{
    token: string;
    sPriKey: Readonly<{
        kid: string;
        ext: boolean;
        kty: "EC";
        key_ops: ["sign"];
        crv: "P-256" | "P-384";
        x: string;
        y: string;
        d: string;
    } & {
        use?: "sig" | undefined;
    }>;
}> | Readonly<{
    signingKey: Readonly<{
        kid: string;
        ext: boolean;
        kty: "EC";
        key_ops: ["sign"] | ["sign", "verify"] | ["verify", "sign"];
        crv: "P-256" | "P-384";
        x: string;
        y: string;
        d: string;
    } & {
        use?: "sig" | undefined;
    }>;
}> | Readonly<{
    ePriKey: Readonly<{
        kid: string;
        ext: boolean;
        key_ops: ["decrypt"];
        kty: "RSA";
        alg: string;
        e: string;
        n: string;
        d: string;
        dp: string;
        dq: string;
        p: string;
        q: string;
        qi: string;
    } & {
        use?: "enc" | undefined;
    }>;
    sPriKey: Readonly<{
        kid: string;
        ext: boolean;
        kty: "EC";
        key_ops: ["sign"];
        crv: "P-256" | "P-384";
        x: string;
        y: string;
        d: string;
    } & {
        use?: "sig" | undefined;
    }>;
}>>(c: Context, access: UserCombinedObjectDataAccess, objectUuid: string, codec: t.Type<T, T, unknown>) => Promise<ObjectData<T>>;
/**
 * Create the initial ObjectDataAccess records.
 *
 * If the account has never used this objectType before,
 * there will be zero ObjectDataAccess records set up.
 * So, this function will create those records for the required groups (i.e. Owners).
 */
export declare const bootstrapObjectDataAccess: (c: Context, objectType: ObjectType, scope: ObjectDataAccessScope) => Promise<api.ObjectDataPreflightResponse | undefined>;
/**
 * Create an ObjectData record for the given object type.
 * If ObjectDataAccess records are not yet present for the object type
 * and the user is an owner, this function will attempt to bootstrap one.
 *
 * @param c - Context
 * @param objectType - ObjectType
 * @param dataType - DataType
 * @param scope - ObjectDataAccessScope
 * @param data - ObjectData<ObjectDataType> - ACLs get stored in this object
 * @param customAccessors - Optional. Used when creating an ODA with scope:some,
 * so that a particular ObjectData record can be re-encrypted for extra accessors.
 */
export declare const createObjectData: (c: Context, objectType: ObjectType, dataType: DataType, scope: ObjectDataAccessScope, data: ObjectData<ObjectDataType>, customAccessors?: api.ObjectDataAccess[]) => Promise<void>;
/**
 * Tell the server to remove an OD for a specific accessor
 */
export declare const deleteObjectData: (c: Context, objectType: ObjectType, objectDataUuid: string, accessorUuid: string, objectDataAccessorType: ObjectDataAccessorType) => Promise<void>;
/**
 * Create a new ObjectDataAccess record for a group
 * and re-encrypt any existing ObjectData that is required by the ODA preflight.
 */
export declare const createObjectDataAccess: (c: Context, objectType: ObjectType, scope: ObjectDataAccessScope, group: Group, acl: readonly ObjectDataAccessAcl[], odaPreflight: api.ObjectDataAccessPreflightResponse) => Promise<ObjectDataAccess>;
/** Deletes an ObjectDataAccess record **/
export declare const deleteObjectDataAccess: (c: Context, objectType: ObjectType, accessorUuid: string, accessorType: ObjectDataAccessorType) => Promise<void>;
/**
 * Ask the server for all object data access for a given object type.
 */
export declare const getObjectDataAccessorsForObjectType: (c: Context, objectType: ObjectType) => Promise<api.ObjectDataAccessorsForObjectTypeResponse>;
/**
 * Ask the server for the object data access preflight for a given object type and scope.
 */
export declare const getObjectDataAccessPreflight: (c: Context, objectType: ObjectType, scope: ObjectDataAccessScope, accessorUuid?: string | undefined) => Promise<api.ObjectDataAccessPreflightResponse>;
/**
 * Tell the server to add an objectData to an ODA
 */
export declare const addObjectDataToGroup: <T extends Readonly<{
    token: string;
    sPriKey: Readonly<{
        kid: string;
        ext: boolean;
        kty: "EC";
        key_ops: ["sign"];
        crv: "P-256" | "P-384";
        x: string;
        y: string;
        d: string;
    } & {
        use?: "sig" | undefined;
    }>;
}> | Readonly<{
    signingKey: Readonly<{
        kid: string;
        ext: boolean;
        kty: "EC";
        key_ops: ["sign"] | ["sign", "verify"] | ["verify", "sign"];
        crv: "P-256" | "P-384";
        x: string;
        y: string;
        d: string;
    } & {
        use?: "sig" | undefined;
    }>;
}> | Readonly<{
    ePriKey: Readonly<{
        kid: string;
        ext: boolean;
        key_ops: ["decrypt"];
        kty: "RSA";
        alg: string;
        e: string;
        n: string;
        d: string;
        dp: string;
        dq: string;
        p: string;
        q: string;
        qi: string;
    } & {
        use?: "enc" | undefined;
    }>;
    sPriKey: Readonly<{
        kid: string;
        ext: boolean;
        kty: "EC";
        key_ops: ["sign"];
        crv: "P-256" | "P-384";
        x: string;
        y: string;
        d: string;
    } & {
        use?: "sig" | undefined;
    }>;
}>>(c: Context, groupUuids: string[], objectType: ObjectType, objectDataUuid: string, objectDataType: t.Type<T, T, unknown>) => Promise<void>;
/**
 * addAclsToObjectData
 *
 * This function will attempt to add new acls to an OD but if it fails to update it will
 * return an error and restore the OD to its previous state.
 */
export declare const addAclsToObjectData: <T extends Readonly<{
    token: string;
    sPriKey: Readonly<{
        kid: string;
        ext: boolean;
        kty: "EC";
        key_ops: ["sign"];
        crv: "P-256" | "P-384";
        x: string;
        y: string;
        d: string;
    } & {
        use?: "sig" | undefined;
    }>;
}> | Readonly<{
    signingKey: Readonly<{
        kid: string;
        ext: boolean;
        kty: "EC";
        key_ops: ["sign"] | ["sign", "verify"] | ["verify", "sign"];
        crv: "P-256" | "P-384";
        x: string;
        y: string;
        d: string;
    } & {
        use?: "sig" | undefined;
    }>;
}> | Readonly<{
    ePriKey: Readonly<{
        kid: string;
        ext: boolean;
        key_ops: ["decrypt"];
        kty: "RSA";
        alg: string;
        e: string;
        n: string;
        d: string;
        dp: string;
        dq: string;
        p: string;
        q: string;
        qi: string;
    } & {
        use?: "enc" | undefined;
    }>;
    sPriKey: Readonly<{
        kid: string;
        ext: boolean;
        kty: "EC";
        key_ops: ["sign"];
        crv: "P-256" | "P-384";
        x: string;
        y: string;
        d: string;
    } & {
        use?: "sig" | undefined;
    }>;
}>>(c: Context, groupUuid: string, objectType: ObjectType, objectDataUuid: string, objectDataType: t.Type<T, T, unknown>, acls: string[]) => Promise<void>;
/**
 * Queries b5API for all ObjectData records with the given objectType where
 * the record's `data_spec` (i.e. schema version) is equal to 1.
 *
 * These records are considered "out of date" and need to be re-encrypted.
 *
 * If no records are found or the user does not have permission to view that data,
 * expect and undefined return value.
 */
export declare const getAllObjectDataRecordsWithDataSpec1: (c: Context, objectType: ObjectType) => Promise<api.ObjectDataWithSpec1Response | undefined>;
/**
 * handleObjectDataMigration
 * This function handles the migration of bad ObjectData records
 *
    1. Fetch all out-of-date ObjectData records for an account with GET /api/v1/objects/:objecttype/spec/1 (WIP; temporary route)
            status 404? -> Go to step 5
            status 401 -> Abort. Not enough access.
    2. Fetch the ObjectData for the currently authenticated user with GET /api/v1/objects/:objecttype/access/combined
    3. Fetch all ObjectDataAccess for Connect with GET /api/v1/objects/serviceaccount.connect/access
    4. For all all out-of-date ObjectData
            a. Decrypt the ObjectData from step 2
            b. Restructure this ObjectData to be compliant with the new format
            c. Lookup the public key of the ODA in the list of step 3 by searching for the key with a KID that matches encrypted_by in the ObjectData record.
            d. Encrypt the ObjectData for the public key
            e. Replace the ObjectData on the server with PUT /api/v1/objects/:objecttype/:objectuuid/:accessortype/:accessoruuid (WIP)
    5. Done :tada:
 *
 */
export declare const handleObjectDataMigration: (c: Context, { objectData, objectType }: api.ObjectDataWithSpec1Response) => Promise<void>;
