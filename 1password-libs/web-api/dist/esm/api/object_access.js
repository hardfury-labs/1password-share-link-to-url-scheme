var __awaiter = this && this.__awaiter || function(e, t, c, a) {
        return new(c || (c = Promise))(function(r, o) {
            function n(e) {
                try {
                    i(a.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    i(a.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function i(e) {
                var t;
                e.done ? r(e.value) : (t = e.value, t instanceof c ? t : new c(function(e) {
                    e(t)
                })).then(n, s)
            }
            i((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var c, a, r, o, n = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (c) throw new TypeError("Generator is already executing.");
                    for (; n;) try {
                        if (c = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r;
                        switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return n.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                n.label++, a = o[1], o = [0];
                                continue;
                            case 7:
                                o = n.ops.pop(), n.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = n.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    n = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    n.label = o[1];
                                    break
                                }
                                if (6 === o[0] && n.label < r[1]) {
                                    n.label = r[1], r = o;
                                    break
                                }
                                if (r && n.label < r[2]) {
                                    n.label = r[2], n.ops.push(o);
                                    break
                                }
                                r[2] && n.ops.pop(), n.trys.pop();
                                continue
                        }
                        o = t.call(e, n)
                    } catch (e) {
                        o = [6, e], a = 0
                    } finally {
                        c = r = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    };
import * as t from "io-ts";
import * as util from "../util";
import {
    getError,
    isNewServerErrorWithStatus
} from "../util/errors";
import {
    fromStringEnum,
    unsafeDecodeAs,
    withDefault
} from "../util/validator";
import {
    dataToParamString
} from "./util";
export var DataType;
! function(e) {
    e.ConnectCredentialsFull = "full", e.ConnectCredentialsSigningPrivateKeyToken = "signing-private-key,token", e.SigningPrivateKey = "signing-private-key", e.AdminWatchtowerKeysetPrivateKey = "private-key", e.None = ""
}(DataType || (DataType = {}));
var DataTypeCodec = fromStringEnum(DataType, "DataType");
export var ObjectType;
! function(e) {
    e.ServiceAccountConnect = "serviceaccount.connect", e.ServiceAccountDataStreaming = "serviceaccount.streaming", e.AdminWatchtowerKeyset = "keyset.adminwatchtower", e.ServiceAccountUserManaged = "serviceaccount.usermanaged"
}(ObjectType || (ObjectType = {}));
var ObjectTypeCodec = fromStringEnum(ObjectType, "ObjectType");
export var ObjectDataAccessScope;
! function(e) {
    e.Manage = "scope:manage", e.Every = "scope:every", e.Some = "scope:some"
}(ObjectDataAccessScope || (ObjectDataAccessScope = {}));
export var ObjectDataAccessScopeCodec = fromStringEnum(ObjectDataAccessScope, "ObjectDataAccessScope");
export var ObjectDataAccessAcl;
! function(e) {
    e.ServiceAccountTokenCreate = "token-create", e.ServiceAccountTokenRevoke = "token-delete", e.ServiceAccountTokenEdit = "token-edit", e.ServiceAccountCreate = "sa-create", e.ServiceAccountEdit = "sa-edit", e.ServiceAccountDelete = "sa-delete", e.ServiceAccountConnectVaultAccessEdit = "vault-access-edit", e.ServiceAccountConnectAddRemove = "add-remove"
}(ObjectDataAccessAcl || (ObjectDataAccessAcl = {}));
export var ObjectDataAccessAclCodec = fromStringEnum(ObjectDataAccessAcl, "ObjectDataAccessAcl");
export var ObjectDataAccessAclScopeCodec = t.union([ObjectDataAccessScopeCodec, ObjectDataAccessAclCodec]);
export var ObjectDataAcl;
ObjectDataAcl || (ObjectDataAcl = {});
export var ObjectDataAclCodec = fromStringEnum(ObjectDataAcl, "ObjectDataAcl");
export var ObjectDataAccessState;
! function(e) {
    e.Active = "A"
}(ObjectDataAccessState || (ObjectDataAccessState = {}));
export var ObjectDataAccessStateCodec = fromStringEnum(ObjectDataAccessState, "ObjectDataAccessState");
export var ObjectDataAccessorType;
! function(e) {
    e.Group = "G"
}(ObjectDataAccessorType || (ObjectDataAccessorType = {}));
export var ObjectDataAccessorTypeCodec = fromStringEnum(ObjectDataAccessorType, "ObjectDataAccessorType");
export var EncryptedObjectDataValue = t.readonly(t.union([t.type({
    dataType: DataTypeCodec,
    encKey: util.crypto.JweB,
    encData: util.crypto.JweB
}), t.type({
    dataType: t.literal(DataType.None)
})]), "EncryptedObjectDataValue");
export var EncryptedObjectData = t.readonly(t.type({
    objectType: ObjectTypeCodec,
    objectUuid: t.string,
    data: EncryptedObjectDataValue,
    encryptedBy: t.string,
    acl: t.readonlyArray(t.string)
}), "EncryptedObjectData");
export var UpdateObjectDataRequest = t.readonly(t.type({
    data: EncryptedObjectData
}), "UpdateObjectDataRequest");
export var AccessorPreview = t.readonly(t.type({
    avatar: t.string,
    name: t.string,
    type: t.string
}), "AccessorPreview");
export var CombinedObjectAccessor = t.readonly(t.intersection([t.type({
    accessorType: ObjectDataAccessorTypeCodec,
    accessorUuid: t.string,
    acl: t.readonlyArray(t.string),
    objectType: t.string,
    objectUuid: t.string,
    scope: ObjectDataAccessScopeCodec
}), t.partial({
    accessorPreview: AccessorPreview
})], "CombinedObjectAccessor"));
export var UserCombinedObjectDataAccess = t.readonly(t.type({
    objectType: ObjectTypeCodec,
    scope: ObjectDataAccessScopeCodec,
    keysets: t.readonlyArray(util.crypto.KeysetCiphertext),
    data: t.readonlyArray(EncryptedObjectData)
}), "UserCombinedObjectDataAccess");
export var UserCombinedObjectDataAccessResponse = t.readonly(t.type({
    combinedAccess: UserCombinedObjectDataAccess
}), "UserCombinedObjectDataAccessResponse");
export var getUserCombinedObjectDataAccess = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(c) {
            return [2, e.get("/api/v1/objects/" + t + "/access/combined").then(unsafeDecodeAs(UserCombinedObjectDataAccessResponse))]
        })
    })
};
export var GetCombinedObjectAccessorsResponse = t.readonly(t.type({
    access: t.array(CombinedObjectAccessor)
}));
export var ObjectDataAccess = t.readonly(t.intersection([t.type({
    state: ObjectDataAccessStateCodec,
    objectType: ObjectTypeCodec,
    accessorUuid: t.string,
    accessorType: ObjectDataAccessorTypeCodec,
    kid: t.string,
    pubKey: util.crypto.JwkRsaPubKey,
    encryptedBy: t.string,
    createdAt: t.string,
    updatedAt: t.string,
    acl: t.array(ObjectDataAccessAclScopeCodec)
}), t.partial({
    encKeyset: util.crypto.KeysetCiphertext
})]), "ObjectDataAccess");
export var createObjectDataAccess = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return [4, e.post("/api/v1/objects/" + t.access.objectType + "/access", t)];
                case 1:
                    return c.sent(), [2]
            }
        })
    })
};
export var deleteObjectDataAccess = function(e, t, c, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, e.delete("/api/v1/objects/" + t + "/access/" + a + "/" + c)];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
export var getObjectDataAccess = function(e, t, c, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, e.get("/api/v1/objects/" + t + "/access/" + c + "/" + a).then(unsafeDecodeAs(ObjectDataAccessorsForObjectTypeResponse))];
                case 1:
                    return [2, r.sent()]
            }
        })
    })
};
export var createObjectData = function(e, t, c) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return [4, e.post("/api/v1/objects/" + t, c)];
                case 1:
                    return a.sent(), [2]
            }
        })
    })
};
export var getObjectDataAccessorsForObjectType = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(c) {
            return [2, e.get("/api/v1/objects/" + t + "/access").then(unsafeDecodeAs(ObjectDataAccessorsForObjectTypeResponse))]
        })
    })
};
export var ObjectDataAccessorsForObjectTypeResponse = t.readonly(t.type({
    access: t.readonlyArray(ObjectDataAccess)
}));
export var ObjectDataPreflightResponse = t.readonly(t.type({
    objectType: ObjectTypeCodec,
    accessors: t.readonlyArray(ObjectDataAccess)
}), "ObjectDataPreflightResponse");
export var getCombinedObjectAccessors = function(e, t, c, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, o;
        return __generator(this, function(n) {
            return r = dataToParamString({
                accessorDetails: a.accessorDetails
            }), o = "/api/v1/objects/" + t + "/" + c + "/access/combined" + r, [2, e.get(o).then(unsafeDecodeAs(GetCombinedObjectAccessorsResponse))]
        })
    })
};
export var getObjectDataPreflight = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var c, a;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return r.trys.push([0, 2, , 3]), [4, e.get("/api/v2/objects/" + t + "/preflight").then(unsafeDecodeAs(ObjectDataPreflightResponse))];
                case 1:
                    return [2, r.sent()];
                case 2:
                    if (c = r.sent(), a = getError(c), isNewServerErrorWithStatus(a, 404)) return [2, void 0];
                    throw a;
                case 3:
                    return [2]
            }
        })
    })
};
export var ObjectDataAccessPreflightResponse = t.readonly(t.type({
    objectType: ObjectTypeCodec,
    requiredGroups: withDefault(t.readonlyArray(t.string), []),
    existingAccess: t.union([ObjectDataAccess, t.undefined]),
    keyset: t.union([util.crypto.KeysetCiphertext, t.undefined]),
    data: withDefault(t.readonlyArray(EncryptedObjectData), [])
}), "ObjectDataAccessPreflightResponse");
export var getObjectDataAccessPreflight = function(e, t, c, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(o) {
            return r = "/api/v1/objects/" + t + "/access/preflight/" + c, a && (r += "?accessoruuid=" + a), [2, e.get(r).then(unsafeDecodeAs(ObjectDataAccessPreflightResponse))]
        })
    })
};
export var addObjectData = function(e, t, c) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return [4, e.patch("/api/v1/objects/" + t, c)];
                case 1:
                    return a.sent(), [2]
            }
        })
    })
};
export var deleteObjectData = function(e, t, c, a, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return [4, e.delete("/api/v1/objects/" + t + "/" + c + "/" + a + "/" + r)];
                case 1:
                    return o.sent(), [2]
            }
        })
    })
};
export var getObjectDataAccessForUserAndType = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return [4, e.get("/api/v1/objects/" + t + "/access/user").then(unsafeDecodeAs(ObjectDataAccessorsForObjectTypeResponse))];
                case 1:
                    return [2, c.sent()]
            }
        })
    })
};
export var updateObjectData = function(e, t, c, a, r, o) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, e.put("/api/v1/objects/" + t + "/" + c + "/" + a + "/" + r, o)];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};
export var ObjectDataWithSpec1Response = t.readonly(t.type({
    objectType: ObjectTypeCodec,
    objectData: t.readonlyArray(EncryptedObjectData)
}), "ObjectDataWithSpec1Response");
export var getAllObjectDataWithDataSpec1 = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return [4, e.get("/api/v1/objects/" + t + "/dataspec/1").then(unsafeDecodeAs(ObjectDataWithSpec1Response))];
                case 1:
                    return [2, c.sent()]
            }
        })
    })
};