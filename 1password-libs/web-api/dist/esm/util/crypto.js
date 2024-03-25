var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(t) {
                try {
                    l(n.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function s(t) {
                try {
                    l(n.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function l(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(o, s)
            }
            l((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, i, a, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function s(a) {
            return function(s) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                        switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < i[1]) {
                                    o.label = i[1], i = a;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(a);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = e.call(t, o)
                    } catch (t) {
                        a = [6, t], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, s])
            }
        }
    };
import * as t from "io-ts";
import {
    omit
} from "lodash-es";
import {
    JWK_ALG_A256GCM
} from "../model/symmetric_key_constants";
import {
    ab2json,
    base64urlToBytes,
    bytesToBase64url,
    bytesToHex,
    isAB,
    str2ab
} from "./codec";
import * as config from "./config";
import {
    swapPrimesIfNeeded
} from "./rsa";
import {
    unsafeDecodeAs
} from "./validator";
export var correctJwkNumber = function(t, e, r) {
    if (!t) return t;
    var n = base64urlToBytes(t);
    if (!n || 0 === n.length) return t;
    if (n.length > e) throw new Error("JWK number is longer than expected");
    if ("pad" === r) {
        if (n.length === e) return t;
        var i = new Uint8Array(e);
        i.set(n, e - n.length), n = i
    } else {
        if (0 !== n[0]) return t;
        for (var a = 0; a < n.length && 0 === n[a];) a += 1;
        n = n.subarray(a)
    }
    return bytesToBase64url(n)
};
var removeUse = function(t) {
    return omit(t, "use")
};
export var correctJwkRsaPubKeyIfNeeded = function(t) {
    var e = config.isEdge ? "pad" : "trim",
        r = __assign(__assign({}, t), {
            e: correctJwkNumber(t.e, 3, e),
            n: correctJwkNumber(t.n, 256, e)
        });
    return removeUse(r)
};
export var correctJwkRsaPriKeyIfNeeded = function(t) {
    var e = config.isEdge ? "pad" : "trim",
        r = __assign(__assign({}, t), {
            d: correctJwkNumber(t.d, 256, e),
            dp: correctJwkNumber(t.dp, 128, e),
            dq: correctJwkNumber(t.dq, 128, e),
            e: correctJwkNumber(t.e, 3, e),
            n: correctJwkNumber(t.n, 256, e),
            p: correctJwkNumber(t.p, 128, e),
            q: correctJwkNumber(t.q, 128, e),
            qi: correctJwkNumber(t.qi, 128, e)
        });
    return swapPrimesIfNeeded(removeUse(r))
};
export var correctJwkEcPriKey = function(t) {
    return removeUse(__assign(__assign({}, t), {
        x: correctJwkNumber(t.x, 32, "pad"),
        y: correctJwkNumber(t.y, 32, "pad"),
        d: correctJwkNumber(t.d, 32, "pad")
    }))
};
export var correctJwkEcPubKey = function(t) {
    return removeUse(__assign(__assign({}, t), {
        x: correctJwkNumber(t.x, 32, "pad"),
        y: correctJwkNumber(t.y, 32, "pad")
    }))
};
var keyOpsBits = {
    sign: 1,
    verify: 2,
    encrypt: 4,
    decrypt: 8,
    wrapKey: 16,
    unwrapKey: 32,
    deriveKey: 64,
    deriveBits: 128
};
export var keyOpsToBitMask = function(t) {
    return t.reduce(function(t, e) {
        return t | keyOpsBits[e]
    }, 0)
};
export var sha256 = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, subtle.digest({
                        name: "SHA-256"
                    }, t)];
                case 1:
                    return e = r.sent(), [2, new Uint8Array(e)]
            }
        })
    })
};
export var unsafeHashStringSha1UpperHex = function(t) {
    return Promise.resolve().then(function() {
        return subtle.digest({
            name: "SHA-1"
        }, str2ab(t)).then(function(t) {
            return bytesToHex(new Uint8Array(t)).toUpperCase()
        })
    })
};
export var getSalt = function(t) {
    return bytesToBase64url(getRandomBytes(t / 8))
};
export var exportUnvalidatedKey = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, subtle.exportKey("jwk", e)];
                case 1:
                    return r = i.sent(), n = isAB(r) ? ab2json(r) : r, [2, __assign(__assign({}, n), {
                        kid: t
                    })]
            }
        })
    })
};
export var exportKey = function(t, e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return [4, subtle.exportKey("jwk", e)];
                case 1:
                    return n = a.sent(), i = isAB(n) ? ab2json(n) : n, [2, unsafeDecodeAs(r)(__assign(__assign({}, i), {
                        kid: t
                    }))]
            }
        })
    })
};
var EncryptDecrypt = t.union([t.tuple([t.literal("encrypt"), t.literal("decrypt")]), t.tuple([t.literal("decrypt"), t.literal("encrypt")])]);
export var JwkSymKey = t.readonly(t.type({
    kid: t.string,
    ext: t.boolean,
    kty: t.literal("oct"),
    key_ops: EncryptDecrypt,
    alg: t.string,
    k: t.string
}), "JwkSymKey");
export var JwkRsaPubKey = t.readonly(t.intersection([t.type({
    kid: t.string,
    ext: t.boolean,
    key_ops: t.tuple([t.literal("encrypt")]),
    kty: t.literal("RSA"),
    alg: t.string,
    e: t.string,
    n: t.string
}), t.partial({
    use: t.literal("enc")
})]), "JwkRsaPubKey");
export var JwkRsaPriKey = t.readonly(t.intersection([t.type({
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
export var JwkEcPubKey = t.readonly(t.intersection([t.type({
    kid: t.string,
    ext: t.boolean,
    kty: t.literal("EC"),
    key_ops: t.tuple([t.literal("verify")]),
    crv: NamedCurve,
    x: t.string,
    y: t.string
}), t.partial({
    use: t.literal("sig")
})]), "JwkEcPubKey");
export var JwkEcPriKey = t.readonly(t.intersection([t.type({
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
var initComplete, initError, SignVerify = t.union([t.tuple([t.literal("sign"), t.literal("verify")]), t.tuple([t.literal("verify"), t.literal("sign")]), t.tuple([t.literal("sign")])]);
export var JwkEcPriKeyDeprecated = t.readonly(t.intersection([t.type({
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
})]), "JwkEcPriKeyDeprecated");
export var JweB = t.intersection([t.type({
    kid: t.string,
    enc: t.string,
    cty: t.string,
    data: t.string
}), t.partial({
    iv: t.string,
    alg: t.string,
    p2c: t.number,
    p2s: t.string
})], "JweB");
export var Jwe = t.readonly(t.type({
    protected: t.string,
    encrypted_key: t.string,
    iv: t.string,
    ciphertext: t.string,
    tag: t.string
}), "Jwe");
export var JweHeader = t.readonly(t.type({
    typ: t.literal("jose+json"),
    alg: t.string,
    enc: t.literal(JWK_ALG_A256GCM),
    kid: t.string
}), "JweHeader");
export var Jws = t.readonly(t.type({
    protected: t.string,
    payload: t.string,
    signature: t.string
}), "Jws");
export var JwsHeader = t.readonly(t.type({
    typ: t.literal("jose+json"),
    alg: t.string,
    kid: t.string
}), "JwsHeader");
export var JwtHeader = t.readonly(t.type({
    typ: t.literal("JWT"),
    kid: t.union([t.string, t.undefined]),
    alg: t.literal("ES256")
}), "JwtHeader");
export var KeysetCiphertext = t.readonly(t.intersection([t.type({
    uuid: t.string,
    sn: t.number,
    encryptedBy: t.string,
    encSymKey: JweB,
    pubKey: JwkRsaPubKey,
    encPriKey: JweB
}), t.partial({
    spubKey: JwkEcPubKey,
    encSPriKey: JweB
})]), "KeysetCiphertext");
export var KeysetCiphertextV2 = t.readonly(t.type({
    uuid: t.string,
    sn: t.number,
    spec: t.literal(2),
    ePubKey: JwkRsaPubKey,
    sPubKey: JwkEcPubKey,
    encKeyData: Jwe
}), "KeysetCiphertextV2");
export var getRandomValues;
export var getRandomBytes = function(t) {
    return getRandomValues(new Uint8Array(t))
};
export var subtle;
export var webkitSubtle;
export var isUsingWebkitSubtle = !1;
export var waitForInit;
"undefined" != typeof Promise && (waitForInit = new Promise(function(t, e) {
    initComplete = t, initError = e
}));
export var waitForTests;
export var testsComplete;
export var testsError;
"undefined" != typeof Promise && (waitForTests = new Promise(function(t, e) {
    testsComplete = t, testsError = e
}));
export var init = function(t) {
    void 0 === t && (t = window.crypto);
    try {
        if (void 0 === t) throw new TypeError("Crypto is unavailable");
        getRandomValues = t.getRandomValues.bind(t), subtle = t.subtle, webkitSubtle = t.webkitSubtle, !subtle && webkitSubtle && (console.log("Using crypto.webkitSubtle"), subtle = webkitSubtle, isUsingWebkitSubtle = !0), initComplete()
    } catch (t) {
        initError(t)
    }
};
window.crypto && init(window.crypto);
export var supports = {
    rsaOaep256: !0,
    nativeAesGcm: !0,
    nativePbes2: !0,
    nativeEcdsa: !0,
    jwkImport: !0
};
export var setSupport = function(t) {
    supports = __assign(__assign({}, supports), t)
};