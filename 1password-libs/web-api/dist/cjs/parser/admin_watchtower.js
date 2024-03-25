"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(a, o) {
            function i(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, u)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, a, o, i = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(o) {
            return function(u) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
                        switch (n = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                            case 0:
                            case 1:
                                a = o;
                                break;
                            case 4:
                                return i.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                    i.label = o[1];
                                    break
                                }
                                if (6 === o[0] && i.label < a[1]) {
                                    i.label = a[1], a = o;
                                    break
                                }
                                if (a && i.label < a[2]) {
                                    i.label = a[2], i.ops.push(o);
                                    break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        o = t.call(e, i)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        r = a = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, u])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseAdminWatchtowerReports = void 0;
var keyset_1 = require("../action/keyset"),
    model = __importStar(require("../model")),
    crypto_v2_1 = require("../model/crypto_v2"),
    util_1 = require("../util"),
    make_promise_1 = require("../util/make_promise"),
    codeLocation = "parser/admin_watchtower",
    makePromise = make_promise_1.makePromise(codeLocation),
    parseAdminWatchtowerReports = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, makePromise("parseAdminWatchtowerReports", function() {
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(n) {
                                    return [2, Promise.all(t.map(function(t) {
                                        return __awaiter(void 0, void 0, void 0, function() {
                                            return __generator(this, function(n) {
                                                return [2, parseAndDecryptAdminWatchtowerReport(e, t, r).catch(function(e) {
                                                    console.log(e)
                                                })]
                                            })
                                        })
                                    }))]
                                })
                            })
                        })];
                    case 1:
                        return [2, n.sent().filter(function(e) {
                            return void 0 !== e
                        })]
                }
            })
        })
    };
exports.parseAdminWatchtowerReports = parseAdminWatchtowerReports;
var parseAndDecryptAdminWatchtowerReport = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, a, o, i, u, c, s, l;
            return __generator(this, function(d) {
                switch (d.label) {
                    case 0:
                        if (!r.data) throw new Error("Admin Watchtower decryption key does not exist");
                        return [4, crypto_v2_1.decrypt(r.data.ePriKey, t.encData)];
                    case 1:
                        return n = d.sent(), a = util_1.unsafeDecodeAs(model.WatchtowerDataStructureV1)(JSON.parse(util_1.ab2str(n.content))), t.vaultData ? [4, parseAndDecryptVaultAttrs(e, t.vaultData)] : [3, 3];
                    case 2:
                        return i = d.sent(), [3, 4];
                    case 3:
                        i = void 0, d.label = 4;
                    case 4:
                        return o = i, u = a.cw + a.rp + (null !== (c = a.vp) && void 0 !== c ? c : 0) + a.wp + (null !== (s = a.uw) && void 0 !== s ? s : 0) + a.i2fa + a.exp, [2, {
                            uuid: t.uuid,
                            vaultUuid: t.vaultUuid,
                            combinedAcl: null === (l = t.vaultData) || void 0 === l ? void 0 : l.combinedAcl,
                            updatedAt: t.updatedAt,
                            isOutdated: t.isOutdated,
                            reportData: a,
                            totalIssues: u,
                            vaultAttrs: o
                        }]
                }
            })
        })
    },
    parseAndDecryptVaultAttrs = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (!(r = keyset_1.findDecryptedKeyset(e, t.encVaultKey.kid))) throw new Error("No vault access keyset found");
                        return [4, model.createSymmetricKey().decryptWithKeyset(r, t.encVaultKey)];
                    case 1:
                        return [4, a.sent().decrypt(t.encVaultAttrs)];
                    case 2:
                        return n = a.sent(), [2, JSON.parse(util_1.ab2str(n))]
                }
            })
        })
    };