"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, i, r) {
        void 0 === r && (r = i), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
                return t[i]
            }
        })
    } : function(e, t, i, r) {
        void 0 === r && (r = i), e[r] = t[i]
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
            for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && __createBinding(t, e, i);
        return __setModuleDefault(t, e), t
    },
    __awaiter = this && this.__awaiter || function(e, t, i, r) {
        return new(i || (i = Promise))(function(n, a) {
            function s(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function o(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                    e(t)
                })).then(s, o)
            }
            u((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var i, r, n, a, s = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function o(a) {
            return function(o) {
                return function(a) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (i = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, a[1])).done) return n;
                        switch (r = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = s.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < n[1]) {
                                    s.label = n[1], n = a;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(a);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = t.call(e, s)
                    } catch (e) {
                        a = [6, e], r = 0
                    } finally {
                        i = n = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, o])
            }
        }
    },
    __values = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            i = t && e[t],
            r = 0;
        if (i) return i.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(e, t) {
        var i = "function" == typeof Symbol && e[Symbol.iterator];
        if (!i) return e;
        var r, n, a = i.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = a.next()).done;) s.push(r.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (i = a.return) && i.call(a)
            } finally {
                if (n) throw n.error
            }
        }
        return s
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    },
    __importDefault = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.VaultItem = exports.PASSWORD_ENTROPY = exports.PASSWORD_STRENGTH = void 0;
var PASSWORD_STRENGTH, PASSWORD_ENTROPY, lodash_es_1 = require("lodash-es"),
    moment_1 = __importDefault(require("moment")),
    util = __importStar(require("../util")),
    util_1 = require("../util"),
    error_handler_1 = require("../util/error_handler"),
    vault_item_template_1 = require("./vault_item_template"),
    codeLocation = "model/vault_item",
    errorHandler = error_handler_1.errorHandler(codeLocation);
! function(e) {
    e[e.FANTASTIC = 100] = "FANTASTIC", e[e.EXCELLENT = 85] = "EXCELLENT", e[e.VERY_GOOD = 73] = "VERY_GOOD", e[e.GOOD = 60] = "GOOD", e[e.FAIR = 53] = "FAIR", e[e.WEAK = 44] = "WEAK", e[e.TERRIBLE = 26] = "TERRIBLE"
}(PASSWORD_STRENGTH = exports.PASSWORD_STRENGTH || (exports.PASSWORD_STRENGTH = {})),
function(e) {
    e[e.FANTASTIC = 75] = "FANTASTIC", e[e.EXCELLENT = 64] = "EXCELLENT", e[e.VERY_GOOD = 55] = "VERY_GOOD", e[e.GOOD = 45] = "GOOD", e[e.FAIR = 40] = "FAIR", e[e.WEAK = 33] = "WEAK", e[e.TERRIBLE = 20] = "TERRIBLE"
}(PASSWORD_ENTROPY = exports.PASSWORD_ENTROPY || (exports.PASSWORD_ENTROPY = {}));
var VaultItem = function() {
    function e(t, i, r) {
        var n = this;
        this.addToPasswordHistory = function(e) {
            n.details.passwordHistory || (n.details.passwordHistory = []);
            var t = {
                time: Math.floor(Date.now() / 1e3),
                value: e
            };
            n.details.passwordHistory.push(t)
        }, this.getSortedPasswordHistory = function() {
            return n.details && n.details.passwordHistory ? n.details.passwordHistory.slice().sort(function(e, t) {
                return t.time - e.time
            }) : []
        }, this.parseTemplate = function(t) {
            var i, r, a, s;
            if (t && (n.templateUuid = t.uuid, t.attrs && t.attrs.contents)) {
                var o = t.attrs.contents,
                    u = t.attrs.localizedStrings;
                try {
                    for (var l = __values(o), d = l.next(); !d.done; d = l.next()) {
                        var c = d.value,
                            p = c.fields,
                            f = [];
                        if (p) try {
                            for (var h = (a = void 0, __values(p)), v = h.next(); !v.done; v = h.next()) {
                                var m = v.value,
                                    _ = "";
                                m.type === e.FieldType.Address && (_ = {
                                    street: "",
                                    city: "",
                                    country: "",
                                    zip: "",
                                    state: ""
                                }), m.type !== e.FieldType.MonthYear && m.type !== e.FieldType.Date || (_ = void 0), f.push({
                                    k: m.type,
                                    n: m.name,
                                    v: _,
                                    t: m.title || u[m.name] || "",
                                    a: m.attributes,
                                    inputTraits: m.inputTraits,
                                    m: m.menuitems
                                })
                            }
                        } catch (e) {
                            a = {
                                error: e
                            }
                        } finally {
                            try {
                                v && !v.done && (s = h.return) && s.call(h)
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
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        d && !d.done && (r = l.return) && r.call(l)
                    } finally {
                        if (i) throw i.error
                    }
                }
            }
        }, this.decryptWithKey = function(e, t, i) {
            return __awaiter(n, void 0, void 0, function() {
                var r, n = this;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            this.encOverview = t, this.encDetails = i, a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]), [4, Promise.all(lodash_es_1.compact([e.decrypt(t).then(function(e) {
                                n.overview = util.ab2json(e)
                            }), i && e.decrypt(i).then(function(e) {
                                n.details = util.ab2json(e)
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
        }, this.decrypt = function(e, t) {
            return __awaiter(n, void 0, void 0, function() {
                return __generator(this, function(i) {
                    if (!this.vault.activeKey) throw new Error("Missing vault's active key");
                    return [2, this.decryptWithKey(this.vault.activeKey, e, t)]
                })
            })
        }, this.encryptWithKey = function(e) {
            return Promise.resolve().then(function() {
                if (!n.details) throw new Error("Missing item details");
                return Promise.all([e.encrypt(util.json2ab(n.overview)), e.encrypt(util.json2ab(n.details))])
            }).catch(errorHandler("encryptWithKey"))
        }, this.encrypt = function() {
            return __awaiter(n, void 0, void 0, function() {
                var e, t, i, r;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (!(e = this.vault.activeKey)) throw new Error("Missing vault's active key");
                            return [4, this.encryptWithKey(e)];
                        case 1:
                            return t = __read.apply(void 0, [n.sent(), 2]), i = t[0], r = t[1], this.encryptedBy = e.uuid, this.encOverview = i, this.encDetails = r, [2, this]
                    }
                })
            })
        }, this.clone = function() {
            var t = lodash_es_1.cloneDeep(n),
                i = new e(n.vault);
            return i.overview = t.overview, i.details = t.details, i.faveIndex = t.faveIndex, i.state = t.state, i.templateUuid = t.templateUuid, i.createdAt = t.createdAt, i.updatedAt = t.updatedAt, i
        }, this.exportToJson = function() {
            var e = {
                overview: n.overview,
                details: n.details,
                createdAt: n.createdAt,
                updatedAt: n.updatedAt,
                faveIndex: n.faveIndex || 0,
                trashed: n.state,
                templateUuid: n.templateUuid,
                uuid: n.uuid
            };
            return JSON.stringify(e)
        }, this.vault = t, this.uuid = r || util.generateUUID(), this.itemVersion = 0, this.createdAt = new Date, this.updatedAt = this.createdAt, this.state = "N", this.overview = {
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
    return Object.defineProperty(e.prototype, "title", {
        get: function() {
            return this.overview.title || ""
        },
        set: function(e) {
            this.overview.title = e
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "subtitle", {
        get: function() {
            return this.templateUuid === vault_item_template_1.VaultItemTemplate.SecureNoteUuid && this.notes ? this.notes.slice(0, 80).split("\n")[0] || "" : "string" != typeof this.overview.ainfo ? "" : this.overview.ainfo || ""
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "notes", {
        get: function() {
            return this.details && this.details.notesPlain || ""
        },
        set: function(e) {
            this.details.notesPlain = e, this.templateUuid === vault_item_template_1.VaultItemTemplate.SecureNoteUuid && (this.overview.ainfo = e.slice(0, 80).split("\n")[0] || "")
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "tags", {
        get: function() {
            return this.overview.tags || []
        },
        set: function(e) {
            this.overview.tags = e || []
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.addTag = function(e) {
        var t = this.tags || [];
        t.includes(e) || (t.push(e), this.tags = t)
    }, e.prototype.removeTag = function(e) {
        var t = this.tags || [];
        t.includes(e) && (t.splice(t.indexOf(e), 1), this.tags = t)
    }, Object.defineProperty(e.prototype, "webFormFields", {
        get: function() {
            return this.details && this.details.fields || []
        },
        set: function(e) {
            this.details.fields = e
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "username", {
        get: function() {
            if (this.details && this.details.fields) return lodash_es_1.find(this.details.fields, function(e) {
                return "username" === e.designation
            })
        },
        set: function(e) {
            e && (this.details && this.details.fields ? this.details.fields.push(e) : this.details.fields = [e])
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "url", {
        get: function() {
            return this.overview && this.overview.url || ""
        },
        set: function(e) {
            this.overview.url = e;
            var t = {
                l: "",
                u: e
            };
            this.overview.URLs ? this.overview.URLs = __spread(this.overview.URLs, [t]) : this.overview.URLs = [t]
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.setUsername = function(e) {
        this.username ? this.username.value = e : this.username = {
            name: "username",
            value: e,
            type: "T",
            designation: "username"
        }, this.overview.ainfo = e
    }, e.prototype.getPassword = function() {
        if (this.details) {
            if (this.templateUuid === vault_item_template_1.VaultItemTemplate.LoginUuid) {
                var e = lodash_es_1.find(this.details.fields, function(e) {
                    return "password" === e.designation
                });
                return e ? e.value : ""
            }
            return this.templateUuid === vault_item_template_1.VaultItemTemplate.PasswordUuid ? this.details.password : void 0
        }
    }, e.prototype.setPassword = function(t, i, r) {
        if (void 0 === i && (i = !1), void 0 === r && (r = 0), this.details && (this.templateUuid === vault_item_template_1.VaultItemTemplate.LoginUuid || this.templateUuid === vault_item_template_1.VaultItemTemplate.PasswordUuid)) {
            var n = this.getPassword();
            n && n !== t && this.addToPasswordHistory(n), this.templateUuid === vault_item_template_1.VaultItemTemplate.LoginUuid ? this.details.fields = setOrAddArrayElement(function(e) {
                return "password" === e.designation
            }, {
                name: "password",
                value: t,
                type: "P",
                designation: "password"
            }, this.details.fields) : this.templateUuid === vault_item_template_1.VaultItemTemplate.PasswordUuid && (this.details.password = t), this.overview.pbe = i ? lodash_es_1.round(r, 6) : 0, this.overview.pgrng = i;
            var a = i ? e.getPasswordStrengthFromEntropy(r) : util.calculatePasswordStrength(t, this.username ? this.username.value : "");
            this.overview.ps = lodash_es_1.round(a, 6)
        }
    }, e.prototype.getRichIconUrl = function(e) {
        if (void 0 === e && (e = 64), vault_item_template_1.VaultItemTemplate.SoftwareUuid === this.templateUuid) return "https://c.1password.com/richicons/images/software/" + e + "/" + this.title.toLowerCase().replace(/[^\da-z]/, "") + ".png";
        if (vault_item_template_1.VaultItemTemplate.LoginUuid === this.templateUuid) {
            var t = this.url;
            if (!t) return "";
            /^\w+:\/\//.test(t) || (t = "https://" + t);
            try {
                var i = new URL(t).hostname;
                return isValidRichIconDomain(i) ? "https://c.1password.com/richicons/images/login/" + e + "/" + i + ".png" : ""
            } catch (e) {
                return ""
            }
        }
        return ""
    }, Object.defineProperty(e.prototype, "passwordUpdatedAt", {
        get: function() {
            var e = this.getSortedPasswordHistory()[0];
            return e ? e.time : "string" == typeof this.getPassword() && this.createdAt ? Math.floor(this.createdAt.getTime() / 1e3) : 0
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.toString = function() {
        return "[object VaultItem]"
    }, e
}();
exports.VaultItem = VaultItem,
    function(e) {
        var t;
        ! function(e) {
            e.String = "string", e.Concealed = "concealed", e.Date = "date", e.Phone = "phone", e.Address = "address", e.Url = "URL", e.Email = "email", e.MonthYear = "monthYear", e.Gender = "gender", e.CreditCardType = "cctype", e.Reference = "reference", e.Menu = "menu", e.Country = "country", e.Month = "month", e.OneTimePassword = "totp", e.File = "file"
        }(t = e.FieldType || (e.FieldType = {})), e.TOTP_PREFIX = "TOTP_", e.isTotpField = function(i) {
            return i.k === t.Concealed && lodash_es_1.startsWith(i.n, e.TOTP_PREFIX)
        };
        e.MaxOverviewSize = 32768 / 1.5, e.MaxDetailSize = 4194304 / 1.5, e.FieldName = {
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
        }, e.getDateValueFromString = function(e) {
            var t = moment_1.default.utc(e.trim(), "YYYY-MM-DD", !0).set({
                hours: 12,
                minutes: 1,
                seconds: 0,
                milliseconds: 0
            }).unix();
            return util_1.isValidNumber(t) ? t : void 0
        }, e.getDateStringFromValue = function(t) {
            if ("number" != typeof t) return "";
            var i = moment_1.default.utc(t, "X").format("YYYY-MM-DD");
            return e.getDateValueFromString(i) === t ? i : moment_1.default(t, "X").format("YYYY-MM-DD")
        }, e.findFieldWithName = function(e, t) {
            var i, r;
            if (t.details && t.details.sections) try {
                for (var n = __values(t.details.sections), a = n.next(); !a.done; a = n.next()) {
                    var s = a.value,
                        o = lodash_es_1.find(s.fields, function(t) {
                            return t.n === e
                        });
                    if (o) return o
                }
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
        };
        e.getHighlightedUrl = function(e) {
            var t = function(e) {
                try {
                    return new URL(util.addProtocolToUrlIfNeeded(e)).hostname
                } catch (e) {
                    return
                }
            }(e);
            if (!t) return [{
                type: "Plain",
                content: e
            }];
            var i = e.toLowerCase().indexOf(t);
            if (-1 === i) return [{
                type: "Plain",
                content: e
            }];
            var r = i + t.length;
            return lodash_es_1.compact([0 !== i && {
                type: "Plain",
                content: e.slice(0, i)
            }, {
                type: "Highlighted",
                content: e.slice(i, r)
            }, r !== e.length && {
                type: "Plain",
                content: e.slice(r)
            }])
        }, e.getAddressValue = function(e) {
            var t = e.v;
            if (isDictLike(t)) return {
                street: "string" == typeof t.street ? t.street : "",
                city: "string" == typeof t.city ? t.city : "",
                state: "string" == typeof t.state ? t.state : "",
                zip: "string" == typeof t.zip ? t.zip : "",
                country: "string" == typeof t.country ? t.country : ""
            }
        }, e.getStringValue = function(e) {
            return "value" in e && "string" == typeof e.value ? e.value : "v" in e && "string" == typeof e.v ? e.v : ""
        }, e.getNumberValue = function(e) {
            return "v" in e && "number" == typeof e.v && !Number.isNaN(e.v) ? e.v : void 0
        }, e.getDocumentAttributesFromField = function(t) {
            if (t.k === e.FieldType.File && "v" in t && "object" == typeof t.v) {
                var i = t.v;
                return null !== i && void 0 !== i ? i : void 0
            }
        }, e.getPasswordStrengthFromEntropy = function(e) {
            return lodash_es_1.clamp(e, 0, PASSWORD_ENTROPY.FANTASTIC) / PASSWORD_ENTROPY.FANTASTIC * 100
        }, e.getPasswordStrength = function(t, i, r, n) {
            return "boolean" == typeof r && r && "number" == typeof n ? e.getPasswordStrengthFromEntropy(n) : util.calculatePasswordStrength(t, i)
        }, e.getCreditCardSubtitle = function(e) {
            return e.length >= 8 ? e.slice(0, 4) + " **** " + e.slice(-4) : ""
        }, e.copyAsCorruptedItem = function(t) {
            var i = new e(t.vault, void 0, t.uuid);
            return i.overview = {
                title: "Corrupted Item",
                url: "",
                ainfo: "",
                ps: 0,
                pbe: 0,
                pgrng: !1
            }, i.details = {
                sections: []
            }, i.createdAt = t.createdAt, i.updatedAt = t.updatedAt, i.faveIndex = t.faveIndex, i.state = t.state, i.templateUuid = t.templateUuid, i.itemVersion = t.itemVersion, i
        }, e.importFromJson = function(t, i, r) {
            var n = JSON.parse(i),
                a = (null === r || void 0 === r ? void 0 : r.generateNewUuid) || !util.isValidItemUuid(n.uuid) ? void 0 : n.uuid,
                s = new e(t, void 0, a);
            return s.overview = n.overview, s.details = n.details, s.createdAt = n.createdAt ? new Date(n.createdAt) : new Date, s.updatedAt = n.updatedAt ? new Date(n.updatedAt) : new Date, s.faveIndex = n.faveIndex, s.state = n.trashed, s.templateUuid = n.templateUuid, s
        }
    }(VaultItem = exports.VaultItem || (exports.VaultItem = {})), exports.VaultItem = VaultItem;
var isDictLike = function(e) {
        return "object" == typeof e && null !== e
    },
    isValidRichIconDomain = function(e) {
        var t = e.split(".");
        return t.length >= 2 && t.every(function(e) {
            return e.length > 0
        })
    },
    setOrAddArrayElement = function(e, t, i) {
        if (void 0 === i) return [t];
        var r = lodash_es_1.findIndex(i, e);
        return r > -1 ? i.map(function(e, i) {
            return i === r ? t : e
        }) : __spread(i, [t])
    };