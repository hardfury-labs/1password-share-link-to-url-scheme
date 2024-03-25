"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
        void 0 === n && (n = r), Object.defineProperty(t, n, {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    } : function(t, e, r, n) {
        void 0 === n && (n = r), t[n] = e[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        })
    } : function(t, e) {
        t.default = e
    }),
    __importStar = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && __createBinding(e, t, r);
        return __setModuleDefault(e, t), e
    },
    __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(t) {
                try {
                    s(n.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function c(t) {
                try {
                    s(n.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function s(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(o, c)
            }
            s((n = n.apply(t, e || [])).next())
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
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function c(a) {
            return function(c) {
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
                }([a, c])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports._importRawKeySjcl = exports._importRawKeyNative = exports._importJwkSjcl = exports._importJwkNative = exports._decryptSjcl = exports._decryptNative = exports.decryptContent = exports._encryptSjcl = exports._encryptNative = exports.encryptContent = exports.extractTag = exports._generateSjcl = exports._generateNative = void 0;
var sjcl = __importStar(require("sjcl")),
    util = __importStar(require("../util")),
    util_1 = require("../util"),
    aes_helpers_1 = require("./aes_helpers"),
    symmetric_key_constants_1 = require("./symmetric_key_constants"),
    generate = function(t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, util.crypto.supports.nativeAesGcm ? exports._generateNative(t, "cek") : exports._generateSjcl(t, "cek")]
            })
        })
    },
    _generateNative = function(t, e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return r = e || util.generateUUID(), [4, util.crypto.subtle.generateKey(symmetric_key_constants_1.getNativeKeyAlg(t), !0, ["encrypt", "decrypt"])];
                    case 1:
                        return n = i.sent(), [4, util.crypto.exportKey(r, n, util.crypto.JwkSymKey)];
                    case 2:
                        return [2, {
                            type: "native",
                            jwk: i.sent(),
                            imported: n
                        }]
                }
            })
        })
    };
exports._generateNative = _generateNative;
var _generateSjcl = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, exports._importRawKeySjcl({
                        uuid: e || util.generateUUID(),
                        enc: t,
                        rawKey: util.crypto.getRandomBytes(32)
                    })];
                case 1:
                    return [2, r.sent()]
            }
        })
    })
};
exports._generateSjcl = _generateSjcl;
var TAG_LENGTH = 128,
    TAG_BYTE_LENGTH = 16,
    extractTag = function(t) {
        return {
            ciphertext: t.slice(0, -TAG_BYTE_LENGTH),
            tag: t.slice(-TAG_BYTE_LENGTH)
        }
    };
exports.extractTag = extractTag;
var encryptContent = function(t) {
    var e = t.enc,
        r = t.plaintext,
        n = t.additionalData;
    return __awaiter(void 0, void 0, void 0, function() {
        var t, i;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return [4, generate(e)];
                case 1:
                    return t = a.sent(), [4, encrypt({
                        key: t,
                        plaintext: r,
                        additionalData: n
                    })];
                case 2:
                    return i = a.sent(), [2, __assign(__assign({}, i), {
                        cek: util_1.base64urlToBytes(t.jwk.k)
                    })]
            }
        })
    })
};
exports.encryptContent = encryptContent;
var encrypt = function(t) {
        var e = t.key,
            r = t.plaintext,
            n = t.additionalData;
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, "native" === e.type ? exports._encryptNative({
                    key: e.imported,
                    plaintext: r,
                    additionalData: n
                }) : exports._encryptSjcl({
                    cipher: e.imported,
                    plaintext: r,
                    additionalData: n
                })]
            })
        })
    },
    _encryptNative = function(t) {
        var e = t.key,
            r = t.plaintext,
            n = t.additionalData;
        return __awaiter(void 0, void 0, void 0, function() {
            var t, i, a, o;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        return t = aes_helpers_1.getIv(), i = __assign(__assign({
                            name: e.algorithm.name,
                            iv: t
                        }, n ? {
                            additionalData: n
                        } : {}), {
                            tagLength: TAG_LENGTH
                        }), [4, util.crypto.subtle.encrypt(i, e, r)];
                    case 1:
                        return a = c.sent(), o = new Uint8Array(a), [2, __assign({
                            iv: t
                        }, exports.extractTag(o))]
                }
            })
        })
    };
exports._encryptNative = _encryptNative;
var _encryptSjcl = function(t) {
    var e = t.cipher,
        r = t.plaintext,
        n = t.additionalData;
    return __awaiter(void 0, void 0, void 0, function() {
        var t, i, a;
        return __generator(this, function(o) {
            return t = aes_helpers_1.getIv(), i = sjcl.mode.gcm.encrypt(e, util.bytesToBits(r), util.bytesToBits(t), n ? util.bytesToBits(n) : void 0, TAG_LENGTH), a = new Uint8Array(sjcl.codec.bytes.fromBits(i)), [2, __assign({
                iv: t
            }, exports.extractTag(a))]
        })
    })
};
exports._encryptSjcl = _encryptSjcl;
var decryptContent = function(t) {
    var e = t.enc,
        r = t.cek,
        n = t.iv,
        i = t.ciphertext,
        a = t.additionalData,
        o = t.tag;
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return [4, importRawKey({
                        enc: e,
                        rawKey: r,
                        uuid: "cek"
                    })];
                case 1:
                    return t = c.sent(), [2, decrypt({
                        key: t,
                        iv: n,
                        ciphertext: i,
                        additionalData: a,
                        tag: o
                    })]
            }
        })
    })
};
exports.decryptContent = decryptContent;
var decrypt = function(t) {
        var e = t.key,
            r = t.iv,
            n = t.ciphertext,
            i = t.additionalData,
            a = t.tag;
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, "native" === e.type ? exports._decryptNative({
                    key: e.imported,
                    iv: r,
                    ciphertext: n,
                    additionalData: i,
                    tag: a
                }) : exports._decryptSjcl({
                    cipher: e.imported,
                    iv: r,
                    ciphertext: n,
                    additionalData: i,
                    tag: a
                })]
            })
        })
    },
    _decryptNative = function(t) {
        var e = t.key,
            r = t.ciphertext,
            n = t.tag,
            i = t.additionalData,
            a = t.iv;
        return __awaiter(void 0, void 0, void 0, function() {
            var t, o, c;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return t = __assign(__assign({
                            name: e.algorithm.name,
                            iv: a
                        }, i ? {
                            additionalData: i
                        } : {}), {
                            tagLength: 8 * n.byteLength
                        }), o = util.concatUint8Arrays([r, n]), [4, util.crypto.subtle.decrypt(t, e, o)];
                    case 1:
                        return c = s.sent(), [2, new Uint8Array(c)]
                }
            })
        })
    };
exports._decryptNative = _decryptNative;
var _decryptSjcl = function(t) {
    var e = t.cipher,
        r = t.ciphertext,
        n = t.tag,
        i = t.additionalData,
        a = t.iv;
    return __awaiter(void 0, void 0, void 0, function() {
        var t, o;
        return __generator(this, function(c) {
            return t = util_1.concatUint8Arrays([r, n]), o = sjcl.mode.gcm.decrypt(e, util.bytesToBits(t), util.bytesToBits(a), i ? util.bytesToBits(i) : void 0, 8 * n.byteLength), [2, new Uint8Array(sjcl.codec.bytes.fromBits(o))]
        })
    })
};
exports._decryptSjcl = _decryptSjcl;
var _importJwkNative = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return e = symmetric_key_constants_1.getNativeKeyAlg(t.alg), [4, util.crypto.subtle.importKey("jwk", t, e, !0, ["encrypt", "decrypt"])];
                case 1:
                    return [2, r.sent()]
            }
        })
    })
};
exports._importJwkNative = _importJwkNative;
var _importJwkSjcl = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(r) {
            return e = util.base64urlToBytes(t.k), [2, new sjcl.cipher.aes(util.bytesToBits(e))]
        })
    })
};
exports._importJwkSjcl = _importJwkSjcl;
var importRawKey = function(t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, util.crypto.supports.nativeAesGcm ? exports._importRawKeyNative(t) : exports._importRawKeySjcl(t)]
            })
        })
    },
    _importRawKeyNative = function(t) {
        var e = t.uuid,
            r = t.enc,
            n = t.rawKey;
        return __awaiter(void 0, void 0, void 0, function() {
            var t, i;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (t = symmetric_key_constants_1.getNativeKeyAlg(r), 8 * n.length !== t.length) throw new Error("Invalid raw key length");
                        return [4, util.crypto.subtle.importKey("raw", n, t, !0, ["encrypt", "decrypt"])];
                    case 1:
                        return i = a.sent(), [4, util.crypto.exportKey(e, i, util.crypto.JwkSymKey)];
                    case 2:
                        return [2, {
                            type: "native",
                            jwk: a.sent(),
                            imported: i
                        }]
                }
            })
        })
    };
exports._importRawKeyNative = _importRawKeyNative;
var _importRawKeySjcl = function(t) {
    var e = t.uuid,
        r = t.enc,
        n = t.rawKey;
    return __awaiter(void 0, void 0, void 0, function() {
        var t, i;
        return __generator(this, function(a) {
            if (t = symmetric_key_constants_1.getNativeKeyAlg(r), 8 * n.length !== t.length) throw new Error("Invalid raw key length");
            return i = new sjcl.cipher.aes(util.bytesToBits(n)), [2, {
                type: "sjcl",
                jwk: {
                    kid: e,
                    alg: r,
                    kty: "oct",
                    key_ops: ["encrypt", "decrypt"],
                    k: util.bytesToBase64url(n),
                    ext: !0
                },
                imported: i
            }]
        })
    })
};
exports._importRawKeySjcl = _importRawKeySjcl;