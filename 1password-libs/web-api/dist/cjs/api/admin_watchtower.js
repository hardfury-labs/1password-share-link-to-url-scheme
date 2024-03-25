"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, r, o) {
        void 0 === o && (o = r), Object.defineProperty(t, o, {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    } : function(t, e, r, o) {
        void 0 === o && (o = r), t[o] = e[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        })
    } : function(t, e) {
        t.default = e
    }),
    __importStar = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && __createBinding(e, t, r);
        return __setModuleDefault(e, t), e
    },
    __awaiter = this && this.__awaiter || function(t, e, r, o) {
        return new(r || (r = Promise))(function(n, a) {
            function u(t) {
                try {
                    c(o.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function i(t) {
                try {
                    c(o.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(u, i)
            }
            c((o = o.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, o, n, a, u = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function i(a) {
            return function(i) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (r = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;
                        switch (o = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return u.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, o = a[1], a = [0];
                                continue;
                            case 7:
                                a = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = u.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    u.label = a[1];
                                    break
                                }
                                if (6 === a[0] && u.label < n[1]) {
                                    u.label = n[1], n = a;
                                    break
                                }
                                if (n && u.label < n[2]) {
                                    u.label = n[2], u.ops.push(a);
                                    break
                                }
                                n[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        a = e.call(t, u)
                    } catch (t) {
                        a = [6, t], o = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, i])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createWatchtowerPubkey = exports.getWatchtowerReport = exports.uploadWatchtowerReport = exports.getWatchtowerPubkey = exports.WatchtowerReports = exports.WatchtowerReportItem = exports.WatchtowerReportVaultData = void 0;
var t = __importStar(require("io-ts")),
    util = __importStar(require("../util")),
    crypto_1 = require("../util/crypto"),
    util_1 = require("./util"),
    WatchtowerPubkey = t.readonly(t.type({
        pubKey: crypto_1.JwkRsaPubKey
    }));
exports.WatchtowerReportVaultData = t.readonly(t.type({
    encryptedBy: t.string,
    vaultKeySn: t.number,
    encVaultKey: util.crypto.JweB,
    encVaultAttrs: util.crypto.JweB,
    combinedAcl: t.number
})), exports.WatchtowerReportItem = t.readonly(t.intersection([t.type({
    uuid: t.string,
    vaultUuid: t.string,
    updatedAt: t.string,
    isOutdated: t.boolean,
    encData: util.crypto.Jwe
}), t.partial({
    vaultData: exports.WatchtowerReportVaultData
})])), exports.WatchtowerReports = t.readonly(t.type({
    reports: t.array(exports.WatchtowerReportItem),
    nextStartUuid: t.string,
    accountVaultCount: t.number
}));
var getWatchtowerPubkey = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, t.get("/api/v1/report/watchtower/pubkey").then(util.unsafeDecodeAs(WatchtowerPubkey))]
        })
    })
};
exports.getWatchtowerPubkey = getWatchtowerPubkey;
var uploadWatchtowerReport = function(t, e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(o) {
            return [2, t.post("/api/v1/report/watchtower/vault/" + e, r).then(function() {})]
        })
    })
};
exports.uploadWatchtowerReport = uploadWatchtowerReport;
var getWatchtowerReport = function(t, e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o;
        return __generator(this, function(n) {
            return o = util_1.dataToParamString({
                vaultTypes: e,
                startUuid: r
            }), [2, t.get("/api/v1/report/watchtower" + o).then(util.unsafeDecodeAs(exports.WatchtowerReports))]
        })
    })
};
exports.getWatchtowerReport = getWatchtowerReport;
var createWatchtowerPubkey = function(t, e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(o) {
            return [2, t.post("/api/v1/report/watchtower/pubkey/" + e, {
                pubKey: r
            }).then(function() {})]
        })
    })
};
exports.createWatchtowerPubkey = createWatchtowerPubkey;