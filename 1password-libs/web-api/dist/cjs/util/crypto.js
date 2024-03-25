"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, s = arguments.length; r < s; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, s) {
        void 0 === s && (s = r), Object.defineProperty(e, s, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, s) {
        void 0 === s && (s = r), e[s] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, s) {
        return new(r || (r = Promise))(function(n, i) {
            function o(e) {
                try {
                    p(s.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    p(s.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function p(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, a)
            }
            p((s = s.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, s, n, i, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function a(i) {
            return function(a) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, s && (n = 2 & i[0] ? s.return : i[0] ? s.throw || ((n = s.return) && n.call(s), 0) : s.next) && !(n = n.call(s, i[1])).done) return n;
                        switch (s = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, s = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < n[1]) {
                                    o.label = n[1], n = i;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(i);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = t.call(e, o)
                    } catch (e) {
                        i = [6, e], s = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setSupport = exports.supports = exports.init = exports.testsError = exports.testsComplete = exports.waitForTests = exports.waitForInit = exports.isUsingWebkitSubtle = exports.webkitSubtle = exports.subtle = exports.getRandomBytes = exports.getRandomValues = exports.KeysetCiphertextV2 = exports.KeysetCiphertext = exports.JwtHeader = exports.JwsHeader = exports.Jws = exports.JweHeader = exports.Jwe = exports.JweB = exports.JwkEcPriKeyDeprecated = exports.JwkEcPriKey = exports.JwkEcPubKey = exports.JwkRsaPriKey = exports.JwkRsaPubKey = exports.JwkSymKey = exports.exportKey = exports.exportUnvalidatedKey = exports.getSalt = exports.unsafeHashStringSha1UpperHex = exports.sha256 = exports.keyOpsToBitMask = exports.correctJwkEcPubKey = exports.correctJwkEcPriKey = exports.correctJwkRsaPriKeyIfNeeded = exports.correctJwkRsaPubKeyIfNeeded = exports.correctJwkNumber = void 0;
var t = __importStar(require("io-ts")),
    lodash_es_1 = require("lodash-es"),
    symmetric_key_constants_1 = require("../model/symmetric_key_constants"),
    codec_1 = require("./codec"),
    config = __importStar(require("./config")),
    rsa_1 = require("./rsa"),
    validator_1 = require("./validator"),
    correctJwkNumber = function(e, t, r) {
        if (!e) return e;
        var s = codec_1.base64urlToBytes(e);
        if (!s || 0 === s.length) return e;
        if (s.length > t) throw new Error("JWK number is longer than expected");
        if ("pad" === r) {
            if (s.length === t) return e;
            var n = new Uint8Array(t);
            n.set(s, t - s.length), s = n
        } else {
            if (0 !== s[0]) return e;
            for (var i = 0; i < s.length && 0 === s[i];) i += 1;
            s = s.subarray(i)
        }
        return codec_1.bytesToBase64url(s)
    };
exports.correctJwkNumber = correctJwkNumber;
var removeUse = function(e) {
        return lodash_es_1.omit(e, "use")
    },
    correctJwkRsaPubKeyIfNeeded = function(e) {
        var t = config.isEdge ? "pad" : "trim",
            r = __assign(__assign({}, e), {
                e: exports.correctJwkNumber(e.e, 3, t),
                n: exports.correctJwkNumber(e.n, 256, t)
            });
        return removeUse(r)
    };
exports.correctJwkRsaPubKeyIfNeeded = correctJwkRsaPubKeyIfNeeded;
var correctJwkRsaPriKeyIfNeeded = function(e) {
    var t = config.isEdge ? "pad" : "trim",
        r = __assign(__assign({}, e), {
            d: exports.correctJwkNumber(e.d, 256, t),
            dp: exports.correctJwkNumber(e.dp, 128, t),
            dq: exports.correctJwkNumber(e.dq, 128, t),
            e: exports.correctJwkNumber(e.e, 3, t),
            n: exports.correctJwkNumber(e.n, 256, t),
            p: exports.correctJwkNumber(e.p, 128, t),
            q: exports.correctJwkNumber(e.q, 128, t),
            qi: exports.correctJwkNumber(e.qi, 128, t)
        });
    return rsa_1.swapPrimesIfNeeded(removeUse(r))
};
exports.correctJwkRsaPriKeyIfNeeded = correctJwkRsaPriKeyIfNeeded;
var correctJwkEcPriKey = function(e) {
    return removeUse(__assign(__assign({}, e), {
        x: exports.correctJwkNumber(e.x, 32, "pad"),
        y: exports.correctJwkNumber(e.y, 32, "pad"),
        d: exports.correctJwkNumber(e.d, 32, "pad")
    }))
};
exports.correctJwkEcPriKey = correctJwkEcPriKey;
var correctJwkEcPubKey = function(e) {
    return removeUse(__assign(__assign({}, e), {
        x: exports.correctJwkNumber(e.x, 32, "pad"),
        y: exports.correctJwkNumber(e.y, 32, "pad")
    }))
};
exports.correctJwkEcPubKey = correctJwkEcPubKey;
var keyOpsBits = {
        sign: 1,
        verify: 2,
        encrypt: 4,
        decrypt: 8,
        wrapKey: 16,
        unwrapKey: 32,
        deriveKey: 64,
        deriveBits: 128
    },
    keyOpsToBitMask = function(e) {
        return e.reduce(function(e, t) {
            return e | keyOpsBits[t]
        }, 0)
    };
exports.keyOpsToBitMask = keyOpsToBitMask;
var sha256 = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, exports.subtle.digest({
                        name: "SHA-256"
                    }, e)];
                case 1:
                    return t = r.sent(), [2, new Uint8Array(t)]
            }
        })
    })
};
exports.sha256 = sha256;
var unsafeHashStringSha1UpperHex = function(e) {
    return Promise.resolve().then(function() {
        return exports.subtle.digest({
            name: "SHA-1"
        }, codec_1.str2ab(e)).then(function(e) {
            return codec_1.bytesToHex(new Uint8Array(e)).toUpperCase()
        })
    })
};
exports.unsafeHashStringSha1UpperHex = unsafeHashStringSha1UpperHex;
var getSalt = function(e) {
    return codec_1.bytesToBase64url(exports.getRandomBytes(e / 8))
};
exports.getSalt = getSalt;
var exportUnvalidatedKey = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, s;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, exports.subtle.exportKey("jwk", t)];
                case 1:
                    return r = n.sent(), s = codec_1.isAB(r) ? codec_1.ab2json(r) : r, [2, __assign(__assign({}, s), {
                        kid: e
                    })]
            }
        })
    })
};
exports.exportUnvalidatedKey = exportUnvalidatedKey;
var exportKey = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var s, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, exports.subtle.exportKey("jwk", t)];
                case 1:
                    return s = i.sent(), n = codec_1.isAB(s) ? codec_1.ab2json(s) : s, [2, validator_1.unsafeDecodeAs(r)(__assign(__assign({}, n), {
                        kid: e
                    }))]
            }
        })
    })
};
exports.exportKey = exportKey;
var EncryptDecrypt = t.union([t.tuple([t.literal("encrypt"), t.literal("decrypt")]), t.tuple([t.literal("decrypt"), t.literal("encrypt")])]);
exports.JwkSymKey = t.readonly(t.type({
    kid: t.string,
    ext: t.boolean,
    kty: t.literal("oct"),
    key_ops: EncryptDecrypt,
    alg: t.string,
    k: t.string
}), "JwkSymKey"), exports.JwkRsaPubKey = t.readonly(t.intersection([t.type({
    kid: t.string,
    ext: t.boolean,
    key_ops: t.tuple([t.literal("encrypt")]),
    kty: t.literal("RSA"),
    alg: t.string,
    e: t.string,
    n: t.string
}), t.partial({
    use: t.literal("enc")
})]), "JwkRsaPubKey"), exports.JwkRsaPriKey = t.readonly(t.intersection([t.type({
    kid: t.string,
    ext: t.boolean,
    key_ops: t.tuple([t.literal("decrypt")]),
    kty: t.literal("RSA"),
    alg: t.string,
    e: t.string,
    n: t.string,
    d: t.string,
    dp: t.string,
    dq: t.string,
    p: t.string,
    q: t.string,
    qi: t.string
}), t.partial({
    use: t.literal("enc")
})]), "JwkRsaPriKey");
var NamedCurve = t.union([t.literal("P-256"), t.literal("P-384")]);
exports.JwkEcPubKey = t.readonly(t.intersection([t.type({
    kid: t.string,
    ext: t.boolean,
    kty: t.literal("EC"),
    key_ops: t.tuple([t.literal("verify")]),
    crv: NamedCurve,
    x: t.string,
    y: t.string
}), t.partial({
    use: t.literal("sig")
})]), "JwkEcPubKey"), exports.JwkEcPriKey = t.readonly(t.intersection([t.type({
    kid: t.string,
    ext: t.boolean,
    kty: t.literal("EC"),
    key_ops: t.tuple([t.literal("sign")]),
    crv: NamedCurve,
    x: t.string,
    y: t.string,
    d: t.string
}), t.partial({
    use: t.literal("sig")
})]), "JwkEcPriKey");
var SignVerify = t.union([t.tuple([t.literal("sign"), t.literal("verify")]), t.tuple([t.literal("verify"), t.literal("sign")]), t.tuple([t.literal("sign")])]);
exports.JwkEcPriKeyDeprecated = t.readonly(t.intersection([t.type({
    kid: t.string,
    ext: t.boolean,
    kty: t.literal("EC"),
    key_ops: SignVerify,
    crv: NamedCurve,
    x: t.string,
    y: t.string,
    d: t.string
}), t.partial({
    use: t.literal("sig")
})]), "JwkEcPriKeyDeprecated"), exports.JweB = t.intersection([t.type({
    kid: t.string,
    enc: t.string,
    cty: t.string,
    data: t.string
}), t.partial({
    iv: t.string,
    alg: t.string,
    p2c: t.number,
    p2s: t.string
})], "JweB"), exports.Jwe = t.readonly(t.type({
    protected: t.string,
    encrypted_key: t.string,
    iv: t.string,
    ciphertext: t.string,
    tag: t.string
}), "Jwe"), exports.JweHeader = t.readonly(t.type({
    typ: t.literal("jose+json"),
    alg: t.string,
    enc: t.literal(symmetric_key_constants_1.JWK_ALG_A256GCM),
    kid: t.string
}), "JweHeader"), exports.Jws = t.readonly(t.type({
    protected: t.string,
    payload: t.string,
    signature: t.string
}), "Jws"), exports.JwsHeader = t.readonly(t.type({
    typ: t.literal("jose+json"),
    alg: t.string,
    kid: t.string
}), "JwsHeader"), exports.JwtHeader = t.readonly(t.type({
    typ: t.literal("JWT"),
    kid: t.union([t.string, t.undefined]),
    alg: t.literal("ES256")
}), "JwtHeader"), exports.KeysetCiphertext = t.readonly(t.intersection([t.type({
    uuid: t.string,
    sn: t.number,
    encryptedBy: t.string,
    encSymKey: exports.JweB,
    pubKey: exports.JwkRsaPubKey,
    encPriKey: exports.JweB
}), t.partial({
    spubKey: exports.JwkEcPubKey,
    encSPriKey: exports.JweB
})]), "KeysetCiphertext"), exports.KeysetCiphertextV2 = t.readonly(t.type({
    uuid: t.string,
    sn: t.number,
    spec: t.literal(2),
    ePubKey: exports.JwkRsaPubKey,
    sPubKey: exports.JwkEcPubKey,
    encKeyData: exports.Jwe
}), "KeysetCiphertextV2");
var initComplete, initError, getRandomBytes = function(e) {
    return exports.getRandomValues(new Uint8Array(e))
};
exports.getRandomBytes = getRandomBytes, exports.isUsingWebkitSubtle = !1, "undefined" != typeof Promise && (exports.waitForInit = new Promise(function(e, t) {
    initComplete = e, initError = t
})), "undefined" != typeof Promise && (exports.waitForTests = new Promise(function(e, t) {
    exports.testsComplete = e, exports.testsError = t
}));
var init = function(e) {
    void 0 === e && (e = window.crypto);
    try {
        if (void 0 === e) throw new TypeError("Crypto is unavailable");
        exports.getRandomValues = e.getRandomValues.bind(e), exports.subtle = e.subtle, exports.webkitSubtle = e.webkitSubtle, !exports.subtle && exports.webkitSubtle && (console.log("Using crypto.webkitSubtle"), exports.subtle = exports.webkitSubtle, exports.isUsingWebkitSubtle = !0), initComplete()
    } catch (e) {
        initError(e)
    }
};
exports.init = init, window.crypto && exports.init(window.crypto), exports.supports = {
    rsaOaep256: !0,
    nativeAesGcm: !0,
    nativePbes2: !0,
    nativeEcdsa: !0,
    jwkImport: !0
};
var setSupport = function(e) {
    exports.supports = __assign(__assign({}, exports.supports), e)
};
exports.setSupport = setSupport;