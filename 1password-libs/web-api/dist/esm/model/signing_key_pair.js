var __awaiter = this && this.__awaiter || function(e, r, t, i) {
        return new(t || (t = Promise))(function(n, o) {
            function u(e) {
                try {
                    a(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    a(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(u, s)
            }
            a((i = i.apply(e, r || [])).next())
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
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
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
                }([o, s])
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
import {
    reduce,
    times
} from "lodash-es";
import * as sjcl from "sjcl";
import * as util from "../util";
import {
    errorHandler as eh
} from "../util/error_handler";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    ECDSAPrivateKey
} from "./ecdsa_private_key";
import {
    ECDSAPrivateKeyPF
} from "./ecdsa_private_key_pf";
import {
    ECDSAPublicKey
} from "./ecdsa_public_key";
import {
    ECDSAPublicKeyPF
} from "./ecdsa_public_key_pf";
var codeLocation = "model/signing_key_pair",
    errorHandler = eh(codeLocation),
    makePromise = mp(codeLocation),
    SigningKeyPair = function() {
        function e(e) {
            var r = this;
            this.generate = function(e) {
                return Promise.resolve().then(function() {
                    var t = util.crypto.supports.nativeEcdsa ? r._generateNative : r._generatePolyfill,
                        i = function() {
                            return t(e).then(getValidSigningKeyPair)
                        },
                        n = times(4, function() {
                            return i
                        }),
                        o = i();
                    return reduce(n, function(e, r) {
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
                    return __generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return r = ["sign", "verify"], t = !0, i = ECDSAPublicKey.DEFAULT_KEY_ALG, this.uuid = e || util.generateUUID(), [4, util.crypto.subtle.generateKey(i, t, r)];
                            case 1:
                                return n = s.sent(), this.pubKey = new ECDSAPublicKey(this.uuid, n.publicKey), this.priKey = new ECDSAPrivateKey(this.uuid, n.privateKey), o = this.pubKey.exportKey(), u = this.priKey.exportKey(), [4, Promise.all([u, o])];
                            case 2:
                                return s.sent(), [2, this]
                        }
                    })
                })
            }, this._generatePolyfill = function(e) {
                return __awaiter(r, void 0, void 0, function() {
                    var r, t, i, n, o, u;
                    return __generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                if ("ES256" !== (r = ECDSAPublicKey.DEFAULT_SIGN_ALG.jwkAlgorithmIdentifier)) throw new Error("Unsupported ECDSA polyfill: " + r);
                                return e = e || util.generateUUID(), this.uuid = e, t = sjcl.ecc.ecdsa.generateKeys(256, 1), i = new ECDSAPublicKeyPF(e, t.pub), n = new ECDSAPrivateKeyPF(e, i, t.sec), this.pubKey = i, this.priKey = n, o = this.pubKey.exportKey(), u = this.priKey.exportKey(), [4, Promise.all([u, o])];
                            case 1:
                                return s.sent(), [2, this]
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
export {
    SigningKeyPair
};
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
            pubKey: new ECDSAPublicKey(e),
            priKey: new ECDSAPrivateKey(e)
        };
        var r = new ECDSAPublicKeyPF(e);
        return {
            pubKey: r,
            priKey: new ECDSAPrivateKeyPF(e, r)
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