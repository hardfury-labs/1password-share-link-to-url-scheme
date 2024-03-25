"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, a = arguments.length; r < a; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, a) {
        void 0 === a && (a = r), Object.defineProperty(e, a, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, a) {
        void 0 === a && (a = r), e[a] = t[r]
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
    },
    __awaiter = this && this.__awaiter || function(e, t, r, a) {
        return new(r || (r = Promise))(function(n, c) {
            function s(e) {
                try {
                    i(a.next(e))
                } catch (e) {
                    c(e)
                }
            }

            function o(e) {
                try {
                    i(a.throw(e))
                } catch (e) {
                    c(e)
                }
            }

            function i(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(s, o)
            }
            i((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, a, n, c, s = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return c = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }), c;

        function o(c) {
            return function(o) {
                return function(c) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, a && (n = 2 & c[0] ? a.return : c[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, c[1])).done) return n;
                        switch (a = 0, n && (c = [2 & c[0], n.value]), c[0]) {
                            case 0:
                            case 1:
                                n = c;
                                break;
                            case 4:
                                return s.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, a = c[1], c = [0];
                                continue;
                            case 7:
                                c = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = s.trys).length > 0 && n[n.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === c[0] && (!n || c[1] > n[0] && c[1] < n[3])) {
                                    s.label = c[1];
                                    break
                                }
                                if (6 === c[0] && s.label < n[1]) {
                                    s.label = n[1], n = c;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(c);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        c = t.call(e, s)
                    } catch (e) {
                        c = [6, e], a = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & c[0]) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }([c, o])
            }
        }
    },
    __values = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            a = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && a >= e.length && (e = void 0), {
                    value: e && e[a++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var a, n, c = r.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(a = c.next()).done;) s.push(a.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                a && !a.done && (r = c.return) && r.call(c)
            } finally {
                if (n) throw n.error
            }
        }
        return s
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    },
    __importDefault = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.handleObjectDataMigration = exports.getAllObjectDataRecordsWithDataSpec1 = exports.addAclsToObjectData = exports.addObjectDataToGroup = exports.getObjectDataAccessPreflight = exports.getObjectDataAccessorsForObjectType = exports.deleteObjectDataAccess = exports.createObjectDataAccess = exports.deleteObjectData = exports.createObjectData = exports.bootstrapObjectDataAccess = exports.getObjectData = exports.getCombinedObjectAccessors = exports.getUserCombinedObjectDataAccesses = exports.getUserCombinedObjectDataAccess = void 0;
var moment_1 = __importDefault(require("moment")),
    api = __importStar(require("../api")),
    model_1 = require("../model"),
    util = __importStar(require("../util")),
    group_1 = require("./group"),
    keyset_1 = require("./keyset"),
    getUserCombinedObjectDataAccess = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, api.getUserCombinedObjectDataAccess(e.session, t)];
                    case 1:
                        return [2, r.sent().combinedAccess]
                }
            })
        })
    };
exports.getUserCombinedObjectDataAccess = getUserCombinedObjectDataAccess;
var getUserCombinedObjectDataAccesses = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return [4, Promise.all(Object.values(model_1.ObjectType).map(function(t) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var r;
                            return __generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), r = {
                                            status: 0
                                        }, [4, exports.getUserCombinedObjectDataAccess(e, t)];
                                    case 1:
                                        return [2, (r.value = a.sent(), r)];
                                    case 2:
                                        return a.sent(), [2, {
                                            status: 1
                                        }];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }))];
                case 1:
                    return t = a.sent(), r = [], t.forEach(function(e) {
                        0 === e.status && r.push(e.value)
                    }), [2, r]
            }
        })
    })
};
exports.getUserCombinedObjectDataAccesses = getUserCombinedObjectDataAccesses;
var getCombinedObjectAccessors = function(e, t, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, api.getCombinedObjectAccessors(e.session, t, r, a || {})]
        })
    })
};
exports.getCombinedObjectAccessors = getCombinedObjectAccessors;
var decryptObjectData = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var a, n, c, s, o;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (!(a = t.find(function(t) {
                                return t.uuid === e.encryptedBy
                            }))) throw new Error("None of the keysets match this object data");
                        return e.data.dataType === model_1.DataType.None ? [3, 3] : [4, model_1.createSymmetricKey().decryptWithKeyset(a, e.data.encKey)];
                    case 1:
                        return c = i.sent(), o = (s = util).decodeBytes, [4, c.decrypt(e.data.encData)];
                    case 2:
                        n = o.apply(s, [i.sent(), r]), i.label = 3;
                    case 3:
                        return [2, {
                            objectUuid: e.objectUuid,
                            data: n,
                            acl: e.acl
                        }]
                }
            })
        })
    },
    getObjectData = function(e, t, r, a) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, c;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return [4, keyset_1.decryptKeysets(e, t.keysets)];
                    case 1:
                        if (n = s.sent(), !(c = t.data.find(function(e) {
                                return e.objectUuid === r && e.data.dataType !== model_1.DataType.None
                            }))) throw new Error("Unable to find object data for uuid");
                        return [2, decryptObjectData(c, n, a)]
                }
            })
        })
    };
exports.getObjectData = getObjectData;
var bootstrapObjectDataAccess = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a, n, c, s, o, i, u, d;
        return __generator(this, function(l) {
            switch (l.label) {
                case 0:
                    return [4, api.getObjectDataAccessPreflight(e.session, t, r)];
                case 1:
                    a = l.sent(), l.label = 2;
                case 2:
                    l.trys.push([2, 8, 9, 10]), n = __values(a.requiredGroups), c = n.next(), l.label = 3;
                case 3:
                    return c.done ? [3, 7] : (s = c.value, [4, group_1.getGroup(e, s, {
                        attrs: model_1.Group.Attr.PubKey
                    })]);
                case 4:
                    return o = l.sent(), [4, exports.createObjectDataAccess(e, t, model_1.ObjectDataAccessScope.Manage, o, [], a)];
                case 5:
                    l.sent(), l.label = 6;
                case 6:
                    return c = n.next(), [3, 3];
                case 7:
                    return [3, 10];
                case 8:
                    return i = l.sent(), u = {
                        error: i
                    }, [3, 10];
                case 9:
                    try {
                        c && !c.done && (d = n.return) && d.call(n)
                    } finally {
                        if (u) throw u.error
                    }
                    return [7];
                case 10:
                    return [4, api.getObjectDataPreflight(e.session, t)];
                case 11:
                    return [2, l.sent()]
            }
        })
    })
};
exports.bootstrapObjectDataAccess = bootstrapObjectDataAccess;
var createObjectData = function(e, t, r, a, n, c) {
    return void 0 === c && (c = []), __awaiter(void 0, void 0, void 0, function() {
        var s, o;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, api.getObjectDataPreflight(e.session, t)];
                case 1:
                    return (s = i.sent()) ? [3, 3] : [4, exports.bootstrapObjectDataAccess(e, t, a)];
                case 2:
                    s = i.sent(), i.label = 3;
                case 3:
                    if (!s) throw new Error("Unable to get or bootstrap object data preflight.");
                    return [4, encryptObjectData(t, n.objectUuid, r, n, __spread(s.accessors, c))];
                case 4:
                    return o = i.sent(), [4, api.createObjectData(e.session, t, {
                        objectUuid: n.objectUuid,
                        data: o
                    })];
                case 5:
                    return i.sent(), [2]
            }
        })
    })
};
exports.createObjectData = createObjectData;
var deleteObjectData = function(e, t, r, a, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return [4, api.deleteObjectData(e.session, t, r, n, a)];
                case 1:
                    return c.sent(), [2]
            }
        })
    })
};
exports.deleteObjectData = deleteObjectData;
var encryptObjectData = function(e, t, r, a, n) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(c) {
                return [2, Promise.all(n.map(function(n) {
                    return __awaiter(void 0, void 0, void 0, function() {
                        var c, s, o, i, u, d, l;
                        return __generator(this, function(b) {
                            switch (b.label) {
                                case 0:
                                    if (!a.data || !shouldEncryptObjectDataForAccessor(r, a.acl, n.acl)) return [3, 5];
                                    if (!(s = (null === (l = n.encKeyset) || void 0 === l ? void 0 : l.pubKey) || n.pubKey)) throw new Error("missing encryption public key for ODA");
                                    return [4, (o = model_1.createSymmetricKey()).generate(model_1.JWK_ALG_A256GCM)];
                                case 1:
                                    return b.sent(), [4, o.encrypt(util.json2ab(a.data))];
                                case 2:
                                    return i = b.sent(), [4, model_1.importPubKey(s)];
                                case 3:
                                    return u = b.sent(), [4, o.encryptWithKey(u)];
                                case 4:
                                    return d = b.sent(), c = {
                                        dataType: r,
                                        encKey: d,
                                        encData: i
                                    }, [3, 6];
                                case 5:
                                    c = {
                                        dataType: model_1.DataType.None
                                    }, b.label = 6;
                                case 6:
                                    return [2, {
                                        objectType: e,
                                        objectUuid: t,
                                        data: c,
                                        encryptedBy: n.kid,
                                        acl: a.acl
                                    }]
                            }
                        })
                    })
                }))]
            })
        })
    },
    shouldEncryptObjectDataForAccessor = function(e, t, r) {
        return e !== model_1.DataType.ConnectCredentialsSigningPrivateKeyToken && e !== model_1.DataType.ConnectCredentialsFull || (!!t.some(function(e) {
            return e === model_1.ObjectDataAccessAcl.ServiceAccountTokenCreate
        }) || r.some(function(e) {
            return e === model_1.ObjectDataAccessAcl.ServiceAccountTokenCreate || e === model_1.ObjectDataAccessScope.Manage
        }))
    },
    createObjectDataAccess = function(e, t, r, a, n, c) {
        return __awaiter(void 0, void 0, void 0, function() {
            var s, o, i, u, d, l;
            return __generator(this, function(b) {
                switch (b.label) {
                    case 0:
                        if (!a.pubKey) throw new Error("Unable to add object data access for group.");
                        return s = moment_1.default().toISOString(), [4, model_1.Keyset.generateWithSigningKeys()];
                    case 1:
                        return (o = b.sent()).sn += 1, [4, o.encryptWithKey(a.pubKey)];
                    case 2:
                        return i = b.sent(), u = {
                            state: api.ObjectDataAccessState.Active,
                            objectType: t,
                            accessorUuid: a.uuid,
                            accessorType: api.ObjectDataAccessorType.Group,
                            kid: o.uuid,
                            pubKey: i.pubKey,
                            encKeyset: i,
                            encryptedBy: a.pubKey.uuid,
                            acl: __spread([r], n),
                            createdAt: s,
                            updatedAt: s
                        }, [4, reEncryptRequiredData(e, c, u)];
                    case 3:
                        return d = b.sent(), l = {
                            access: u,
                            data: d
                        }, [4, api.createObjectDataAccess(e.session, l)];
                    case 4:
                        return b.sent(), [2, u]
                }
            })
        })
    };
exports.createObjectDataAccess = createObjectDataAccess;
var deleteObjectDataAccess = function(e, t, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, api.deleteObjectDataAccess(e.session, t, r, a)]
        })
    })
};
exports.deleteObjectDataAccess = deleteObjectDataAccess;
var reEncryptRequiredData = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var a, n;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        return t.keyset ? [4, keyset_1.decryptKeysets(e, [t.keyset])] : [2, []];
                    case 1:
                        if (a = __read.apply(void 0, [c.sent(), 1]), void 0 === (n = a[0])) throw new Error("reEncryptRequiredData: Error decrypting ODA preflight keyset");
                        return [4, Promise.all(t.data.map(function(e) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var t, a, c;
                                return __generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (!r.encKeyset) throw new Error("Missing encKeyset");
                                            return [4, decryptObjectData(e, [n], model_1.ObjectDataType)];
                                        case 1:
                                            return t = s.sent(), [4, encryptObjectData(e.objectType, e.objectUuid, e.data.dataType, t, [r])];
                                        case 2:
                                            if (a = __read.apply(void 0, [s.sent(), 1]), void 0 === (c = a[0])) throw new Error("Error encrypting ODA");
                                            return [2, c]
                                    }
                                })
                            })
                        }))];
                    case 2:
                        return [2, c.sent()]
                }
            })
        })
    },
    getObjectDataAccessorsForObjectType = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                return [2, api.getObjectDataAccessorsForObjectType(e.session, t)]
            })
        })
    };
exports.getObjectDataAccessorsForObjectType = getObjectDataAccessorsForObjectType;
var getObjectDataAccessPreflight = function(e, t, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, api.getObjectDataAccessPreflight(e.session, t, r, a)]
        })
    })
};
exports.getObjectDataAccessPreflight = getObjectDataAccessPreflight;
var addObjectDataToGroup = function(e, t, r, a, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var c, s, o, i;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return [4, Promise.all(t.map(function(t) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var a, n;
                            return __generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, exports.getObjectDataAccessPreflight(e, r, model_1.ObjectDataAccessScope.Some, t)];
                                    case 1:
                                        return (a = c.sent()).existingAccess ? [2, a.existingAccess] : [4, group_1.getGroup(e, t, {
                                            attrs: model_1.Group.Attr.PubKey
                                        })];
                                    case 2:
                                        return n = c.sent(), [2, exports.createObjectDataAccess(e, r, model_1.ObjectDataAccessScope.Some, n, [], a)]
                                }
                            })
                        })
                    }))];
                case 1:
                    return c = u.sent(), [4, exports.getUserCombinedObjectDataAccess(e, r)];
                case 2:
                    return s = u.sent(), [4, exports.getObjectData(e, s, a, n)];
                case 3:
                    return o = u.sent(), [4, encryptObjectData(r, a, model_1.DataType.ConnectCredentialsSigningPrivateKeyToken, o, c)];
                case 4:
                    return i = u.sent(), [4, api.addObjectData(e.session, r, {
                        objectUuid: a,
                        data: i
                    })];
                case 5:
                    return u.sent(), [2]
            }
        })
    })
};
exports.addObjectDataToGroup = addObjectDataToGroup;
var addAclsToObjectData = function(e, t, r, a, n, c) {
    return __awaiter(void 0, void 0, void 0, function() {
        var s, o, i, u, d, l, b, p;
        return __generator(this, function(_) {
            switch (_.label) {
                case 0:
                    return [4, api.getObjectDataAccess(e.session, r, model_1.ObjectDataAccessorType.Group, t)];
                case 1:
                    return s = _.sent(), (o = s.access[0]) ? [4, exports.getUserCombinedObjectDataAccess(e, r)] : [3, 11];
                case 2:
                    return i = _.sent(), [4, exports.getObjectData(e, i, a, n)];
                case 3:
                    return u = _.sent(), [4, exports.deleteObjectData(e, r, a, t, model_1.ObjectDataAccessorType.Group)];
                case 4:
                    return _.sent(), d = __assign(__assign({}, u), {
                        acl: c
                    }), [4, encryptObjectData(r, a, model_1.DataType.ConnectCredentialsSigningPrivateKeyToken, d, [o])];
                case 5:
                    l = _.sent(), _.label = 6;
                case 6:
                    return _.trys.push([6, 8, , 11]), [4, api.addObjectData(e.session, r, {
                        objectUuid: a,
                        data: l
                    })];
                case 7:
                    return _.sent(), [3, 11];
                case 8:
                    return b = _.sent(), [4, encryptObjectData(r, a, model_1.DataType.ConnectCredentialsSigningPrivateKeyToken, u, [o])];
                case 9:
                    return p = _.sent(), [4, api.addObjectData(e.session, r, {
                        objectUuid: a,
                        data: p
                    })];
                case 10:
                    throw _.sent(), b;
                case 11:
                    return [2]
            }
        })
    })
};
exports.addAclsToObjectData = addAclsToObjectData;
var getAllObjectDataRecordsWithDataSpec1 = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, a;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return n.trys.push([0, 2, , 3]), [4, api.getAllObjectDataWithDataSpec1(e.session, t)];
                case 1:
                    return [2, n.sent()];
                case 2:
                    return r = n.sent(), a = util.errors.getError(r), util.errors.isNewServerErrorWithStatus(a, 404) ? [2] : util.errors.isNewServerErrorWithStatus(a, 403) ? (console.warn("Not enough access for getAllObjectDataWithDataSpec1.", a), [2]) : (console.error("Failed to getAllObjectDataRecordsWithDataSpec1:", a), [3, 3]);
                case 3:
                    return [2]
            }
        })
    })
};
exports.getAllObjectDataRecordsWithDataSpec1 = getAllObjectDataRecordsWithDataSpec1;
var handleObjectDataMigration = function(e, t) {
    var r = t.objectData,
        a = t.objectType;
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return [4, exports.getUserCombinedObjectDataAccess(e, a)];
                case 1:
                    return t = c.sent(), [4, exports.getObjectDataAccessorsForObjectType(e, a)];
                case 2:
                    return n = c.sent(), r.map(function(r) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var c, s, o, i;
                            return __generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, exports.getObjectData(e, t, r.objectUuid, model_1.ServiceAccountConnectObjectDataValue)];
                                    case 1:
                                        if (c = u.sent(), void 0 === (s = n.access.find(function(e) {
                                                return e.kid === r.encryptedBy
                                            }))) throw new Error("Error finding matching accessor for ObjectData");
                                        return [4, encryptObjectData(a, r.objectUuid, model_1.DataType.ConnectCredentialsSigningPrivateKeyToken, c, [s])];
                                    case 2:
                                        if (o = __read.apply(void 0, [u.sent(), 1]), void 0 === (i = o[0])) throw new Error("Error encrypting ODA");
                                        return [4, api.updateObjectData(e.session, a, r.objectUuid, s.accessorType, s.accessorUuid, {
                                            data: i
                                        })];
                                    case 3:
                                        return u.sent(), [2]
                                }
                            })
                        })
                    }), [2]
            }
        })
    })
};
exports.handleObjectDataMigration = handleObjectDataMigration;