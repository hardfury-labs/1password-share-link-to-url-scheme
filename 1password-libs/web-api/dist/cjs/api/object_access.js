"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, c, a) {
        void 0 === a && (a = c), Object.defineProperty(e, a, {
            enumerable: !0,
            get: function() {
                return t[c]
            }
        })
    } : function(e, t, c, a) {
        void 0 === a && (a = c), e[a] = t[c]
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
            for (var c in e) "default" !== c && Object.prototype.hasOwnProperty.call(e, c) && __createBinding(t, e, c);
        return __setModuleDefault(t, e), t
    },
    __awaiter = this && this.__awaiter || function(e, t, c, a) {
        return new(c || (c = Promise))(function(r, s) {
            function o(e) {
                try {
                    i(a.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function n(e) {
                try {
                    i(a.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function i(e) {
                var t;
                e.done ? r(e.value) : (t = e.value, t instanceof c ? t : new c(function(e) {
                    e(t)
                })).then(o, n)
            }
            i((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var c, a, r, s, o = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: n(0),
            throw: n(1),
            return: n(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function n(s) {
            return function(n) {
                return function(s) {
                    if (c) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (c = 1, a && (r = 2 & s[0] ? a.return : s[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, s[1])).done) return r;
                        switch (a = 0, r && (s = [2 & s[0], r.value]), s[0]) {
                            case 0:
                            case 1:
                                r = s;
                                break;
                            case 4:
                                return o.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = s[1], s = [0];
                                continue;
                            case 7:
                                s = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                    o.label = s[1];
                                    break
                                }
                                if (6 === s[0] && o.label < r[1]) {
                                    o.label = r[1], r = s;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2], o.ops.push(s);
                                    break
                                }
                                r[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        s = t.call(e, o)
                    } catch (e) {
                        s = [6, e], a = 0
                    } finally {
                        c = r = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, n])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAllObjectDataWithDataSpec1 = exports.ObjectDataWithSpec1Response = exports.updateObjectData = exports.getObjectDataAccessForUserAndType = exports.deleteObjectData = exports.addObjectData = exports.getObjectDataAccessPreflight = exports.ObjectDataAccessPreflightResponse = exports.getObjectDataPreflight = exports.getCombinedObjectAccessors = exports.ObjectDataPreflightResponse = exports.ObjectDataAccessorsForObjectTypeResponse = exports.getObjectDataAccessorsForObjectType = exports.createObjectData = exports.getObjectDataAccess = exports.deleteObjectDataAccess = exports.createObjectDataAccess = exports.ObjectDataAccess = exports.GetCombinedObjectAccessorsResponse = exports.getUserCombinedObjectDataAccess = exports.UserCombinedObjectDataAccessResponse = exports.UserCombinedObjectDataAccess = exports.CombinedObjectAccessor = exports.AccessorPreview = exports.UpdateObjectDataRequest = exports.EncryptedObjectData = exports.EncryptedObjectDataValue = exports.ObjectDataAccessorTypeCodec = exports.ObjectDataAccessorType = exports.ObjectDataAccessStateCodec = exports.ObjectDataAccessState = exports.ObjectDataAclCodec = exports.ObjectDataAcl = exports.ObjectDataAccessAclScopeCodec = exports.ObjectDataAccessAclCodec = exports.ObjectDataAccessAcl = exports.ObjectDataAccessScopeCodec = exports.ObjectDataAccessScope = exports.ObjectType = exports.DataType = void 0;
var DataType, t = __importStar(require("io-ts")),
    util = __importStar(require("../util")),
    errors_1 = require("../util/errors"),
    validator_1 = require("../util/validator"),
    util_1 = require("./util");
! function(e) {
    e.ConnectCredentialsFull = "full", e.ConnectCredentialsSigningPrivateKeyToken = "signing-private-key,token", e.SigningPrivateKey = "signing-private-key", e.AdminWatchtowerKeysetPrivateKey = "private-key", e.None = ""
}(DataType = exports.DataType || (exports.DataType = {}));
var ObjectType, DataTypeCodec = validator_1.fromStringEnum(DataType, "DataType");
! function(e) {
    e.ServiceAccountConnect = "serviceaccount.connect", e.ServiceAccountDataStreaming = "serviceaccount.streaming", e.AdminWatchtowerKeyset = "keyset.adminwatchtower", e.ServiceAccountUserManaged = "serviceaccount.usermanaged"
}(ObjectType = exports.ObjectType || (exports.ObjectType = {}));
var ObjectDataAccessScope, ObjectDataAccessAcl, ObjectDataAcl, ObjectDataAccessState, ObjectDataAccessorType, ObjectTypeCodec = validator_1.fromStringEnum(ObjectType, "ObjectType");
! function(e) {
    e.Manage = "scope:manage", e.Every = "scope:every", e.Some = "scope:some"
}(ObjectDataAccessScope = exports.ObjectDataAccessScope || (exports.ObjectDataAccessScope = {})), exports.ObjectDataAccessScopeCodec = validator_1.fromStringEnum(ObjectDataAccessScope, "ObjectDataAccessScope"),
    function(e) {
        e.ServiceAccountTokenCreate = "token-create", e.ServiceAccountTokenRevoke = "token-delete", e.ServiceAccountTokenEdit = "token-edit", e.ServiceAccountCreate = "sa-create", e.ServiceAccountEdit = "sa-edit", e.ServiceAccountDelete = "sa-delete", e.ServiceAccountConnectVaultAccessEdit = "vault-access-edit", e.ServiceAccountConnectAddRemove = "add-remove"
    }(ObjectDataAccessAcl = exports.ObjectDataAccessAcl || (exports.ObjectDataAccessAcl = {})), exports.ObjectDataAccessAclCodec = validator_1.fromStringEnum(ObjectDataAccessAcl, "ObjectDataAccessAcl"), exports.ObjectDataAccessAclScopeCodec = t.union([exports.ObjectDataAccessScopeCodec, exports.ObjectDataAccessAclCodec]), ObjectDataAcl = exports.ObjectDataAcl || (exports.ObjectDataAcl = {}), exports.ObjectDataAclCodec = validator_1.fromStringEnum(ObjectDataAcl, "ObjectDataAcl"),
    function(e) {
        e.Active = "A"
    }(ObjectDataAccessState = exports.ObjectDataAccessState || (exports.ObjectDataAccessState = {})), exports.ObjectDataAccessStateCodec = validator_1.fromStringEnum(ObjectDataAccessState, "ObjectDataAccessState"),
    function(e) {
        e.Group = "G"
    }(ObjectDataAccessorType = exports.ObjectDataAccessorType || (exports.ObjectDataAccessorType = {})), exports.ObjectDataAccessorTypeCodec = validator_1.fromStringEnum(ObjectDataAccessorType, "ObjectDataAccessorType"), exports.EncryptedObjectDataValue = t.readonly(t.union([t.type({
        dataType: DataTypeCodec,
        encKey: util.crypto.JweB,
        encData: util.crypto.JweB
    }), t.type({
        dataType: t.literal(DataType.None)
    })]), "EncryptedObjectDataValue"), exports.EncryptedObjectData = t.readonly(t.type({
        objectType: ObjectTypeCodec,
        objectUuid: t.string,
        data: exports.EncryptedObjectDataValue,
        encryptedBy: t.string,
        acl: t.readonlyArray(t.string)
    }), "EncryptedObjectData"), exports.UpdateObjectDataRequest = t.readonly(t.type({
        data: exports.EncryptedObjectData
    }), "UpdateObjectDataRequest"), exports.AccessorPreview = t.readonly(t.type({
        avatar: t.string,
        name: t.string,
        type: t.string
    }), "AccessorPreview"), exports.CombinedObjectAccessor = t.readonly(t.intersection([t.type({
        accessorType: exports.ObjectDataAccessorTypeCodec,
        accessorUuid: t.string,
        acl: t.readonlyArray(t.string),
        objectType: t.string,
        objectUuid: t.string,
        scope: exports.ObjectDataAccessScopeCodec
    }), t.partial({
        accessorPreview: exports.AccessorPreview
    })], "CombinedObjectAccessor")), exports.UserCombinedObjectDataAccess = t.readonly(t.type({
        objectType: ObjectTypeCodec,
        scope: exports.ObjectDataAccessScopeCodec,
        keysets: t.readonlyArray(util.crypto.KeysetCiphertext),
        data: t.readonlyArray(exports.EncryptedObjectData)
    }), "UserCombinedObjectDataAccess"), exports.UserCombinedObjectDataAccessResponse = t.readonly(t.type({
        combinedAccess: exports.UserCombinedObjectDataAccess
    }), "UserCombinedObjectDataAccessResponse");
var getUserCombinedObjectDataAccess = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(c) {
            return [2, e.get("/api/v1/objects/" + t + "/access/combined").then(validator_1.unsafeDecodeAs(exports.UserCombinedObjectDataAccessResponse))]
        })
    })
};
exports.getUserCombinedObjectDataAccess = getUserCombinedObjectDataAccess, exports.GetCombinedObjectAccessorsResponse = t.readonly(t.type({
    access: t.array(exports.CombinedObjectAccessor)
})), exports.ObjectDataAccess = t.readonly(t.intersection([t.type({
    state: exports.ObjectDataAccessStateCodec,
    objectType: ObjectTypeCodec,
    accessorUuid: t.string,
    accessorType: exports.ObjectDataAccessorTypeCodec,
    kid: t.string,
    pubKey: util.crypto.JwkRsaPubKey,
    encryptedBy: t.string,
    createdAt: t.string,
    updatedAt: t.string,
    acl: t.array(exports.ObjectDataAccessAclScopeCodec)
}), t.partial({
    encKeyset: util.crypto.KeysetCiphertext
})]), "ObjectDataAccess");
var createObjectDataAccess = function(e, t) {
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
exports.createObjectDataAccess = createObjectDataAccess;
var deleteObjectDataAccess = function(e, t, c, a) {
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
exports.deleteObjectDataAccess = deleteObjectDataAccess;
var getObjectDataAccess = function(e, t, c, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, e.get("/api/v1/objects/" + t + "/access/" + c + "/" + a).then(validator_1.unsafeDecodeAs(exports.ObjectDataAccessorsForObjectTypeResponse))];
                case 1:
                    return [2, r.sent()]
            }
        })
    })
};
exports.getObjectDataAccess = getObjectDataAccess;
var createObjectData = function(e, t, c) {
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
exports.createObjectData = createObjectData;
var getObjectDataAccessorsForObjectType = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(c) {
            return [2, e.get("/api/v1/objects/" + t + "/access").then(validator_1.unsafeDecodeAs(exports.ObjectDataAccessorsForObjectTypeResponse))]
        })
    })
};
exports.getObjectDataAccessorsForObjectType = getObjectDataAccessorsForObjectType, exports.ObjectDataAccessorsForObjectTypeResponse = t.readonly(t.type({
    access: t.readonlyArray(exports.ObjectDataAccess)
})), exports.ObjectDataPreflightResponse = t.readonly(t.type({
    objectType: ObjectTypeCodec,
    accessors: t.readonlyArray(exports.ObjectDataAccess)
}), "ObjectDataPreflightResponse");
var getCombinedObjectAccessors = function(e, t, c, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, s;
        return __generator(this, function(o) {
            return r = util_1.dataToParamString({
                accessorDetails: a.accessorDetails
            }), s = "/api/v1/objects/" + t + "/" + c + "/access/combined" + r, [2, e.get(s).then(validator_1.unsafeDecodeAs(exports.GetCombinedObjectAccessorsResponse))]
        })
    })
};
exports.getCombinedObjectAccessors = getCombinedObjectAccessors;
var getObjectDataPreflight = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var c, a;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return r.trys.push([0, 2, , 3]), [4, e.get("/api/v2/objects/" + t + "/preflight").then(validator_1.unsafeDecodeAs(exports.ObjectDataPreflightResponse))];
                case 1:
                    return [2, r.sent()];
                case 2:
                    if (c = r.sent(), a = errors_1.getError(c), errors_1.isNewServerErrorWithStatus(a, 404)) return [2, void 0];
                    throw a;
                case 3:
                    return [2]
            }
        })
    })
};
exports.getObjectDataPreflight = getObjectDataPreflight, exports.ObjectDataAccessPreflightResponse = t.readonly(t.type({
    objectType: ObjectTypeCodec,
    requiredGroups: validator_1.withDefault(t.readonlyArray(t.string), []),
    existingAccess: t.union([exports.ObjectDataAccess, t.undefined]),
    keyset: t.union([util.crypto.KeysetCiphertext, t.undefined]),
    data: validator_1.withDefault(t.readonlyArray(exports.EncryptedObjectData), [])
}), "ObjectDataAccessPreflightResponse");
var getObjectDataAccessPreflight = function(e, t, c, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(s) {
            return r = "/api/v1/objects/" + t + "/access/preflight/" + c, a && (r += "?accessoruuid=" + a), [2, e.get(r).then(validator_1.unsafeDecodeAs(exports.ObjectDataAccessPreflightResponse))]
        })
    })
};
exports.getObjectDataAccessPreflight = getObjectDataAccessPreflight;
var addObjectData = function(e, t, c) {
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
exports.addObjectData = addObjectData;
var deleteObjectData = function(e, t, c, a, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return [4, e.delete("/api/v1/objects/" + t + "/" + c + "/" + a + "/" + r)];
                case 1:
                    return s.sent(), [2]
            }
        })
    })
};
exports.deleteObjectData = deleteObjectData;
var getObjectDataAccessForUserAndType = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return [4, e.get("/api/v1/objects/" + t + "/access/user").then(validator_1.unsafeDecodeAs(exports.ObjectDataAccessorsForObjectTypeResponse))];
                case 1:
                    return [2, c.sent()]
            }
        })
    })
};
exports.getObjectDataAccessForUserAndType = getObjectDataAccessForUserAndType;
var updateObjectData = function(e, t, c, a, r, s) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return [4, e.put("/api/v1/objects/" + t + "/" + c + "/" + a + "/" + r, s)];
                case 1:
                    return o.sent(), [2]
            }
        })
    })
};
exports.updateObjectData = updateObjectData, exports.ObjectDataWithSpec1Response = t.readonly(t.type({
    objectType: ObjectTypeCodec,
    objectData: t.readonlyArray(exports.EncryptedObjectData)
}), "ObjectDataWithSpec1Response");
var getAllObjectDataWithDataSpec1 = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return [4, e.get("/api/v1/objects/" + t + "/dataspec/1").then(validator_1.unsafeDecodeAs(exports.ObjectDataWithSpec1Response))];
                case 1:
                    return [2, c.sent()]
            }
        })
    })
};
exports.getAllObjectDataWithDataSpec1 = getAllObjectDataWithDataSpec1;