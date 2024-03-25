"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
        return __setModuleDefault(t, e), t
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function a(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, u)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
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
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], n = 0
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
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.deobfuscate = exports.obfuscate = void 0;
var sjcl = __importStar(require("sjcl")),
    util = __importStar(require("../util")),
    symmetric_key_constants_1 = require("./symmetric_key_constants"),
    symmetric_key_pf_1 = require("./symmetric_key_pf"),
    DEVICE_OBFUSCATION_KEY_UUID = "03h4kf8euth5ks9skel3lfis9s",
    DEVICE_OBFUSCATION_KEY_PADDING = "f737s0",
    STATIC_OBFUSCATION_KEY_UUID = "3tnqywhecddkhvl375l6yu7qri",
    STATIC_OBFUSCATION_KEY_TEXT = "Obfuscation Does Not Provide Security But It Doesn't Hurt",
    STATIC_OBFUSCATION_KEY = sjcl.codec.hex.fromBits(sjcl.hash.sha1.hash(STATIC_OBFUSCATION_KEY_TEXT)).slice(0, 32),
    obfuscate = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return t = util.str2ab(STATIC_OBFUSCATION_KEY), [4, (r = symmetric_key_pf_1.createSymmetricKey(STATIC_OBFUSCATION_KEY_UUID)).importRawKey(symmetric_key_constants_1.JWK_ALG_A256GCM, t)];
                    case 1:
                        return n.sent(), [2, r.encrypt(util.str2ab(e))]
                }
            })
        })
    };
exports.obfuscate = obfuscate;
var deobfuscate = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, n, i;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    if (!e) return [2, ""];
                    if (t = "", r = "", e.kid === DEVICE_OBFUSCATION_KEY_UUID) t = util.config.device.uuid + DEVICE_OBFUSCATION_KEY_PADDING, r = DEVICE_OBFUSCATION_KEY_UUID;
                    else {
                        if (e.kid !== STATIC_OBFUSCATION_KEY_UUID) throw new Error("Unrecognized key ID.");
                        t = STATIC_OBFUSCATION_KEY, r = STATIC_OBFUSCATION_KEY_UUID
                    }
                    if (32 !== t.length) throw new Error("Missing or invalid obfuscation key.");
                    return [4, (n = symmetric_key_pf_1.createSymmetricKey(r)).importRawKey(symmetric_key_constants_1.JWK_ALG_A256GCM, util.str2ab(t))];
                case 1:
                    return o.sent(), [4, n.decrypt(e)];
                case 2:
                    return i = o.sent(), [2, util.ab2str(i)]
            }
        })
    })
};
exports.deobfuscate = deobfuscate;