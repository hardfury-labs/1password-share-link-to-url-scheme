import * as t from "io-ts";
import { DataType, ObjectDataAccess, ObjectDataAccessAcl, ObjectDataAccessScope, ObjectDataAccessorType, ObjectType, UserCombinedObjectDataAccess } from "../api";
export { DataType, ObjectDataAccess, ObjectDataAccessAcl, ObjectDataAccessScope, ObjectDataAccessorType, ObjectType, UserCombinedObjectDataAccess, };
export declare const AdminWatchtowerKeysetObjectDataValue: t.ReadonlyC<t.TypeC<{
    ePriKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        key_ops: t.TupleC<[t.LiteralC<"decrypt">]>;
        kty: t.LiteralC<"RSA">;
        alg: t.StringC;
        e: t.StringC;
        n: t.StringC;
        d: t.StringC;
        dp: t.StringC;
        dq: t.StringC;
        p: t.StringC;
        q: t.StringC;
        qi: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"enc">;
    }>]>>;
    sPriKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        kty: t.LiteralC<"EC">;
        key_ops: t.TupleC<[t.LiteralC<"sign">]>;
        crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
        x: t.StringC;
        y: t.StringC;
        d: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"sig">;
    }>]>>;
}>>;
export declare type AdminWatchtowerKeysetObjectDataValue = t.TypeOf<typeof AdminWatchtowerKeysetObjectDataValue>;
declare const Credentials: t.ReadonlyC<t.TypeC<{
    email: t.StringC;
    hexMuk: t.StringC;
    srpComputedX: t.ReadonlyC<t.TypeC<{
        hexX: t.StringC;
        userAuth: t.ReadonlyC<t.TypeC<{
            method: t.StringC;
            alg: t.StringC;
            iterations: t.NumberC;
            salt: t.StringC;
        }>>;
    }>>;
    url: t.StringC;
    userUuid: t.StringC;
}>>;
export declare type Credentials = t.TypeOf<typeof Credentials>;
export declare const ServiceAccountStreamingObjectDataValue: t.ReadonlyC<t.TypeC<{
    signingKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        kty: t.LiteralC<"EC">;
        key_ops: t.UnionC<[t.TupleC<[t.LiteralC<"sign">, t.LiteralC<"verify">]>, t.TupleC<[t.LiteralC<"verify">, t.LiteralC<"sign">]>, t.TupleC<[t.LiteralC<"sign">]>]>;
        crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
        x: t.StringC;
        y: t.StringC;
        d: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"sig">;
    }>]>>;
}>>;
export declare type ServiceAccountStreamingObjectDataValue = t.TypeOf<typeof ServiceAccountStreamingObjectDataValue>;
export declare const ServiceAccountConnectObjectDataValue: t.Type<Readonly<{
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
}>, Readonly<{
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
}>, unknown>;
export declare type ServiceAccountConnectObjectDataValue = t.TypeOf<typeof ServiceAccountConnectObjectDataValue>;
export declare const EmptyObjectDataValue: t.ReadonlyC<t.UndefinedC>;
export declare type EmptyObjectDataValue = t.TypeOf<typeof EmptyObjectDataValue>;
export declare const ObjectDataType: t.UnionC<[t.ReadonlyC<t.TypeC<{
    ePriKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        key_ops: t.TupleC<[t.LiteralC<"decrypt">]>;
        kty: t.LiteralC<"RSA">;
        alg: t.StringC;
        e: t.StringC;
        n: t.StringC;
        d: t.StringC;
        dp: t.StringC;
        dq: t.StringC;
        p: t.StringC;
        q: t.StringC;
        qi: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"enc">;
    }>]>>;
    sPriKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        kty: t.LiteralC<"EC">;
        key_ops: t.TupleC<[t.LiteralC<"sign">]>;
        crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
        x: t.StringC;
        y: t.StringC;
        d: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"sig">;
    }>]>>;
}>>, t.Type<Readonly<{
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
}>, Readonly<{
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
}>, unknown>, t.ReadonlyC<t.TypeC<{
    signingKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        kty: t.LiteralC<"EC">;
        key_ops: t.UnionC<[t.TupleC<[t.LiteralC<"sign">, t.LiteralC<"verify">]>, t.TupleC<[t.LiteralC<"verify">, t.LiteralC<"sign">]>, t.TupleC<[t.LiteralC<"sign">]>]>;
        crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
        x: t.StringC;
        y: t.StringC;
        d: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"sig">;
    }>]>>;
}>>]>;
export declare type ObjectDataType = t.TypeOf<typeof ObjectDataType>;
export interface ObjectData<T extends ObjectDataType> {
    readonly objectUuid: string;
    readonly data: T | EmptyObjectDataValue;
    readonly acl: readonly string[];
}
