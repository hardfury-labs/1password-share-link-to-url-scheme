var __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(o, a) {
            function i(t) {
                try {
                    c(n.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function u(t) {
                try {
                    c(n.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function c(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(i, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, o, a, i = {
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
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
                        a = e.call(t, i)
                    } catch (t) {
                        a = [6, t], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, u])
            }
        }
    };
import * as t from "io-ts";
import * as util from "../util";
import {
    JwkRsaPubKey
} from "../util/crypto";
import {
    dataToParamString
} from "./util";
var WatchtowerPubkey = t.readonly(t.type({
    pubKey: JwkRsaPubKey
}));
export var WatchtowerReportVaultData = t.readonly(t.type({
    encryptedBy: t.string,
    vaultKeySn: t.number,
    encVaultKey: util.crypto.JweB,
    encVaultAttrs: util.crypto.JweB,
    combinedAcl: t.number
}));
export var WatchtowerReportItem = t.readonly(t.intersection([t.type({
    uuid: t.string,
    vaultUuid: t.string,
    updatedAt: t.string,
    isOutdated: t.boolean,
    encData: util.crypto.Jwe
}), t.partial({
    vaultData: WatchtowerReportVaultData
})]));
export var WatchtowerReports = t.readonly(t.type({
    reports: t.array(WatchtowerReportItem),
    nextStartUuid: t.string,
    accountVaultCount: t.number
}));
export var getWatchtowerPubkey = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, t.get("/api/v1/report/watchtower/pubkey").then(util.unsafeDecodeAs(WatchtowerPubkey))]
        })
    })
};
export var uploadWatchtowerReport = function(t, e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, t.post("/api/v1/report/watchtower/vault/" + e, r).then(function() {})]
        })
    })
};
export var getWatchtowerReport = function(t, e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n;
        return __generator(this, function(o) {
            return n = dataToParamString({
                vaultTypes: e,
                startUuid: r
            }), [2, t.get("/api/v1/report/watchtower" + n).then(util.unsafeDecodeAs(WatchtowerReports))]
        })
    })
};
export var createWatchtowerPubkey = function(t, e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, t.post("/api/v1/report/watchtower/pubkey/" + e, {
                pubKey: r
            }).then(function() {})]
        })
    })
};