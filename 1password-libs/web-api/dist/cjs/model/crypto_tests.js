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
            function a(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
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
                })).then(a, u)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(o) {
            return function(u) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = t.call(e, a)
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
                }([o, u])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, o = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = o.next()).done;) a.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = o.return) && r.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.run = void 0;
var util = __importStar(require("../util")),
    ecdsa_public_key_1 = require("./ecdsa_public_key"),
    kdf = __importStar(require("./kdf")),
    rsa_public_key_1 = require("./rsa_public_key"),
    symmetric_key_1 = require("./symmetric_key"),
    symmetric_key_constants_1 = require("./symmetric_key_constants"),
    run = function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return void 0 === util.crypto.waitForInit ? [3, 5] : [4, util.crypto.waitForInit];
                    case 1:
                        r.sent(), r.label = 2;
                    case 2:
                        return r.trys.push([2, 4, , 5]), [4, testCryptoSupport()];
                    case 3:
                        return e = r.sent(), util.crypto.testsComplete(), [2, e];
                    case 4:
                        return t = r.sent(), util.crypto.testsError(t), [3, 5];
                    case 5:
                        return [2, void 0]
                }
            })
        })
    };
exports.run = run;
var testCryptoSupport = function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var e, t, r, n, i, o, a, u;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return e = performance.now(), [4, testFeature(importJwk)];
                    case 1:
                        return t = s.sent(), util.crypto.setSupport({
                            jwkImport: t
                        }), t ? [3, 3] : [4, testFeature(importArrayBufferKey)];
                    case 2:
                        s.sent() || console.error(new Error("Neither JWK nor ArrayBuffer import works!")), s.label = 3;
                    case 3:
                        return [4, Promise.all([testFeature(importRsaOaep256), testFeature(useNativeAesGcm), testFeature(computeNativePBES2), testFeature(generateNativeECDSA)])];
                    case 4:
                        return r = __read.apply(void 0, [s.sent(), 4]), n = r[0], i = r[1], o = r[2], a = r[3], u = performance.now(), util.crypto.setSupport({
                            rsaOaep256: n,
                            nativeAesGcm: i,
                            nativePbes2: o,
                            nativeEcdsa: a
                        }), [2, "Crypto init and tests are complete in " + Math.round(u - e).toString(10) + " ms\njwkImport: " + t + "\nrsaOaep256: " + n + "\nnativeAesGcm: " + i + "\nnativePbes2: " + o + "\nnativeEcdsa: " + a]
                }
            })
        })
    },
    testFeature = function(e) {
        return Promise.resolve().then(e).then(function() {
            return !0
        }, function() {
            return !1
        })
    },
    importRsaOaep256 = function() {
        return new rsa_public_key_1.RSAPublicKey("").import({
            alg: "RSA-OAEP-256",
            e: "AQAB",
            ext: !0,
            key_ops: ["encrypt"],
            kid: "pdmixa3yhjitikm7uv2fd7veme",
            kty: "RSA",
            n: "1HfpUoQjzFj9sXJc1-BsZ5oWYsBhDTZkjLYzPqam5DhezPAIDkoZfBw1B4jG43ez-_WifZf_kRc9zyHl3aoe0bUmVJnr58kGvStscTD0b1n5xkLHsuADf5YqjxYTmBZEkmrewV5xG7TdiYdx7ZboUpRVD6g7yg3xakfYvZuGuIkPlxHvxb4qx-wMe1M81sPZAAoSQl923uMCCIO6y236f2oMSsSDbm-6FynwMo4rWvRuN588pZCfHzhYzchembABVdt2HsHUwZC36fV9T_EuHEjTIiWaSYj1UyMUWvD8bVwehlDV4_NBiU-IuL3s8SDJCSQW4zHiTQG8qVEUpkPBew"
        })
    },
    useNativeAesGcm = function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var e, t, r, n;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, (e = new symmetric_key_1.SymmetricKey).generate(symmetric_key_constants_1.JWK_ALG_A256GCM, void 0)];
                    case 1:
                        return i.sent(), [4, e.encrypt(util.str2ab("A3-TEST"))];
                    case 2:
                        if (i.sent(), !(t = null === (n = e.jwk) || void 0 === n ? void 0 : n.k)) throw new Error("Missing key value");
                        return r = util.base64urlToBytes(t), [4, (new symmetric_key_1.SymmetricKey).importRawKey(symmetric_key_constants_1.JWK_ALG_A256GCM, r)];
                    case 3:
                        return i.sent(), [2]
                }
            })
        })
    },
    computeNativePBES2 = function() {
        var e = "SRPg-4096",
            t = 10,
            r = "gnvdmMgxFO6kbDCQBJOFag",
            n = util.base64urlToBytes(r),
            i = util.str2ab("test@example.com"),
            o = util.str2ab(e),
            a = kdf.HKDF("sha256", n, o, i, 32);
        return kdf.nativePBES2("mytestpassword", a, t, "SHA-256", 256)
    },
    generateNativeECDSA = function() {
        return util.crypto.subtle.generateKey(ecdsa_public_key_1.ECDSAPublicKey.DEFAULT_KEY_ALG, !0, ["sign", "verify"])
    },
    keyForImport = {
        alg: "RSA-OAEP",
        e: "AQAB",
        ext: !0,
        key_ops: ["encrypt"],
        kty: "RSA",
        n: "lW5zhTLlU1ayN9uDy4_9uNT3I2bTX24565Gr5yuKnNRGpE3rT9rGzjgPDamcKPIi4fPCP0HFFpS35D6F1zlOsy2uPFwXC6HGZVRvXoHaAcTq3HRTkQ2HpWnxI9R0XwJMDaxCwDFalAYSEYkQC6k7CFT87PPTKzCgnfVqX3aHAU2LzfjlQL1KtVU1Qy8QwUv_LgI9tjbbFrn62sAWruJItG65pHbWH0Gyp_Kna4HCiL4zjiWVxMOqwLt1Qkj_vkJwJ8pA7ooJEuTXCpxkoikEyxxRCDWxSbICyaD90MVpyXt2iaFaZc8ntS_JiofeMmm0iZ0uNJ3B0oT-twe0Dn2Edw",
        kid: "tyy2gvlws7xxnpqvayhqeg5e5y"
    },
    importJwk = function() {
        return util.crypto.subtle.importKey("jwk", keyForImport, rsa_public_key_1.RSAPublicKey.WC_ALG_RSA_OAEP, !0, ["encrypt"])
    },
    importArrayBufferKey = function() {
        return util.crypto.subtle.importKey("jwk", util.json2ab(keyForImport), rsa_public_key_1.RSAPublicKey.WC_ALG_RSA_OAEP, !0, ["encrypt"])
    };