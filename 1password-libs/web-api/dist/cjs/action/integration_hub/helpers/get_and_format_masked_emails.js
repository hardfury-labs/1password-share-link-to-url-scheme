"use strict";
var __awaiter = this && this.__awaiter || function(e, t, r, a) {
        return new(r || (r = Promise))(function(n, i) {
            function u(e) {
                try {
                    l(a.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function o(e) {
                try {
                    l(a.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function l(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(u, o)
            }
            l((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, a, n, i, u = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function o(i) {
            return function(o) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (r = 1, a && (n = 2 & i[0] ? a.return : i[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, i[1])).done) return n;
                        switch (a = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return u.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, a = i[1], i = [0];
                                continue;
                            case 7:
                                i = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = u.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    u.label = i[1];
                                    break
                                }
                                if (6 === i[0] && u.label < n[1]) {
                                    u.label = n[1], n = i;
                                    break
                                }
                                if (n && u.label < n[2]) {
                                    u.label = n[2], u.ops.push(i);
                                    break
                                }
                                n[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        i = t.call(e, u)
                    } catch (e) {
                        i = [6, e], a = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, o])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAndFormatMaskedEmails = void 0;
var api_1 = require("../../../api"),
    vault_1 = require("../../vault"),
    vault_item_1 = require("../../vault_item"),
    summary_1 = require("./summary"),
    getAndFormatMaskedEmails = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, a, n, i;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return (null === (i = null === (n = e.account) || void 0 === n ? void 0 : n.hasFeature) || void 0 === i ? void 0 : i.integrationHubEmailAlias) ? [4, vault_1.getSystemVault(e)] : [2, []];
                    case 1:
                        return (t = u.sent()) ? [4, vault_item_1.getVaultItems(e, t)] : [2, []];
                    case 2:
                        return r = u.sent(), a = r.filter(function(e) {
                            return "fastmail" === e.overview.integration
                        }), [4, Promise.all(a.map(function(t) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var r;
                                return __generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return r = {
                                                type: "S",
                                                uuid: t.uuid,
                                                name: "Fastmail",
                                                createdAt: "",
                                                state: "",
                                                creatorUuid: "",
                                                serviceAccountType: api_1.ServiceAccountType.MaskedEmails,
                                                email: "",
                                                avatar: ""
                                            }, [4, summary_1.buildSummaryObject({
                                                type: api_1.ServiceAccountType.MaskedEmails,
                                                vaultItem: t,
                                                CTX: e
                                            })];
                                        case 1:
                                            return [2, (r.summary = a.sent(), r)]
                                    }
                                })
                            })
                        }))];
                    case 3:
                        return [2, u.sent()]
                }
            })
        })
    };
exports.getAndFormatMaskedEmails = getAndFormatMaskedEmails;