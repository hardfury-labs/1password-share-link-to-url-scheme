var __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(o, i) {
            function a(t) {
                try {
                    s(n.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    s(n.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function s(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(a, u)
            }
            s((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (t) {
                        i = [6, t], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    },
    __read = this && this.__read || function(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n, o, i = r.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (r = i.return) && r.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    };
import * as util from "../util";
import {
    ECDSAPublicKey
} from "./ecdsa_public_key";
import * as kdf from "./kdf";
import {
    RSAPublicKey
} from "./rsa_public_key";
import {
    SymmetricKey
} from "./symmetric_key";
import {
    JWK_ALG_A256GCM
} from "./symmetric_key_constants";
export var run = function() {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, e;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return void 0 === util.crypto.waitForInit ? [3, 5] : [4, util.crypto.waitForInit];
                case 1:
                    r.sent(), r.label = 2;
                case 2:
                    return r.trys.push([2, 4, , 5]), [4, testCryptoSupport()];
                case 3:
                    return t = r.sent(), util.crypto.testsComplete(), [2, t];
                case 4:
                    return e = r.sent(), util.crypto.testsError(e), [3, 5];
                case 5:
                    return [2, void 0]
            }
        })
    })
};
var testCryptoSupport = function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, e, r, n, o, i, a, u;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return t = performance.now(), [4, testFeature(importJwk)];
                    case 1:
                        return e = s.sent(), util.crypto.setSupport({
                            jwkImport: e
                        }), e ? [3, 3] : [4, testFeature(importArrayBufferKey)];
                    case 2:
                        s.sent() || console.error(new Error("Neither JWK nor ArrayBuffer import works!")), s.label = 3;
                    case 3:
                        return [4, Promise.all([testFeature(importRsaOaep256), testFeature(useNativeAesGcm), testFeature(computeNativePBES2), testFeature(generateNativeECDSA)])];
                    case 4:
                        return r = __read.apply(void 0, [s.sent(), 4]), n = r[0], o = r[1], i = r[2], a = r[3], u = performance.now(), util.crypto.setSupport({
                            rsaOaep256: n,
                            nativeAesGcm: o,
                            nativePbes2: i,
                            nativeEcdsa: a
                        }), [2, "Crypto init and tests are complete in " + Math.round(u - t).toString(10) + " ms\njwkImport: " + e + "\nrsaOaep256: " + n + "\nnativeAesGcm: " + o + "\nnativePbes2: " + i + "\nnativeEcdsa: " + a]
                }
            })
        })
    },
    testFeature = function(t) {
        return Promise.resolve().then(t).then(function() {
            return !0
        }, function() {
            return !1
        })
    },
    importRsaOaep256 = function() {
        return new RSAPublicKey("").import({
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
            var t, e, r, n;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, (t = new SymmetricKey).generate(JWK_ALG_A256GCM, void 0)];
                    case 1:
                        return o.sent(), [4, t.encrypt(util.str2ab("A3-TEST"))];
                    case 2:
                        if (o.sent(), !(e = null === (n = t.jwk) || void 0 === n ? void 0 : n.k)) throw new Error("Missing key value");
                        return r = util.base64urlToBytes(e), [4, (new SymmetricKey).importRawKey(JWK_ALG_A256GCM, r)];
                    case 3:
                        return o.sent(), [2]
                }
            })
        })
    },
    computeNativePBES2 = function() {
        var t = "SRPg-4096",
            e = 10,
            r = "gnvdmMgxFO6kbDCQBJOFag",
            n = util.base64urlToBytes(r),
            o = util.str2ab("test@example.com"),
            i = util.str2ab(t),
            a = kdf.HKDF("sha256", n, i, o, 32);
        return kdf.nativePBES2("mytestpassword", a, e, "SHA-256", 256)
    },
    generateNativeECDSA = function() {
        return util.crypto.subtle.generateKey(ECDSAPublicKey.DEFAULT_KEY_ALG, !0, ["sign", "verify"])
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
        return util.crypto.subtle.importKey("jwk", keyForImport, RSAPublicKey.WC_ALG_RSA_OAEP, !0, ["encrypt"])
    },
    importArrayBufferKey = function() {
        return util.crypto.subtle.importKey("jwk", util.json2ab(keyForImport), RSAPublicKey.WC_ALG_RSA_OAEP, !0, ["encrypt"])
    };