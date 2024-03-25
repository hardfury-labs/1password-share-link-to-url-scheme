"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    },
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
                    u(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    u(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, s)
            }
            u((i = i.apply(e, t || [])).next())
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
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
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
                }([o, s])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i, n, o = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(i = o.next()).done;) a.push(i.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (r = o.return) && r.call(o)
            } finally {
                if (n) throw n.error
            }
        }
        return a
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFingerprint = exports._verifySjcl = exports._signSjcl = exports._importPubKeySjcl = exports._importPriKeySjcl = exports._verifyNative = exports._signNative = exports._importPubKeyNative = exports._importPriKeyNative = exports.verify = exports.sign = exports.importPubKey = exports.importPriKey = exports.generateKeyPair = exports.generateJwkPair = exports.DEFAULT_SIGN_ALG = exports.DEFAULT_KEY_ALG = exports.WC_SIGN_ALG_ES256 = exports.WC_IMPORT_ALG_ES256 = exports.JWK_CRV_ES256 = exports.JWK_ALG_ES256 = void 0;
var lodash_es_1 = require("lodash-es"),
    sjcl = __importStar(require("sjcl")),
    util = __importStar(require("../util"));
exports.JWK_ALG_ES256 = "ES256", exports.JWK_CRV_ES256 = "P-256", exports.WC_IMPORT_ALG_ES256 = {
    name: "ECDSA",
    namedCurve: "P-256"
}, exports.WC_SIGN_ALG_ES256 = {
    name: "ECDSA",
    hash: {
        name: "SHA-256"
    }
};
var getImportParams = function(e) {
        if ("EC" === e.kty || e.crv === exports.JWK_CRV_ES256) return exports.WC_IMPORT_ALG_ES256;
        throw new Error("Unexpected EC kty/crv: " + e.kty + ", " + e.crv + ".")
    },
    getSignAlg = function(e) {
        switch (e) {
            case exports.JWK_ALG_ES256:
                return exports.WC_SIGN_ALG_ES256;
            default:
                throw new Error("Unexpected algorithm identifier")
        }
    };
exports.DEFAULT_KEY_ALG = exports.WC_IMPORT_ALG_ES256, exports.DEFAULT_SIGN_ALG = exports.WC_SIGN_ALG_ES256;
var generateJwkPair = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, i;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, exports.generateKeyPair(e)];
                case 1:
                    return t = n.sent(), r = t.priKey, i = t.pubKey, [2, {
                        priKey: r.jwk,
                        pubKey: i.jwk
                    }]
            }
        })
    })
};
exports.generateJwkPair = generateJwkPair;
var generateKeyPair = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, i, n, o;
        return __generator(this, function(a) {
            return t = util.crypto.supports.nativeEcdsa ? _generateNative : _generateSjcl, r = function() {
                return t(e).then(getValidSigningKeyPair)
            }, i = 5, n = lodash_es_1.times(i - 1, function() {
                return r
            }), o = r(), [2, lodash_es_1.reduce(n, function(e, t) {
                return e.catch(function() {
                    return t()
                })
            }, o).catch(function(e) {
                throw new Error("Failed to generate valid signing keys after " + i + " attempts. <" + e.message + ">")
            })]
        })
    })
};
exports.generateKeyPair = generateKeyPair;
var importPriKey = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return "imported" in e ? [2, e] : util.crypto.supports.nativeEcdsa ? [4, exports._importPriKeyNative(e)] : [3, 2];
                case 1:
                    return t = r.sent(), [3, 4];
                case 2:
                    return [4, exports._importPriKeySjcl(e)];
                case 3:
                    t = r.sent(), r.label = 4;
                case 4:
                    return [2, t]
            }
        })
    })
};
exports.importPriKey = importPriKey;
var importPubKey = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return "imported" in e ? [2, e] : util.crypto.supports.nativeEcdsa ? [4, exports._importPubKeyNative(e)] : [3, 2];
                case 1:
                    return t = r.sent(), [3, 4];
                case 2:
                    return [4, exports._importPubKeySjcl(e)];
                case 3:
                    t = r.sent(), r.label = 4;
                case 4:
                    return [2, t]
            }
        })
    })
};
exports.importPubKey = importPubKey;
var sign = function(e) {
    var t = e.alg,
        r = e.key,
        i = e.signingInput;
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, "native" === r.type ? exports._signNative({
                alg: t,
                key: r.imported,
                signingInput: i
            }) : exports._signSjcl({
                alg: t,
                key: r.imported,
                signingInput: i
            })]
        })
    })
};
exports.sign = sign;
var verify = function(e) {
    var t = e.alg,
        r = e.key,
        i = e.signingInput,
        n = e.signature;
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, "native" === r.type ? exports._verifyNative({
                alg: t,
                key: r.imported,
                signingInput: i,
                signature: n
            }) : exports._verifySjcl({
                alg: t,
                key: r.imported,
                signingInput: i,
                signature: n
            })]
        })
    })
};
exports.verify = verify;
var _generateNative = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, i, n, o, a, s, u, c, l;
            return __generator(this, function(p) {
                switch (p.label) {
                    case 0:
                        return t = ["sign", "verify"], r = !0, i = exports.DEFAULT_KEY_ALG, n = e || util.generateUUID(), [4, util.crypto.subtle.generateKey(i, r, t)];
                    case 1:
                        if (o = p.sent(), a = o.publicKey, s = o.privateKey, !a || !s) throw new Error("Did not generate key pair properly");
                        return [4, Promise.all([util.crypto.exportKey(n, a, util.crypto.JwkEcPubKey), util.crypto.exportKey(n, s, util.crypto.JwkEcPriKey)])];
                    case 2:
                        return u = __read.apply(void 0, [p.sent(), 2]), c = u[0], l = u[1], [2, {
                            uuid: n,
                            priKey: {
                                type: "native",
                                jwk: l,
                                imported: s
                            },
                            pubKey: {
                                type: "native",
                                jwk: c,
                                imported: a
                            }
                        }]
                }
            })
        })
    },
    _importPriKeyNative = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, i;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return t = getImportParams(e), r = util.crypto.correctJwkEcPriKey(e), [4, util.crypto.subtle.importKey("jwk", r, t, !0, ["sign"]).catch(function() {
                            throw new util.errors.ClientError(112, "Invalid private key")
                        })];
                    case 1:
                        return i = n.sent(), [2, {
                            type: "native",
                            jwk: r,
                            imported: i
                        }]
                }
            })
        })
    };
exports._importPriKeyNative = _importPriKeyNative;
var _importPubKeyNative = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, i;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return t = getImportParams(e), r = util.crypto.correctJwkEcPubKey(e), [4, util.crypto.subtle.importKey("jwk", r, t, !0, ["verify"]).catch(function() {
                        throw new util.errors.ClientError(112, "Invalid public key")
                    })];
                case 1:
                    return i = n.sent(), [2, {
                        type: "native",
                        jwk: r,
                        imported: i
                    }]
            }
        })
    })
};
exports._importPubKeyNative = _importPubKeyNative;
var _signNative = function(e) {
    var t = e.alg,
        r = e.key,
        i = e.signingInput;
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, util.crypto.subtle.sign(getSignAlg(t), r, i)];
                case 1:
                    return e = n.sent(), [2, new Uint8Array(e)]
            }
        })
    })
};
exports._signNative = _signNative;
var _verifyNative = function(e) {
    var t = e.alg,
        r = e.key,
        i = e.signingInput,
        n = e.signature;
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return [4, util.crypto.subtle.verify(getSignAlg(t), r, n, i)];
                case 1:
                    if ("boolean" != typeof(e = o.sent())) throw new TypeError("Unknown verification value: " + e);
                    return [2, e]
            }
        })
    })
};
exports._verifyNative = _verifyNative;
var _generateSjcl = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, i, n, o, a;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return t = e || util.generateUUID(), r = sjcl.ecc.ecdsa.generateKeys(256, 1), i = r.pub, n = r.sec, [4, _exportPubKeySjcl(i, t)];
                    case 1:
                        return o = s.sent(), [4, _exportPriKeySjcl(n, o)];
                    case 2:
                        return a = s.sent(), [2, {
                            uuid: t,
                            priKey: {
                                type: "sjcl",
                                jwk: a,
                                imported: n
                            },
                            pubKey: {
                                type: "sjcl",
                                jwk: o,
                                imported: i
                            }
                        }]
                }
            })
        })
    },
    _importPriKeySjcl = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, i, n;
            return __generator(this, function(o) {
                return t = util.crypto.correctJwkEcPriKey(e), r = util.base64urlToBytes(t.d), i = sjcl.bn.fromBits(util.bytesToBits(r)), n = new sjcl.ecc.ecdsa.secretKey(sjcl.ecc.curves.c256, i), [2, {
                    type: "sjcl",
                    jwk: t,
                    imported: n
                }]
            })
        })
    };
exports._importPriKeySjcl = _importPriKeySjcl;
var _importPubKeySjcl = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, i, n, o;
        return __generator(this, function(a) {
            if (t = util.crypto.correctJwkEcPubKey(e), r = util.base64urlToBytes(t.x), i = util.base64urlToBytes(t.y), 128 !== (n = util.bytesToHex(r) + util.bytesToHex(i)).length) throw new Error("Invalid length for ECDSA point: " + n.length);
            return o = new sjcl.ecc.ecdsa.publicKey(sjcl.ecc.curves.c256, sjcl.codec.hex.toBits(n)), [2, {
                type: "sjcl",
                jwk: t,
                imported: o
            }]
        })
    })
};
exports._importPubKeySjcl = _importPubKeySjcl;
var _signSjcl = function(e) {
    var t = e.alg,
        r = e.key,
        i = e.signingInput;
    return __awaiter(void 0, void 0, void 0, function() {
        var e, n;
        return __generator(this, function(o) {
            if (t !== exports.JWK_ALG_ES256) throw new Error("Unsupported algorithm");
            return e = sjcl.hash.sha256.hash(util.bytesToBits(i)), n = r.sign(e, 1, !1), [2, new Uint8Array(sjcl.codec.bytes.fromBits(n))]
        })
    })
};
exports._signSjcl = _signSjcl;
var _verifySjcl = function(e) {
    var t = e.alg,
        r = e.key,
        i = e.signingInput,
        n = e.signature;
    return __awaiter(void 0, void 0, void 0, function() {
        var e, o;
        return __generator(this, function(a) {
            if (t !== exports.JWK_ALG_ES256) throw new Error("Unsupported signature algorithm: " + t);
            return e = util.bytesToBits(n), o = sjcl.hash.sha256.hash(util.bytesToBits(i)), [2, r.verify(o, e, !1)]
        })
    })
};
exports._verifySjcl = _verifySjcl;
var _exportPriKeySjcl = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(i) {
                return r = new Uint8Array(sjcl.codec.bytes.fromBits(e.get())), [2, __assign(__assign({}, t), {
                    key_ops: ["sign"],
                    d: util.bytesToBase64url(r)
                })]
            })
        })
    },
    _exportPubKeySjcl = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, i, n;
            return __generator(this, function(o) {
                return r = e.get(), i = r.x, n = r.y, [2, {
                    crv: "P-256",
                    ext: !0,
                    key_ops: ["verify"],
                    kty: "EC",
                    kid: t,
                    x: util.bytesToBase64url(new Uint8Array(sjcl.codec.bytes.fromBits(i))),
                    y: util.bytesToBase64url(new Uint8Array(sjcl.codec.bytes.fromBits(n)))
                }]
            })
        })
    },
    getFingerprint = function(e, t) {
        return void 0 === t && (t = 1), __awaiter(void 0, void 0, void 0, function() {
            var r, i, n, o;
            return __generator(this, function(a) {
                return r = util.str2ab(e.crv || ""), i = util.base64urlToBytes(e.x), n = util.base64urlToBytes(e.y), o = util.concatUint8Arrays([new Uint8Array([t]), util.str2ab("EC"), new Uint8Array([util.crypto.keyOpsToBitMask(e.key_ops)]), util.intToBytes(r.byteLength, 1), util.intToBytes(i.byteLength, 1), util.intToBytes(n.byteLength, 1), r, i, n]), [2, util.crypto.sha256(o)]
            })
        })
    };
exports.getFingerprint = getFingerprint;
var testMessage = util.str2ab("I've got a golden ticket!"),
    getValidSigningKeyPair = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, i;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, exports.importPriKey(e.priKey.jwk)];
                    case 1:
                        return t = n.sent(), [4, exports.sign({
                            alg: exports.JWK_ALG_ES256,
                            key: t,
                            signingInput: testMessage
                        })];
                    case 2:
                        return r = n.sent(), [4, exports.importPubKey(e.pubKey.jwk)];
                    case 3:
                        return i = n.sent(), [4, exports.verify({
                            alg: exports.JWK_ALG_ES256,
                            key: i,
                            signingInput: testMessage,
                            signature: r
                        })];
                    case 4:
                        if (!n.sent()) throw new Error("Signature failed verification");
                        return [2, e]
                }
            })
        })
    };