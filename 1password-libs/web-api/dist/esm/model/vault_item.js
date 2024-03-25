var __awaiter = this && this.__awaiter || function(t, e, i, r) {
        return new(i || (i = Promise))(function(n, a) {
            function o(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function s(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function u(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
                    t(e)
                })).then(o, s)
            }
            u((r = r.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var i, r, n, a, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
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
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (i = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, a[1])).done) return n;
                        switch (r = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, r = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < n[1]) {
                                    o.label = n[1], n = a;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(a);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = e.call(t, o)
                    } catch (t) {
                        a = [6, t], r = 0
                    } finally {
                        i = n = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, s])
            }
        }
    },
    __values = this && this.__values || function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            i = e && t[e],
            r = 0;
        if (i) return i.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(t, e) {
        var i = "function" == typeof Symbol && t[Symbol.iterator];
        if (!i) return t;
        var r, n, a = i.call(t),
            o = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = a.next()).done;) o.push(r.value)
        } catch (t) {
            n = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (i = a.return) && i.call(a)
            } finally {
                if (n) throw n.error
            }
        }
        return o
    },
    __spread = this && this.__spread || function() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(__read(arguments[e]));
        return t
    };
import {
    clamp,
    cloneDeep,
    compact,
    find,
    findIndex,
    round,
    startsWith
} from "lodash-es";
import moment from "moment";
import * as util from "../util";
import {
    isValidNumber
} from "../util";
import {
    errorHandler as eh
} from "../util/error_handler";
import {
    VaultItemTemplate
} from "./vault_item_template";
var codeLocation = "model/vault_item",
    errorHandler = eh(codeLocation);
export var PASSWORD_STRENGTH;
! function(t) {
    t[t.FANTASTIC = 100] = "FANTASTIC", t[t.EXCELLENT = 85] = "EXCELLENT", t[t.VERY_GOOD = 73] = "VERY_GOOD", t[t.GOOD = 60] = "GOOD", t[t.FAIR = 53] = "FAIR", t[t.WEAK = 44] = "WEAK", t[t.TERRIBLE = 26] = "TERRIBLE"
}(PASSWORD_STRENGTH || (PASSWORD_STRENGTH = {}));
export var PASSWORD_ENTROPY;
! function(t) {
    t[t.FANTASTIC = 75] = "FANTASTIC", t[t.EXCELLENT = 64] = "EXCELLENT", t[t.VERY_GOOD = 55] = "VERY_GOOD", t[t.GOOD = 45] = "GOOD", t[t.FAIR = 40] = "FAIR", t[t.WEAK = 33] = "WEAK", t[t.TERRIBLE = 20] = "TERRIBLE"
}(PASSWORD_ENTROPY || (PASSWORD_ENTROPY = {}));
var VaultItem = function() {
    function t(e, i, r) {
        var n = this;
        this.addToPasswordHistory = function(t) {
            n.details.passwordHistory || (n.details.passwordHistory = []);
            var e = {
                time: Math.floor(Date.now() / 1e3),
                value: t
            };
            n.details.passwordHistory.push(e)
        }, this.getSortedPasswordHistory = function() {
            return n.details && n.details.passwordHistory ? n.details.passwordHistory.slice().sort(function(t, e) {
                return e.time - t.time
            }) : []
        }, this.parseTemplate = function(e) {
            var i, r, a, o;
            if (e && (n.templateUuid = e.uuid, e.attrs && e.attrs.contents)) {
                var s = e.attrs.contents,
                    u = e.attrs.localizedStrings;
                try {
                    for (var l = __values(s), d = l.next(); !d.done; d = l.next()) {
                        var c = d.value,
                            p = c.fields,
                            f = [];
                        if (p) try {
                            for (var h = (a = void 0, __values(p)), v = h.next(); !v.done; v = h.next()) {
                                var m = v.value,
                                    y = "";
                                m.type === t.FieldType.Address && (y = {
                                    street: "",
                                    city: "",
                                    country: "",
                                    zip: "",
                                    state: ""
                                }), m.type !== t.FieldType.MonthYear && m.type !== t.FieldType.Date || (y = void 0), f.push({
                                    k: m.type,
                                    n: m.name,
                                    v: y,
                                    t: m.title || u[m.name] || "",
                                    a: m.attributes,
                                    inputTraits: m.inputTraits,
                                    m: m.menuitems
                                })
                            }
                        } catch (t) {
                            a = {
                                error: t
                            }
                        } finally {
                            try {
                                v && !v.done && (o = h.return) && o.call(h)
                            } finally {
                                if (a) throw a.error
                            }
                        }
                        n.details.sections.push({
                            name: c.set,
                            title: c.title || u["set." + c.set] || "",
                            fields: f
                        })
                    }
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        d && !d.done && (r = l.return) && r.call(l)
                    } finally {
                        if (i) throw i.error
                    }
                }
            }
        }, this.decryptWithKey = function(t, e, i) {
            return __awaiter(n, void 0, void 0, function() {
                var r, n = this;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            this.encOverview = e, this.encDetails = i, a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]), [4, Promise.all(compact([t.decrypt(e).then(function(t) {
                                n.overview = util.ab2json(t)
                            }), i && t.decrypt(i).then(function(t) {
                                n.details = util.ab2json(t)
                            })]))];
                        case 2:
                            return a.sent(), [3, 4];
                        case 3:
                            return r = a.sent(), console.error("Item is corrupt:", this.vault.uuid, this.uuid, r), this.overview = {
                                title: "Corrupted Item",
                                url: "",
                                ainfo: "",
                                ps: 0,
                                pbe: 0,
                                pgrng: !1
                            }, [3, 4];
                        case 4:
                            return null !== this.details && "object" == typeof this.details && null !== this.overview && "object" == typeof this.overview || (this.overview = {
                                title: "Corrupted Item",
                                url: "",
                                ainfo: "",
                                ps: 0,
                                pbe: 0,
                                pgrng: !1
                            }, this.details = {
                                sections: []
                            }, console.error("Item is corrupt:", this.vault.uuid, this.uuid)), Array.isArray(this.details.sections) || (this.details.sections = []), [2, this]
                    }
                })
            })
        }, this.decrypt = function(t, e) {
            return __awaiter(n, void 0, void 0, function() {
                return __generator(this, function(i) {
                    if (!this.vault.activeKey) throw new Error("Missing vault's active key");
                    return [2, this.decryptWithKey(this.vault.activeKey, t, e)]
                })
            })
        }, this.encryptWithKey = function(t) {
            return Promise.resolve().then(function() {
                if (!n.details) throw new Error("Missing item details");
                return Promise.all([t.encrypt(util.json2ab(n.overview)), t.encrypt(util.json2ab(n.details))])
            }).catch(errorHandler("encryptWithKey"))
        }, this.encrypt = function() {
            return __awaiter(n, void 0, void 0, function() {
                var t, e, i, r;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (!(t = this.vault.activeKey)) throw new Error("Missing vault's active key");
                            return [4, this.encryptWithKey(t)];
                        case 1:
                            return e = __read.apply(void 0, [n.sent(), 2]), i = e[0], r = e[1], this.encryptedBy = t.uuid, this.encOverview = i, this.encDetails = r, [2, this]
                    }
                })
            })
        }, this.clone = function() {
            var e = cloneDeep(n),
                i = new t(n.vault);
            return i.overview = e.overview, i.details = e.details, i.faveIndex = e.faveIndex, i.state = e.state, i.templateUuid = e.templateUuid, i.createdAt = e.createdAt, i.updatedAt = e.updatedAt, i
        }, this.exportToJson = function() {
            var t = {
                overview: n.overview,
                details: n.details,
                createdAt: n.createdAt,
                updatedAt: n.updatedAt,
                faveIndex: n.faveIndex || 0,
                trashed: n.state,
                templateUuid: n.templateUuid,
                uuid: n.uuid
            };
            return JSON.stringify(t)
        }, this.vault = e, this.uuid = r || util.generateUUID(), this.itemVersion = 0, this.createdAt = new Date, this.updatedAt = this.createdAt, this.state = "N", this.overview = {
            title: "",
            url: "",
            ainfo: "",
            ps: 0,
            pbe: 0,
            pgrng: !1,
            URLs: []
        }, this.details = {
            sections: [],
            fields: []
        }, this.isNewItem = !1, this.isRestoredItem = !1, this.parseTemplate(i)
    }
    return Object.defineProperty(t.prototype, "title", {
        get: function() {
            return this.overview.title || ""
        },
        set: function(t) {
            this.overview.title = t
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "subtitle", {
        get: function() {
            return this.templateUuid === VaultItemTemplate.SecureNoteUuid && this.notes ? this.notes.slice(0, 80).split("\n")[0] || "" : "string" != typeof this.overview.ainfo ? "" : this.overview.ainfo || ""
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "notes", {
        get: function() {
            return this.details && this.details.notesPlain || ""
        },
        set: function(t) {
            this.details.notesPlain = t, this.templateUuid === VaultItemTemplate.SecureNoteUuid && (this.overview.ainfo = t.slice(0, 80).split("\n")[0] || "")
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "tags", {
        get: function() {
            return this.overview.tags || []
        },
        set: function(t) {
            this.overview.tags = t || []
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.addTag = function(t) {
        var e = this.tags || [];
        e.includes(t) || (e.push(t), this.tags = e)
    }, t.prototype.removeTag = function(t) {
        var e = this.tags || [];
        e.includes(t) && (e.splice(e.indexOf(t), 1), this.tags = e)
    }, Object.defineProperty(t.prototype, "webFormFields", {
        get: function() {
            return this.details && this.details.fields || []
        },
        set: function(t) {
            this.details.fields = t
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "username", {
        get: function() {
            if (this.details && this.details.fields) return find(this.details.fields, function(t) {
                return "username" === t.designation
            })
        },
        set: function(t) {
            t && (this.details && this.details.fields ? this.details.fields.push(t) : this.details.fields = [t])
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "url", {
        get: function() {
            return this.overview && this.overview.url || ""
        },
        set: function(t) {
            this.overview.url = t;
            var e = {
                l: "",
                u: t
            };
            this.overview.URLs ? this.overview.URLs = __spread(this.overview.URLs, [e]) : this.overview.URLs = [e]
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.setUsername = function(t) {
        this.username ? this.username.value = t : this.username = {
            name: "username",
            value: t,
            type: "T",
            designation: "username"
        }, this.overview.ainfo = t
    }, t.prototype.getPassword = function() {
        if (this.details) {
            if (this.templateUuid === VaultItemTemplate.LoginUuid) {
                var t = find(this.details.fields, function(t) {
                    return "password" === t.designation
                });
                return t ? t.value : ""
            }
            return this.templateUuid === VaultItemTemplate.PasswordUuid ? this.details.password : void 0
        }
    }, t.prototype.setPassword = function(e, i, r) {
        if (void 0 === i && (i = !1), void 0 === r && (r = 0), this.details && (this.templateUuid === VaultItemTemplate.LoginUuid || this.templateUuid === VaultItemTemplate.PasswordUuid)) {
            var n = this.getPassword();
            n && n !== e && this.addToPasswordHistory(n), this.templateUuid === VaultItemTemplate.LoginUuid ? this.details.fields = setOrAddArrayElement(function(t) {
                return "password" === t.designation
            }, {
                name: "password",
                value: e,
                type: "P",
                designation: "password"
            }, this.details.fields) : this.templateUuid === VaultItemTemplate.PasswordUuid && (this.details.password = e), this.overview.pbe = i ? round(r, 6) : 0, this.overview.pgrng = i;
            var a = i ? t.getPasswordStrengthFromEntropy(r) : util.calculatePasswordStrength(e, this.username ? this.username.value : "");
            this.overview.ps = round(a, 6)
        }
    }, t.prototype.getRichIconUrl = function(t) {
        if (void 0 === t && (t = 64), VaultItemTemplate.SoftwareUuid === this.templateUuid) return "https://c.1password.com/richicons/images/software/" + t + "/" + this.title.toLowerCase().replace(/[^\da-z]/, "") + ".png";
        if (VaultItemTemplate.LoginUuid === this.templateUuid) {
            var e = this.url;
            if (!e) return "";
            /^\w+:\/\//.test(e) || (e = "https://" + e);
            try {
                var i = new URL(e).hostname;
                return isValidRichIconDomain(i) ? "https://c.1password.com/richicons/images/login/" + t + "/" + i + ".png" : ""
            } catch (t) {
                return ""
            }
        }
        return ""
    }, Object.defineProperty(t.prototype, "passwordUpdatedAt", {
        get: function() {
            var t = this.getSortedPasswordHistory()[0];
            return t ? t.time : "string" == typeof this.getPassword() && this.createdAt ? Math.floor(this.createdAt.getTime() / 1e3) : 0
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.toString = function() {
        return "[object VaultItem]"
    }, t
}();
export {
    VaultItem
};
! function(t) {
    var e;
    ! function(t) {
        t.String = "string", t.Concealed = "concealed", t.Date = "date", t.Phone = "phone", t.Address = "address", t.Url = "URL", t.Email = "email", t.MonthYear = "monthYear", t.Gender = "gender", t.CreditCardType = "cctype", t.Reference = "reference", t.Menu = "menu", t.Country = "country", t.Month = "month", t.OneTimePassword = "totp", t.File = "file"
    }(e = t.FieldType || (t.FieldType = {})), t.TOTP_PREFIX = "TOTP_", t.isTotpField = function(i) {
        return i.k === e.Concealed && startsWith(i.n, t.TOTP_PREFIX)
    };
    t.MaxOverviewSize = 32768 / 1.5, t.MaxDetailSize = 4194304 / 1.5, t.FieldName = {
        CreditCard: {
            CreditCardNumber: "ccnum",
            Expiry: "expiry"
        },
        Identity: {
            FirstName: "firstname",
            LastName: "lastname"
        },
        Passport: {
            Expiry: "expiry_date"
        },
        DriverLicense: {
            Expiry: "expiry_date"
        },
        Membership: {
            Expiry: "expiry_date"
        },
        MedicalRecord: {
            Date: "date"
        }
    }, t.getDateValueFromString = function(t) {
        var e = moment.utc(t.trim(), "YYYY-MM-DD", !0).set({
            hours: 12,
            minutes: 1,
            seconds: 0,
            milliseconds: 0
        }).unix();
        return isValidNumber(e) ? e : void 0
    }, t.getDateStringFromValue = function(e) {
        if ("number" != typeof e) return "";
        var i = moment.utc(e, "X").format("YYYY-MM-DD");
        return t.getDateValueFromString(i) === e ? i : moment(e, "X").format("YYYY-MM-DD")
    }, t.findFieldWithName = function(t, e) {
        var i, r;
        if (e.details && e.details.sections) try {
            for (var n = __values(e.details.sections), a = n.next(); !a.done; a = n.next()) {
                var o = a.value,
                    s = find(o.fields, function(e) {
                        return e.n === t
                    });
                if (s) return s
            }
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                a && !a.done && (r = n.return) && r.call(n)
            } finally {
                if (i) throw i.error
            }
        }
    };
    t.getHighlightedUrl = function(t) {
        var e = function(t) {
            try {
                return new URL(util.addProtocolToUrlIfNeeded(t)).hostname
            } catch (t) {
                return
            }
        }(t);
        if (!e) return [{
            type: "Plain",
            content: t
        }];
        var i = t.toLowerCase().indexOf(e);
        if (-1 === i) return [{
            type: "Plain",
            content: t
        }];
        var r = i + e.length;
        return compact([0 !== i && {
            type: "Plain",
            content: t.slice(0, i)
        }, {
            type: "Highlighted",
            content: t.slice(i, r)
        }, r !== t.length && {
            type: "Plain",
            content: t.slice(r)
        }])
    }, t.getAddressValue = function(t) {
        var e = t.v;
        if (isDictLike(e)) return {
            street: "string" == typeof e.street ? e.street : "",
            city: "string" == typeof e.city ? e.city : "",
            state: "string" == typeof e.state ? e.state : "",
            zip: "string" == typeof e.zip ? e.zip : "",
            country: "string" == typeof e.country ? e.country : ""
        }
    }, t.getStringValue = function(t) {
        return "value" in t && "string" == typeof t.value ? t.value : "v" in t && "string" == typeof t.v ? t.v : ""
    }, t.getNumberValue = function(t) {
        return "v" in t && "number" == typeof t.v && !Number.isNaN(t.v) ? t.v : void 0
    }, t.getDocumentAttributesFromField = function(e) {
        if (e.k === t.FieldType.File && "v" in e && "object" == typeof e.v) {
            var i = e.v;
            return null !== i && void 0 !== i ? i : void 0
        }
    }, t.getPasswordStrengthFromEntropy = function(t) {
        return clamp(t, 0, PASSWORD_ENTROPY.FANTASTIC) / PASSWORD_ENTROPY.FANTASTIC * 100
    }, t.getPasswordStrength = function(e, i, r, n) {
        return "boolean" == typeof r && r && "number" == typeof n ? t.getPasswordStrengthFromEntropy(n) : util.calculatePasswordStrength(e, i)
    }, t.getCreditCardSubtitle = function(t) {
        return t.length >= 8 ? t.slice(0, 4) + " **** " + t.slice(-4) : ""
    }, t.copyAsCorruptedItem = function(e) {
        var i = new t(e.vault, void 0, e.uuid);
        return i.overview = {
            title: "Corrupted Item",
            url: "",
            ainfo: "",
            ps: 0,
            pbe: 0,
            pgrng: !1
        }, i.details = {
            sections: []
        }, i.createdAt = e.createdAt, i.updatedAt = e.updatedAt, i.faveIndex = e.faveIndex, i.state = e.state, i.templateUuid = e.templateUuid, i.itemVersion = e.itemVersion, i
    }, t.importFromJson = function(e, i, r) {
        var n = JSON.parse(i),
            a = (null === r || void 0 === r ? void 0 : r.generateNewUuid) || !util.isValidItemUuid(n.uuid) ? void 0 : n.uuid,
            o = new t(e, void 0, a);
        return o.overview = n.overview, o.details = n.details, o.createdAt = n.createdAt ? new Date(n.createdAt) : new Date, o.updatedAt = n.updatedAt ? new Date(n.updatedAt) : new Date, o.faveIndex = n.faveIndex, o.state = n.trashed, o.templateUuid = n.templateUuid, o
    }
}(VaultItem || (VaultItem = {}));
var isDictLike = function(t) {
        return "object" == typeof t && null !== t
    },
    isValidRichIconDomain = function(t) {
        var e = t.split(".");
        return e.length >= 2 && e.every(function(t) {
            return t.length > 0
        })
    },
    setOrAddArrayElement = function(t, e, i) {
        if (void 0 === i) return [e];
        var r = findIndex(i, t);
        return r > -1 ? i.map(function(t, i) {
            return i === r ? e : t
        }) : __spread(i, [e])
    };