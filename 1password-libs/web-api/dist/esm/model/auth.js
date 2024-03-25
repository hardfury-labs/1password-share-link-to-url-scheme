var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(o, a) {
            function i(t) {
                try {
                    u(n.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function s(t) {
                try {
                    u(n.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function u(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(i, s)
            }
            u((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
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
                    for (; i;) try {
                        if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
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
                        a = e.call(t, i)
                    } catch (t) {
                        a = [6, t], n = 0
                    } finally {
                        r = o = 0
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
    BigInteger
} from "jsbn";
import {
    startsWith
} from "lodash-es";
import * as sjcl from "sjcl";
import * as util from "../util";
import * as kdf from "./kdf";
import {
    SecretKey
} from "./secret_key";
import {
    getGroup
} from "./srp_groups";
export var AuthParams = t.readonly(t.type({
    method: t.string,
    alg: t.string,
    iterations: t.number,
    salt: t.string
}), "AuthParams");
export var Auth;
! function(t) {
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
            a = t.sessionId,
            i = sjcl.hash.sha256.hash.bind(sjcl.hash.sha256),
            s = getMethodGroup(e.params.method),
            u = s.g,
            c = s.N,
            l = toBn(e.srpX),
            h = toBn(r),
            f = toBn(o);
        if (f.mod(c).equals(BigInteger.ZERO)) throw new Error("Invalid SRP B value");
        var p = toBn(util.bytesToHex(util.str2ab(a))),
            d = toBn(sjcl.codec.hex.fromBits(i(n + o))),
            m = h.add(d.multiply(l)),
            g = f.subtract(u.modPow(l, c).multiply(p)),
            _ = toServerHex(g.modPow(m, c));
        return new Uint8Array(sjcl.codec.bytes.fromBits(i(_)))
    }
}(Auth || (Auth = {}));
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
            var r, n, o, a, i, s, u, c, l, h;
            return __generator(this, function(f) {
                switch (f.label) {
                    case 0:
                        return r = cleanCredentials(t), n = r.email, o = r.secretKey, a = r.password, i = util.base64urlToBytes(e.salt), s = util.str2ab(n), u = util.str2ab(e.method), c = kdf.HKDF("sha256", i, u, s, 32), [4, kdf.PBES2(e.alg, a, c, e.iterations)];
                    case 1:
                        return l = f.sent(), h = SecretKey.combineWithBytes(l, o), [2, util.bytesToHex(h)]
                }
            })
        })
    },
    v1ComputeX = function(t, e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, o, a, i, s, u, c, l;
            return __generator(this, function(h) {
                switch (h.label) {
                    case 0:
                        return r = cleanCredentials(t), n = r.email, o = r.secretKey, a = r.password, i = util.base64urlToBytes(e.salt), [4, kdf.PBES2(e.alg, util.prehash(a), i, e.iterations)];
                    case 1:
                        return s = h.sent(), u = SecretKey.combineWithBytes(s, o), (c = new sjcl.hash.sha1).update(util.bytesToBits(i)), c.update(sjcl.hash.sha1.hash(n + ":" + util.bytesToHex(u))), l = c.finalize(), [2, sjcl.codec.hex.fromBits(l)]
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
        return new BigInteger(t, 16)
    },
    toServerHex = function(t) {
        return t.toString(16).replace(/^(0x)?0*/, "")
    },
    getMethodPrefix = function(t) {
        var e = ["SRP-", "SRPg-"].find(function(e) {
            return startsWith(t, e)
        });
        if (!e) throw new Error("Invalid method");
        return e
    },
    getMethodGroup = function(t) {
        var e = getMethodPrefix(t);
        return getGroup(t.slice(e.length))
    };