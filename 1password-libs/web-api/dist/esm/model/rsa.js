var __awaiter = this && this.__awaiter || function(r, e, t, n) {
        return new(t || (t = Promise))(function(o, a) {
            function i(r) {
                try {
                    s(n.next(r))
                } catch (r) {
                    a(r)
                }
            }

            function u(r) {
                try {
                    s(n.throw(r))
                } catch (r) {
                    a(r)
                }
            }

            function s(r) {
                var e;
                r.done ? o(r.value) : (e = r.value, e instanceof t ? e : new t(function(r) {
                    r(e)
                })).then(i, u)
            }
            s((n = n.apply(r, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(r, e) {
        var t, n, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function u(a) {
            return function(u) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (t = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1], o = a;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(a);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = e.call(r, i)
                    } catch (r) {
                        a = [6, r], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, u])
            }
        }
    };
import {
    base64urlToBytes,
    concatUint8Arrays,
    errors,
    intToBytes,
    json2ab,
    str2ab
} from "../util";
import {
    correctJwkRsaPriKeyIfNeeded,
    correctJwkRsaPubKeyIfNeeded,
    keyOpsToBitMask,
    sha256,
    subtle,
    supports
} from "../util/crypto";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    EncryptionKeyPair
} from "./encryption_key_pair";
import {
    RSAPrivateKey
} from "./rsa_private_key";
import {
    importPubKey
} from "./rsa_public_key";
var codeLocation = "model/rsa",
    makePromise = mp(codeLocation);
export var JWK_ALG_RSA_OAEP_256 = "RSA-OAEP-256";
export var WC_KEY_GEN_RSA_OAEP_256 = {
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: {
        name: "SHA-256"
    }
};
export var JWK_ALG_RSA_OAEP = "RSA-OAEP";
export var WC_KEY_GEN_RSA_OAEP = {
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: {
        name: "SHA-1"
    }
};
export var DEFAULT_PARAMS = WC_KEY_GEN_RSA_OAEP;
export var generateKeyPair = function(r) {
    return makePromise("generateKeyPair", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var e, t, n;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, EncryptionKeyPair.generate(r)];
                    case 1:
                        if (e = o.sent(), t = e.pubKey.jwk, n = e.priKey.jwk, !t || !n) throw new Error("Missing plain text key pair.");
                        return [2, {
                            pubKey: t,
                            priKey: n
                        }]
                }
            })
        })
    })
};
export var decryptJweB = function(r, e) {
    return makePromise("decrypt", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, new RSAPrivateKey(r.kid, void 0, r).import()];
                    case 1:
                        return [2, t.sent().decrypt(e)]
                }
            })
        })
    })
};
export var encryptJweB = function(r, e) {
    return makePromise("encrypt", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, importPubKey(r)];
                    case 1:
                        return [2, t.sent().encrypt(e)]
                }
            })
        })
    })
};
var getKeyGenParams = function(r) {
        switch (r) {
            case JWK_ALG_RSA_OAEP_256:
                if (!supports.rsaOaep256) throw new errors.ClientError(111, "Browser does not support RSA-OAEP-256");
                return WC_KEY_GEN_RSA_OAEP_256;
            case JWK_ALG_RSA_OAEP:
                return WC_KEY_GEN_RSA_OAEP
        }
        throw new Error("Unexpected alg: " + r)
    },
    getImportParams = function(r) {
        var e = getKeyGenParams(r);
        return {
            name: e.name,
            hash: e.hash
        }
    };
export var encrypt = function(r, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return t = _encrypt, [4, _importPubKey(r)];
                case 1:
                    return [4, t.apply(void 0, [n.sent(), e])];
                case 2:
                    return [2, n.sent()]
            }
        })
    })
};
export var decrypt = function(r, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return t = _decrypt, [4, _importPriKey(r)];
                case 1:
                    return [4, t.apply(void 0, [n.sent(), e])];
                case 2:
                    return [2, n.sent()]
            }
        })
    })
};
export var _importPriKey = function(r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, t, n;
        return __generator(this, function(o) {
            return e = getImportParams(r.alg), t = correctJwkRsaPriKeyIfNeeded(r), n = supports.jwkImport ? t : json2ab(t), [2, subtle.importKey("jwk", n, e, !0, ["decrypt"])]
        })
    })
};
export var _importPubKey = function(r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, t, n;
        return __generator(this, function(o) {
            return e = getImportParams(r.alg), t = correctJwkRsaPubKeyIfNeeded(r), n = supports.jwkImport ? t : json2ab(t), [2, subtle.importKey("jwk", n, e, !0, ["encrypt"])]
        })
    })
};
export var _decrypt = function(r, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, subtle.decrypt(r.algorithm, r, e)];
                case 1:
                    return t = n.sent(), [2, new Uint8Array(t)]
            }
        })
    })
};
export var _encrypt = function(r, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    if (e.length > 256) throw new Error("Plaintext is too large.");
                    return [4, subtle.encrypt({
                        name: r.algorithm.name
                    }, r, e)];
                case 1:
                    return t = n.sent(), [2, new Uint8Array(t)]
            }
        })
    })
};
export var getFingerprint = function(r, e) {
    void 0 === e && (e = 1);
    var t = base64urlToBytes(r.e),
        n = base64urlToBytes(r.n),
        o = concatUint8Arrays([new Uint8Array([e]), str2ab("RSA"), new Uint8Array([keyOpsToBitMask(r.key_ops)]), intToBytes(t.byteLength, 2), intToBytes(n.byteLength, 2), t, n]);
    return sha256(o)
};