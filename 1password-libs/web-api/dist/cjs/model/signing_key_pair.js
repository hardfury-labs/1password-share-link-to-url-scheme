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
                    s(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    s(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(u, a)
            }
            s((i = i.apply(e, r || [])).next())
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
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var i, n, o = t.call(e),
            u = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(i = o.next()).done;) u.push(i.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (t = o.return) && t.call(o)
            } finally {
                if (n) throw n.error
            }
        }
        return u
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SigningKeyPair = void 0;
var lodash_es_1 = require("lodash-es"),
    sjcl = __importStar(require("sjcl")),
    util = __importStar(require("../util")),
    error_handler_1 = require("../util/error_handler"),
    make_promise_1 = require("../util/make_promise"),
    ecdsa_private_key_1 = require("./ecdsa_private_key"),
    ecdsa_private_key_pf_1 = require("./ecdsa_private_key_pf"),
    ecdsa_public_key_1 = require("./ecdsa_public_key"),
    ecdsa_public_key_pf_1 = require("./ecdsa_public_key_pf"),
    codeLocation = "model/signing_key_pair",
    errorHandler = error_handler_1.errorHandler(codeLocation),
    makePromise = make_promise_1.makePromise(codeLocation),
    SigningKeyPair = function() {
        function e(e) {
            var r = this;
            this.generate = function(e) {
                return Promise.resolve().then(function() {
                    var t = util.crypto.supports.nativeEcdsa ? r._generateNative : r._generatePolyfill,
                        i = function() {
                            return t(e).then(getValidSigningKeyPair)
                        },
                        n = lodash_es_1.times(4, function() {
                            return i
                        }),
                        o = i();
                    return lodash_es_1.reduce(n, function(e, r) {
                        return e.catch(function() {
                            return r()
                        })
                    }, o).catch(function(e) {
                        throw new Error("Failed to generate valid signing keys after 5 attempts. <" + e.message + ">")
                    })
                })
            }, this._generateNative = function(e) {
                return __awaiter(r, void 0, void 0, function() {
                    var r, t, i, n, o, u;
                    return __generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return r = ["sign", "verify"], t = !0, i = ecdsa_public_key_1.ECDSAPublicKey.DEFAULT_KEY_ALG, this.uuid = e || util.generateUUID(), [4, util.crypto.subtle.generateKey(i, t, r)];
                            case 1:
                                return n = a.sent(), this.pubKey = new ecdsa_public_key_1.ECDSAPublicKey(this.uuid, n.publicKey), this.priKey = new ecdsa_private_key_1.ECDSAPrivateKey(this.uuid, n.privateKey), o = this.pubKey.exportKey(), u = this.priKey.exportKey(), [4, Promise.all([u, o])];
                            case 2:
                                return a.sent(), [2, this]
                        }
                    })
                })
            }, this._generatePolyfill = function(e) {
                return __awaiter(r, void 0, void 0, function() {
                    var r, t, i, n, o, u;
                    return __generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if ("ES256" !== (r = ecdsa_public_key_1.ECDSAPublicKey.DEFAULT_SIGN_ALG.jwkAlgorithmIdentifier)) throw new Error("Unsupported ECDSA polyfill: " + r);
                                return e = e || util.generateUUID(), this.uuid = e, t = sjcl.ecc.ecdsa.generateKeys(256, 1), i = new ecdsa_public_key_pf_1.ECDSAPublicKeyPF(e, t.pub), n = new ecdsa_private_key_pf_1.ECDSAPrivateKeyPF(e, i, t.sec), this.pubKey = i, this.priKey = n, o = this.pubKey.exportKey(), u = this.priKey.exportKey(), [4, Promise.all([u, o])];
                            case 1:
                                return a.sent(), [2, this]
                        }
                    })
                })
            }, this.sign = function(e) {
                return Promise.resolve().then(function() {
                    if (!r.priKey) throw new Error("Missing signing key");
                    return r.priKey.sign(e)
                }).catch(errorHandler("sign"))
            }, this.verify = function(e, t) {
                return Promise.resolve().then(function() {
                    if (!r.pubKey) throw new Error("Missing public key");
                    return r.pubKey.verify(e, t)
                }).catch(errorHandler("verify"))
            }, this.export = function() {
                return Promise.resolve().then(function() {
                    if (!r.pubKey) throw new Error("Missing public key");
                    if (!r.priKey) throw new Error("Missing private key");
                    return Promise.all([r.pubKey.exportKey(), r.priKey.exportKey()]).then(function() {
                        return r
                    })
                }).catch(errorHandler("export"))
            }, this.import = function(e) {
                return makePromise("import", function() {
                    return __awaiter(r, void 0, void 0, function() {
                        var r;
                        return __generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (e.pubKey.kid !== e.priKey.kid) throw new Error("invalid signing keypair");
                                    return this.uuid = e.pubKey.kid, this.pubKey && this.priKey || (r = createEmptyKeys(this.uuid), this.pubKey = r.pubKey, this.priKey = r.priKey), [4, Promise.all([this.pubKey.import(e.pubKey), this.priKey.import(e.priKey)])];
                                case 1:
                                    return t.sent(), [2, this]
                            }
                        })
                    })
                })
            }, this.encryptWithKey = function(e) {
                return __awaiter(r, void 0, void 0, function() {
                    var r;
                    return __generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (!this.priKey) throw new Error("Missing private key");
                                if (!this.pubKey || !this.pubKey.jwk) throw new Error("Missing public key");
                                return [4, this.priKey.encryptWithKey(e)];
                            case 1:
                                return r = t.sent(), [2, {
                                    pubKey: this.pubKey.jwk,
                                    encPriKey: r
                                }]
                        }
                    })
                })
            }, this.decryptWithKey = function(e, t) {
                return makePromise("decryptWithKey", function() {
                    return __awaiter(r, void 0, void 0, function() {
                        var r, i, n, o;
                        return __generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return r = parseStringsIfNecessary(t), i = r.pubKey, n = r.encPriKey, this.uuid = i.kid, [4, decryptJson(e, n)];
                                case 1:
                                    if ((o = u.sent()).kid !== i.kid) throw new Error("Public and private key IDs do not match.");
                                    return [2, this.import({
                                        pubKey: i,
                                        priKey: o
                                    })]
                            }
                        })
                    })
                })
            }, this.uuid = e || ""
        }
        return e.prototype.plaintextJSON = function() {
            if (!this.pubKey) throw new Error("Missing public key");
            if (!this.priKey) throw new Error("Missing private key");
            return {
                pubKey: this.pubKey.jwk,
                priKey: this.priKey.jwk
            }
        }, e
    }();
exports.SigningKeyPair = SigningKeyPair;
var parseStringsIfNecessary = function(e) {
        return {
            pubKey: parseJson(e.pubKey),
            encPriKey: parseJson(e.encPriKey)
        }
    },
    parseJson = function(e) {
        return "string" == typeof e ? JSON.parse(e) : e
    },
    decryptJson = function(e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, i, n, o;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return i = (t = JSON).parse, o = (n = util).ab2str, [4, e.decrypt(r)];
                    case 1:
                        return [2, i.apply(t, [o.apply(n, [u.sent()])])]
                }
            })
        })
    },
    createEmptyKeys = function(e) {
        if (util.crypto.supports.nativeEcdsa) return {
            pubKey: new ecdsa_public_key_1.ECDSAPublicKey(e),
            priKey: new ecdsa_private_key_1.ECDSAPrivateKey(e)
        };
        var r = new ecdsa_public_key_pf_1.ECDSAPublicKeyPF(e);
        return {
            pubKey: r,
            priKey: new ecdsa_private_key_pf_1.ECDSAPrivateKeyPF(e, r)
        }
    },
    testMessage = new Uint8Array([73, 39, 118, 101, 32, 103, 111, 116, 32, 97, 32, 103, 111, 108, 100, 101, 110, 32, 116, 105, 99, 107, 101, 116, 33]),
    getValidSigningKeyPair = function(e) {
        return Promise.resolve().then(function() {
            var r = e.plaintextJSON(),
                t = (new SigningKeyPair).import(r),
                i = t.then(function(e) {
                    return e.sign(testMessage)
                });
            return Promise.all([t, i]).then(function(e) {
                var r = __read(e, 2),
                    t = r[0],
                    i = r[1];
                return t.verify(testMessage, i)
            }).then(function(e) {
                if (!e) throw new Error("Signature failed verification")
            }).then(function() {
                return e
            })
        })
    };