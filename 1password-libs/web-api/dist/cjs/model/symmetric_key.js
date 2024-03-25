"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, i, r) {
        void 0 === r && (r = i), Object.defineProperty(t, r, {
            enumerable: !0,
            get: function() {
                return e[i]
            }
        })
    } : function(t, e, i, r) {
        void 0 === r && (r = i), t[r] = e[i]
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
            for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && __createBinding(e, t, i);
        return __setModuleDefault(e, t), e
    },
    __awaiter = this && this.__awaiter || function(t, e, i, r) {
        return new(i || (i = Promise))(function(n, o) {
            function a(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
                    t(e)
                })).then(a, s)
            }
            u((r = r.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var i, r, n, o, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, o[1])).done) return n;
                        switch (r = 0, n && (o = [2 & o[0], n.value]), o[0]) {
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
                                a.label++, r = o[1], o = [0];
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
                        o = [6, t], r = 0
                    } finally {
                        i = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SymmetricKey = exports.extractDerivationInfo = exports.CONTENT_TYPE = void 0;
var util = __importStar(require("../util")),
    crypto_1 = require("../util/crypto"),
    aes_gcm_1 = require("./aes_gcm"),
    muk_1 = require("./muk"),
    symmetric_key_constants_1 = require("./symmetric_key_constants");
exports.CONTENT_TYPE = "b5+jwk+json";
var extractDerivationInfo = function(t) {
    if (t.kid !== symmetric_key_constants_1.KID_MASTER_PASSWORD) throw new Error("Data is not encrypted with master key");
    if (!t.alg || !t.p2c || !t.p2s) throw new Error("Missing derivation info");
    return {
        alg: t.alg,
        enc: t.enc,
        iterations: t.p2c,
        salt: t.p2s
    }
};
exports.extractDerivationInfo = extractDerivationInfo;
var SymmetricKey = function() {
    return function(t) {
        var e = this;
        void 0 === t && (t = ""), this.generate = function(t, i) {
            return __awaiter(e, void 0, void 0, function() {
                var e, r, n;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (this.uuid) throw new Error("SymmetricKey UUID already exists, will not regenerate.");
                            return [4, aes_gcm_1._generateNative(t, i)];
                        case 1:
                            return e = o.sent(), r = e.imported, n = e.jwk, this.key = r, this.jwk = n, this.uuid = n.kid, [2, this.jwk]
                    }
                })
            })
        }, this.derive = function(t, i) {
            return __awaiter(e, void 0, void 0, function() {
                var e, r, n, o;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return this.derivation = t, [4, muk_1.deriveRawMasterKey(t, i)];
                        case 1:
                            return e = a.sent(), [4, aes_gcm_1._importRawKeyNative(e)];
                        case 2:
                            return r = a.sent(), n = r.imported, o = r.jwk, this.key = n, this.jwk = o, this.uuid = o.kid, [2, this.jwk]
                    }
                })
            })
        }, this.importRawKey = function(t, i) {
            return __awaiter(e, void 0, void 0, function() {
                var e, r, n;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, aes_gcm_1._importRawKeyNative({
                                uuid: this.uuid,
                                enc: t,
                                rawKey: i
                            })];
                        case 1:
                            return e = o.sent(), r = e.imported, n = e.jwk, this.key = r, this.jwk = n, this.uuid = n.kid, [2, this.jwk]
                    }
                })
            })
        }, this.encrypt = function(t) {
            return __awaiter(e, void 0, void 0, function() {
                var e, i, r, n, o, a;
                return __generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            if (!this.key) throw new Error("Missing key");
                            if (!this.jwk || !this.jwk.alg) throw new Error("Missing JWK alg");
                            if (this.uuid === symmetric_key_constants_1.KID_MASTER_PASSWORD && !this.derivation) throw new Error("Missing derivation info for MUK");
                            return [4, aes_gcm_1._encryptNative({
                                key: this.key,
                                plaintext: t
                            })];
                        case 1:
                            return e = s.sent(), i = e.iv, r = e.ciphertext, n = e.tag, o = util.concatUint8Arrays([r, n]), a = {
                                kid: this.uuid,
                                enc: this.jwk.alg,
                                cty: exports.CONTENT_TYPE,
                                iv: util.bytesToBase64url(i),
                                data: util.bytesToBase64url(o)
                            }, this.derivation && (a.alg = this.derivation.alg, a.p2c = this.derivation.iterations, a.p2s = this.derivation.salt), [2, a]
                    }
                })
            })
        }, this.decrypt = function(t) {
            return __awaiter(e, void 0, void 0, function() {
                var e, i, r;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (exports.CONTENT_TYPE !== t.cty) throw new Error("Unexpected content type");
                            if (t.kid !== this.uuid) throw new Error("Key IDs do not match");
                            if (!t.iv) throw new Error("Missing initialization vector");
                            if (!this.key) throw new Error("Missing key");
                            return this.uuid !== symmetric_key_constants_1.KID_MASTER_PASSWORD || this.derivation || (this.derivation = exports.extractDerivationInfo(t)), e = aes_gcm_1.extractTag(util.base64urlToBytes(t.data)), i = e.ciphertext, r = e.tag, [4, aes_gcm_1._decryptNative({
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
                    return symmetric_key_constants_1.isSymKeyAlg(i.enc) ? [2, this.decryptWithKey(t.symKey, i)] : [2, this.decryptWithKey(t.ekeyPair, i)]
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
                            return e = n.sent(), this.jwk = util.decodeBytes(e, crypto_1.JwkSymKey), this.uuid = this.jwk.kid, r = this, [4, aes_gcm_1._importJwkNative(this.jwk)];
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
exports.SymmetricKey = SymmetricKey;