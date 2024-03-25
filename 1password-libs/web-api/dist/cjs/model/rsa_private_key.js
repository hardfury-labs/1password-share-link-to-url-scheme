"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, i) {
        void 0 === i && (i = t), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, i) {
        void 0 === i && (i = t), e[i] = r[t]
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
    __awaiter = this && this.__awaiter || function(e, r, t, i) {
        return new(t || (t = Promise))(function(n, o) {
            function u(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(u, a)
            }
            c((i = i.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, i, n, o, u = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(o) {
            return function(a) {
                return function(o) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (t = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return u.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = u.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    u.label = o[1];
                                    break
                                }
                                if (6 === o[0] && u.label < n[1]) {
                                    u.label = n[1], n = o;
                                    break
                                }
                                if (n && u.label < n[2]) {
                                    u.label = n[2], u.ops.push(o);
                                    break
                                }
                                n[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        o = r.call(e, u)
                    } catch (e) {
                        o = [6, e], i = 0
                    } finally {
                        t = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.RSAPrivateKey = void 0;
var util = __importStar(require("../util")),
    crypto_1 = require("../util/crypto"),
    error_handler_1 = require("../util/error_handler"),
    rsa_public_key_1 = require("./rsa_public_key"),
    codeLocation = "model/rsa_private_key",
    errorHandler = error_handler_1.errorHandler(codeLocation),
    RSAPrivateKey = function() {
        return function(e, r, t) {
            var i = this;
            this.decrypt = function(e) {
                return Promise.resolve().then(function() {
                    var r, t = "string" == typeof e ? JSON.parse(e) : e;
                    if (rsa_public_key_1.RSAPublicKey.CONTENT_TYPE !== t.cty) throw new Error("Unexpected content type");
                    if (t.kid !== i.uuid) throw new Error("Content encrypted with wrong key");
                    if (!i.key) throw new Error("Missing decryption key");
                    if (t.enc === rsa_public_key_1.RSAPublicKey.JWK_ALG_RSA_OAEP_256) {
                        if (!crypto_1.supports.rsaOaep256) throw new util.errors.ClientError(111, "Browser does not support RSA-OAEP-256");
                        r = rsa_public_key_1.RSAPublicKey.WC_ALG_RSA_OAEP_256
                    } else {
                        if (t.enc !== rsa_public_key_1.RSAPublicKey.JWK_ALG_RSA_OAEP) throw new Error("Unexpected algorithm");
                        r = rsa_public_key_1.RSAPublicKey.WC_ALG_RSA_OAEP
                    }
                    var n = util.base64urlToBytes(t.data);
                    return util.crypto.subtle.decrypt(r, i.key, n).then(function(e) {
                        return new Uint8Array(e)
                    })
                }).catch(errorHandler("decrypt"))
            }, this.import = function(e) {
                return Promise.resolve().then(function() {
                    if (e && (i.jwk = e), !i.jwk) throw new Error("Missing JWK");
                    var r, t = i.jwk.kid;
                    if (i.jwk.alg === rsa_public_key_1.RSAPublicKey.JWK_ALG_RSA_OAEP_256) r = rsa_public_key_1.RSAPublicKey.WC_ALG_RSA_OAEP_256;
                    else {
                        if (i.jwk.alg !== rsa_public_key_1.RSAPublicKey.JWK_ALG_RSA_OAEP) throw new Error("RSAPrivateKey failed to import, unexpected alg");
                        r = rsa_public_key_1.RSAPublicKey.WC_ALG_RSA_OAEP
                    }
                    i.jwk = crypto_1.correctJwkRsaPriKeyIfNeeded(i.jwk);
                    var n = crypto_1.supports.jwkImport ? i.jwk : util.json2ab(i.jwk);
                    return util.crypto.subtle.importKey("jwk", n, r, !0, ["decrypt"]).then(function(e) {
                        return i.key = e, i.uuid = t, i
                    })
                }).catch(errorHandler("import"))
            }, this.exportKey = function() {
                return __awaiter(i, void 0, void 0, function() {
                    var e;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.key) throw new Error("Missing key");
                                return e = this, [4, crypto_1.exportUnvalidatedKey(this.uuid, this.key)];
                            case 1:
                                return e.jwk = r.sent(), [2, this.jwk]
                        }
                    })
                })
            }, this.encryptWithKey = function(e) {
                return __awaiter(i, void 0, void 0, function() {
                    return __generator(this, function(r) {
                        if (!this.jwk) throw new Error("Missing JWK");
                        return [2, e.encrypt(util.json2ab(this.jwk))]
                    })
                })
            }, this.decryptWithKey = function(e, r) {
                return __awaiter(i, void 0, void 0, function() {
                    var t, i;
                    return __generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, e.decrypt(r)];
                            case 1:
                                return t = n.sent(), i = JSON.parse(util.ab2str(t)), [2, this.import(i)]
                        }
                    })
                })
            }, this.uuid = e, this.key = r, this.jwk = t
        }
    }();
exports.RSAPrivateKey = RSAPrivateKey;