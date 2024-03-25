"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, n) {
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
        return new(t || (t = Promise))(function(i, a) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                var r;
                e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(o, u)
            }
            c((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, i, a, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
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
                    for (; o;) try {
                        if (t = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
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
                        a = r.call(e, o)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        t = i = 0
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
        var n, i, a = t.call(e),
            o = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = a.next()).done;) o.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = a.return) && t.call(a)
            } finally {
                if (i) throw i.error
            }
        }
        return o
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Keyset = exports.KeysetEncKeyData = void 0;
var Keyset, t = __importStar(require("io-ts")),
    util_1 = require("../../util"),
    codec_1 = require("../../util/codec"),
    crypto_1 = require("../../util/crypto"),
    ecdsa_1 = require("../ecdsa"),
    rsa_1 = require("../rsa"),
    encryption_1 = require("./encryption");
exports.KeysetEncKeyData = t.readonly(t.type({
        ePriKey: crypto_1.JwkRsaPriKey,
        sPriKey: crypto_1.JwkEcPriKey
    }), "KeysetEncKeyData"),
    function(e) {
        var r = this;
        e.fromClassicKeyset = function(e) {
            var r, t, n, i;
            if (!e.ekeyPair.priKey.jwk || !e.ekeyPair.pubKey.jwk) throw new Error("Missing encryption key pair");
            if (!(null === (t = null === (r = e.skeyPair) || void 0 === r ? void 0 : r.priKey) || void 0 === t ? void 0 : t.jwk) || !(null === (i = null === (n = e.skeyPair) || void 0 === n ? void 0 : n.pubKey) || void 0 === i ? void 0 : i.jwk)) throw new Error("Missing signing key pair");
            return {
                uuid: e.uuid,
                sn: e.sn,
                spec: 2,
                encryptionKeyPair: {
                    priKey: e.ekeyPair.priKey.jwk,
                    pubKey: e.ekeyPair.pubKey.jwk
                },
                signingKeyPair: {
                    priKey: e.skeyPair.priKey.jwk,
                    pubKey: e.skeyPair.pubKey.jwk
                }
            }
        }, e.generate = function() {
            return __awaiter(r, void 0, void 0, function() {
                var e, r, t, n;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return e = util_1.generateUUID(), [4, Promise.all([rsa_1.generateKeyPair(e), ecdsa_1.generateJwkPair(e)])];
                        case 1:
                            return r = __read.apply(void 0, [i.sent(), 2]), t = r[0], n = r[1], [2, {
                                uuid: e,
                                sn: 0,
                                spec: 2,
                                encryptionKeyPair: t,
                                signingKeyPair: n
                            }]
                    }
                })
            })
        }, e.encryptKeyset = function(e, t) {
            return __awaiter(r, void 0, void 0, function() {
                var r, n;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return r = {
                                ePriKey: t.encryptionKeyPair.priKey,
                                sPriKey: t.signingKeyPair.priKey
                            }, [4, encryption_1.encrypt(e, codec_1.json2ab(r))];
                        case 1:
                            return n = i.sent(), [2, {
                                uuid: t.uuid,
                                sn: t.sn,
                                spec: 2,
                                ePubKey: t.encryptionKeyPair.pubKey,
                                sPubKey: t.signingKeyPair.pubKey,
                                encKeyData: n
                            }]
                    }
                })
            })
        }, e.decryptKeyset = function(e, t) {
            return __awaiter(r, void 0, void 0, function() {
                var r, n, i, a, o, u, c, s, y, l;
                return __generator(this, function(p) {
                    switch (p.label) {
                        case 0:
                            return r = t.uuid, n = t.sn, i = t.spec, a = t.ePubKey, o = t.sPubKey, u = t.encKeyData, [4, encryption_1.decrypt(e, u)];
                        case 1:
                            return c = p.sent(), s = codec_1.decodeBytes(c.content, exports.KeysetEncKeyData), y = s.ePriKey, l = s.sPriKey, [2, {
                                uuid: r,
                                sn: n,
                                spec: i,
                                encryptionKeyPair: {
                                    priKey: y,
                                    pubKey: a
                                },
                                signingKeyPair: {
                                    priKey: l,
                                    pubKey: o
                                }
                            }]
                    }
                })
            })
        }
    }(Keyset = exports.Keyset || (exports.Keyset = {}));