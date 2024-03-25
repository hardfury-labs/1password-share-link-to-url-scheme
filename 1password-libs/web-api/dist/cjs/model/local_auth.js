"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var a in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(a, i) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var r;
                e.done ? a(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(o, s)
            }
            c((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, a, i, o = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (t = 1, n && (a = 2 & i[0] ? n.return : i[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, i[1])).done) return a;
                        switch (n = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < a[1]) {
                                    o.label = a[1], a = i;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(i);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = r.call(e, o)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        t = a = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    },
    __rest = this && this.__rest || function(e, r) {
        var t = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (t[n[a]] = e[n[a]])
        }
        return t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.LocalAuthVerifier = exports.LocalAuth = void 0;
var LocalAuth, util_1 = require("../util"),
    crypto_1 = require("../util/crypto"),
    misc_1 = require("../util/misc"),
    kdf_1 = require("./kdf"),
    symmetric_key_constants_1 = require("./symmetric_key_constants"),
    symmetric_key_pf_1 = require("./symmetric_key_pf"),
    localKeyV2KID = "localauthv2keykid",
    hashData = "fool me twice",
    keyData = "shame on you";
! function(e) {
    var r = this;
    e.generate = function(t) {
        return __awaiter(r, void 0, void 0, function() {
            var r, n, a, i, o, s, c;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return [4, e.generateVerifierAndToken()];
                    case 1:
                        r = u.sent(), n = r.bearerToken, a = __rest(r, ["bearerToken"]), u.label = 2;
                    case 2:
                        return u.trys.push([2, 5, , 6]), [4, LocalAuthVerifier.deriveKey(a, n)];
                    case 3:
                        return i = u.sent(), o = JSON.stringify(t), [4, i.encrypt(util_1.str2ab(o))];
                    case 4:
                        return s = u.sent(), [2, {
                            localAuth: {
                                verifier: a,
                                encCredentials: s
                            },
                            credentials: t,
                            bearerToken: n
                        }];
                    case 5:
                        throw c = u.sent(), new Error("new LocalAuth failed: " + c);
                    case 6:
                        return [2]
                }
            })
        })
    }, e.decryptCredentials = function(e, t) {
        return __awaiter(r, void 0, void 0, function() {
            var r, n;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), [4, LocalAuthVerifier.deriveKey(e.verifier, t)];
                    case 1:
                        return [4, a.sent().decrypt(e.encCredentials)];
                    case 2:
                        return r = a.sent(), [2, JSON.parse(util_1.ab2str(r))];
                    case 3:
                        throw n = a.sent(), new Error("credentials failed: " + n);
                    case 4:
                        return [2]
                }
            })
        })
    }, e.generateVerifierAndToken = function() {
        return __awaiter(r, void 0, void 0, function() {
            var e, r;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = generateBearerToken(), [4, generateLocalAuthVerifier(e)];
                    case 1:
                        return r = t.sent(), [2, __assign(__assign({}, r), {
                            bearerToken: e
                        })]
                }
            })
        })
    }
}(LocalAuth = exports.LocalAuth || (exports.LocalAuth = {}));
var LocalAuthVerifier, generateBearerToken = function() {
        var e = crypto_1.getRandomBytes(24);
        return util_1.bytesToBase64url(e)
    },
    generateSalt = function() {
        var e = crypto_1.getRandomBytes(16);
        return util_1.bytesToBase64url(e)
    },
    generateLocalAuthVerifier = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, t, n, a;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return r = generateSalt(), [4, tokenPBKDF2(e, r)];
                    case 1:
                        return t = i.sent(), n = misc_1.hmacWithSecretAndData(t, hashData), a = util_1.bytesToBase64url(n), [2, {
                            salt: r,
                            localHash: a
                        }]
                }
            })
        })
    };
! function(e) {
    var r = this;
    e.deriveKey = function(e, t) {
        return __awaiter(r, void 0, void 0, function() {
            var n, a, i, o;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return s.trys.push([0, 4, , 5]), [4, function(e, t) {
                            return __awaiter(r, void 0, void 0, function() {
                                var r, n, a, i;
                                return __generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return o.trys.push([0, 2, , 3]), [4, tokenPBKDF2(t, e.salt)];
                                        case 1:
                                            if (r = o.sent(), n = misc_1.hmacWithSecretAndData(r, hashData), a = util_1.bytesToBase64url(n), e.localHash !== a) throw new Error("Authentication failed, invalid bearer token");
                                            return [3, 3];
                                        case 2:
                                            throw i = o.sent(), new Error("validateBearerToken failed: " + i);
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }(e, t)];
                    case 1:
                        return s.sent(), [4, tokenPBKDF2(t, e.salt)];
                    case 2:
                        return n = s.sent(), a = misc_1.hmacWithSecretAndData(n, keyData), [4, (i = symmetric_key_pf_1.createSymmetricKey(localKeyV2KID)).importRawKey(symmetric_key_constants_1.JWK_ALG_A256GCM, a)];
                    case 3:
                        return s.sent(), [2, i];
                    case 4:
                        throw o = s.sent(), new Error("deriveKey failed: " + o);
                    case 5:
                        return [2]
                }
            })
        })
    }
}(LocalAuthVerifier = exports.LocalAuthVerifier || (exports.LocalAuthVerifier = {}));
var tokenPBKDF2 = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            try {
                return t = util_1.base64urlToBytes(r), [2, kdf_1.PBES2(kdf_1.PBES2_ALG_256, e, t, kdf_1.DEFAULT_ITERATIONS)]
            } catch (e) {
                throw new Error("token PBKDF2 failed: " + e)
            }
            return [2]
        })
    })
};