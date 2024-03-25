"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, n) {
        void 0 === n && (n = t), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, n) {
        void 0 === n && (n = t), e[n] = r[t]
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
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, u) {
            function a(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    u(e)
                }
            }

            function i(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    u(e)
                }
            }

            function s(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(a, i)
            }
            s((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, u, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
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
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;
                        switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                            case 0:
                            case 1:
                                o = u;
                                break;
                            case 4:
                                return a.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = u[1], u = [0];
                                continue;
                            case 7:
                                u = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                    a.label = u[1];
                                    break
                                }
                                if (6 === u[0] && a.label < o[1]) {
                                    a.label = o[1], o = u;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(u);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        u = r.call(e, a)
                    } catch (e) {
                        u = [6, e], n = 0
                    } finally {
                        t = o = 0
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
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, o, u = t.call(e),
            a = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = u.next()).done;) a.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = u.return) && t.call(u)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.vaultsReportFromAPI = exports.vaultReportFromAPI = exports.userReportFromAPI = void 0;
var lodash_es_1 = require("lodash-es"),
    util = __importStar(require("../util")),
    make_promise_1 = require("../util/make_promise"),
    person_1 = require("./person"),
    vault_1 = require("./vault"),
    vault_item_1 = require("./vault_item"),
    codeLocation = "parser/report",
    makePromise = make_promise_1.makePromise(codeLocation),
    map = lodash_es_1.map,
    parseUserOverview = function(e, r, t) {
        return makePromise("parseUserOverview", function() {
            return r ? person_1.parsePerson(e, r.user, void 0, t).then(function(e) {
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
            return r ? vault_1.parseVault(e, r.vault).then(function(e) {
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
            return r ? vault_1.parseVaults(e, r.vaults).then(function(e) {
                var t = lodash_es_1.keyBy(e, "uuid"),
                    n = util.compact(map(r.vaultItemsByVault, function(e, r) {
                        var n = t[r];
                        if (n && e && e.length > 0) return vault_item_1.vaultItemsFromAPI(e, n)
                    }));
                return Promise.all(n)
            }).then(function(e) {
                return {
                    itemUsages: itemUsagesFromApi(lodash_es_1.flatten(e), r.itemUsages)
                }
            }) : Promise.resolve(void 0)
        })
    },
    parseVaultItemUsage = function(e, r) {
        return makePromise("parseVaultItemUsage", function() {
            return r ? vault_1.parseVault(e, r.vault).then(function(e) {
                return e ? vault_item_1.vaultItemsFromAPI(r.vaultItems, e) : Promise.reject(new Error("Server vault is empty"))
            }).then(function(e) {
                return {
                    itemUsages: itemUsagesFromApi(e, r.itemUsages),
                    usersByUserUuid: r.usersByUserUuid
                }
            }) : Promise.resolve(void 0)
        })
    },
    userReportFromAPI = function(e, r, t) {
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
exports.userReportFromAPI = userReportFromAPI;
var vaultReportFromAPI = function(e, r) {
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
exports.vaultReportFromAPI = vaultReportFromAPI;
var vaultsReportFromAPI = function(e, r) {
    return makePromise("vaultsReportFromAPI", function() {
        if (!r) return Promise.reject(new Error("Server JSON is empty"));
        var t = r.items.map(function(r) {
            return __awaiter(void 0, void 0, void 0, function() {
                var t;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, vault_1.parseVault(e, r.vault)];
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
    var t = lodash_es_1.keyBy(e, "uuid");
    return r.map(function(e) {
        var r = t[e.itemUuid];
        if (void 0 === r) throw new Error("itemUsagesFromApi: vaultItem not found");
        return __assign(__assign({}, e), {
            vaultItem: r
        })
    })
}
exports.vaultsReportFromAPI = vaultsReportFromAPI;