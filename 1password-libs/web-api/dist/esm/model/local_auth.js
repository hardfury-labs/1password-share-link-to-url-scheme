var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var a in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(a, o) {
            function i(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var r;
                e.done ? a(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(i, s)
            }
            c((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, a, o, i = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
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
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (t = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
                        switch (n = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                            case 0:
                            case 1:
                                a = o;
                                break;
                            case 4:
                                return i.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                    i.label = o[1];
                                    break
                                }
                                if (6 === o[0] && i.label < a[1]) {
                                    i.label = a[1], a = o;
                                    break
                                }
                                if (a && i.label < a[2]) {
                                    i.label = a[2], i.ops.push(o);
                                    break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        o = r.call(e, i)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        t = a = 0
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
    __rest = this && this.__rest || function(e, r) {
        var t = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (t[n[a]] = e[n[a]])
        }
        return t
    };
import {
    ab2str,
    base64urlToBytes,
    bytesToBase64url,
    str2ab
} from "../util";
import {
    getRandomBytes
} from "../util/crypto";
import {
    hmacWithSecretAndData
} from "../util/misc";
import {
    DEFAULT_ITERATIONS,
    PBES2,
    PBES2_ALG_256
} from "./kdf";
import {
    JWK_ALG_A256GCM
} from "./symmetric_key_constants";
import {
    createSymmetricKey
} from "./symmetric_key_pf";
var localKeyV2KID = "localauthv2keykid",
    hashData = "fool me twice",
    keyData = "shame on you";
export var LocalAuth;
! function(e) {
    var r = this;
    e.generate = function(t) {
        return __awaiter(r, void 0, void 0, function() {
            var r, n, a, o, i, s, c;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return [4, e.generateVerifierAndToken()];
                    case 1:
                        r = u.sent(), n = r.bearerToken, a = __rest(r, ["bearerToken"]), u.label = 2;
                    case 2:
                        return u.trys.push([2, 5, , 6]), [4, LocalAuthVerifier.deriveKey(a, n)];
                    case 3:
                        return o = u.sent(), i = JSON.stringify(t), [4, o.encrypt(str2ab(i))];
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
                        return r = a.sent(), [2, JSON.parse(ab2str(r))];
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
}(LocalAuth || (LocalAuth = {}));
var generateBearerToken = function() {
        var e = getRandomBytes(24);
        return bytesToBase64url(e)
    },
    generateSalt = function() {
        var e = getRandomBytes(16);
        return bytesToBase64url(e)
    },
    generateLocalAuthVerifier = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, t, n, a;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return r = generateSalt(), [4, tokenPBKDF2(e, r)];
                    case 1:
                        return t = o.sent(), n = hmacWithSecretAndData(t, hashData), a = bytesToBase64url(n), [2, {
                            salt: r,
                            localHash: a
                        }]
                }
            })
        })
    };
export var LocalAuthVerifier;
! function(e) {
    var r = this;
    e.deriveKey = function(e, t) {
        return __awaiter(r, void 0, void 0, function() {
            var n, a, o, i;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return s.trys.push([0, 4, , 5]), [4, function(e, t) {
                            return __awaiter(r, void 0, void 0, function() {
                                var r, n, a, o;
                                return __generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 2, , 3]), [4, tokenPBKDF2(t, e.salt)];
                                        case 1:
                                            if (r = i.sent(), n = hmacWithSecretAndData(r, hashData), a = bytesToBase64url(n), e.localHash !== a) throw new Error("Authentication failed, invalid bearer token");
                                            return [3, 3];
                                        case 2:
                                            throw o = i.sent(), new Error("validateBearerToken failed: " + o);
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }(e, t)];
                    case 1:
                        return s.sent(), [4, tokenPBKDF2(t, e.salt)];
                    case 2:
                        return n = s.sent(), a = hmacWithSecretAndData(n, keyData), [4, (o = createSymmetricKey(localKeyV2KID)).importRawKey(JWK_ALG_A256GCM, a)];
                    case 3:
                        return s.sent(), [2, o];
                    case 4:
                        throw i = s.sent(), new Error("deriveKey failed: " + i);
                    case 5:
                        return [2]
                }
            })
        })
    }
}(LocalAuthVerifier || (LocalAuthVerifier = {}));
var tokenPBKDF2 = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            try {
                return t = base64urlToBytes(r), [2, PBES2(PBES2_ALG_256, e, t, DEFAULT_ITERATIONS)]
            } catch (e) {
                throw new Error("token PBKDF2 failed: " + e)
            }
            return [2]
        })
    })
};