"use strict";
var __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function _(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(a, _)
            }
            s((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: _(0),
            throw: _(1),
            return: _(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function _(i) {
            return function(_) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
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
                        i = r.call(e, a)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, _])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFingerprint = exports._encrypt = exports._decrypt = exports._importPubKey = exports._importPriKey = exports.decrypt = exports.encrypt = exports.encryptJweB = exports.decryptJweB = exports.generateKeyPair = exports.DEFAULT_PARAMS = exports.WC_KEY_GEN_RSA_OAEP = exports.JWK_ALG_RSA_OAEP = exports.WC_KEY_GEN_RSA_OAEP_256 = exports.JWK_ALG_RSA_OAEP_256 = void 0;
var util_1 = require("../util"),
    crypto_1 = require("../util/crypto"),
    make_promise_1 = require("../util/make_promise"),
    encryption_key_pair_1 = require("./encryption_key_pair"),
    rsa_private_key_1 = require("./rsa_private_key"),
    rsa_public_key_1 = require("./rsa_public_key"),
    codeLocation = "model/rsa",
    makePromise = make_promise_1.makePromise(codeLocation);
exports.JWK_ALG_RSA_OAEP_256 = "RSA-OAEP-256", exports.WC_KEY_GEN_RSA_OAEP_256 = {
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: {
        name: "SHA-256"
    }
}, exports.JWK_ALG_RSA_OAEP = "RSA-OAEP", exports.WC_KEY_GEN_RSA_OAEP = {
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: {
        name: "SHA-1"
    }
}, exports.DEFAULT_PARAMS = exports.WC_KEY_GEN_RSA_OAEP;
var generateKeyPair = function(e) {
    return makePromise("generateKeyPair", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, t, n;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, encryption_key_pair_1.EncryptionKeyPair.generate(e)];
                    case 1:
                        if (r = o.sent(), t = r.pubKey.jwk, n = r.priKey.jwk, !t || !n) throw new Error("Missing plain text key pair.");
                        return [2, {
                            pubKey: t,
                            priKey: n
                        }]
                }
            })
        })
    })
};
exports.generateKeyPair = generateKeyPair;
var decryptJweB = function(e, r) {
    return makePromise("decrypt", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, new rsa_private_key_1.RSAPrivateKey(e.kid, void 0, e).import()];
                    case 1:
                        return [2, t.sent().decrypt(r)]
                }
            })
        })
    })
};
exports.decryptJweB = decryptJweB;
var encryptJweB = function(e, r) {
    return makePromise("encrypt", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, rsa_public_key_1.importPubKey(e)];
                    case 1:
                        return [2, t.sent().encrypt(r)]
                }
            })
        })
    })
};
exports.encryptJweB = encryptJweB;
var getKeyGenParams = function(e) {
        switch (e) {
            case exports.JWK_ALG_RSA_OAEP_256:
                if (!crypto_1.supports.rsaOaep256) throw new util_1.errors.ClientError(111, "Browser does not support RSA-OAEP-256");
                return exports.WC_KEY_GEN_RSA_OAEP_256;
            case exports.JWK_ALG_RSA_OAEP:
                return exports.WC_KEY_GEN_RSA_OAEP
        }
        throw new Error("Unexpected alg: " + e)
    },
    getImportParams = function(e) {
        var r = getKeyGenParams(e);
        return {
            name: r.name,
            hash: r.hash
        }
    },
    encrypt = function(e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return t = exports._encrypt, [4, exports._importPubKey(e)];
                    case 1:
                        return [4, t.apply(void 0, [n.sent(), r])];
                    case 2:
                        return [2, n.sent()]
                }
            })
        })
    };
exports.encrypt = encrypt;
var decrypt = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return t = exports._decrypt, [4, exports._importPriKey(e)];
                case 1:
                    return [4, t.apply(void 0, [n.sent(), r])];
                case 2:
                    return [2, n.sent()]
            }
        })
    })
};
exports.decrypt = decrypt;
var _importPriKey = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, t, n;
        return __generator(this, function(o) {
            return r = getImportParams(e.alg), t = crypto_1.correctJwkRsaPriKeyIfNeeded(e), n = crypto_1.supports.jwkImport ? t : util_1.json2ab(t), [2, crypto_1.subtle.importKey("jwk", n, r, !0, ["decrypt"])]
        })
    })
};
exports._importPriKey = _importPriKey;
var _importPubKey = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, t, n;
        return __generator(this, function(o) {
            return r = getImportParams(e.alg), t = crypto_1.correctJwkRsaPubKeyIfNeeded(e), n = crypto_1.supports.jwkImport ? t : util_1.json2ab(t), [2, crypto_1.subtle.importKey("jwk", n, r, !0, ["encrypt"])]
        })
    })
};
exports._importPubKey = _importPubKey;
var _decrypt = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, crypto_1.subtle.decrypt(e.algorithm, e, r)];
                case 1:
                    return t = n.sent(), [2, new Uint8Array(t)]
            }
        })
    })
};
exports._decrypt = _decrypt;
var _encrypt = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    if (r.length > 256) throw new Error("Plaintext is too large.");
                    return [4, crypto_1.subtle.encrypt({
                        name: e.algorithm.name
                    }, e, r)];
                case 1:
                    return t = n.sent(), [2, new Uint8Array(t)]
            }
        })
    })
};
exports._encrypt = _encrypt;
var getFingerprint = function(e, r) {
    void 0 === r && (r = 1);
    var t = util_1.base64urlToBytes(e.e),
        n = util_1.base64urlToBytes(e.n),
        o = util_1.concatUint8Arrays([new Uint8Array([r]), util_1.str2ab("RSA"), new Uint8Array([crypto_1.keyOpsToBitMask(e.key_ops)]), util_1.intToBytes(t.byteLength, 2), util_1.intToBytes(n.byteLength, 2), t, n]);
    return crypto_1.sha256(o)
};
exports.getFingerprint = getFingerprint;