"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, c = arguments.length; r < c; r++)
                for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, c) {
        void 0 === c && (c = r), Object.defineProperty(e, c, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, c) {
        void 0 === c && (c = r), e[c] = t[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
        return __setModuleDefault(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ObjectDataType = exports.EmptyObjectDataValue = exports.ServiceAccountConnectObjectDataValue = exports.ServiceAccountStreamingObjectDataValue = exports.AdminWatchtowerKeysetObjectDataValue = exports.UserCombinedObjectDataAccess = exports.ObjectType = exports.ObjectDataAccessorType = exports.ObjectDataAccessScope = exports.ObjectDataAccessAcl = exports.ObjectDataAccess = exports.DataType = void 0;
var Either_1 = require("fp-ts/Either"),
    t = __importStar(require("io-ts")),
    api_1 = require("../api");
Object.defineProperty(exports, "DataType", {
    enumerable: !0,
    get: function() {
        return api_1.DataType
    }
}), Object.defineProperty(exports, "ObjectDataAccess", {
    enumerable: !0,
    get: function() {
        return api_1.ObjectDataAccess
    }
}), Object.defineProperty(exports, "ObjectDataAccessAcl", {
    enumerable: !0,
    get: function() {
        return api_1.ObjectDataAccessAcl
    }
}), Object.defineProperty(exports, "ObjectDataAccessScope", {
    enumerable: !0,
    get: function() {
        return api_1.ObjectDataAccessScope
    }
}), Object.defineProperty(exports, "ObjectDataAccessorType", {
    enumerable: !0,
    get: function() {
        return api_1.ObjectDataAccessorType
    }
}), Object.defineProperty(exports, "ObjectType", {
    enumerable: !0,
    get: function() {
        return api_1.ObjectType
    }
}), Object.defineProperty(exports, "UserCombinedObjectDataAccess", {
    enumerable: !0,
    get: function() {
        return api_1.UserCombinedObjectDataAccess
    }
});
var util = __importStar(require("../util")),
    auth_1 = require("./auth"),
    keyset_1 = require("./crypto_v2/keyset");
exports.AdminWatchtowerKeysetObjectDataValue = keyset_1.KeysetEncKeyData;
var Credentials = t.readonly(t.type({
    email: t.string,
    hexMuk: t.string,
    srpComputedX: t.readonly(t.type({
        hexX: t.string,
        userAuth: auth_1.AuthParams
    })),
    url: t.string,
    userUuid: t.string
}), "Credentials");
exports.ServiceAccountStreamingObjectDataValue = t.readonly(t.type({
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
exports.ServiceAccountConnectObjectDataValue = new t.Type("ServiceAccountConnectObjectDataValue", ServiceAccountConnectObjectDataValueNew.is, function(e) {
    var r = t.union([ServiceAccountConnectObjectDataValueOld, ServiceAccountConnectObjectDataValueNew]).decode(e);
    if (Either_1.isRight(r)) {
        var c = r.right;
        return "signingKey" in c ? Either_1.right({
            token: c.token,
            sPriKey: __assign(__assign({}, c.signingKey), {
                key_ops: ["sign"]
            })
        }) : Either_1.right(c)
    }
    return r
}, ServiceAccountConnectObjectDataValueNew.encode), exports.EmptyObjectDataValue = t.readonly(t.undefined, "EmptyObjectDataValue"), exports.ObjectDataType = t.union([exports.AdminWatchtowerKeysetObjectDataValue, exports.ServiceAccountConnectObjectDataValue, exports.ServiceAccountStreamingObjectDataValue], "ObjectDataType");