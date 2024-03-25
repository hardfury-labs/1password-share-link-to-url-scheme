var __extends = this && this.__extends || function() {
        var t = function(e, r) {
            return (t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                })(e, r)
        };
        return function(e, r) {
            function n() {
                this.constructor = e
            }
            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
        }
    }(),
    __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(o, i) {
            function s(t) {
                try {
                    c(n.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function a(t) {
                try {
                    c(n.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(s, a)
            }
            c((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, o, i, s = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function a(i) {
            return function(a) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return s.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < o[1]) {
                                    s.label = o[1], o = i;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(i);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = e.call(t, s)
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
                }([i, a])
            }
        }
    };
import * as sjcl from "sjcl";
import * as util from "../util";
export var PBES2_ALG_256 = "PBES2-HS256";
export var PBES2_ALG_512 = "PBES2-HS512";
export var PBES2_ALG_256_G = "PBES2g-HS256";
export var PBES2_ALG_512_G = "PBES2g-HS512";
export var DEFAULT_ALG = PBES2_ALG_256_G;
export var DEFAULT_ITERATIONS = 1e5;
var sjclPbes2 = function(t, e, r, n, o) {
        return Promise.resolve().then(function() {
            var i, s = o;
            if ("SHA-512" === n) i = function(t) {
                function e(e) {
                    return t.call(this, e, sjcl.hash.sha512) || this
                }
                return __extends(e, t), e
            }(sjcl.misc.hmac);
            else {
                if ("SHA-256" !== n) return Promise.reject(new Error("Unknown hashname"));
                i = function(t) {
                    function e(e) {
                        return t.call(this, e, sjcl.hash.sha256) || this
                    }
                    return __extends(e, t), e
                }(sjcl.misc.hmac)
            }
            var a = util.bytesToBits(e),
                c = sjcl.misc.pbkdf2(t, a, r, s, i),
                u = new Uint8Array(sjcl.codec.bytes.fromBits(c));
            return Promise.resolve(u)
        })
    },
    pbes2Promise = function(t, e, r, n, o) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (!util.crypto.supports.nativePbes2) return [2, sjclPbes2(t, e, r, n, o)];
                        i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), [4, nativePBES2(t, e, r, n, o)];
                    case 2:
                        return [2, i.sent()];
                    case 3:
                        return i.sent(), [2, sjclPbes2(t, e, r, n, o)];
                    case 4:
                        return [2]
                }
            })
        })
    };
export var nativePBES2 = function(t, e, r, n, o) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i, s, a, c, u, l;
        return __generator(this, function(f) {
            switch (f.label) {
                case 0:
                    return i = {
                        name: "PBKDF2"
                    }, s = !1, a = ["deriveBits"], [4, util.crypto.subtle.importKey("raw", util.str2ab(t), i, s, a).catch(function(t) {
                        throw new Error("crypto.subtle.importKey failed: " + t.message)
                    })];
                case 1:
                    return c = f.sent(), u = {
                        name: "PBKDF2",
                        salt: e,
                        iterations: r,
                        hash: {
                            name: n
                        }
                    }, [4, util.crypto.subtle.deriveBits(u, c, o).catch(function(t) {
                        throw new Error("crypto.subtle.deriveBits failed: " + t.message)
                    })];
                case 2:
                    return l = f.sent(), [2, new Uint8Array(l)]
            }
        })
    })
};
export var PBES2 = function(t, e, r, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(o) {
            if (t === PBES2_ALG_512 || t === PBES2_ALG_512_G) return [2, pbes2Promise(e, r, n, "SHA-512", 512)];
            if (t === PBES2_ALG_256 || t === PBES2_ALG_256_G) return [2, pbes2Promise(e, r, n, "SHA-256", 256)];
            throw new Error("Invalid PBES2 alg: " + t)
        })
    })
};
export var HKDF = function(t, e, r, n, o) {
    var i, s;
    if ("SHA256" === t.toUpperCase()) i = sjcl.hash.sha256, s = 32;
    else {
        if ("SHA512" !== t.toUpperCase()) {
            var a = new Error("Invalid hash function name");
            throw console.error(a, t), a
        }
        i = sjcl.hash.sha512, s = 64
    }
    var c = new sjcl.misc.hmac(util.bytesToBits(n), i);
    c.update(util.bytesToBits(e));
    for (var u = c.digest(), l = Math.ceil(o / s), f = sjcl.codec.hex.toBits(""), h = "", p = util.bytesToBits(r), _ = 0; _ < l; _++) {
        var v = new sjcl.misc.hmac(u, i),
            b = sjcl.bitArray.concat(sjcl.bitArray.concat(f, p), sjcl.codec.utf8String.toBits(String.fromCharCode(_ + 1)));
        v.update(b), f = v.digest(), h += sjcl.codec.hex.fromBits(f)
    }
    var y = sjcl.bitArray.clamp(sjcl.codec.hex.toBits(h), 8 * o);
    return new Uint8Array(sjcl.codec.bytes.fromBits(y))
};