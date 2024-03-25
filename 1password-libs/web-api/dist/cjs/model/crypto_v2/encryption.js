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
        return new(r || (r = Promise))(function(i, o) {
            function a(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, c)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function c(o) {
            return function(c) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, c])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.decrypt = exports.encrypt = void 0;
var util = __importStar(require("../../util")),
    aesGcm = __importStar(require("../aes_gcm")),
    rsa = __importStar(require("../rsa")),
    symmetric_key_constants_1 = require("../symmetric_key_constants"),
    encrypt = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(n) {
                if (void 0 === (r = "jwk" in e ? e.jwk : "encryptionKeyPair" in e ? e.encryptionKeyPair.pubKey : e)) throw new TypeError("Missing JWK");
                if ("RSA" !== r.kty) throw new Error("Unexpected key type: " + r.kty);
                return [2, encryptAsymmetric(r, t)]
            })
        })
    };
exports.encrypt = encrypt;
var decrypt = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            if (void 0 === (r = "jwk" in e ? e.jwk : "encryptionKeyPair" in e ? e.encryptionKeyPair.priKey : e)) throw new TypeError("Missing JWK");
            if ("RSA" !== r.kty) throw new Error("Unexpected key type: " + r.kty);
            return [2, decryptAsymmetric(r, t)]
        })
    })
};
exports.decrypt = decrypt;
var encryptAsymmetric = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, o, a, c, u, s;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return r = {
                            alg: e.alg,
                            enc: symmetric_key_constants_1.JWK_ALG_A256GCM,
                            kid: e.kid,
                            typ: "jose+json"
                        }, n = util.bytesToBase64url(util.json2ab(r)), [4, aesGcm.encryptContent({
                            enc: r.enc,
                            plaintext: t,
                            additionalData: util.str2ab(n)
                        })];
                    case 1:
                        return i = l.sent(), o = i.cek, a = i.ciphertext, c = i.tag, u = i.iv, [4, rsa.encrypt(e, o)];
                    case 2:
                        return s = l.sent(), [2, {
                            protected: n,
                            encrypted_key: util.bytesToBase64url(s),
                            iv: util.bytesToBase64url(u),
                            ciphertext: util.bytesToBase64url(a),
                            tag: util.bytesToBase64url(c)
                        }]
                }
            })
        })
    },
    decryptAsymmetric = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        if ((r = util.decodeBytes(util.base64urlToBytes(t.protected), util.crypto.JweHeader)).kid !== e.kid) throw new Error("Encrypted with incorrect key");
                        if (r.alg !== e.alg) throw new Error("Key algorithm does not match encrypted data");
                        return n = util.base64urlToBytes(t.encrypted_key), [4, rsa.decrypt(e, n)];
                    case 1:
                        return i = o.sent(), [4, aesGcm.decryptContent({
                            enc: r.enc,
                            cek: i,
                            iv: util.base64urlToBytes(t.iv),
                            ciphertext: util.base64urlToBytes(t.ciphertext),
                            additionalData: util.str2ab(t.protected),
                            tag: util.base64urlToBytes(t.tag)
                        })];
                    case 2:
                        return [2, {
                            content: o.sent(),
                            header: r
                        }]
                }
            })
        })
    };