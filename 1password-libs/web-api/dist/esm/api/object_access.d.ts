import * as t from "io-ts";
import { Session } from "./session";
import * as api from "./index";
export declare enum DataType {
    ConnectCredentialsFull = "full",
    ConnectCredentialsSigningPrivateKeyToken = "signing-private-key,token",
    SigningPrivateKey = "signing-private-key",
    AdminWatchtowerKeysetPrivateKey = "private-key",
    None = ""
}
export declare enum ObjectType {
    ServiceAccountConnect = "serviceaccount.connect",
    ServiceAccountDataStreaming = "serviceaccount.streaming",
    AdminWatchtowerKeyset = "keyset.adminwatchtower",
    ServiceAccountUserManaged = "serviceaccount.usermanaged"
}
export declare enum ObjectDataAccessScope {
    Manage = "scope:manage",
    Every = "scope:every",
    Some = "scope:some"
}
export declare const ObjectDataAccessScopeCodec: t.Type<api.ObjectDataAccessScope, api.ObjectDataAccessScope, unknown>;
export declare enum ObjectDataAccessAcl {
    ServiceAccountTokenCreate = "token-create",
    ServiceAccountTokenRevoke = "token-delete",
    ServiceAccountTokenEdit = "token-edit",
    ServiceAccountCreate = "sa-create",
    ServiceAccountEdit = "sa-edit",
    ServiceAccountDelete = "sa-delete",
    ServiceAccountConnectVaultAccessEdit = "vault-access-edit",
    ServiceAccountConnectAddRemove = "add-remove"
}
export declare const ObjectDataAccessAclCodec: t.Type<api.ObjectDataAccessAcl, api.ObjectDataAccessAcl, unknown>;
export declare const ObjectDataAccessAclScopeCodec: t.UnionC<[t.Type<api.ObjectDataAccessScope, api.ObjectDataAccessScope, unknown>, t.Type<api.ObjectDataAccessAcl, api.ObjectDataAccessAcl, unknown>]>;
export declare type ObjectDataAccessAclScope = t.TypeOf<typeof ObjectDataAccessAclScopeCodec>;
export declare enum ObjectDataAcl {
}
export declare const ObjectDataAclCodec: t.Type<string, string, unknown>;
export declare enum ObjectDataAccessState {
    Active = "A"
}
export declare const ObjectDataAccessStateCodec: t.Type<api.ObjectDataAccessState, api.ObjectDataAccessState, unknown>;
export declare enum ObjectDataAccessorType {
    Group = "G"
}
export declare const ObjectDataAccessorTypeCodec: t.Type<api.ObjectDataAccessorType, api.ObjectDataAccessorType, unknown>;
export declare const EncryptedObjectDataValue: t.ReadonlyC<t.UnionC<[t.TypeC<{
    dataType: t.Type<api.DataType, api.DataType, unknown>;
    encKey: t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        enc: t.StringC;
        cty: t.StringC;
        data: t.StringC;
    }>, t.PartialC<{
        iv: t.StringC;
        alg: t.StringC;
        p2c: t.NumberC;
        p2s: t.StringC;
    }>]>;
    encData: t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        enc: t.StringC;
        cty: t.StringC;
        data: t.StringC;
    }>, t.PartialC<{
        iv: t.StringC;
        alg: t.StringC;
        p2c: t.NumberC;
        p2s: t.StringC;
    }>]>;
}>, t.TypeC<{
    dataType: t.LiteralC<api.DataType.None>;
}>]>>;
export declare type EncryptedObjectDataValue = t.TypeOf<typeof EncryptedObjectDataValue>;
export declare const EncryptedObjectData: t.ReadonlyC<t.TypeC<{
    objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
    objectUuid: t.StringC;
    data: t.ReadonlyC<t.UnionC<[t.TypeC<{
        dataType: t.Type<api.DataType, api.DataType, unknown>;
        encKey: t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>;
        encData: t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>;
    }>, t.TypeC<{
        dataType: t.LiteralC<api.DataType.None>;
    }>]>>;
    encryptedBy: t.StringC;
    acl: t.ReadonlyArrayC<t.StringC>;
}>>;
export declare type EncryptedObjectData = t.TypeOf<typeof EncryptedObjectData>;
export declare const UpdateObjectDataRequest: t.ReadonlyC<t.TypeC<{
    data: t.ReadonlyC<t.TypeC<{
        objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
        objectUuid: t.StringC;
        data: t.ReadonlyC<t.UnionC<[t.TypeC<{
            dataType: t.Type<api.DataType, api.DataType, unknown>;
            encKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
            encData: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
        }>, t.TypeC<{
            dataType: t.LiteralC<api.DataType.None>;
        }>]>>;
        encryptedBy: t.StringC;
        acl: t.ReadonlyArrayC<t.StringC>;
    }>>;
}>>;
export declare type UpdateObjectDataRequest = t.TypeOf<typeof UpdateObjectDataRequest>;
export declare const AccessorPreview: t.ReadonlyC<t.TypeC<{
    avatar: t.StringC;
    name: t.StringC;
    type: t.StringC;
}>>;
export declare type AccessorPreview = t.TypeOf<typeof AccessorPreview>;
export declare const CombinedObjectAccessor: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    accessorType: t.Type<api.ObjectDataAccessorType, api.ObjectDataAccessorType, unknown>;
    accessorUuid: t.StringC;
    acl: t.ReadonlyArrayC<t.StringC>;
    objectType: t.StringC;
    objectUuid: t.StringC;
    scope: t.Type<api.ObjectDataAccessScope, api.ObjectDataAccessScope, unknown>;
}>, t.PartialC<{
    accessorPreview: t.ReadonlyC<t.TypeC<{
        avatar: t.StringC;
        name: t.StringC;
        type: t.StringC;
    }>>;
}>]>>;
export declare type CombinedObjectAccessor = t.TypeOf<typeof CombinedObjectAccessor>;
export declare const UserCombinedObjectDataAccess: t.ReadonlyC<t.TypeC<{
    objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
    scope: t.Type<api.ObjectDataAccessScope, api.ObjectDataAccessScope, unknown>;
    keysets: t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        uuid: t.StringC;
        sn: t.NumberC;
        encryptedBy: t.StringC;
        encSymKey: t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>;
        pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            ext: t.BooleanC;
            key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
            /** Create an ObjectDataAccess record **/
            kty: t.LiteralC<"RSA">;
            alg: t.StringC;
            e: t.StringC;
            n: t.StringC;
        }>, t.PartialC<{
            use: t.LiteralC<"enc">;
        }>]>>;
        encPriKey: t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>;
    }>, t.PartialC<{
        spubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            ext: t.BooleanC;
            kty: t.LiteralC<"EC">;
            key_ops: t.TupleC<[t.LiteralC<"verify">]>;
            crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
            x: t.StringC;
            y: t.StringC;
        }>, t.PartialC<{
            use: t.LiteralC<"sig">;
        }>]>>;
        encSPriKey: t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>;
    }>]>>>;
    data: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
        objectUuid: t.StringC;
        data: t.ReadonlyC<t.UnionC<[t.TypeC<{
            dataType: t.Type<api.DataType, api.DataType, unknown>;
            encKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
            encData: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
        }>, t.TypeC<{
            dataType: t.LiteralC<api.DataType.None>;
        }>]>>;
        encryptedBy: t.StringC;
        acl: t.ReadonlyArrayC<t.StringC>;
    }>>>;
}>>;
export declare type UserCombinedObjectDataAccess = t.TypeOf<typeof UserCombinedObjectDataAccess>;
export declare const UserCombinedObjectDataAccessResponse: t.ReadonlyC<t.TypeC<{
    combinedAccess: t.ReadonlyC<t.TypeC<{
        objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
        scope: t.Type<api.ObjectDataAccessScope, api.ObjectDataAccessScope, unknown>;
        keysets: t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            uuid: t.StringC;
            sn: t.NumberC;
            encryptedBy: t.StringC;
            encSymKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
            pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                ext: t.BooleanC;
                key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
                /** Create an ObjectDataAccess record **/
                kty: t.LiteralC<"RSA">;
                alg: t.StringC;
                e: t.StringC;
                n: t.StringC;
            }>, t.PartialC<{
                use: t.LiteralC<"enc">;
            }>]>>;
            encPriKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
        }>, t.PartialC<{
            spubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                ext: t.BooleanC;
                kty: t.LiteralC<"EC">;
                key_ops: t.TupleC<[t.LiteralC<"verify">]>;
                crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
                x: t.StringC;
                y: t.StringC;
            }>, t.PartialC<{
                use: t.LiteralC<"sig">;
            }>]>>;
            encSPriKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
        }>]>>>;
        data: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
            objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
            objectUuid: t.StringC;
            data: t.ReadonlyC<t.UnionC<[t.TypeC<{
                dataType: t.Type<api.DataType, api.DataType, unknown>;
                encKey: t.IntersectionC<[t.TypeC<{
                    kid: t.StringC;
                    enc: t.StringC;
                    cty: t.StringC;
                    data: t.StringC;
                }>, t.PartialC<{
                    iv: t.StringC;
                    alg: t.StringC;
                    p2c: t.NumberC;
                    p2s: t.StringC;
                }>]>;
                encData: t.IntersectionC<[t.TypeC<{
                    kid: t.StringC;
                    enc: t.StringC;
                    cty: t.StringC;
                    data: t.StringC;
                }>, t.PartialC<{
                    iv: t.StringC;
                    alg: t.StringC;
                    p2c: t.NumberC;
                    p2s: t.StringC;
                }>]>;
            }>, t.TypeC<{
                dataType: t.LiteralC<api.DataType.None>;
            }>]>>;
            encryptedBy: t.StringC;
            acl: t.ReadonlyArrayC<t.StringC>;
        }>>>;
    }>>;
}>>;
export declare type UserCombinedObjectDataAccessResponse = t.TypeOf<typeof UserCombinedObjectDataAccessResponse>;
/**
 * getUserCombinedObjectDataAccess
 *
 * @param s - Session
 * @param objectType - valid values are "serviceaccount.connect", "keyset.adminwatchtower"
 */
export declare const getUserCombinedObjectDataAccess: (s: Session, objectType: ObjectType) => Promise<UserCombinedObjectDataAccessResponse>;
export declare const GetCombinedObjectAccessorsResponse: t.ReadonlyC<t.TypeC<{
    access: t.ArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        accessorType: t.Type<api.ObjectDataAccessorType, api.ObjectDataAccessorType, unknown>;
        accessorUuid: t.StringC;
        acl: t.ReadonlyArrayC<t.StringC>;
        objectType: t.StringC;
        objectUuid: t.StringC;
        scope: t.Type<api.ObjectDataAccessScope, api.ObjectDataAccessScope, unknown>;
    }>, t.PartialC<{
        accessorPreview: t.ReadonlyC<t.TypeC<{
            avatar: t.StringC;
            name: t.StringC;
            type: t.StringC;
        }>>;
    }>]>>>;
}>>;
export declare type GetCombinedObjectAccessorsResponse = t.TypeOf<typeof GetCombinedObjectAccessorsResponse>;
export declare const ObjectDataAccess: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    state: t.Type<api.ObjectDataAccessState, api.ObjectDataAccessState, unknown>;
    objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
    accessorUuid: t.StringC;
    accessorType: t.Type<api.ObjectDataAccessorType, api.ObjectDataAccessorType, unknown>;
    kid: t.StringC;
    pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
        /** Create an ObjectDataAccess record **/
        kty: t.LiteralC<"RSA">;
        alg: t.StringC;
        e: t.StringC;
        n: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"enc">;
    }>]>>;
    encryptedBy: t.StringC;
    createdAt: t.StringC;
    updatedAt: t.StringC;
    acl: t.ArrayC<t.UnionC<[t.Type<api.ObjectDataAccessScope, api.ObjectDataAccessScope, unknown>, t.Type<api.ObjectDataAccessAcl, api.ObjectDataAccessAcl, unknown>]>>;
}>, t.PartialC<{
    encKeyset: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        uuid: t.StringC;
        sn: t.NumberC;
        encryptedBy: t.StringC;
        encSymKey: t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>;
        pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            ext: t.BooleanC;
            key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
            /** Create an ObjectDataAccess record **/
            kty: t.LiteralC<"RSA">;
            alg: t.StringC;
            e: t.StringC;
            n: t.StringC;
        }>, t.PartialC<{
            use: t.LiteralC<"enc">;
        }>]>>;
        encPriKey: t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>;
    }>, t.PartialC<{
        spubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            ext: t.BooleanC;
            kty: t.LiteralC<"EC">;
            key_ops: t.TupleC<[t.LiteralC<"verify">]>;
            crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
            x: t.StringC;
            y: t.StringC;
        }>, t.PartialC<{
            use: t.LiteralC<"sig">;
        }>]>>;
        encSPriKey: t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>;
    }>]>>;
}>]>>;
export declare type ObjectDataAccess = t.TypeOf<typeof ObjectDataAccess>;
export interface CreateObjectDataAccessRequest {
    readonly access: ObjectDataAccess;
    readonly data: readonly EncryptedObjectData[];
}
/** Create an ObjectDataAccess record **/
export declare const createObjectDataAccess: (s: Session, data: CreateObjectDataAccessRequest) => Promise<void>;
/** Deletes an ObjectDataAccess record **/
export declare const deleteObjectDataAccess: (s: Session, objectType: ObjectType, accessorUuid: string, accessorType: ObjectDataAccessorType) => Promise<void>;
/**
 * getObjectDataAccess
 */
export declare const getObjectDataAccess: (s: Session, objectType: ObjectType, accessorType: ObjectDataAccessorType, accessorUuid: string) => Promise<ObjectDataAccessorsForObjectTypeResponse>;
export interface CreateObjectDataRequest {
    readonly objectUuid: string;
    readonly data: readonly EncryptedObjectData[];
}
/** Create an ObjectData record **/
export declare const createObjectData: (s: Session, objectType: ObjectType, data: CreateObjectDataRequest) => Promise<void>;
/**
 * getObjectDataAccessorsForObjectType
 *
 * @param s - Session
 * @param objectType - Type identifier, such as "serviceaccount.connect"
 */
export declare const getObjectDataAccessorsForObjectType: (s: Session, objectType: ObjectType) => Promise<ObjectDataAccessorsForObjectTypeResponse>;
export declare const ObjectDataAccessorsForObjectTypeResponse: t.ReadonlyC<t.TypeC<{
    access: t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        state: t.Type<api.ObjectDataAccessState, api.ObjectDataAccessState, unknown>;
        objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
        accessorUuid: t.StringC;
        accessorType: t.Type<api.ObjectDataAccessorType, api.ObjectDataAccessorType, unknown>;
        kid: t.StringC;
        pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            ext: t.BooleanC;
            key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
            /** Create an ObjectDataAccess record **/
            kty: t.LiteralC<"RSA">;
            alg: t.StringC;
            e: t.StringC;
            n: t.StringC;
        }>, t.PartialC<{
            use: t.LiteralC<"enc">;
        }>]>>;
        encryptedBy: t.StringC;
        createdAt: t.StringC;
        updatedAt: t.StringC;
        acl: t.ArrayC<t.UnionC<[t.Type<api.ObjectDataAccessScope, api.ObjectDataAccessScope, unknown>, t.Type<api.ObjectDataAccessAcl, api.ObjectDataAccessAcl, unknown>]>>;
    }>, t.PartialC<{
        encKeyset: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            uuid: t.StringC;
            sn: t.NumberC;
            encryptedBy: t.StringC;
            encSymKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
            pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                ext: t.BooleanC;
                key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
                /** Create an ObjectDataAccess record **/
                kty: t.LiteralC<"RSA">;
                alg: t.StringC;
                e: t.StringC;
                n: t.StringC;
            }>, t.PartialC<{
                use: t.LiteralC<"enc">;
            }>]>>;
            encPriKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
        }>, t.PartialC<{
            spubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                ext: t.BooleanC;
                kty: t.LiteralC<"EC">;
                key_ops: t.TupleC<[t.LiteralC<"verify">]>;
                crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
                x: t.StringC;
                y: t.StringC;
            }>, t.PartialC<{
                use: t.LiteralC<"sig">;
            }>]>>;
            encSPriKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
        }>]>>;
    }>]>>>;
}>>;
export declare type ObjectDataAccessorsForObjectTypeResponse = t.TypeOf<typeof ObjectDataAccessorsForObjectTypeResponse>;
export interface CombinedObjectAccessorsParams {
    readonly accessorDetails?: boolean;
}
export declare const ObjectDataPreflightResponse: t.ReadonlyC<t.TypeC<{
    objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
    accessors: t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        state: t.Type<api.ObjectDataAccessState, api.ObjectDataAccessState, unknown>;
        objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
        accessorUuid: t.StringC;
        accessorType: t.Type<api.ObjectDataAccessorType, api.ObjectDataAccessorType, unknown>;
        kid: t.StringC;
        pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            ext: t.BooleanC;
            key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
            /** Create an ObjectDataAccess record **/
            kty: t.LiteralC<"RSA">;
            alg: t.StringC;
            e: t.StringC;
            n: t.StringC;
        }>, t.PartialC<{
            use: t.LiteralC<"enc">;
        }>]>>;
        encryptedBy: t.StringC;
        createdAt: t.StringC;
        updatedAt: t.StringC;
        acl: t.ArrayC<t.UnionC<[t.Type<api.ObjectDataAccessScope, api.ObjectDataAccessScope, unknown>, t.Type<api.ObjectDataAccessAcl, api.ObjectDataAccessAcl, unknown>]>>;
    }>, t.PartialC<{
        encKeyset: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            uuid: t.StringC;
            sn: t.NumberC;
            encryptedBy: t.StringC;
            encSymKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
            pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                ext: t.BooleanC;
                key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
                /** Create an ObjectDataAccess record **/
                kty: t.LiteralC<"RSA">;
                alg: t.StringC;
                e: t.StringC;
                n: t.StringC;
            }>, t.PartialC<{
                use: t.LiteralC<"enc">;
            }>]>>;
            encPriKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
        }>, t.PartialC<{
            spubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                ext: t.BooleanC;
                kty: t.LiteralC<"EC">;
                key_ops: t.TupleC<[t.LiteralC<"verify">]>;
                crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
                x: t.StringC;
                y: t.StringC;
            }>, t.PartialC<{
                use: t.LiteralC<"sig">;
            }>]>>;
            encSPriKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
        }>]>>;
    }>]>>>;
}>>;
export declare type ObjectDataPreflightResponse = t.TypeOf<typeof ObjectDataPreflightResponse>;
/**
 * Returns list of all accessors for a specific object
 * with the combined ACL for each accessor.
 */
export declare const getCombinedObjectAccessors: (s: Session, objectType: ObjectType, objectUuid: string, options: CombinedObjectAccessorsParams) => Promise<GetCombinedObjectAccessorsResponse>;
/**
 * Ask the server which accessors need to be given access
 * to new ObjectData records being created.
 * Accessors with scope:{every|manage} are included.
 *
 * @returns ObjectDataPreflightResponse if ObjectDataAccess exists
 * and undefined if we need to bootstrap ObjectDataAccess for owners.
 */
export declare const getObjectDataPreflight: (s: Session, objectType: ObjectType) => Promise<ObjectDataPreflightResponse | undefined>;
export declare const ObjectDataAccessPreflightResponse: t.ReadonlyC<t.TypeC<{
    objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
    requiredGroups: t.Type<readonly string[], readonly string[], unknown>;
    existingAccess: t.UnionC<[t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        state: t.Type<api.ObjectDataAccessState, api.ObjectDataAccessState, unknown>;
        objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
        accessorUuid: t.StringC;
        accessorType: t.Type<api.ObjectDataAccessorType, api.ObjectDataAccessorType, unknown>;
        kid: t.StringC;
        pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            ext: t.BooleanC;
            key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
            /** Create an ObjectDataAccess record **/
            kty: t.LiteralC<"RSA">;
            alg: t.StringC;
            e: t.StringC;
            n: t.StringC;
        }>, t.PartialC<{
            use: t.LiteralC<"enc">;
        }>]>>;
        encryptedBy: t.StringC;
        createdAt: t.StringC;
        updatedAt: t.StringC;
        acl: t.ArrayC<t.UnionC<[t.Type<api.ObjectDataAccessScope, api.ObjectDataAccessScope, unknown>, t.Type<api.ObjectDataAccessAcl, api.ObjectDataAccessAcl, unknown>]>>;
    }>, t.PartialC<{
        encKeyset: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            uuid: t.StringC;
            sn: t.NumberC;
            encryptedBy: t.StringC;
            encSymKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
            pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                ext: t.BooleanC;
                key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
                /** Create an ObjectDataAccess record **/
                kty: t.LiteralC<"RSA">;
                alg: t.StringC;
                e: t.StringC;
                n: t.StringC;
            }>, t.PartialC<{
                use: t.LiteralC<"enc">;
            }>]>>;
            encPriKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
        }>, t.PartialC<{
            spubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                ext: t.BooleanC;
                kty: t.LiteralC<"EC">;
                key_ops: t.TupleC<[t.LiteralC<"verify">]>;
                crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
                x: t.StringC;
                y: t.StringC;
            }>, t.PartialC<{
                use: t.LiteralC<"sig">;
            }>]>>;
            encSPriKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
        }>]>>;
    }>]>>, t.UndefinedC]>;
    keyset: t.UnionC<[t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        uuid: t.StringC;
        sn: t.NumberC;
        encryptedBy: t.StringC;
        encSymKey: t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>;
        pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            ext: t.BooleanC;
            key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
            /** Create an ObjectDataAccess record **/
            kty: t.LiteralC<"RSA">;
            alg: t.StringC;
            e: t.StringC;
            n: t.StringC;
        }>, t.PartialC<{
            use: t.LiteralC<"enc">;
        }>]>>;
        encPriKey: t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>;
    }>, t.PartialC<{
        spubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            ext: t.BooleanC;
            kty: t.LiteralC<"EC">;
            key_ops: t.TupleC<[t.LiteralC<"verify">]>;
            crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
            x: t.StringC;
            y: t.StringC;
        }>, t.PartialC<{
            use: t.LiteralC<"sig">;
        }>]>>;
        encSPriKey: t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>;
    }>]>>, t.UndefinedC]>;
    data: t.Type<readonly Readonly<{
        objectType: api.ObjectType;
        objectUuid: string;
        data: Readonly<{
            dataType: api.DataType;
            encKey: {
                kid: string;
                enc: string;
                cty: string;
                data: string;
            } & {
                iv?: string | undefined;
                alg?: string | undefined;
                p2c?: number | undefined;
                p2s?: string | undefined;
            };
            encData: {
                kid: string;
                enc: string;
                cty: string;
                data: string;
            } & {
                iv?: string | undefined;
                alg?: string | undefined;
                p2c?: number | undefined;
                p2s?: string | undefined;
            };
        }> | Readonly<{
            dataType: api.DataType.None;
        }>;
        encryptedBy: string;
        acl: readonly string[];
    }>[], readonly Readonly<{
        objectType: api.ObjectType;
        objectUuid: string;
        data: Readonly<{
            dataType: api.DataType;
            encKey: {
                kid: string;
                enc: string;
                cty: string;
                data: string;
            } & {
                iv?: string | undefined;
                alg?: string | undefined;
                p2c?: number | undefined;
                p2s?: string | undefined;
            };
            encData: {
                kid: string;
                enc: string;
                cty: string;
                data: string;
            } & {
                iv?: string | undefined;
                alg?: string | undefined;
                p2c?: number | undefined;
                p2s?: string | undefined;
            };
        }> | Readonly<{
            dataType: api.DataType.None;
        }>;
        encryptedBy: string;
        acl: readonly string[];
    }>[], unknown>;
}>>;
export declare type ObjectDataAccessPreflightResponse = t.TypeOf<typeof ObjectDataAccessPreflightResponse>;
/**
 * Ask the server what needs to be done to add a new accessor.
 * If ObjectDataAccess hasn't been set up for a given objectType,
 * the `groups` array will include the UUIDs of the groups
 * that require ObjectDataAccess.
 */
export declare const getObjectDataAccessPreflight: (s: Session, objectType: ObjectType, scope: ObjectDataAccessScope, accessorUuid?: string | undefined) => Promise<ObjectDataAccessPreflightResponse>;
/**
 * Ask the server to add an ObjectData to an existing ODA
 */
export declare const addObjectData: (s: Session, objectType: ObjectType, payload: {
    objectUuid: string;
    data: readonly api.EncryptedObjectData[];
}) => Promise<void>;
/**
 * Ask the server to remove an object data
 */
export declare const deleteObjectData: (s: Session, objectType: ObjectType, objectUuid: string, accessorType: ObjectDataAccessorType, accessorUuid: string) => Promise<void>;
/**
 * Ask the server for all ODAs for the user for a specific object type
 */
export declare const getObjectDataAccessForUserAndType: (s: Session, objectType: ObjectType) => Promise<ObjectDataAccessorsForObjectTypeResponse>;
/**
 * Update an object data for a given accessor
 */
export declare const updateObjectData: (s: Session, objectType: ObjectType, objectUuid: string, accessorType: ObjectDataAccessorType, accessorUuid: string, payload: api.UpdateObjectDataRequest) => Promise<void>;
export declare const ObjectDataWithSpec1Response: t.ReadonlyC<t.TypeC<{
    objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
    objectData: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        objectType: t.Type<api.ObjectType, api.ObjectType, unknown>;
        objectUuid: t.StringC;
        data: t.ReadonlyC<t.UnionC<[t.TypeC<{
            dataType: t.Type<api.DataType, api.DataType, unknown>;
            encKey: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
            encData: t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>;
        }>, t.TypeC<{
            dataType: t.LiteralC<api.DataType.None>;
        }>]>>;
        encryptedBy: t.StringC;
        acl: t.ReadonlyArrayC<t.StringC>;
    }>>>;
}>>;
export declare type ObjectDataWithSpec1Response = t.TypeOf<typeof ObjectDataWithSpec1Response>;
/**
 * Ask the server to get all ObjectData records that have DataSpec set to 1.
// This is a temporary route that is used to allow b5web to update outdated ObjectData records.
// It is hard-coded to spec=1 to prevent this from being abused to list all ObjectData in an account.
//
// Deprecated: do not use for any new applications. It is built specifically for a single migration process (#13471)
// This route shall only be used in b5web and can therefore be safely removed when any reference to it has been
// removed from b5web.
 *
 * @returns GetObjectDataWithSpecResponseDeprecated if ObjectData records exist with DataSpec 1
 * or 404 if none exist. Returns 403 if not enough access.
 */
export declare const getAllObjectDataWithDataSpec1: (s: Session, objectType: ObjectType) => Promise<ObjectDataWithSpec1Response>;
