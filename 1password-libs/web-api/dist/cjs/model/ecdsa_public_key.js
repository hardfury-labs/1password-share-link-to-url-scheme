"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
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
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(u, a)
            }
            c((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, i, n, o, u = {
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
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
                        o = t.call(e, u)
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
                }([o, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ECDSAPublicKey = void 0;
var util = __importStar(require("../util")),
    crypto_1 = require("../util/crypto"),
    error_handler_1 = require("../util/error_handler"),
    make_promise_1 = require("../util/make_promise"),
    codeLocation = "model/ecdsa_public_key",
    errorHandler = error_handler_1.errorHandler(codeLocation),
    makePromise = make_promise_1.makePromise(codeLocation),
    ECDSAPublicKey = function() {
        function e(t, r, i) {
            var n = this;
            this.verify = function(t, r) {
                return Promise.resolve().then(function() {
                    if ("ES256" !== r.alg) throw new Error("Unknown jwk signature alg:" + r.alg);
                    var i = e.DEFAULT_SIGN_ALG;
                    if (r.kid !== n.uuid) throw new Error("Unexpected signature kid:" + r.kid + " != " + n.uuid);
                    if (!n.key) throw new Error("Missing public key");
                    return util.crypto.subtle.verify(i, n.key, util.base64urlToBytes(r.s), t).then(function(e) {
                        return !!e
                    })
                }).catch(errorHandler("verify"))
            }, this.import = function(t) {
                return makePromise("import", function() {
                    return __awaiter(n, void 0, void 0, function() {
                        var r, i, n, o, u;
                        return __generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (t && (this.jwk = t), !this.jwk) throw new Error("Missing JWK key");
                                    if (r = this.jwk.kid, this.jwk = crypto_1.correctJwkEcPubKey(this.jwk), "EC" !== this.jwk.kty || "P-256" !== this.jwk.crv) throw new Error("Unexpected EC key/crv: " + this.jwk.kty + ", " + this.jwk.crv + ".");
                                    return i = !0, n = e.KEY_ALG_ES256, o = ["verify"], [4, util.crypto.subtle.importKey("jwk", this.jwk, n, i, o).catch(function() {
                                        throw new util.errors.ClientError(112, "Invalid public key")
                                    })];
                                case 1:
                                    return u = a.sent(), this.uuid = r, this.key = u, [2, this]
                            }
                        })
                    })
                })
            }, this.exportKey = function() {
                return __awaiter(n, void 0, void 0, function() {
                    var e;
                    return __generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (!this.key) throw new Error("Missing key");
                                return e = this, [4, crypto_1.exportKey(this.uuid, this.key, crypto_1.JwkEcPubKey)];
                            case 1:
                                return e.jwk = t.sent(), [2, this.jwk]
                        }
                    })
                })
            }, this.uuid = t || "", this.key = r, this.jwk = i
        }
        return e.KEY_ALG_ES256 = {
            name: "ECDSA",
            namedCurve: "P-256"
        }, e.SIGN_ALG_ES256 = {
            name: "ECDSA",
            hash: {
                name: "SHA-256"
            },
            jwkAlgorithmIdentifier: "ES256"
        }, e.DEFAULT_KEY_ALG = e.KEY_ALG_ES256, e.DEFAULT_SIGN_ALG = e.SIGN_ALG_ES256, e
    }();
exports.ECDSAPublicKey = ECDSAPublicKey;