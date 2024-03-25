var __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function a(t) {
                try {
                    u(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                try {
                    u(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(a, c)
            }
            u((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
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
                        o = e.call(t, a)
                    } catch (t) {
                        o = [6, t], n = 0
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
import * as util from "../../util";
import * as aesGcm from "../aes_gcm";
import * as rsa from "../rsa";
import {
    JWK_ALG_A256GCM
} from "../symmetric_key_constants";
export var encrypt = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            if (void 0 === (r = "jwk" in t ? t.jwk : "encryptionKeyPair" in t ? t.encryptionKeyPair.pubKey : t)) throw new TypeError("Missing JWK");
            if ("RSA" !== r.kty) throw new Error("Unexpected key type: " + r.kty);
            return [2, encryptAsymmetric(r, e)]
        })
    })
};
export var decrypt = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            if (void 0 === (r = "jwk" in t ? t.jwk : "encryptionKeyPair" in t ? t.encryptionKeyPair.priKey : t)) throw new TypeError("Missing JWK");
            if ("RSA" !== r.kty) throw new Error("Unexpected key type: " + r.kty);
            return [2, decryptAsymmetric(r, e)]
        })
    })
};
var encryptAsymmetric = function(t, e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, o, a, c, u, s;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return r = {
                            alg: t.alg,
                            enc: JWK_ALG_A256GCM,
                            kid: t.kid,
                            typ: "jose+json"
                        }, n = util.bytesToBase64url(util.json2ab(r)), [4, aesGcm.encryptContent({
                            enc: r.enc,
                            plaintext: e,
                            additionalData: util.str2ab(n)
                        })];
                    case 1:
                        return i = l.sent(), o = i.cek, a = i.ciphertext, c = i.tag, u = i.iv, [4, rsa.encrypt(t, o)];
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
    decryptAsymmetric = function(t, e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        if ((r = util.decodeBytes(util.base64urlToBytes(e.protected), util.crypto.JweHeader)).kid !== t.kid) throw new Error("Encrypted with incorrect key");
                        if (r.alg !== t.alg) throw new Error("Key algorithm does not match encrypted data");
                        return n = util.base64urlToBytes(e.encrypted_key), [4, rsa.decrypt(t, n)];
                    case 1:
                        return i = o.sent(), [4, aesGcm.decryptContent({
                            enc: r.enc,
                            cek: i,
                            iv: util.base64urlToBytes(e.iv),
                            ciphertext: util.base64urlToBytes(e.ciphertext),
                            additionalData: util.str2ab(e.protected),
                            tag: util.base64urlToBytes(e.tag)
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