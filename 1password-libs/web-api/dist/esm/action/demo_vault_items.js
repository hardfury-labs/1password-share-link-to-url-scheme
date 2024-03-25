var __awaiter = this && this.__awaiter || function(e, t, n, a) {
        return new(n || (n = Promise))(function(r, o) {
            function i(e) {
                try {
                    u(a.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                try {
                    u(a.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var t;
                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(i, l)
            }
            u((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var n, a, r, o, i = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: l(0),
            throw: l(1),
            return: l(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function l(o) {
            return function(l) {
                return function(o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (n = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r;
                        switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return i.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, a = o[1], o = [0];
                                continue;
                            case 7:
                                o = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    i.label = o[1];
                                    break
                                }
                                if (6 === o[0] && i.label < r[1]) {
                                    i.label = r[1], r = o;
                                    break
                                }
                                if (r && i.label < r[2]) {
                                    i.label = r[2], i.ops.push(o);
                                    break
                                }
                                r[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        o = t.call(e, i)
                    } catch (e) {
                        o = [6, e], a = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, l])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var a, r, o = n.call(e),
            i = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(a = o.next()).done;) i.push(a.value)
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                a && !a.done && (n = o.return) && n.call(o)
            } finally {
                if (r) throw r.error
            }
        }
        return i
    };
import {
    clone,
    find,
    size
} from "lodash-es";
import moment from "moment";
import * as model from "../model";
import {
    VaultItem
} from "../model";
import * as util from "../util";
import {
    patchVaultItems
} from "./vault_item";
var DEMO_USERNAMES = ["wendy", "wendyappleseed", "wendy@appleseed.com"],
    DEMO_TAGS = ["has_credit_card", "has_address"];
export var generateDemoVaultItems = function(e, t, n, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, o, i, l, u, s, m, d, c, g, p, f, R, h, v, _, w, y, V, S, I, F, U, b, E, D, P, T;
        return __generator(this, function(A) {
            switch (A.label) {
                case 0:
                    return [4, e.session.get("/demo-data/websites.json", void 0, {
                        responseType: "json"
                    })];
                case 1:
                    for (r = A.sent(), o = clone(r), i = find(a, function(e) {
                            return e.uuid === model.VaultItemTemplate.LoginUuid
                        }), l = [], u = 1, s = 0; s < t; s++) m = new VaultItem(n, i), 0 === (d = size(o)) && (o = clone(r), d = size(o), u++), c = util.getRandomValueFromRange(0, d - 1), void 0 !== (g = Object.keys(o)[c]) && (delete o[g], p = u > 1 ? " (" + u.toString() + ")" : "", m.title = r[g] + p, m.overview.URLs = [{
                        l: "website",
                        u: "https://" + g
                    }], m.overview.url = "https://" + g, void 0 !== (f = DEMO_USERNAMES[util.getRandomValueFromRange(0, 2)]) && m.setUsername(f), R = __read(getGeneratedPassword(), 2), h = R[0], v = R[1], m.setPassword(h, !0, v), _ = 1 === util.getRandomValueFromRange(1, 40), m.faveIndex = _ ? 1 : 0, w = util.getRandomValueFromRange(moment().unix() - 31536e3, moment().unix()), m.createdAt = new Date(1e3 * w), m.updatedAt = new Date(1e3 * w), 1 === util.getRandomValueFromRange(1, 10) && (y = {
                        time: w - util.getRandomValueFromRange(2e6, 6e6),
                        value: getGeneratedPassword()[0]
                    }, m.details.passwordHistory = [y]), V = [], 1 === util.getRandomValueFromRange(1, 15) && (S = {
                        k: VaultItem.FieldType.Concealed,
                        n: VaultItem.TOTP_PREFIX + util.generateUUID(),
                        v: util.generateUUID(),
                        t: "one-time password"
                    }, I = {
                        name: util.generateUUID(),
                        title: "",
                        fields: [S]
                    }, V.push(I)), 1 === util.getRandomValueFromRange(1, 15) && (F = {
                        k: VaultItem.FieldType.Concealed,
                        n: util.generateUUID(),
                        v: getGeneratedPassword()[0],
                        t: "First pet's name?"
                    }, U = {
                        k: VaultItem.FieldType.Concealed,
                        n: util.generateUUID(),
                        v: getGeneratedPassword()[0],
                        t: "Mother's maiden name?"
                    }, b = {
                        name: util.generateUUID(),
                        title: "Security Questions",
                        fields: [F, U]
                    }, V.push(b)), 1 === util.getRandomValueFromRange(1, 15) && (E = {
                        k: VaultItem.FieldType.Email,
                        n: util.generateUUID(),
                        v: "support@" + g,
                        t: "email"
                    }, D = {
                        k: VaultItem.FieldType.Phone,
                        n: util.generateUUID(),
                        v: "1-800-" + util.getRandomValueFromRange(100, 999).toString() + "-" + util.getRandomValueFromRange(1e3, 9999).toString(),
                        t: "phone"
                    }, P = {
                        name: util.generateUUID(),
                        title: "Contact Info",
                        fields: [E, D]
                    }, V.push(P)), m.details.sections = V, 1 === util.getRandomValueFromRange(1, 15) && void 0 !== (T = DEMO_TAGS[util.getRandomValueFromRange(0, 1)]) && (m.tags = [T]), 1 === util.getRandomValueFromRange(1, 15) && (m.notes = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suam denique cuique naturam esse ad vivendum ducem."), l.push(m));
                    return [4, patchVaultItems(e, l, n)];
                case 2:
                    return A.sent(), [2]
            }
        })
    })
};
var getGeneratedPassword = function() {
    if (1 === util.getRandomValueFromRange(0, 1)) {
        var e = __read(util.generatePassphrase(util.getRandomValueFromRange(4, 5)), 2),
            t = e[0],
            n = e[1];
        return [t.join(" "), n]
    }
    var a = util.PASS_CHAR_SET.UPPERCASE + util.PASS_CHAR_SET.LOWERCASE + util.PASS_CHAR_SET.DIGITS;
    return util.generatePassword(a, util.getRandomValueFromRange(15, 25))
};