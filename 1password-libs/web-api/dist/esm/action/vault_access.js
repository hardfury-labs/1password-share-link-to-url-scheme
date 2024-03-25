var __awaiter = this && this.__awaiter || function(e, r, t, o) {
        return new(t || (t = Promise))(function(n, s) {
            function a(e) {
                try {
                    i(o.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function u(e) {
                try {
                    i(o.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function i(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(a, u)
            }
            i((o = o.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, o, n, s, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function u(s) {
            return function(u) {
                return function(s) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, s[1])).done) return n;
                        switch (o = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                            case 0:
                            case 1:
                                n = s;
                                break;
                            case 4:
                                return a.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = s[1], s = [0];
                                continue;
                            case 7:
                                s = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                    a.label = s[1];
                                    break
                                }
                                if (6 === s[0] && a.label < n[1]) {
                                    a.label = n[1], n = s;
                                    break
                                }
                                if (n && a.label < n[2]) {
                                    a.label = n[2], a.ops.push(s);
                                    break
                                }
                                n[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        s = r.call(e, a)
                    } catch (e) {
                        s = [6, e], o = 0
                    } finally {
                        t = n = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, u])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var o, n, s = t.call(e),
            a = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(o = s.next()).done;) a.push(o.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (t = s.return) && t.call(s)
            } finally {
                if (n) throw n.error
            }
        }
        return a
    },
    __spread = this && this.__spread || function() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(__read(arguments[r]));
        return e
    };
import {
    partition
} from "lodash-es";
import * as api from "../api";
import * as model from "../model";
import * as parser from "../parser";
import * as util from "../util";
import {
    batchChain
} from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    getGroup
} from "./group";
import {
    getGroupPubKeys,
    getUserPubKeys,
    mergeInPubKeys
} from "./pub_key";
import {
    getPerson
} from "./user";
import {
    getVault
} from "./vault";
var codeLocation = "action/vault_access",
    makePromise = mp(codeLocation),
    getAccessorsWithPubKeys = function(e, r) {
        return makePromise("getAccessorsWithPubKeys", function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var t, o, n, s, a;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return t = __read(partition(r, function(e) {
                                return "group" === e.accessorType
                            }), 2), o = t[0], n = t[1], [4, getGroupPubKeys(e, o)];
                        case 1:
                            return s = u.sent(), [4, getUserPubKeys(e, n)];
                        case 2:
                            return a = u.sent(), [2, __spread(mergeInPubKeys(o, s), mergeInPubKeys(n, a))]
                    }
                })
            })
        })
    };
export var addAccessorsToVault = function(e, r, t, o) {
    return makePromise("addAccessorsToVault", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, s, a, u;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, getAccessorsWithPubKeys(e, r)];
                    case 1:
                        return n = i.sent(), s = n.map(function(e) {
                            return model.VaultAccess.generate(t, e, o.byUuid && o.byUuid[e.uuid] || o.default)
                        }), [4, Promise.all(s)];
                    case 2:
                        return a = i.sent(), u = a.map(parser.vaultAccessToAPI), [4, batchChain(function(r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, api.addVaultAccess(e.session, t.uuid, r)];
                                        case 1:
                                            return o.sent(), [2, []]
                                    }
                                })
                            })
                        }, 100, u)];
                    case 3:
                        return i.sent(), [2]
                }
            })
        })
    })
};
export var addAccessorToVaults = function(e, r, t, o) {
    return makePromise("addAccessorToVaults", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, s, a;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return [4, getAccessorsWithPubKeys(e, [r])];
                    case 1:
                        if (n = __read.apply(void 0, [u.sent(), 1]), !(s = n[0])) throw new Error("Missing accessor with public key.");
                        return a = t.map(function(r) {
                            return void 0 !== r.defaultAcl && (o.acl = r.defaultAcl), model.VaultAccess.generate(r, s, o).then(function(t) {
                                var o = parser.vaultAccessToAPI(t);
                                return api.addVaultAccess(e.session, r.uuid, [o])
                            })
                        }), [2, Promise.all(a).then(function() {})]
                }
            })
        })
    })
};
export var updateVaultAccessPermissions = function(e, r) {
    return makePromise("updateVaultAccessPermissions", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return model.vaultACL.isEffectivelyZero(r.acl) ? [4, revokeVaultAccess(e, r)] : [3, 2];
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
export var deleteAccessorFromVault = function(e, r, t, o) {
    return makePromise("deleteAccessorFromVault", function() {
        var n = "group" === o,
            s = n ? util.getValidGroupUuid(r) : util.getValidUserUuid(r);
        if (!s) return Promise.reject(new Error("Invalid accessor reference"));
        var a = util.getValidVaultUuid(t);
        return a ? api.deleteAccessorFromVault(e.session, a, s, n).then(function() {
            var r = n ? getGroup(e, s, {
                attrs: model.Group.Attr.VaultAccess,
                mustReload: !0
            }) : getPerson(e, s, {
                attrs: model.Person.Attr.VaultAccess,
                mustReload: !0
            });
            return Promise.all([getVault(e, a, {
                attrs: model.Vault.Attr.Accessors,
                mustReload: !0
            }), r])
        }) : Promise.reject(new Error("Invalid vault reference"))
    })
};
export var revokeVaultAccess = function(e, r) {
    return makePromise("revokeVaultAccess", function() {
        return deleteAccessorFromVault(e, r.accessorUuid, r.vaultUuid, r.accessorType)
    })
};