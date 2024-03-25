"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
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
        return new(r || (r = Promise))(function(o, i) {
            function a(t) {
                try {
                    u(n.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function s(t) {
                try {
                    u(n.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(a, s)
            }
            u((n = n.apply(t, e || [])).next())
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
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
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
                }([i, s])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Auth = exports.AuthParams = void 0;
var Auth, t = __importStar(require("io-ts")),
    jsbn_1 = require("jsbn"),
    lodash_es_1 = require("lodash-es"),
    sjcl = __importStar(require("sjcl")),
    util = __importStar(require("../util")),
    kdf = __importStar(require("./kdf")),
    secret_key_1 = require("./secret_key"),
    srp_groups_1 = require("./srp_groups");
exports.AuthParams = t.readonly(t.type({
        method: t.string,
        alg: t.string,
        iterations: t.number,
        salt: t.string
    }), "AuthParams"),
    function(t) {
        var e = this;
        t.generate = function(r) {
            return __awaiter(e, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return [2, t.generateWithParams(r, getDefaultAuthParams())]
                })
            })
        }, t.generateWithParams = function(t, r) {
            return __awaiter(e, void 0, void 0, function() {
                var e;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, computeX(t, r)];
                        case 1:
                            return e = n.sent(), [2, {
                                params: r,
                                srpX: e
                            }]
                    }
                })
            })
        }, t.getForUpload = function(t) {
            return __assign(__assign({}, t.params), {
                v: computeVerifier(t)
            })
        }, t.generateA = function(t) {
            var e = util.bytesToHex(util.crypto.getRandomBytes(32)),
                r = getMethodGroup(t.params.method),
                n = r.g,
                o = r.N;
            return {
                bigA: toServerHex(n.modPow(toBn(e), o)),
                littleA: e
            }
        }, t.computeRawKey = function(t) {
            var e = t.auth,
                r = t.littleA,
                n = t.bigA,
                o = t.bigB,
                i = t.sessionId,
                a = sjcl.hash.sha256.hash.bind(sjcl.hash.sha256),
                s = getMethodGroup(e.params.method),
                u = s.g,
                c = s.N,
                l = toBn(e.srpX),
                h = toBn(r),
                _ = toBn(o);
            if (_.mod(c).equals(jsbn_1.BigInteger.ZERO)) throw new Error("Invalid SRP B value");
            var f = toBn(util.bytesToHex(util.str2ab(i))),
                d = toBn(sjcl.codec.hex.fromBits(a(n + o))),
                p = h.add(d.multiply(l)),
                g = _.subtract(u.modPow(l, c).multiply(f)),
                m = toServerHex(g.modPow(p, c));
            return new Uint8Array(sjcl.codec.bytes.fromBits(a(m)))
        }
    }(Auth = exports.Auth || (exports.Auth = {}));
var DEFAULT_SRP_METHOD = "SRPg-4096",
    SRP_SALT_LENGTH_BITS = 128,
    getDefaultAuthParams = function() {
        return {
            method: DEFAULT_SRP_METHOD,
            alg: kdf.DEFAULT_ALG,
            iterations: kdf.DEFAULT_ITERATIONS,
            salt: util.crypto.getSalt(SRP_SALT_LENGTH_BITS)
        }
    },
    computeX = function(t, e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                switch (getMethodPrefix(e.method)) {
                    case "SRPg-":
                        return [2, v2ComputeX(t, e)];
                    case "SRP-":
                        return [2, v1ComputeX(t, e)]
                }
                return [2]
            })
        })
    },
    v2ComputeX = function(t, e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, o, i, a, s, u, c, l, h;
            return __generator(this, function(_) {
                switch (_.label) {
                    case 0:
                        return r = cleanCredentials(t), n = r.email, o = r.secretKey, i = r.password, a = util.base64urlToBytes(e.salt), s = util.str2ab(n), u = util.str2ab(e.method), c = kdf.HKDF("sha256", a, u, s, 32), [4, kdf.PBES2(e.alg, i, c, e.iterations)];
                    case 1:
                        return l = _.sent(), h = secret_key_1.SecretKey.combineWithBytes(l, o), [2, util.bytesToHex(h)]
                }
            })
        })
    },
    v1ComputeX = function(t, e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, o, i, a, s, u, c, l;
            return __generator(this, function(h) {
                switch (h.label) {
                    case 0:
                        return r = cleanCredentials(t), n = r.email, o = r.secretKey, i = r.password, a = util.base64urlToBytes(e.salt), [4, kdf.PBES2(e.alg, util.prehash(i), a, e.iterations)];
                    case 1:
                        return s = h.sent(), u = secret_key_1.SecretKey.combineWithBytes(s, o), (c = new sjcl.hash.sha1).update(util.bytesToBits(a)), c.update(sjcl.hash.sha1.hash(n + ":" + util.bytesToHex(u))), l = c.finalize(), [2, sjcl.codec.hex.fromBits(l)]
                }
            })
        })
    },
    computeVerifier = function(t) {
        var e = getMethodGroup(t.params.method),
            r = e.g,
            n = e.N,
            o = toBn(t.srpX);
        return toServerHex(r.modPow(o, n))
    },
    cleanCredentials = function(t) {
        var e = t.email,
            r = t.password,
            n = t.secretKey;
        return {
            email: e.trim().toLowerCase(),
            password: util.normalizeUTF8(r),
            secretKey: n
        }
    },
    toBn = function(t) {
        return new jsbn_1.BigInteger(t, 16)
    },
    toServerHex = function(t) {
        return t.toString(16).replace(/^(0x)?0*/, "")
    },
    getMethodPrefix = function(t) {
        var e = ["SRP-", "SRPg-"].find(function(e) {
            return lodash_es_1.startsWith(t, e)
        });
        if (!e) throw new Error("Invalid method");
        return e
    },
    getMethodGroup = function(t) {
        var e = getMethodPrefix(t);
        return srp_groups_1.getGroup(t.slice(e.length))
    };