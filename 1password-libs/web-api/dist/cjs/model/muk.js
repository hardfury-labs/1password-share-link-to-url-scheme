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
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, s)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, a, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function s(a) {
            return function(s) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                        switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < i[1]) {
                                    o.label = i[1], i = a;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(a);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = t.call(e, o)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, s])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.deriveRawMasterKey = void 0;
var lodash_es_1 = require("lodash-es"),
    util = __importStar(require("../util")),
    kdf = __importStar(require("./kdf")),
    secret_key_1 = require("./secret_key"),
    symmetric_key_constants_1 = require("./symmetric_key_constants"),
    deriveRawMasterKey = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, a;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return r = t.secretKey, n = e.enc, [4, getDerivedBits(e, t)];
                    case 1:
                        return i = o.sent(), a = secret_key_1.SecretKey.combineWithBytes(i, r), [2, {
                            uuid: symmetric_key_constants_1.KID_MASTER_PASSWORD,
                            enc: n,
                            rawKey: a
                        }]
                }
            })
        })
    };
exports.deriveRawMasterKey = deriveRawMasterKey;
var getDerivedBits = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i, a, o, s, u, c, l, _, f;
        return __generator(this, function(d) {
            switch (d.label) {
                case 0:
                    return r = t.email, n = t.password, i = e.alg, a = e.iterations, o = e.salt, s = r.trim().toLowerCase(), u = util.normalizeUTF8(n), lodash_es_1.startsWith(i, "PBES2-") ? (c = util.prehash(u), [4, kdf.PBES2(i, util.ep(s, c), util.base64urlToBytes(o), a)]) : [3, 2];
                case 1:
                    return [2, d.sent()];
                case 2:
                    return lodash_es_1.startsWith(i, "PBES2g-") ? (l = util.str2ab(s), _ = util.str2ab(i), f = kdf.HKDF("sha256", util.base64urlToBytes(o), _, l, 32), [4, kdf.PBES2(i, u, f, a)]) : [3, 4];
                case 3:
                    return [2, d.sent()];
                case 4:
                    throw new Error("Unknown derivation alg")
            }
        })
    })
};