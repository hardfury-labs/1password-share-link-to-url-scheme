var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function a(t) {
                try {
                    c(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                try {
                    c(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
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
                        o = e.call(t, a)
                    } catch (t) {
                        o = [6, t], n = 0
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
    __read = this && this.__read || function(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n, i, o = r.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(n = o.next()).done;) a.push(n.value)
        } catch (t) {
            i = {
                error: t
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
import {
    reduce,
    times
} from "lodash-es";
import * as sjcl from "sjcl";
import * as util from "../util";
export var JWK_ALG_ES256 = "ES256";
export var JWK_CRV_ES256 = "P-256";
export var WC_IMPORT_ALG_ES256 = {
    name: "ECDSA",
    namedCurve: "P-256"
};
export var WC_SIGN_ALG_ES256 = {
    name: "ECDSA",
    hash: {
        name: "SHA-256"
    }
};
var getImportParams = function(t) {
        if ("EC" === t.kty || t.crv === JWK_CRV_ES256) return WC_IMPORT_ALG_ES256;
        throw new Error("Unexpected EC kty/crv: " + t.kty + ", " + t.crv + ".")
    },
    getSignAlg = function(t) {
        switch (t) {
            case JWK_ALG_ES256:
                return WC_SIGN_ALG_ES256;
            default:
                throw new Error("Unexpected algorithm identifier")
        }
    };
export var DEFAULT_KEY_ALG = WC_IMPORT_ALG_ES256;
export var DEFAULT_SIGN_ALG = WC_SIGN_ALG_ES256;
export var generateJwkPair = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, r, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, generateKeyPair(t)];
                case 1:
                    return e = i.sent(), r = e.priKey, n = e.pubKey, [2, {
                        priKey: r.jwk,
                        pubKey: n.jwk
                    }]
            }
        })
    })
};
export var generateKeyPair = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, r, n, i, o;
        return __generator(this, function(a) {
            return e = util.crypto.supports.nativeEcdsa ? _generateNative : _generateSjcl, r = function() {
                return e(t).then(getValidSigningKeyPair)
            }, i = times((n = 5) - 1, function() {
                return r
            }), o = r(), [2, reduce(i, function(t, e) {
                return t.catch(function() {
                    return e()
                })
            }, o).catch(function(t) {
                throw new Error("Failed to generate valid signing keys after " + n + " attempts. <" + t.message + ">")
            })]
        })
    })
};
export var importPriKey = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return "imported" in t ? [2, t] : util.crypto.supports.nativeEcdsa ? [4, _importPriKeyNative(t)] : [3, 2];
                case 1:
                    return e = r.sent(), [3, 4];
                case 2:
                    return [4, _importPriKeySjcl(t)];
                case 3:
                    e = r.sent(), r.label = 4;
                case 4:
                    return [2, e]
            }
        })
    })
};
export var importPubKey = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return "imported" in t ? [2, t] : util.crypto.supports.nativeEcdsa ? [4, _importPubKeyNative(t)] : [3, 2];
                case 1:
                    return e = r.sent(), [3, 4];
                case 2:
                    return [4, _importPubKeySjcl(t)];
                case 3:
                    e = r.sent(), r.label = 4;
                case 4:
                    return [2, e]
            }
        })
    })
};
export var sign = function(t) {
    var e = t.alg,
        r = t.key,
        n = t.signingInput;
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, "native" === r.type ? _signNative({
                alg: e,
                key: r.imported,
                signingInput: n
            }) : _signSjcl({
                alg: e,
                key: r.imported,
                signingInput: n
            })]
        })
    })
};
export var verify = function(t) {
    var e = t.alg,
        r = t.key,
        n = t.signingInput,
        i = t.signature;
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, "native" === r.type ? _verifyNative({
                alg: e,
                key: r.imported,
                signingInput: n,
                signature: i
            }) : _verifySjcl({
                alg: e,
                key: r.imported,
                signingInput: n,
                signature: i
            })]
        })
    })
};
var _generateNative = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, r, n, i, o, a, u, c, s, l;
        return __generator(this, function(v) {
            switch (v.label) {
                case 0:
                    return e = ["sign", "verify"], r = !0, n = DEFAULT_KEY_ALG, i = t || util.generateUUID(), [4, util.crypto.subtle.generateKey(n, r, e)];
                case 1:
                    if (o = v.sent(), a = o.publicKey, u = o.privateKey, !a || !u) throw new Error("Did not generate key pair properly");
                    return [4, Promise.all([util.crypto.exportKey(i, a, util.crypto.JwkEcPubKey), util.crypto.exportKey(i, u, util.crypto.JwkEcPriKey)])];
                case 2:
                    return c = __read.apply(void 0, [v.sent(), 2]), s = c[0], l = c[1], [2, {
                        uuid: i,
                        priKey: {
                            type: "native",
                            jwk: l,
                            imported: u
                        },
                        pubKey: {
                            type: "native",
                            jwk: s,
                            imported: a
                        }
                    }]
            }
        })
    })
};
export var _importPriKeyNative = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, r, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return e = getImportParams(t), r = util.crypto.correctJwkEcPriKey(t), [4, util.crypto.subtle.importKey("jwk", r, e, !0, ["sign"]).catch(function() {
                        throw new util.errors.ClientError(112, "Invalid private key")
                    })];
                case 1:
                    return n = i.sent(), [2, {
                        type: "native",
                        jwk: r,
                        imported: n
                    }]
            }
        })
    })
};
export var _importPubKeyNative = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, r, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return e = getImportParams(t), r = util.crypto.correctJwkEcPubKey(t), [4, util.crypto.subtle.importKey("jwk", r, e, !0, ["verify"]).catch(function() {
                        throw new util.errors.ClientError(112, "Invalid public key")
                    })];
                case 1:
                    return n = i.sent(), [2, {
                        type: "native",
                        jwk: r,
                        imported: n
                    }]
            }
        })
    })
};
export var _signNative = function(t) {
    var e = t.alg,
        r = t.key,
        n = t.signingInput;
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, util.crypto.subtle.sign(getSignAlg(e), r, n)];
                case 1:
                    return t = i.sent(), [2, new Uint8Array(t)]
            }
        })
    })
};
export var _verifyNative = function(t) {
    var e = t.alg,
        r = t.key,
        n = t.signingInput,
        i = t.signature;
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return [4, util.crypto.subtle.verify(getSignAlg(e), r, i, n)];
                case 1:
                    if ("boolean" != typeof(t = o.sent())) throw new TypeError("Unknown verification value: " + t);
                    return [2, t]
            }
        })
    })
};
var _generateSjcl = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, r, n, i, o, a;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return e = t || util.generateUUID(), r = sjcl.ecc.ecdsa.generateKeys(256, 1), n = r.pub, i = r.sec, [4, _exportPubKeySjcl(n, e)];
                case 1:
                    return o = u.sent(), [4, _exportPriKeySjcl(i, o)];
                case 2:
                    return a = u.sent(), [2, {
                        uuid: e,
                        priKey: {
                            type: "sjcl",
                            jwk: a,
                            imported: i
                        },
                        pubKey: {
                            type: "sjcl",
                            jwk: o,
                            imported: n
                        }
                    }]
            }
        })
    })
};
export var _importPriKeySjcl = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, r, n, i;
        return __generator(this, function(o) {
            return e = util.crypto.correctJwkEcPriKey(t), r = util.base64urlToBytes(e.d), n = sjcl.bn.fromBits(util.bytesToBits(r)), i = new sjcl.ecc.ecdsa.secretKey(sjcl.ecc.curves.c256, n), [2, {
                type: "sjcl",
                jwk: e,
                imported: i
            }]
        })
    })
};
export var _importPubKeySjcl = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, r, n, i, o;
        return __generator(this, function(a) {
            if (e = util.crypto.correctJwkEcPubKey(t), r = util.base64urlToBytes(e.x), n = util.base64urlToBytes(e.y), 128 !== (i = util.bytesToHex(r) + util.bytesToHex(n)).length) throw new Error("Invalid length for ECDSA point: " + i.length);
            return o = new sjcl.ecc.ecdsa.publicKey(sjcl.ecc.curves.c256, sjcl.codec.hex.toBits(i)), [2, {
                type: "sjcl",
                jwk: e,
                imported: o
            }]
        })
    })
};
export var _signSjcl = function(t) {
    var e = t.alg,
        r = t.key,
        n = t.signingInput;
    return __awaiter(void 0, void 0, void 0, function() {
        var t, i;
        return __generator(this, function(o) {
            if (e !== JWK_ALG_ES256) throw new Error("Unsupported algorithm");
            return t = sjcl.hash.sha256.hash(util.bytesToBits(n)), i = r.sign(t, 1, !1), [2, new Uint8Array(sjcl.codec.bytes.fromBits(i))]
        })
    })
};
export var _verifySjcl = function(t) {
    var e = t.alg,
        r = t.key,
        n = t.signingInput,
        i = t.signature;
    return __awaiter(void 0, void 0, void 0, function() {
        var t, o;
        return __generator(this, function(a) {
            if (e !== JWK_ALG_ES256) throw new Error("Unsupported signature algorithm: " + e);
            return t = util.bytesToBits(i), o = sjcl.hash.sha256.hash(util.bytesToBits(n)), [2, r.verify(o, t, !1)]
        })
    })
};
var _exportPriKeySjcl = function(t, e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(n) {
                return r = new Uint8Array(sjcl.codec.bytes.fromBits(t.get())), [2, __assign(__assign({}, e), {
                    key_ops: ["sign"],
                    d: util.bytesToBase64url(r)
                })]
            })
        })
    },
    _exportPubKeySjcl = function(t, e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i;
            return __generator(this, function(o) {
                return r = t.get(), n = r.x, i = r.y, [2, {
                    crv: "P-256",
                    ext: !0,
                    key_ops: ["verify"],
                    kty: "EC",
                    kid: e,
                    x: util.bytesToBase64url(new Uint8Array(sjcl.codec.bytes.fromBits(n))),
                    y: util.bytesToBase64url(new Uint8Array(sjcl.codec.bytes.fromBits(i)))
                }]
            })
        })
    };
export var getFingerprint = function(t, e) {
    return void 0 === e && (e = 1), __awaiter(void 0, void 0, void 0, function() {
        var r, n, i, o;
        return __generator(this, function(a) {
            return r = util.str2ab(t.crv || ""), n = util.base64urlToBytes(t.x), i = util.base64urlToBytes(t.y), o = util.concatUint8Arrays([new Uint8Array([e]), util.str2ab("EC"), new Uint8Array([util.crypto.keyOpsToBitMask(t.key_ops)]), util.intToBytes(r.byteLength, 1), util.intToBytes(n.byteLength, 1), util.intToBytes(i.byteLength, 1), r, n, i]), [2, util.crypto.sha256(o)]
        })
    })
};
var testMessage = util.str2ab("I've got a golden ticket!"),
    getValidSigningKeyPair = function(t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var e, r, n;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, importPriKey(t.priKey.jwk)];
                    case 1:
                        return e = i.sent(), [4, sign({
                            alg: JWK_ALG_ES256,
                            key: e,
                            signingInput: testMessage
                        })];
                    case 2:
                        return r = i.sent(), [4, importPubKey(t.pubKey.jwk)];
                    case 3:
                        return n = i.sent(), [4, verify({
                            alg: JWK_ALG_ES256,
                            key: n,
                            signingInput: testMessage,
                            signature: r
                        })];
                    case 4:
                        if (!i.sent()) throw new Error("Signature failed verification");
                        return [2, t]
                }
            })
        })
    };