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
            function u(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(u, a)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, o, u = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return u.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    u.label = o[1];
                                    break
                                }
                                if (6 === o[0] && u.label < i[1]) {
                                    u.label = i[1], i = o;
                                    break
                                }
                                if (i && u.label < i[2]) {
                                    u.label = i[2], u.ops.push(o);
                                    break
                                }
                                i[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        o = t.call(e, u)
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
                }([o, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.RSAPublicKey = exports.importPubKey = exports.getImportedPubKey = void 0;
var util = __importStar(require("../util")),
    crypto_1 = require("../util/crypto"),
    error_handler_1 = require("../util/error_handler"),
    codeLocation = "model/rsa_public_key",
    errorHandler = error_handler_1.errorHandler(codeLocation),
    getImportedPubKey = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, Promise.resolve().then(function() {
                    return "jwk" in e ? e : exports.importPubKey(e)
                })]
            })
        })
    };
exports.getImportedPubKey = getImportedPubKey;
var importPubKey = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, new RSAPublicKey(e.kid, void 0, e).import()]
        })
    })
};
exports.importPubKey = importPubKey;
var RSAPublicKey = function() {
    function e(t, r, n) {
        var i = this;
        this.encrypt = function(t) {
            return Promise.resolve().then(function() {
                var r, n;
                if (t.length > 256) throw new Error("Plaintext is too large.");
                if (!i.jwk) throw new Error("Missing JWK encryption key.");
                if (!i.key) throw new Error("Missing encryption key.");
                if (i.jwk.alg === e.JWK_ALG_RSA_OAEP) n = e.JWK_ALG_RSA_OAEP, r = e.WC_ALG_RSA_OAEP;
                else {
                    if (i.jwk.alg !== e.JWK_ALG_RSA_OAEP_256) throw new Error("Unsupported encryption alg");
                    n = e.JWK_ALG_RSA_OAEP_256, r = e.WC_ALG_RSA_OAEP_256
                }
                return util.crypto.subtle.encrypt(r, i.key, t).then(function(t) {
                    var r = new Uint8Array(t),
                        o = util.bytesToBase64url(r);
                    return {
                        kid: i.uuid,
                        enc: n,
                        cty: e.CONTENT_TYPE,
                        data: o
                    }
                })
            }).catch(errorHandler("encrypt"))
        }, this.import = function(t) {
            return __awaiter(i, void 0, void 0, function() {
                var r, n, i, o, u;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            if (t && (this.jwk = t), !this.jwk) throw new Error("Missing JWK");
                            if (r = this.jwk.kid, n = !0, this.jwk.alg === e.JWK_ALG_RSA_OAEP_256) i = e.WC_ALG_RSA_OAEP_256;
                            else {
                                if (this.jwk.alg !== e.JWK_ALG_RSA_OAEP) throw new Error("Unexpected algorithm");
                                i = e.WC_ALG_RSA_OAEP
                            }
                            return this.jwk = crypto_1.correctJwkRsaPubKeyIfNeeded(this.jwk), o = crypto_1.supports.jwkImport ? this.jwk : util.json2ab(this.jwk), u = this, [4, util.crypto.subtle.importKey("jwk", o, i, n, ["encrypt"])];
                        case 1:
                            return u.key = a.sent(), this.uuid = r, [2, this]
                    }
                })
            })
        }, this.exportKey = function() {
            return __awaiter(i, void 0, void 0, function() {
                var e;
                return __generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            if (!this.key) throw new Error("Missing key");
                            return e = this, [4, crypto_1.exportUnvalidatedKey(this.uuid, this.key)];
                        case 1:
                            return e.jwk = t.sent(), [2, this.jwk]
                    }
                })
            })
        }, this.uuid = t, this.key = r, this.jwk = n
    }
    return e.CONTENT_TYPE = "b5+jwk+json", e.JWK_ALG_RSA_OAEP_256 = "RSA-OAEP-256", e.WC_ALG_RSA_OAEP_256 = {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: {
            name: "SHA-256"
        }
    }, e.JWK_ALG_RSA_OAEP = "RSA-OAEP", e.WC_ALG_RSA_OAEP = {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: {
            name: "SHA-1"
        }
    }, e.DEFAULT_ALG = e.WC_ALG_RSA_OAEP, e
}();
exports.RSAPublicKey = RSAPublicKey;