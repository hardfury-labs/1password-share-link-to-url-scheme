var __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function a(t) {
                try {
                    u(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                try {
                    u(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(a, c)
            }
            u((n = n.apply(t, e || [])).next())
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
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function c(o) {
            return function(c) {
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
                }([o, c])
            }
        }
    };
import * as sjcl from "sjcl";
import * as util from "../util";
import {
    JWK_ALG_A256GCM
} from "./symmetric_key_constants";
import {
    createSymmetricKey
} from "./symmetric_key_pf";
var DEVICE_OBFUSCATION_KEY_UUID = "03h4kf8euth5ks9skel3lfis9s",
    DEVICE_OBFUSCATION_KEY_PADDING = "f737s0",
    STATIC_OBFUSCATION_KEY_UUID = "3tnqywhecddkhvl375l6yu7qri",
    STATIC_OBFUSCATION_KEY_TEXT = "Obfuscation Does Not Provide Security But It Doesn't Hurt",
    STATIC_OBFUSCATION_KEY = sjcl.codec.hex.fromBits(sjcl.hash.sha1.hash(STATIC_OBFUSCATION_KEY_TEXT)).slice(0, 32);
export var obfuscate = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, r;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return e = util.str2ab(STATIC_OBFUSCATION_KEY), [4, (r = createSymmetricKey(STATIC_OBFUSCATION_KEY_UUID)).importRawKey(JWK_ALG_A256GCM, e)];
                case 1:
                    return n.sent(), [2, r.encrypt(util.str2ab(t))]
            }
        })
    })
};
export var deobfuscate = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, r, n, i;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    if (!t) return [2, ""];
                    if (e = "", r = "", t.kid === DEVICE_OBFUSCATION_KEY_UUID) e = util.config.device.uuid + DEVICE_OBFUSCATION_KEY_PADDING, r = DEVICE_OBFUSCATION_KEY_UUID;
                    else {
                        if (t.kid !== STATIC_OBFUSCATION_KEY_UUID) throw new Error("Unrecognized key ID.");
                        e = STATIC_OBFUSCATION_KEY, r = STATIC_OBFUSCATION_KEY_UUID
                    }
                    if (32 !== e.length) throw new Error("Missing or invalid obfuscation key.");
                    return [4, (n = createSymmetricKey(r)).importRawKey(JWK_ALG_A256GCM, util.str2ab(e))];
                case 1:
                    return o.sent(), [4, n.decrypt(t)];
                case 2:
                    return i = o.sent(), [2, util.ab2str(i)]
            }
        })
    })
};