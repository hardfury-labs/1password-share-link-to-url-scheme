var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, a = arguments.length; r < a; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, a) {
        return new(r || (r = Promise))(function(n, c) {
            function o(e) {
                try {
                    i(a.next(e))
                } catch (e) {
                    c(e)
                }
            }

            function s(e) {
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
                })).then(o, s)
            }
            i((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, a, n, c, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return c = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }), c;

        function s(c) {
            return function(s) {
                return function(c) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, a && (n = 2 & c[0] ? a.return : c[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, c[1])).done) return n;
                        switch (a = 0, n && (c = [2 & c[0], n.value]), c[0]) {
                            case 0:
                            case 1:
                                n = c;
                                break;
                            case 4:
                                return o.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = c[1], c = [0];
                                continue;
                            case 7:
                                c = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === c[0] && (!n || c[1] > n[0] && c[1] < n[3])) {
                                    o.label = c[1];
                                    break
                                }
                                if (6 === c[0] && o.label < n[1]) {
                                    o.label = n[1], n = c;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(c);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        c = t.call(e, o)
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
                }([c, s])
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
            o = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(a = c.next()).done;) o.push(a.value)
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
        return o
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    };
import moment from "moment";
import * as api from "../api";
import {
    createSymmetricKey,
    DataType,
    Group,
    importPubKey,
    JWK_ALG_A256GCM,
    Keyset,
    ObjectDataAccessAcl,
    ObjectDataAccessorType,
    ObjectDataAccessScope,
    ObjectDataType,
    ObjectType,
    ServiceAccountConnectObjectDataValue
} from "../model";
import * as util from "../util";
import {
    getGroup
} from "./group";
import {
    decryptKeysets
} from "./keyset";
export var getUserCombinedObjectDataAccess = function(e, t) {
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
export var getUserCombinedObjectDataAccesses = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return [4, Promise.all(Object.values(ObjectType).map(function(t) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var r;
                            return __generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), r = {
                                            status: 0
                                        }, [4, getUserCombinedObjectDataAccess(e, t)];
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
export var getCombinedObjectAccessors = function(e, t, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, api.getCombinedObjectAccessors(e.session, t, r, a || {})]
        })
    })
};
var decryptObjectData = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a, n, c, o, s;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    if (!(a = t.find(function(t) {
                            return t.uuid === e.encryptedBy
                        }))) throw new Error("None of the keysets match this object data");
                    return e.data.dataType === DataType.None ? [3, 3] : [4, createSymmetricKey().decryptWithKeyset(a, e.data.encKey)];
                case 1:
                    return c = i.sent(), s = (o = util).decodeBytes, [4, c.decrypt(e.data.encData)];
                case 2:
                    n = s.apply(o, [i.sent(), r]), i.label = 3;
                case 3:
                    return [2, {
                        objectUuid: e.objectUuid,
                        data: n,
                        acl: e.acl
                    }]
            }
        })
    })
};
export var getObjectData = function(e, t, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, c;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return [4, decryptKeysets(e, t.keysets)];
                case 1:
                    if (n = o.sent(), !(c = t.data.find(function(e) {
                            return e.objectUuid === r && e.data.dataType !== DataType.None
                        }))) throw new Error("Unable to find object data for uuid");
                    return [2, decryptObjectData(c, n, a)]
            }
        })
    })
};
export var bootstrapObjectDataAccess = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a, n, c, o, s, i, u, d;
        return __generator(this, function(l) {
            switch (l.label) {
                case 0:
                    return [4, api.getObjectDataAccessPreflight(e.session, t, r)];
                case 1:
                    a = l.sent(), l.label = 2;
                case 2:
                    l.trys.push([2, 8, 9, 10]), n = __values(a.requiredGroups), c = n.next(), l.label = 3;
                case 3:
                    return c.done ? [3, 7] : (o = c.value, [4, getGroup(e, o, {
                        attrs: Group.Attr.PubKey
                    })]);
                case 4:
                    return s = l.sent(), [4, createObjectDataAccess(e, t, ObjectDataAccessScope.Manage, s, [], a)];
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
export var createObjectData = function(e, t, r, a, n, c) {
    return void 0 === c && (c = []), __awaiter(void 0, void 0, void 0, function() {
        var o, s;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, api.getObjectDataPreflight(e.session, t)];
                case 1:
                    return (o = i.sent()) ? [3, 3] : [4, bootstrapObjectDataAccess(e, t, a)];
                case 2:
                    o = i.sent(), i.label = 3;
                case 3:
                    if (!o) throw new Error("Unable to get or bootstrap object data preflight.");
                    return [4, encryptObjectData(t, n.objectUuid, r, n, __spread(o.accessors, c))];
                case 4:
                    return s = i.sent(), [4, api.createObjectData(e.session, t, {
                        objectUuid: n.objectUuid,
                        data: s
                    })];
                case 5:
                    return i.sent(), [2]
            }
        })
    })
};
export var deleteObjectData = function(e, t, r, a, n) {
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
var encryptObjectData = function(e, t, r, a, n) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(c) {
                return [2, Promise.all(n.map(function(n) {
                    return __awaiter(void 0, void 0, void 0, function() {
                        var c, o, s, i, u, d, l;
                        return __generator(this, function(p) {
                            switch (p.label) {
                                case 0:
                                    if (!a.data || !shouldEncryptObjectDataForAccessor(r, a.acl, n.acl)) return [3, 5];
                                    if (!(o = (null === (l = n.encKeyset) || void 0 === l ? void 0 : l.pubKey) || n.pubKey)) throw new Error("missing encryption public key for ODA");
                                    return [4, (s = createSymmetricKey()).generate(JWK_ALG_A256GCM)];
                                case 1:
                                    return p.sent(), [4, s.encrypt(util.json2ab(a.data))];
                                case 2:
                                    return i = p.sent(), [4, importPubKey(o)];
                                case 3:
                                    return u = p.sent(), [4, s.encryptWithKey(u)];
                                case 4:
                                    return d = p.sent(), c = {
                                        dataType: r,
                                        encKey: d,
                                        encData: i
                                    }, [3, 6];
                                case 5:
                                    c = {
                                        dataType: DataType.None
                                    }, p.label = 6;
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
        return e !== DataType.ConnectCredentialsSigningPrivateKeyToken && e !== DataType.ConnectCredentialsFull || (!!t.some(function(e) {
            return e === ObjectDataAccessAcl.ServiceAccountTokenCreate
        }) || r.some(function(e) {
            return e === ObjectDataAccessAcl.ServiceAccountTokenCreate || e === ObjectDataAccessScope.Manage
        }))
    };
export var createObjectDataAccess = function(e, t, r, a, n, c) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, s, i, u, d, l;
        return __generator(this, function(p) {
            switch (p.label) {
                case 0:
                    if (!a.pubKey) throw new Error("Unable to add object data access for group.");
                    return o = moment().toISOString(), [4, Keyset.generateWithSigningKeys()];
                case 1:
                    return (s = p.sent()).sn += 1, [4, s.encryptWithKey(a.pubKey)];
                case 2:
                    return i = p.sent(), u = {
                        state: api.ObjectDataAccessState.Active,
                        objectType: t,
                        accessorUuid: a.uuid,
                        accessorType: api.ObjectDataAccessorType.Group,
                        kid: s.uuid,
                        pubKey: i.pubKey,
                        encKeyset: i,
                        encryptedBy: a.pubKey.uuid,
                        acl: __spread([r], n),
                        createdAt: o,
                        updatedAt: o
                    }, [4, reEncryptRequiredData(e, c, u)];
                case 3:
                    return d = p.sent(), l = {
                        access: u,
                        data: d
                    }, [4, api.createObjectDataAccess(e.session, l)];
                case 4:
                    return p.sent(), [2, u]
            }
        })
    })
};
export var deleteObjectDataAccess = function(e, t, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, api.deleteObjectDataAccess(e.session, t, r, a)]
        })
    })
};
var reEncryptRequiredData = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a, n;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return t.keyset ? [4, decryptKeysets(e, [t.keyset])] : [2, []];
                case 1:
                    if (a = __read.apply(void 0, [c.sent(), 1]), void 0 === (n = a[0])) throw new Error("reEncryptRequiredData: Error decrypting ODA preflight keyset");
                    return [4, Promise.all(t.data.map(function(e) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var t, a, c;
                            return __generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!r.encKeyset) throw new Error("Missing encKeyset");
                                        return [4, decryptObjectData(e, [n], ObjectDataType)];
                                    case 1:
                                        return t = o.sent(), [4, encryptObjectData(e.objectType, e.objectUuid, e.data.dataType, t, [r])];
                                    case 2:
                                        if (a = __read.apply(void 0, [o.sent(), 1]), void 0 === (c = a[0])) throw new Error("Error encrypting ODA");
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
};
export var getObjectDataAccessorsForObjectType = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, api.getObjectDataAccessorsForObjectType(e.session, t)]
        })
    })
};
export var getObjectDataAccessPreflight = function(e, t, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, api.getObjectDataAccessPreflight(e.session, t, r, a)]
        })
    })
};
export var addObjectDataToGroup = function(e, t, r, a, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var c, o, s, i;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return [4, Promise.all(t.map(function(t) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var a, n;
                            return __generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, getObjectDataAccessPreflight(e, r, ObjectDataAccessScope.Some, t)];
                                    case 1:
                                        return (a = c.sent()).existingAccess ? [2, a.existingAccess] : [4, getGroup(e, t, {
                                            attrs: Group.Attr.PubKey
                                        })];
                                    case 2:
                                        return n = c.sent(), [2, createObjectDataAccess(e, r, ObjectDataAccessScope.Some, n, [], a)]
                                }
                            })
                        })
                    }))];
                case 1:
                    return c = u.sent(), [4, getUserCombinedObjectDataAccess(e, r)];
                case 2:
                    return o = u.sent(), [4, getObjectData(e, o, a, n)];
                case 3:
                    return s = u.sent(), [4, encryptObjectData(r, a, DataType.ConnectCredentialsSigningPrivateKeyToken, s, c)];
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
export var addAclsToObjectData = function(e, t, r, a, n, c) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, s, i, u, d, l, p, b;
        return __generator(this, function(f) {
            switch (f.label) {
                case 0:
                    return [4, api.getObjectDataAccess(e.session, r, ObjectDataAccessorType.Group, t)];
                case 1:
                    return o = f.sent(), (s = o.access[0]) ? [4, getUserCombinedObjectDataAccess(e, r)] : [3, 11];
                case 2:
                    return i = f.sent(), [4, getObjectData(e, i, a, n)];
                case 3:
                    return u = f.sent(), [4, deleteObjectData(e, r, a, t, ObjectDataAccessorType.Group)];
                case 4:
                    return f.sent(), d = __assign(__assign({}, u), {
                        acl: c
                    }), [4, encryptObjectData(r, a, DataType.ConnectCredentialsSigningPrivateKeyToken, d, [s])];
                case 5:
                    l = f.sent(), f.label = 6;
                case 6:
                    return f.trys.push([6, 8, , 11]), [4, api.addObjectData(e.session, r, {
                        objectUuid: a,
                        data: l
                    })];
                case 7:
                    return f.sent(), [3, 11];
                case 8:
                    return p = f.sent(), [4, encryptObjectData(r, a, DataType.ConnectCredentialsSigningPrivateKeyToken, u, [s])];
                case 9:
                    return b = f.sent(), [4, api.addObjectData(e.session, r, {
                        objectUuid: a,
                        data: b
                    })];
                case 10:
                    throw f.sent(), p;
                case 11:
                    return [2]
            }
        })
    })
};
export var getAllObjectDataRecordsWithDataSpec1 = function(e, t) {
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
export var handleObjectDataMigration = function(e, t) {
    var r = t.objectData,
        a = t.objectType;
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return [4, getUserCombinedObjectDataAccess(e, a)];
                case 1:
                    return t = c.sent(), [4, getObjectDataAccessorsForObjectType(e, a)];
                case 2:
                    return n = c.sent(), r.map(function(r) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var c, o, s, i;
                            return __generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, getObjectData(e, t, r.objectUuid, ServiceAccountConnectObjectDataValue)];
                                    case 1:
                                        if (c = u.sent(), void 0 === (o = n.access.find(function(e) {
                                                return e.kid === r.encryptedBy
                                            }))) throw new Error("Error finding matching accessor for ObjectData");
                                        return [4, encryptObjectData(a, r.objectUuid, DataType.ConnectCredentialsSigningPrivateKeyToken, c, [o])];
                                    case 2:
                                        if (s = __read.apply(void 0, [u.sent(), 1]), void 0 === (i = s[0])) throw new Error("Error encrypting ODA");
                                        return [4, api.updateObjectData(e.session, a, r.objectUuid, o.accessorType, o.accessorUuid, {
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