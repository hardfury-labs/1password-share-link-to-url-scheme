"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, s) {
        void 0 === s && (s = t), Object.defineProperty(e, s, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, s) {
        void 0 === s && (s = t), e[s] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    },
    __awaiter = this && this.__awaiter || function(e, r, t, s) {
        return new(t || (t = Promise))(function(o, a) {
            function u(e) {
                try {
                    i(s.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function n(e) {
                try {
                    i(s.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function i(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(u, n)
            }
            i((s = s.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, s, o, a, u = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: n(0),
            throw: n(1),
            return: n(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function n(a) {
            return function(n) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (t = 1, s && (o = 2 & a[0] ? s.return : a[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, a[1])).done) return o;
                        switch (s = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return u.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, s = a[1], a = [0];
                                continue;
                            case 7:
                                a = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    u.label = a[1];
                                    break
                                }
                                if (6 === a[0] && u.label < o[1]) {
                                    u.label = o[1], o = a;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(a);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        a = r.call(e, u)
                    } catch (e) {
                        a = [6, e], s = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, n])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var s, o, a = t.call(e),
            u = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(s = a.next()).done;) u.push(s.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                s && !s.done && (t = a.return) && t.call(a)
            } finally {
                if (o) throw o.error
            }
        }
        return u
    },
    __spread = this && this.__spread || function() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(__read(arguments[r]));
        return e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.revokeVaultAccess = exports.deleteAccessorFromVault = exports.updateVaultAccessPermissions = exports.addAccessorToVaults = exports.addAccessorsToVault = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    parser = __importStar(require("../parser")),
    util = __importStar(require("../util")),
    util_1 = require("../util"),
    make_promise_1 = require("../util/make_promise"),
    group_1 = require("./group"),
    pub_key_1 = require("./pub_key"),
    user_1 = require("./user"),
    vault_1 = require("./vault"),
    codeLocation = "action/vault_access",
    makePromise = make_promise_1.makePromise(codeLocation),
    getAccessorsWithPubKeys = function(e, r) {
        return makePromise("getAccessorsWithPubKeys", function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var t, s, o, a, u;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return t = __read(lodash_es_1.partition(r, function(e) {
                                return "group" === e.accessorType
                            }), 2), s = t[0], o = t[1], [4, pub_key_1.getGroupPubKeys(e, s)];
                        case 1:
                            return a = n.sent(), [4, pub_key_1.getUserPubKeys(e, o)];
                        case 2:
                            return u = n.sent(), [2, __spread(pub_key_1.mergeInPubKeys(s, a), pub_key_1.mergeInPubKeys(o, u))]
                    }
                })
            })
        })
    },
    addAccessorsToVault = function(e, r, t, s) {
        return makePromise("addAccessorsToVault", function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var o, a, u, n, i;
                return __generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            return [4, getAccessorsWithPubKeys(e, r)];
                        case 1:
                            return o = c.sent(), a = o.map(function(e) {
                                return model.VaultAccess.generate(t, e, s.byUuid && s.byUuid[e.uuid] || s.default)
                            }), [4, Promise.all(a)];
                        case 2:
                            return u = c.sent(), n = u.map(parser.vaultAccessToAPI), i = function(r) {
                                return __awaiter(void 0, void 0, void 0, function() {
                                    return __generator(this, function(s) {
                                        switch (s.label) {
                                            case 0:
                                                return [4, api.addVaultAccess(e.session, t.uuid, r)];
                                            case 1:
                                                return s.sent(), [2, []]
                                        }
                                    })
                                })
                            }, [4, util_1.batchChain(i, 100, n)];
                        case 3:
                            return c.sent(), [2]
                    }
                })
            })
        })
    };
exports.addAccessorsToVault = addAccessorsToVault;
var addAccessorToVaults = function(e, r, t, s) {
    return makePromise("addAccessorToVaults", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var o, a, u;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, getAccessorsWithPubKeys(e, [r])];
                    case 1:
                        if (o = __read.apply(void 0, [n.sent(), 1]), !(a = o[0])) throw new Error("Missing accessor with public key.");
                        return u = t.map(function(r) {
                            return void 0 !== r.defaultAcl && (s.acl = r.defaultAcl), model.VaultAccess.generate(r, a, s).then(function(t) {
                                var s = parser.vaultAccessToAPI(t);
                                return api.addVaultAccess(e.session, r.uuid, [s])
                            })
                        }), [2, Promise.all(u).then(function() {})]
                }
            })
        })
    })
};
exports.addAccessorToVaults = addAccessorToVaults;
var updateVaultAccessPermissions = function(e, r) {
    return makePromise("updateVaultAccessPermissions", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return model.vaultACL.isEffectivelyZero(r.acl) ? [4, exports.revokeVaultAccess(e, r)] : [3, 2];
                    case 1:
                        return t.sent(), [3, 3];
                    case 2:
                        return "group" === r.accessorType ? [2, api.updateGroupVaultAccessPermissions(e.session, r.vaultUuid, r.accessorUuid, r.acl)] : [2, api.updatePersonVaultAccessPermissions(e.session, r.vaultUuid, r.accessorUuid, r.acl)];
                    case 3:
                        return [2]
                }
            })
        })
    })
};
exports.updateVaultAccessPermissions = updateVaultAccessPermissions;
var deleteAccessorFromVault = function(e, r, t, s) {
    return makePromise("deleteAccessorFromVault", function() {
        var o = "group" === s,
            a = o ? util.getValidGroupUuid(r) : util.getValidUserUuid(r);
        if (!a) return Promise.reject(new Error("Invalid accessor reference"));
        var u = util.getValidVaultUuid(t);
        return u ? api.deleteAccessorFromVault(e.session, u, a, o).then(function() {
            var r = o ? group_1.getGroup(e, a, {
                attrs: model.Group.Attr.VaultAccess,
                mustReload: !0
            }) : user_1.getPerson(e, a, {
                attrs: model.Person.Attr.VaultAccess,
                mustReload: !0
            });
            return Promise.all([vault_1.getVault(e, u, {
                attrs: model.Vault.Attr.Accessors,
                mustReload: !0
            }), r])
        }) : Promise.reject(new Error("Invalid vault reference"))
    })
};
exports.deleteAccessorFromVault = deleteAccessorFromVault;
var revokeVaultAccess = function(e, r) {
    return makePromise("revokeVaultAccess", function() {
        return exports.deleteAccessorFromVault(e, r.accessorUuid, r.vaultUuid, r.accessorType)
    })
};
exports.revokeVaultAccess = revokeVaultAccess;