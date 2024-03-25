"use strict";
var __extends = this && this.__extends || function() {
        var e = function(t, r) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(t, r)
        };
        return function(t, r) {
            function i() {
                this.constructor = t
            }
            e(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(),
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
        void 0 === i && (i = r), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, i) {
        void 0 === i && (i = r), e[i] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, i) {
        return new(r || (r = Promise))(function(n, o) {
            function a(e) {
                try {
                    s(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                try {
                    s(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, c)
            }
            s((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
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
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], i = 0
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
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SymmetricKeyPf = exports.importMasterKey = exports.deriveMasterKey = exports.createSymmetricKey = void 0;
var util = __importStar(require("../util")),
    crypto_1 = require("../util/crypto"),
    aes_gcm_1 = require("./aes_gcm"),
    muk_1 = require("./muk"),
    symmetric_key_1 = require("./symmetric_key"),
    symmetric_key_constants_1 = require("./symmetric_key_constants"),
    CONTENT_TYPE = "b5+jwk+json",
    createSymmetricKey = function(e) {
        return crypto_1.supports.nativeAesGcm ? new symmetric_key_1.SymmetricKey(e) : new SymmetricKeyPf(e)
    };
exports.createSymmetricKey = createSymmetricKey;
var deriveMasterKey = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, (r = exports.createSymmetricKey(symmetric_key_constants_1.KID_MASTER_PASSWORD)).derive(e, t)];
                case 1:
                    return i.sent(), [2, r]
            }
        })
    })
};
exports.deriveMasterKey = deriveMasterKey;
var importMasterKey = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, (r = exports.createSymmetricKey(symmetric_key_constants_1.KID_MASTER_PASSWORD)).importRawKey(e, t)];
                case 1:
                    return i.sent(), [2, r]
            }
        })
    })
};
exports.importMasterKey = importMasterKey;
var SymmetricKeyPf = function(e) {
    function t(t) {
        var r = e.call(this, t) || this;
        return r.generate = function(e, t) {
            return __awaiter(r, void 0, void 0, function() {
                var r, i, n;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (this.uuid) throw new Error("SymmetricKeyPf UUID already exists, will not regenerate");
                            return [4, aes_gcm_1._generateSjcl(e, t)];
                        case 1:
                            return r = o.sent(), i = r.imported, n = r.jwk, this.jwk = n, this.uuid = n.kid, this.cipher = i, [2, n]
                    }
                })
            })
        }, r.importRawKey = function(e, t) {
            return __awaiter(r, void 0, void 0, function() {
                var r, i, n;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, aes_gcm_1._importRawKeySjcl({
                                uuid: this.uuid,
                                enc: e,
                                rawKey: t
                            })];
                        case 1:
                            return r = o.sent(), i = r.imported, n = r.jwk, this.cipher = i, this.jwk = n, [2, this.jwk]
                    }
                })
            })
        }, r.derive = function(e, t) {
            return __awaiter(r, void 0, void 0, function() {
                var r, i, n, o;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return this.derivation = e, [4, muk_1.deriveRawMasterKey(e, t)];
                        case 1:
                            return r = a.sent(), [4, aes_gcm_1._importRawKeySjcl(r)];
                        case 2:
                            return i = a.sent(), n = i.imported, o = i.jwk, this.cipher = n, this.jwk = o, this.uuid = o.kid, [2, this.jwk]
                    }
                })
            })
        }, r.encrypt = function(e) {
            return __awaiter(r, void 0, void 0, function() {
                var t, r, i, n, o, a;
                return __generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            if (!this.jwk || !this.jwk.alg) throw new Error("Missing JWK alg.");
                            if (!this.cipher) throw new Error("Missing cipher");
                            if (this.uuid === symmetric_key_constants_1.KID_MASTER_PASSWORD && !this.derivation) throw new Error("Missing derivation info for MUK");
                            return [4, aes_gcm_1._encryptSjcl({
                                cipher: this.cipher,
                                plaintext: e
                            })];
                        case 1:
                            return t = c.sent(), r = t.iv, i = t.ciphertext, n = t.tag, o = util.concatUint8Arrays([i, n]), a = {
                                kid: this.uuid,
                                enc: this.jwk.alg,
                                cty: CONTENT_TYPE,
                                iv: util.bytesToBase64url(r),
                                data: util.bytesToBase64url(o)
                            }, this.derivation && (a.alg = this.derivation.alg, a.p2c = this.derivation.iterations, a.p2s = this.derivation.salt), [2, a]
                    }
                })
            })
        }, r.decrypt = function(e) {
            return __awaiter(r, void 0, void 0, function() {
                var t, r, i;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (CONTENT_TYPE !== e.cty) throw new Error("Unexpected content type.");
                            if (e.kid !== this.uuid) throw new Error("Key IDs do not match.");
                            if (!e.iv) throw new Error("Missing initialization vector");
                            if (!this.cipher) throw new Error("Missing cipher");
                            return this.uuid !== symmetric_key_constants_1.KID_MASTER_PASSWORD || this.derivation || (this.derivation = symmetric_key_1.extractDerivationInfo(e)), t = aes_gcm_1.extractTag(util.base64urlToBytes(e.data)), r = t.ciphertext, i = t.tag, [4, aes_gcm_1._decryptSjcl({
                                cipher: this.cipher,
                                ciphertext: r,
                                tag: i,
                                iv: util.base64urlToBytes(e.iv)
                            })];
                        case 1:
                            return [2, n.sent()]
                    }
                })
            })
        }, r.decryptWithKey = function(e, t) {
            return __awaiter(r, void 0, void 0, function() {
                var r, i;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, e.decrypt(t)];
                        case 1:
                            return r = n.sent(), this.jwk = util.decodeBytes(r, crypto_1.JwkSymKey), this.uuid = this.jwk.kid, i = this, [4, aes_gcm_1._importJwkSjcl(this.jwk)];
                        case 2:
                            return i.cipher = n.sent(), [2, this]
                    }
                })
            })
        }, r
    }
    return __extends(t, e), t
}(symmetric_key_1.SymmetricKey);
exports.SymmetricKeyPf = SymmetricKeyPf;