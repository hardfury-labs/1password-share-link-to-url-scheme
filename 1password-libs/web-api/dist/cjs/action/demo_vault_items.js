"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
        void 0 === n && (n = a), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[a]
            }
        })
    } : function(e, t, a, n) {
        void 0 === n && (n = a), e[n] = t[a]
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
            for (var a in e) "default" !== a && Object.prototype.hasOwnProperty.call(e, a) && __createBinding(t, e, a);
        return __setModuleDefault(t, e), t
    },
    __awaiter = this && this.__awaiter || function(e, t, a, n) {
        return new(a || (a = Promise))(function(r, o) {
            function i(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var t;
                e.done ? r(e.value) : (t = e.value, t instanceof a ? t : new a(function(e) {
                    e(t)
                })).then(i, l)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var a, n, r, o, i = {
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
                    if (a) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (a = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                        switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
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
                                i.label++, n = o[1], o = [0];
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
                        o = [6, e], n = 0
                    } finally {
                        a = r = 0
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
        var a = "function" == typeof Symbol && e[Symbol.iterator];
        if (!a) return e;
        var n, r, o = a.call(e),
            i = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = o.next()).done;) i.push(n.value)
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (a = o.return) && a.call(o)
            } finally {
                if (r) throw r.error
            }
        }
        return i
    },
    __importDefault = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.generateDemoVaultItems = void 0;
var lodash_es_1 = require("lodash-es"),
    moment_1 = __importDefault(require("moment")),
    model = __importStar(require("../model")),
    model_1 = require("../model"),
    util = __importStar(require("../util")),
    vault_item_1 = require("./vault_item"),
    DEMO_USERNAMES = ["wendy", "wendyappleseed", "wendy@appleseed.com"],
    DEMO_TAGS = ["has_credit_card", "has_address"],
    generateDemoVaultItems = function(e, t, a, n) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, o, i, l, u, s, d, m, _, c, f, g, p, h, v, R, y, w, S, V, b, I, D, F, U, P, E, T;
            return __generator(this, function(A) {
                switch (A.label) {
                    case 0:
                        return [4, e.session.get("/demo-data/websites.json", void 0, {
                            responseType: "json"
                        })];
                    case 1:
                        for (r = A.sent(), o = lodash_es_1.clone(r), i = lodash_es_1.find(n, function(e) {
                                return e.uuid === model.VaultItemTemplate.LoginUuid
                            }), l = [], u = 1, s = 0; s < t; s++) d = new model_1.VaultItem(a, i), 0 === (m = lodash_es_1.size(o)) && (o = lodash_es_1.clone(r), m = lodash_es_1.size(o), u++), _ = util.getRandomValueFromRange(0, m - 1), void 0 !== (c = Object.keys(o)[_]) && (delete o[c], f = u > 1 ? " (" + u.toString() + ")" : "", d.title = r[c] + f, d.overview.URLs = [{
                            l: "website",
                            u: "https://" + c
                        }], d.overview.url = "https://" + c, void 0 !== (g = DEMO_USERNAMES[util.getRandomValueFromRange(0, 2)]) && d.setUsername(g), p = __read(getGeneratedPassword(), 2), h = p[0], v = p[1], d.setPassword(h, !0, v), R = 1 === util.getRandomValueFromRange(1, 40), d.faveIndex = R ? 1 : 0, y = util.getRandomValueFromRange(moment_1.default().unix() - 31536e3, moment_1.default().unix()), d.createdAt = new Date(1e3 * y), d.updatedAt = new Date(1e3 * y), 1 === util.getRandomValueFromRange(1, 10) && (w = {
                            time: y - util.getRandomValueFromRange(2e6, 6e6),
                            value: getGeneratedPassword()[0]
                        }, d.details.passwordHistory = [w]), S = [], 1 === util.getRandomValueFromRange(1, 15) && (V = {
                            k: model_1.VaultItem.FieldType.Concealed,
                            n: model_1.VaultItem.TOTP_PREFIX + util.generateUUID(),
                            v: util.generateUUID(),
                            t: "one-time password"
                        }, b = {
                            name: util.generateUUID(),
                            title: "",
                            fields: [V]
                        }, S.push(b)), 1 === util.getRandomValueFromRange(1, 15) && (I = {
                            k: model_1.VaultItem.FieldType.Concealed,
                            n: util.generateUUID(),
                            v: getGeneratedPassword()[0],
                            t: "First pet's name?"
                        }, D = {
                            k: model_1.VaultItem.FieldType.Concealed,
                            n: util.generateUUID(),
                            v: getGeneratedPassword()[0],
                            t: "Mother's maiden name?"
                        }, F = {
                            name: util.generateUUID(),
                            title: "Security Questions",
                            fields: [I, D]
                        }, S.push(F)), 1 === util.getRandomValueFromRange(1, 15) && (U = {
                            k: model_1.VaultItem.FieldType.Email,
                            n: util.generateUUID(),
                            v: "support@" + c,
                            t: "email"
                        }, P = {
                            k: model_1.VaultItem.FieldType.Phone,
                            n: util.generateUUID(),
                            v: "1-800-" + util.getRandomValueFromRange(100, 999).toString() + "-" + util.getRandomValueFromRange(1e3, 9999).toString(),
                            t: "phone"
                        }, E = {
                            name: util.generateUUID(),
                            title: "Contact Info",
                            fields: [U, P]
                        }, S.push(E)), d.details.sections = S, 1 === util.getRandomValueFromRange(1, 15) && void 0 !== (T = DEMO_TAGS[util.getRandomValueFromRange(0, 1)]) && (d.tags = [T]), 1 === util.getRandomValueFromRange(1, 15) && (d.notes = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suam denique cuique naturam esse ad vivendum ducem."), l.push(d));
                        return [4, vault_item_1.patchVaultItems(e, l, a)];
                    case 2:
                        return A.sent(), [2]
                }
            })
        })
    };
exports.generateDemoVaultItems = generateDemoVaultItems;
var getGeneratedPassword = function() {
    if (1 === util.getRandomValueFromRange(0, 1)) {
        var e = __read(util.generatePassphrase(util.getRandomValueFromRange(4, 5)), 2),
            t = e[0],
            a = e[1];
        return [t.join(" "), a]
    }
    var n = util.PASS_CHAR_SET.UPPERCASE + util.PASS_CHAR_SET.LOWERCASE + util.PASS_CHAR_SET.DIGITS;
    return util.generatePassword(n, util.getRandomValueFromRange(15, 25))
};