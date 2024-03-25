var __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(a, o) {
            function i(t) {
                try {
                    c(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                try {
                    c(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(i, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
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
                        o = e.call(t, i)
                    } catch (t) {
                        o = [6, t], n = 0
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
import {
    findDecryptedKeyset
} from "../action/keyset";
import * as model from "../model";
import {
    decrypt
} from "../model/crypto_v2";
import {
    ab2str,
    unsafeDecodeAs
} from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
var codeLocation = "parser/admin_watchtower",
    makePromise = mp(codeLocation);
export var parseAdminWatchtowerReports = function(t, e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, makePromise("parseAdminWatchtowerReports", function() {
                        return __awaiter(void 0, void 0, void 0, function() {
                            return __generator(this, function(n) {
                                return [2, Promise.all(e.map(function(e) {
                                    return __awaiter(void 0, void 0, void 0, function() {
                                        return __generator(this, function(n) {
                                            return [2, parseAndDecryptAdminWatchtowerReport(t, e, r).catch(function(t) {
                                                console.log(t)
                                            })]
                                        })
                                    })
                                }))]
                            })
                        })
                    })];
                case 1:
                    return [2, n.sent().filter(function(t) {
                        return void 0 !== t
                    })]
            }
        })
    })
};
var parseAndDecryptAdminWatchtowerReport = function(t, e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, a, o, i, u, c, s, l;
            return __generator(this, function(d) {
                switch (d.label) {
                    case 0:
                        if (!r.data) throw new Error("Admin Watchtower decryption key does not exist");
                        return [4, decrypt(r.data.ePriKey, e.encData)];
                    case 1:
                        return n = d.sent(), a = unsafeDecodeAs(model.WatchtowerDataStructureV1)(JSON.parse(ab2str(n.content))), e.vaultData ? [4, parseAndDecryptVaultAttrs(t, e.vaultData)] : [3, 3];
                    case 2:
                        return i = d.sent(), [3, 4];
                    case 3:
                        i = void 0, d.label = 4;
                    case 4:
                        return o = i, u = a.cw + a.rp + (null !== (c = a.vp) && void 0 !== c ? c : 0) + a.wp + (null !== (s = a.uw) && void 0 !== s ? s : 0) + a.i2fa + a.exp, [2, {
                            uuid: e.uuid,
                            vaultUuid: e.vaultUuid,
                            combinedAcl: null === (l = e.vaultData) || void 0 === l ? void 0 : l.combinedAcl,
                            updatedAt: e.updatedAt,
                            isOutdated: e.isOutdated,
                            reportData: a,
                            totalIssues: u,
                            vaultAttrs: o
                        }]
                }
            })
        })
    },
    parseAndDecryptVaultAttrs = function(t, e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (!(r = findDecryptedKeyset(t, e.encVaultKey.kid))) throw new Error("No vault access keyset found");
                        return [4, model.createSymmetricKey().decryptWithKeyset(r, e.encVaultKey)];
                    case 1:
                        return [4, a.sent().decrypt(e.encVaultAttrs)];
                    case 2:
                        return n = a.sent(), [2, JSON.parse(ab2str(n))]
                }
            })
        })
    };