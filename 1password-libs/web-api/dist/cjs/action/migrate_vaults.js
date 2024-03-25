"use strict";
var __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(a, u) {
            function o(t) {
                try {
                    s(n.next(t))
                } catch (t) {
                    u(t)
                }
            }

            function i(t) {
                try {
                    s(n.throw(t))
                } catch (t) {
                    u(t)
                }
            }

            function s(t) {
                var e;
                t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(o, i)
            }
            s((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, a, u, o = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return u = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
            return this
        }), u;

        function i(u) {
            return function(i) {
                return function(u) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (a = 2 & u[0] ? n.return : u[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, u[1])).done) return a;
                        switch (n = 0, a && (u = [2 & u[0], a.value]), u[0]) {
                            case 0:
                            case 1:
                                a = u;
                                break;
                            case 4:
                                return o.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = u[1], u = [0];
                                continue;
                            case 7:
                                u = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === u[0] && (!a || u[1] > a[0] && u[1] < a[3])) {
                                    o.label = u[1];
                                    break
                                }
                                if (6 === u[0] && o.label < a[1]) {
                                    o.label = a[1], a = u;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(u);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        u = e.call(t, o)
                    } catch (t) {
                        u = [6, t], n = 0
                    } finally {
                        r = a = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, i])
            }
        }
    },
    __read = this && this.__read || function(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n, a, u = r.call(t),
            o = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(n = u.next()).done;) o.push(n.value)
        } catch (t) {
            a = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (r = u.return) && r.call(u)
            } finally {
                if (a) throw a.error
            }
        }
        return o
    },
    __spread = this && this.__spread || function() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(__read(arguments[e]));
        return t
    },
    __values = this && this.__values || function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && n >= t.length && (t = void 0), {
                    value: t && t[n++],
                    done: !t
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.migrateVaults = void 0;
var model_1 = require("../model"),
    util_1 = require("../util"),
    account_1 = require("./account"),
    vault_1 = require("./vault"),
    vault_item_1 = require("./vault_item"),
    migrateVaults = function(t, e, r, n) {
        return __awaiter(void 0, void 0, void 0, function() {
            var a, u, o, i, s, l;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        if (r.find(function(t) {
                                return t.type !== model_1.Vault.TypeUserCreated
                            })) throw new Error("Unsupported vault type included in selected vaults.");
                        return [4, mustGetPersonalVault(t)];
                    case 1:
                        return u = [c.sent()], [4, vault_1.getGeneratedPasswordsVault(t)];
                    case 2:
                        return a = __spread.apply(void 0, [u.concat([c.sent()]), r]), r.length > 0 ? [4, vault_1.createAccountSplittingVaultPreflight(e)] : [3, 4];
                    case 3:
                        return i = c.sent(), [3, 5];
                    case 4:
                        i = void 0, c.label = 5;
                    case 5:
                        return o = i, [4, util_1.batchPromiseAll(function(e) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var r, n;
                                return __generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return n = {}, [4, vault_item_1.getVaultItems(t, e)];
                                        case 1:
                                            return n.vaultItems = a.sent(), e.type !== model_1.Vault.TypeUserCreated ? [3, 3] : [4, vault_1.getVault(t, e, {
                                                attrs: model_1.Vault.Attr.Accessors,
                                                mustReload: !0
                                            })];
                                        case 2:
                                            return r = a.sent(), [3, 4];
                                        case 3:
                                            r = e, a.label = 4;
                                        case 4:
                                            return [2, (n.vault = r, n)]
                                    }
                                })
                            })
                        }, 10, a.filter(function(t) {
                            return !!t
                        }))];
                    case 6:
                        return s = c.sent(), [4, account_1.getAccountWithAttrs(t, ["groups"])];
                    case 7:
                        return c.sent(), l = {
                            successfulVaults: [],
                            failedVaults: [],
                            failedItems: {}
                        }, [4, util_1.batchPromiseAll(function(r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var a, u, i;
                                return __generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return s.trys.push([0, 2, , 3]), [4, getDestinationVault(e, o, t, r.vault, n)];
                                        case 1:
                                            return a = s.sent(), u = r.vaultItems.map(function(t) {
                                                return model_1.VaultItem.importFromJson(a, t.exportToJson())
                                            }), [2, vault_item_1.patchVaultItems(e, u, a).then(function(t) {
                                                l.successfulVaults.push(r.vault);
                                                var e = Object.keys(t.failedItems);
                                                e.length > 0 && (console.error("Failed to patch some vault items", a.uuid, t.failedItems), l.failedItems[a.uuid] = e)
                                            }).catch(function(t) {
                                                l.failedVaults.push(a.uuid), console.error("Failed to patch vault items", a.uuid, t)
                                            })];
                                        case 2:
                                            return i = s.sent(), console.error("Failed to migrate vault", r.vault.uuid, i), l.failedVaults.push(r.vault.uuid), [2, Promise.resolve()];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, 10, s)];
                    case 8:
                        return c.sent(), [2, l]
                }
            })
        })
    };
exports.migrateVaults = migrateVaults;
var getDestinationVault = function(t, e, r, n, a) {
        return __awaiter(void 0, void 0, void 0, function() {
            var u, o, i, s, l, c, d;
            return __generator(this, function(f) {
                switch (f.label) {
                    case 0:
                        switch (u = null === (d = null === (c = r.account) || void 0 === c ? void 0 : c.administratorsGroup) || void 0 === d ? void 0 : d.uuid, n.type) {
                            case model_1.Vault.TypePersonal:
                                return [3, 1];
                            case model_1.Vault.TypeGeneratedPasswords:
                                return [3, 3];
                            case model_1.Vault.TypeUserCreated:
                                return [3, 7]
                        }
                        return [3, 10];
                    case 1:
                        return [4, mustGetPersonalVault(t)];
                    case 2:
                        return [2, f.sent()];
                    case 3:
                        return [4, vault_1.getGeneratedPasswordsVault(t)];
                    case 4:
                        return (o = f.sent()) ? [3, 6] : [4, vault_1.createGeneratedPasswordsVault(t)];
                    case 5:
                        o = f.sent(), f.label = 6;
                    case 6:
                        return [2, o];
                    case 7:
                        if (!e) throw new Error("Missing destination preflight.");
                        return i = vault_1.createVaultForAccountSplitting, s = [t], l = {
                            name: n.name,
                            desc: n.desc,
                            type: model_1.Vault.TypeUserCreated
                        }, [4, getAvatar(r, t, n, a)];
                    case 8:
                        return [4, i.apply(void 0, s.concat([(l.avatar = f.sent(), l), getGroupUuidsToAdd(n, u, e)]))];
                    case 9:
                        return [2, f.sent()];
                    case 10:
                        throw new Error("Can't get destination vault for unsupported type.")
                }
            })
        })
    },
    getGroupUuidsToAdd = function(t, e, r) {
        var n, a, u = __spread(r.mandatoryGroupUuids);
        if (!e) return u;
        try {
            for (var o = __values(r.adminGroupUuids), i = o.next(); !i.done; i = o.next()) {
                var s = i.value;
                s && !r.mandatoryGroupUuids.includes(s) && t.accessList.find(function(t) {
                    return "group" === t.accessorType && t.accessorUuid === e
                }) && u.push(s)
            }
        } catch (t) {
            n = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (a = o.return) && a.call(o)
            } finally {
                if (n) throw n.error
            }
        }
        return __spread(u)
    },
    mustGetPersonalVault = function(t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var e;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, vault_1.getPersonalVault(t)];
                    case 1:
                        if (!(e = r.sent())) throw new Error("Missing personal vault.");
                        return [2, e]
                }
            })
        })
    },
    getAvatar = function(t, e, r, n) {
        return __awaiter(void 0, void 0, void 0, function() {
            var a, u;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return r.avatar ? (a = n(r.avatar, t), [4, fetch(a, {
                            cache: "no-store"
                        }).then(function(t) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(e) {
                                    return [2, t.arrayBuffer()]
                                })
                            })
                        })]) : [2, ""];
                    case 1:
                        return u = o.sent(), [4, account_1.postImage(e, u)];
                    case 2:
                        return [2, o.sent()]
                }
            })
        })
    };