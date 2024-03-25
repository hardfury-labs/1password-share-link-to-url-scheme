var __awaiter = this && this.__awaiter || function(t, e, i, r) {
        return new(i || (i = Promise))(function(n, a) {
            function o(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function s(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function u(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
                    t(e)
                })).then(o, s)
            }
            u((r = r.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var i, r, n, a, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
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
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (i = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, a[1])).done) return n;
                        switch (r = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, r = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < n[1]) {
                                    o.label = n[1], n = a;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(a);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = e.call(t, o)
                    } catch (t) {
                        a = [6, t], r = 0
                    } finally {
                        i = n = 0
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
import * as util from "../util";
import {
    JwkSymKey
} from "../util/crypto";
import {
    extractTag,
    _decryptNative,
    _encryptNative,
    _generateNative,
    _importJwkNative,
    _importRawKeyNative
} from "./aes_gcm";
import {
    deriveRawMasterKey
} from "./muk";
import {
    isSymKeyAlg,
    KID_MASTER_PASSWORD
} from "./symmetric_key_constants";
export var CONTENT_TYPE = "b5+jwk+json";
export var extractDerivationInfo = function(t) {
    if (t.kid !== KID_MASTER_PASSWORD) throw new Error("Data is not encrypted with master key");
    if (!t.alg || !t.p2c || !t.p2s) throw new Error("Missing derivation info");
    return {
        alg: t.alg,
        enc: t.enc,
        iterations: t.p2c,
        salt: t.p2s
    }
};
var SymmetricKey = function() {
    return function(t) {
        var e = this;
        void 0 === t && (t = ""), this.generate = function(t, i) {
            return __awaiter(e, void 0, void 0, function() {
                var e, r, n;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            if (this.uuid) throw new Error("SymmetricKey UUID already exists, will not regenerate.");
                            return [4, _generateNative(t, i)];
                        case 1:
                            return e = a.sent(), r = e.imported, n = e.jwk, this.key = r, this.jwk = n, this.uuid = n.kid, [2, this.jwk]
                    }
                })
            })
        }, this.derive = function(t, i) {
            return __awaiter(e, void 0, void 0, function() {
                var e, r, n, a;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return this.derivation = t, [4, deriveRawMasterKey(t, i)];
                        case 1:
                            return e = o.sent(), [4, _importRawKeyNative(e)];
                        case 2:
                            return r = o.sent(), n = r.imported, a = r.jwk, this.key = n, this.jwk = a, this.uuid = a.kid, [2, this.jwk]
                    }
                })
            })
        }, this.importRawKey = function(t, i) {
            return __awaiter(e, void 0, void 0, function() {
                var e, r, n;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, _importRawKeyNative({
                                uuid: this.uuid,
                                enc: t,
                                rawKey: i
                            })];
                        case 1:
                            return e = a.sent(), r = e.imported, n = e.jwk, this.key = r, this.jwk = n, this.uuid = n.kid, [2, this.jwk]
                    }
                })
            })
        }, this.encrypt = function(t) {
            return __awaiter(e, void 0, void 0, function() {
                var e, i, r, n, a, o;
                return __generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            if (!this.key) throw new Error("Missing key");
                            if (!this.jwk || !this.jwk.alg) throw new Error("Missing JWK alg");
                            if (this.uuid === KID_MASTER_PASSWORD && !this.derivation) throw new Error("Missing derivation info for MUK");
                            return [4, _encryptNative({
                                key: this.key,
                                plaintext: t
                            })];
                        case 1:
                            return e = s.sent(), i = e.iv, r = e.ciphertext, n = e.tag, a = util.concatUint8Arrays([r, n]), o = {
                                kid: this.uuid,
                                enc: this.jwk.alg,
                                cty: CONTENT_TYPE,
                                iv: util.bytesToBase64url(i),
                                data: util.bytesToBase64url(a)
                            }, this.derivation && (o.alg = this.derivation.alg, o.p2c = this.derivation.iterations, o.p2s = this.derivation.salt), [2, o]
                    }
                })
            })
        }, this.decrypt = function(t) {
            return __awaiter(e, void 0, void 0, function() {
                var e, i, r;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (CONTENT_TYPE !== t.cty) throw new Error("Unexpected content type");
                            if (t.kid !== this.uuid) throw new Error("Key IDs do not match");
                            if (!t.iv) throw new Error("Missing initialization vector");
                            if (!this.key) throw new Error("Missing key");
                            return this.uuid !== KID_MASTER_PASSWORD || this.derivation || (this.derivation = extractDerivationInfo(t)), e = extractTag(util.base64urlToBytes(t.data)), i = e.ciphertext, r = e.tag, [4, _decryptNative({
                                key: this.key,
                                ciphertext: i,
                                tag: r,
                                iv: util.base64urlToBytes(t.iv)
                            })];
                        case 1:
                            return [2, n.sent()]
                    }
                })
            })
        }, this.decryptWithKeyset = function(t, i) {
            return __awaiter(e, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return isSymKeyAlg(i.enc) ? [2, this.decryptWithKey(t.symKey, i)] : [2, this.decryptWithKey(t.ekeyPair, i)]
                })
            })
        }, this.decryptWithKey = function(t, i) {
            return __awaiter(e, void 0, void 0, function() {
                var e, r;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, t.decrypt(i)];
                        case 1:
                            return e = n.sent(), this.jwk = util.decodeBytes(e, JwkSymKey), this.uuid = this.jwk.kid, r = this, [4, _importJwkNative(this.jwk)];
                        case 2:
                            return r.key = n.sent(), [2, this]
                    }
                })
            })
        }, this.encryptWithKey = function(t) {
            return __awaiter(e, void 0, void 0, function() {
                return __generator(this, function(e) {
                    if (!this.jwk) throw new Error("Missing JWK");
                    return [2, t.encrypt(util.json2ab(this.jwk))]
                })
            })
        }, this.uuid = t
    }
}();
export {
    SymmetricKey
};