var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, a) {
            function i(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(i, u)
            }
            s((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function u(a) {
            return function(u) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (t = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1], o = a;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(a);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = r.call(e, i)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, u])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, o, a = t.call(e),
            i = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = a.next()).done;) i.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = a.return) && t.call(a)
            } finally {
                if (o) throw o.error
            }
        }
        return i
    };
import {
    flatten,
    keyBy,
    map as _map
} from "lodash-es";
import * as util from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    parsePerson
} from "./person";
import {
    parseVault,
    parseVaults
} from "./vault";
import {
    vaultItemsFromAPI
} from "./vault_item";
var codeLocation = "parser/report",
    makePromise = mp(codeLocation),
    map = _map,
    parseUserOverview = function(e, r, t) {
        return makePromise("parseUserOverview", function() {
            return r ? parsePerson(e, r.user, void 0, t).then(function(e) {
                return {
                    user: e,
                    groupCount: r.groupCount,
                    vaultCount: r.vaultCount,
                    itemCount: r.itemCount
                }
            }) : Promise.resolve(void 0)
        })
    },
    parseVaultOverview = function(e, r) {
        return makePromise("parseVaultOverview", function() {
            return r ? parseVault(e, r.vault).then(function(e) {
                return {
                    vault: e,
                    userCount: r.userCount,
                    groupCount: r.groupCount,
                    currentUserUuids: r.currentUserUuids
                }
            }) : Promise.resolve(void 0)
        })
    },
    parseUserItemUsage = function(e, r) {
        return makePromise("parseUserItemUsage", function() {
            return r ? parseVaults(e, r.vaults).then(function(e) {
                var t = keyBy(e, "uuid"),
                    n = util.compact(map(r.vaultItemsByVault, function(e, r) {
                        var n = t[r];
                        if (n && e && e.length > 0) return vaultItemsFromAPI(e, n)
                    }));
                return Promise.all(n)
            }).then(function(e) {
                return {
                    itemUsages: itemUsagesFromApi(flatten(e), r.itemUsages)
                }
            }) : Promise.resolve(void 0)
        })
    },
    parseVaultItemUsage = function(e, r) {
        return makePromise("parseVaultItemUsage", function() {
            return r ? parseVault(e, r.vault).then(function(e) {
                return e ? vaultItemsFromAPI(r.vaultItems, e) : Promise.reject(new Error("Server vault is empty"))
            }).then(function(e) {
                return {
                    itemUsages: itemUsagesFromApi(e, r.itemUsages),
                    usersByUserUuid: r.usersByUserUuid
                }
            }) : Promise.resolve(void 0)
        })
    };
export var userReportFromAPI = function(e, r, t) {
    return makePromise("userReportFromAPI", function() {
        if (!r) return Promise.reject(new Error("Server JSON is empty"));
        var n = r.overview,
            o = r.itemUsage;
        return Promise.all([parseUserOverview(e, n, t), parseUserItemUsage(e, o)]).then(function(e) {
            var r = __read(e, 2),
                t = r[0],
                n = r[1];
            return Promise.resolve({
                overview: t,
                itemUsage: n
            })
        })
    })
};
export var vaultReportFromAPI = function(e, r) {
    return makePromise("vaultReportFromAPI", function() {
        if (!r) return Promise.reject(new Error("Server JSON is empty"));
        var t = r.overview,
            n = r.itemUsage;
        return Promise.all([parseVaultOverview(e, t), parseVaultItemUsage(e, n)]).then(function(e) {
            var r = __read(e, 2),
                t = r[0],
                n = r[1];
            return Promise.resolve({
                overview: t,
                itemUsage: n
            })
        })
    })
};
export var vaultsReportFromAPI = function(e, r) {
    return makePromise("vaultsReportFromAPI", function() {
        if (!r) return Promise.reject(new Error("Server JSON is empty"));
        var t = r.items.map(function(r) {
            return __awaiter(void 0, void 0, void 0, function() {
                var t;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, parseVault(e, r.vault)];
                        case 1:
                            return t = n.sent(), [2, __assign(__assign({}, r), {
                                vault: t
                            })]
                    }
                })
            })
        });
        return Promise.all(t)
    })
};

function itemUsagesFromApi(e, r) {
    var t = keyBy(e, "uuid");
    return r.map(function(e) {
        var r = t[e.itemUuid];
        if (void 0 === r) throw new Error("itemUsagesFromApi: vaultItem not found");
        return __assign(__assign({}, e), {
            vaultItem: r
        })
    })
}