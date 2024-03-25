var __extends = this && this.__extends || function() {
        var t = function(e, r) {
            return (t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                })(e, r)
        };
        return function(e, r) {
            function i() {
                this.constructor = e
            }
            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(),
    __awaiter = this && this.__awaiter || function(t, e, r, i) {
        return new(r || (r = Promise))(function(n, o) {
            function a(t) {
                try {
                    s(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                try {
                    s(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(a, c)
            }
            s((i = i.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, i, n, o, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
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
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < n[1]) {
                                    a.label = n[1], n = o;
                                    break
                                }
                                if (n && a.label < n[2]) {
                                    a.label = n[2], a.ops.push(o);
                                    break
                                }
                                n[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = e.call(t, a)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        r = n = 0
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
import * as util from "../util";
import {
    JwkSymKey,
    supports
} from "../util/crypto";
import {
    extractTag,
    _decryptSjcl,
    _encryptSjcl,
    _generateSjcl,
    _importJwkSjcl,
    _importRawKeySjcl
} from "./aes_gcm";
import {
    deriveRawMasterKey
} from "./muk";
import {
    extractDerivationInfo,
    SymmetricKey
} from "./symmetric_key";
import {
    KID_MASTER_PASSWORD
} from "./symmetric_key_constants";
var CONTENT_TYPE = "b5+jwk+json";
export var createSymmetricKey = function(t) {
    return supports.nativeAesGcm ? new SymmetricKey(t) : new SymmetricKeyPf(t)
};
export var deriveMasterKey = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, (r = createSymmetricKey(KID_MASTER_PASSWORD)).derive(t, e)];
                case 1:
                    return i.sent(), [2, r]
            }
        })
    })
};
export var importMasterKey = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, (r = createSymmetricKey(KID_MASTER_PASSWORD)).importRawKey(t, e)];
                case 1:
                    return i.sent(), [2, r]
            }
        })
    })
};
var SymmetricKeyPf = function(t) {
    function e(e) {
        var r = t.call(this, e) || this;
        return r.generate = function(t, e) {
            return __awaiter(r, void 0, void 0, function() {
                var r, i, n;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (this.uuid) throw new Error("SymmetricKeyPf UUID already exists, will not regenerate");
                            return [4, _generateSjcl(t, e)];
                        case 1:
                            return r = o.sent(), i = r.imported, n = r.jwk, this.jwk = n, this.uuid = n.kid, this.cipher = i, [2, n]
                    }
                })
            })
        }, r.importRawKey = function(t, e) {
            return __awaiter(r, void 0, void 0, function() {
                var r, i, n;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, _importRawKeySjcl({
                                uuid: this.uuid,
                                enc: t,
                                rawKey: e
                            })];
                        case 1:
                            return r = o.sent(), i = r.imported, n = r.jwk, this.cipher = i, this.jwk = n, [2, this.jwk]
                    }
                })
            })
        }, r.derive = function(t, e) {
            return __awaiter(r, void 0, void 0, function() {
                var r, i, n, o;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return this.derivation = t, [4, deriveRawMasterKey(t, e)];
                        case 1:
                            return r = a.sent(), [4, _importRawKeySjcl(r)];
                        case 2:
                            return i = a.sent(), n = i.imported, o = i.jwk, this.cipher = n, this.jwk = o, this.uuid = o.kid, [2, this.jwk]
                    }
                })
            })
        }, r.encrypt = function(t) {
            return __awaiter(r, void 0, void 0, function() {
                var e, r, i, n, o, a;
                return __generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            if (!this.jwk || !this.jwk.alg) throw new Error("Missing JWK alg.");
                            if (!this.cipher) throw new Error("Missing cipher");
                            if (this.uuid === KID_MASTER_PASSWORD && !this.derivation) throw new Error("Missing derivation info for MUK");
                            return [4, _encryptSjcl({
                                cipher: this.cipher,
                                plaintext: t
                            })];
                        case 1:
                            return e = c.sent(), r = e.iv, i = e.ciphertext, n = e.tag, o = util.concatUint8Arrays([i, n]), a = {
                                kid: this.uuid,
                                enc: this.jwk.alg,
                                cty: CONTENT_TYPE,
                                iv: util.bytesToBase64url(r),
                                data: util.bytesToBase64url(o)
                            }, this.derivation && (a.alg = this.derivation.alg, a.p2c = this.derivation.iterations, a.p2s = this.derivation.salt), [2, a]
                    }
                })
            })
        }, r.decrypt = function(t) {
            return __awaiter(r, void 0, void 0, function() {
                var e, r, i;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (CONTENT_TYPE !== t.cty) throw new Error("Unexpected content type.");
                            if (t.kid !== this.uuid) throw new Error("Key IDs do not match.");
                            if (!t.iv) throw new Error("Missing initialization vector");
                            if (!this.cipher) throw new Error("Missing cipher");
                            return this.uuid !== KID_MASTER_PASSWORD || this.derivation || (this.derivation = extractDerivationInfo(t)), e = extractTag(util.base64urlToBytes(t.data)), r = e.ciphertext, i = e.tag, [4, _decryptSjcl({
                                cipher: this.cipher,
                                ciphertext: r,
                                tag: i,
                                iv: util.base64urlToBytes(t.iv)
                            })];
                        case 1:
                            return [2, n.sent()]
                    }
                })
            })
        }, r.decryptWithKey = function(t, e) {
            return __awaiter(r, void 0, void 0, function() {
                var r, i;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, t.decrypt(e)];
                        case 1:
                            return r = n.sent(), this.jwk = util.decodeBytes(r, JwkSymKey), this.uuid = this.jwk.kid, i = this, [4, _importJwkSjcl(this.jwk)];
                        case 2:
                            return i.cipher = n.sent(), [2, this]
                    }
                })
            })
        }, r
    }
    return __extends(e, t), e
}(SymmetricKey);
export {
    SymmetricKeyPf
};