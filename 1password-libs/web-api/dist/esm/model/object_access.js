var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(t) {
        for (var e, a = 1, c = arguments.length; a < c; a++)
            for (var r in e = arguments[a]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t
    }).apply(this, arguments)
};
import {
    isRight,
    right
} from "fp-ts/Either";
import * as t from "io-ts";
import {
    DataType,
    ObjectDataAccess,
    ObjectDataAccessAcl,
    ObjectDataAccessScope,
    ObjectDataAccessorType,
    ObjectType,
    UserCombinedObjectDataAccess
} from "../api";
import * as util from "../util";
import {
    AuthParams
} from "./auth";
import {
    KeysetEncKeyData
} from "./crypto_v2/keyset";
export {
    DataType,
    ObjectDataAccess,
    ObjectDataAccessAcl,
    ObjectDataAccessScope,
    ObjectDataAccessorType,
    ObjectType,
    UserCombinedObjectDataAccess
};
export var AdminWatchtowerKeysetObjectDataValue = KeysetEncKeyData;
var Credentials = t.readonly(t.type({
    email: t.string,
    hexMuk: t.string,
    srpComputedX: t.readonly(t.type({
        hexX: t.string,
        userAuth: AuthParams
    })),
    url: t.string,
    userUuid: t.string
}), "Credentials");
export var ServiceAccountStreamingObjectDataValue = t.readonly(t.type({
    signingKey: util.crypto.JwkEcPriKeyDeprecated
}), "ServiceAccountStreamingODValue");
var ServiceAccountConnectObjectDataValueNew = t.readonly(t.strict({
        token: t.string,
        sPriKey: util.crypto.JwkEcPriKey
    })),
    ServiceAccountConnectObjectDataValueOld = t.readonly(t.type({
        token: t.string,
        signingKey: util.crypto.JwkEcPriKeyDeprecated
    }));
export var ServiceAccountConnectObjectDataValue = new t.Type("ServiceAccountConnectObjectDataValue", ServiceAccountConnectObjectDataValueNew.is, function(e) {
    var a = t.union([ServiceAccountConnectObjectDataValueOld, ServiceAccountConnectObjectDataValueNew]).decode(e);
    if (isRight(a)) {
        var c = a.right;
        return right("signingKey" in c ? {
            token: c.token,
            sPriKey: __assign(__assign({}, c.signingKey), {
                key_ops: ["sign"]
            })
        } : c)
    }
    return a
}, ServiceAccountConnectObjectDataValueNew.encode);
export var EmptyObjectDataValue = t.readonly(t.undefined, "EmptyObjectDataValue");
export var ObjectDataType = t.union([AdminWatchtowerKeysetObjectDataValue, ServiceAccountConnectObjectDataValue, ServiceAccountStreamingObjectDataValue], "ObjectDataType");