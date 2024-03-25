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
        var r, a, s = i.call(e),
            n = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = s.next()).done;) n.push(r.value)
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (i = s.return) && i.call(s)
            } finally {
                if (a) throw a.error
            }
        }
        return n
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
}), exports.parseLastPassExport = void 0;
var HeaderField, compact_1 = __importDefault(require("lodash-es/compact")),
    find_1 = __importDefault(require("lodash-es/find")),
    includes_1 = __importDefault(require("lodash-es/includes")),
    keys_1 = __importDefault(require("lodash-es/keys")),
    some_1 = __importDefault(require("lodash-es/some")),
    moment_1 = __importDefault(require("moment")),
    model = __importStar(require("../../../model")),
    model_1 = require("../../../model"),
    util = __importStar(require("../../../util")),
    make_promise_1 = require("../../../util/make_promise"),
    vault_item_template_1 = require("../../vault_item_template"),
    utility_1 = require("../utility"),
    parser_helpers_1 = require("./helpers/parser_helpers"),
    codeLocation = "action/import/lastpass",
    makePromise = make_promise_1.makePromise(codeLocation);
! function(e) {
    e.url = "url", e.username = "username", e.password = "password", e.notes = "extra", e.title = "name", e.tags = "grouping", e.fav = "fav"
}(HeaderField || (HeaderField = {}));
var parseLastPassExport = function(e, t, i, r) {
    return makePromise("parseLastPassExportNew", function() {
        var a = parser_helpers_1.parseWithHeaders(t);
        if (a[0] && void 0 !== a[0].profilename) throw new Error(r["Form Fill importing is not supported. Please use a normal LastPass export file."]());
        return vault_item_template_1.getTemplates(e).then(function(e) {
            var t = e.find(function(e) {
                return e.uuid === model.VaultItemTemplate.LoginUuid
            });
            return a.map(function(a) {
                return "http://sn" === a[HeaderField.url] ? createItemFromLastPassNonLogin(a, i, e, r) : createItemFromLastPassLogin(a, i, t, r)
            })
        })
    })
};
exports.parseLastPassExport = parseLastPassExport;
var createItemFromLastPassNonLogin = function(e, t, i, r) {
        var a, s, n = getValueFromRecord(e, HeaderField.notes),
            d = getItemTemplate(i, n),
            o = new model_1.VaultItem(t, d),
            l = extractNoteContents(d, n),
            u = l.notes,
            c = l.fieldValues,
            m = getValueFromRecord(e, HeaderField.title),
            f = getValueFromRecord(e, HeaderField.tags),
            p = "1" === getValueFromRecord(e, HeaderField.fav) ? 1 : 0;
        o.title = m || d.singularName, o.notes = u, o.tags = folderNameToTags(f), o.faveIndex = p;
        var _ = lastPassFieldLocations[d.uuid];
        if (void 0 === _) return o;
        var v = function(e) {
            var t = c[e] || "",
                i = _[e];
            if (void 0 !== i) {
                var a = find_1.default(o.details.sections, function(e) {
                    return e.name === i.section
                });
                if (!a) return "continue";
                !some_1.default(null === a || void 0 === a ? void 0 : a.fields, function(e) {
                    if (e.n === i.field) {
                        i.v ? e.v = i.v(e, t) : e.v = convertLastPassFieldValue(t, e.k), e.k === model_1.VaultItem.FieldType.Concealed && addModifiedConcealedField(e, o, d, r);
                        var a = getItemOverview(d, e, o);
                        return "" !== a && (o.overview.ainfo = a), !0
                    }
                    return !1
                }) && i.field && t && (a.fields || (a.fields = []), a.fields.push(createField(model_1.VaultItem.FieldType.String, i.field, t)))
            } else {
                var s = find_1.default(o.details.sections, function(e) {
                    return e.title === r["Other Fields"]()
                });
                void 0 === s ? o.details.sections.push({
                    name: util.generateUUID(),
                    title: r["Other Fields"](),
                    fields: [createField(model_1.VaultItem.FieldType.String, e, t)]
                }) : (s.fields || (s.fields = []), s.fields.push(createField(model_1.VaultItem.FieldType.String, e, t)))
            }
        };
        try {
            for (var y = __values(keys_1.default(c)), h = y.next(); !h.done; h = y.next()) {
                v(h.value)
            }
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                h && !h.done && (s = y.return) && s.call(y)
            } finally {
                if (a) throw a.error
            }
        }
        return o
    },
    getNoteLPType = function(e) {
        var t = /^NoteType:(.+)/.exec(e);
        return void 0 !== (null === t || void 0 === t ? void 0 : t[0]) && void 0 !== (null === t || void 0 === t ? void 0 : t[1]) ? [t[0], t[1]] : ["", ""]
    },
    getItemTemplate = function(e, t) {
        var i = getNoteLPType(t),
            r = 2 === i.length && noteTypeUuids[i[1]] || model.VaultItemTemplate.SecureNoteUuid;
        return e.find(function(e) {
            return e.uuid === r
        })
    },
    extractNoteContents = function(e, t) {
        var i = getNoteLPType(t);
        if (e.uuid === model.VaultItemTemplate.SecureNoteUuid && "" === i[0]) return {
            notes: t,
            fieldValues: {}
        };
        var r = __read(t.slice(i[0].length).split("\nNotes:"), 2),
            a = r[0],
            s = r[1],
            n = {};
        return void 0 !== a && a.trim().split("\n").map(function(e) {
            var t = __read(e.split(/:(.+)?/, 2), 2),
                i = t[0],
                r = t[1];
            void 0 !== i && void 0 !== r && "Language" !== i && (n[i] = r)
        }), {
            notes: s ? s.trim() : "",
            fieldValues: n
        }
    },
    createItemFromLastPassLogin = function(e, t, i, r) {
        var a = new model_1.VaultItem(t),
            s = getValueFromRecord(e, HeaderField.url),
            n = getValueFromRecord(e, HeaderField.username),
            d = getValueFromRecord(e, HeaderField.password),
            o = getValueFromRecord(e, HeaderField.notes),
            l = getValueFromRecord(e, HeaderField.title),
            u = getValueFromRecord(e, HeaderField.tags),
            c = "1" === getValueFromRecord(e, HeaderField.fav) ? 1 : 0;
        a.templateUuid = model.VaultItemTemplate.LoginUuid, a.title = l || i.singularName, a.url = s, a.notes = o, a.tags = folderNameToTags(u), a.faveIndex = c;
        var m = unmangleString(n),
            f = unmangleString(d),
            p = compact_1.default([m !== n && createUsernameField(i, n), f !== d && createPasswordField(i, d)]);
        return p.length > 0 && (a.details.sections = __spread(a.details.sections, [createOriginalValuesSection(p, r)])), a.setUsername(m), a.setPassword(f), a
    },
    getValueFromRecord = function(e, t) {
        var i = e[t];
        return void 0 === i ? "" : i
    },
    unmangleString = function(e) {
        var t = getDecodedValueIfNeeded(e) || e;
        return stripLeadingSpaceIfNeeded(t) || e
    },
    getDecodedValueIfNeeded = function(e) {
        if (e) {
            var t = e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            if (e !== t) return t
        }
    },
    stripLeadingSpaceIfNeeded = function(e) {
        return e && /^ [+=-]/.test(e) && !/^ [+=-][\d.]+$/.test(e) ? e.slice(1) : e
    },
    createOriginalValuesSection = function(e, t) {
        return {
            name: util.generateUUID(),
            title: t["Original Values"](),
            fields: __spread(e, [createField(model_1.VaultItem.FieldType.Url, t["what's this?"](), "https://support.1password.com/import-lastpass/#get-help")])
        }
    },
    createUsernameField = function(e, t) {
        return createField(model.VaultItem.FieldType.String, e.attrs.localizedStrings.username || "username", t)
    },
    createPasswordField = function(e, t) {
        return createField(model.VaultItem.FieldType.Concealed, e.attrs.localizedStrings.password || "password", t)
    },
    createField = function(e, t, i) {
        return {
            k: e,
            n: util.generateUUID(),
            v: i,
            t: t
        }
    },
    folderNameToTags = function(e) {
        return e ? [e.replace(/\\/g, "/")] : []
    },
    handleLastPassIdentityAddressFields = function(e) {
        return function(t, i) {
            if ("object" == typeof t.v) {
                var r = t.v;
                return r[e] = i, r
            }
            return t.v
        }
    },
    handleLastPassIdentityAddressField = function(e, t) {
        if ("object" == typeof e.v) {
            var i = e.v;
            return i.street = [i.street, t].join(" "), i
        }
        return e.v
    },
    handleLastPassIdentityAddressCountry = function(e, t) {
        if ("object" == typeof e.v) {
            var i = e.v;
            return i.country = t.toLowerCase(), i
        }
        return e.v
    },
    convertLastPassPhoneNumber = function(e) {
        var t;
        if (void 0 === e || "" === e) return "";
        if ("{" !== e[0]) return e;
        try {
            t = JSON.parse(e)
        } catch (e) {
            return ""
        }
        if (void 0 === t) return "";
        var i = t.cc3l,
            r = t.num,
            a = t.ext,
            s = [];
        if ("string" == typeof i && "" !== i) {
            var n = utility_1.countryCodeMap[i];
            "string" == typeof n && s.push("+" + n)
        }
        return void 0 !== typeof r && "" !== r && s.push(r), void 0 !== typeof a && "" !== a && s.push(a), s.join(" ")
    },
    handleLastPassGender = function(e, t) {
        return convertLastPassFieldValue(t, model_1.VaultItem.FieldType.Gender)
    },
    addModifiedConcealedField = function(e, t, i, r) {
        var a = unmangleString(model_1.VaultItem.getStringValue(e));
        a !== e.v && (t.details.sections = __spread(t.details.sections, [createOriginalValuesSection([createPasswordField(i, model_1.VaultItem.getStringValue(e))], r)])), e.v = a
    },
    getItemOverview = function(e, t, i) {
        if (e && e.attrs.subtitle === t.n) return model_1.VaultItem.getStringValue(t);
        if (i.templateUuid === model.VaultItemTemplate.CreditCardUuid && t.n === model_1.VaultItem.FieldName.CreditCard.CreditCardNumber) {
            var r = model_1.VaultItem.getStringValue(t);
            return model_1.VaultItem.getCreditCardSubtitle(r)
        }
        return ""
    },
    convertLastPassFieldValue = function(e, t) {
        var i = e.toLowerCase();
        switch (t) {
            case model_1.VaultItem.FieldType.MonthYear:
                return Number(moment_1.default(e).format("YYYYMM")) || 0;
            case model_1.VaultItem.FieldType.Date:
                var r = moment_1.default.utc(e.trim(), "MMMM,D,YYYY", !0).set({
                    hours: 12,
                    minutes: 1,
                    seconds: 0,
                    milliseconds: 0
                }).unix();
                return util.isValidNumber(r) ? r : void 0;
            case model_1.VaultItem.FieldType.Gender:
                return "m" === i || "male" === i ? "male" : "f" === i || "female" === i ? "female" : "";
            case model_1.VaultItem.FieldType.CreditCardType:
                return includes_1.default(i, "visa") ? "visa" : includes_1.default(i, "mastercard") ? "mc" : includes_1.default(i, "amex") || includes_1.default(i, "american express") ? "amex" : includes_1.default(i, "discover") ? "discover" : "";
            case model_1.VaultItem.FieldType.Menu:
                return i;
            case model_1.VaultItem.FieldType.Phone:
                return convertLastPassPhoneNumber(e);
            default:
                return e
        }
    },
    noteTypeUuids = {
        "Bank Account": model.VaultItemTemplate.BankAccountUuid,
        "Credit Card": model.VaultItemTemplate.CreditCardUuid,
        "Driver's License": model.VaultItemTemplate.DriverLicenseUuid,
        "Social Security": model.VaultItemTemplate.SocialSecurityNumberUuid,
        "Software License": model.VaultItemTemplate.SoftwareUuid,
        "Wi-Fi Password": model.VaultItemTemplate.RouterUuid,
        Passport: model.VaultItemTemplate.PassportUuid,
        Database: model.VaultItemTemplate.DatabaseUuid,
        "Email Account": model.VaultItemTemplate.EmailUuid,
        Membership: model.VaultItemTemplate.MembershipUuid,
        Server: model.VaultItemTemplate.ServerUuid,
        Address: model.VaultItemTemplate.IdentityUuid
    },
    lastPassFieldLocations = {
        "003": {},
        "002": {
            "Name on Card": {
                field: "cardholder",
                section: ""
            },
            Type: {
                field: "type",
                section: ""
            },
            Number: {
                field: "ccnum",
                section: ""
            },
            "Security Code": {
                field: "cvv",
                section: ""
            },
            "Start Date": {
                field: "validFrom",
                section: ""
            },
            "Expiration Date": {
                field: "expiry",
                section: ""
            }
        },
        101: {
            "Bank Name": {
                field: "bankName",
                section: ""
            },
            "Account Type": {
                field: "accountType",
                section: ""
            },
            "Routing Number": {
                field: "routingNo",
                section: ""
            },
            "Account Number": {
                field: "accountNo",
                section: ""
            },
            "SWIFT Code": {
                field: "swift",
                section: ""
            },
            "IBAN Number": {
                field: "iban",
                section: ""
            },
            Pin: {
                field: "telephonePin",
                section: ""
            },
            "Branch Address": {
                field: "branchAddress",
                section: "branchInfo"
            },
            "Branch Phone": {
                field: "branchPhone",
                section: "branchInfo"
            }
        },
        103: {
            Number: {
                field: "number",
                section: ""
            },
            "Expiration Date": {
                field: "expiry_date",
                section: ""
            },
            "License Class": {
                field: "class",
                section: ""
            },
            Name: {
                field: "fullname",
                section: ""
            },
            Address: {
                field: "address",
                section: ""
            },
            "City / Town": {
                field: "city",
                section: ""
            },
            State: {
                field: "state",
                section: ""
            },
            "ZIP / Postal Code": {
                field: "zip / postal code",
                section: ""
            },
            Country: {
                field: "country",
                section: ""
            },
            "Date of Birth": {
                field: "birthdate",
                section: ""
            },
            Sex: {
                field: "sex",
                section: ""
            },
            Height: {
                field: "height",
                section: ""
            }
        },
        108: {
            Name: {
                field: "name",
                section: ""
            },
            Number: {
                field: "number",
                section: ""
            }
        },
        100: {
            "License Key": {
                field: "reg_code",
                section: ""
            },
            Licensee: {
                field: "reg_name",
                section: "customer"
            },
            Version: {
                field: "product_version",
                section: ""
            },
            Publisher: {
                field: "publisher_name",
                section: "publisher"
            },
            "Support Email": {
                field: "support_email",
                section: "publisher"
            },
            Website: {
                field: "publisher_website",
                section: "publisher"
            },
            Price: {
                field: "retail_price",
                section: "publisher"
            },
            "Purchase Date": {
                field: "purchase date",
                section: "order"
            },
            "Order Number": {
                field: "order_number",
                section: "order"
            },
            "Number of Licenses": {
                field: "number of licenses",
                section: "order"
            },
            "Order Total": {
                field: "order_total",
                section: "order"
            }
        },
        109: {
            SSID: {
                field: "network_name",
                section: ""
            },
            Password: {
                field: "wireless_password",
                section: ""
            },
            "Connection Type": {
                field: "connection type",
                section: ""
            },
            "Connection Mode": {
                field: "connection mode",
                section: ""
            },
            Authentication: {
                field: "authentication",
                section: ""
            },
            Encryption: {
                field: "encryption",
                section: ""
            },
            "Use 802.1X": {
                field: "use 802.1X",
                section: ""
            },
            "FIPS Mode": {
                field: "FIPS mode",
                section: ""
            },
            "Key Type": {
                field: "key type",
                section: ""
            },
            Protected: {
                field: "protected",
                section: ""
            },
            "Key Index": {
                field: "key index",
                section: ""
            }
        },
        106: {
            Type: {
                field: "type",
                section: ""
            },
            Name: {
                field: "fullname",
                section: ""
            },
            Country: {
                field: "issuing_country",
                section: ""
            },
            Number: {
                field: "number",
                section: ""
            },
            Sex: {
                field: "sex",
                section: ""
            },
            Nationality: {
                field: "nationality",
                section: ""
            },
            "Issuing Authority": {
                field: "issuing_authority",
                section: ""
            },
            "Date of Birth": {
                field: "birthdate",
                section: ""
            },
            "Issued Date": {
                field: "issue_date",
                section: ""
            },
            "Expiration Date": {
                field: "expiry_date",
                section: ""
            }
        },
        102: {
            Type: {
                field: "database_type",
                section: ""
            },
            Hostname: {
                field: "hostname",
                section: ""
            },
            Port: {
                field: "port",
                section: ""
            },
            Database: {
                field: "database",
                section: ""
            },
            Username: {
                field: "username",
                section: ""
            },
            Password: {
                field: "password",
                section: ""
            },
            SID: {
                field: "sid",
                section: ""
            },
            Alias: {
                field: "alias",
                section: ""
            }
        },
        111: {
            Username: {
                field: "pop_username",
                section: ""
            },
            Password: {
                field: "pop_password",
                section: ""
            },
            Server: {
                field: "pop_server",
                section: ""
            },
            Port: {
                field: "pop_port",
                section: ""
            },
            Type: {
                field: "pop_type",
                section: ""
            },
            "SMTP Server": {
                field: "smtp_server",
                section: "SMTP"
            },
            "SMTP Port": {
                field: "smtp_port",
                section: "SMTP"
            }
        },
        105: {
            Organization: {
                field: "org_name",
                section: ""
            },
            "Membership Number": {
                field: "membership_no",
                section: ""
            },
            "Member Name": {
                field: "member_name",
                section: ""
            },
            "Start Date": {
                field: "member_since",
                section: ""
            },
            "Expiration Date": {
                field: "expiry_date",
                section: ""
            },
            Website: {
                field: "website",
                section: ""
            },
            Telephone: {
                field: "phone",
                section: ""
            },
            Password: {
                field: "pin",
                section: ""
            }
        },
        110: {
            Hostname: {
                field: "url",
                section: ""
            },
            Username: {
                field: "username",
                section: ""
            },
            Password: {
                field: "password",
                section: ""
            }
        },
        "004": {
            Title: {
                field: "title",
                section: "name"
            },
            "First Name": {
                field: "firstname",
                section: "name"
            },
            "Middle Name": {
                field: "middle name",
                section: "name"
            },
            "Last Name": {
                field: "lastname",
                section: "name"
            },
            Username: {
                field: "username",
                section: "internet"
            },
            Gender: {
                field: "sex",
                section: "name",
                v: handleLastPassGender
            },
            Birthday: {
                field: "birthdate",
                section: "name"
            },
            Company: {
                field: "company",
                section: "name"
            },
            "Address 1": {
                field: "address",
                section: "address",
                v: handleLastPassIdentityAddressField
            },
            "Address 2": {
                field: "address",
                section: "address",
                v: handleLastPassIdentityAddressField
            },
            "Address 3": {
                field: "address",
                section: "address",
                v: handleLastPassIdentityAddressField
            },
            "City / Town": {
                field: "address",
                section: "address",
                v: handleLastPassIdentityAddressFields("city")
            },
            County: {
                field: "county",
                section: "address"
            },
            State: {
                field: "address",
                section: "address",
                v: handleLastPassIdentityAddressFields("state")
            },
            "Zip / Postal Code": {
                field: "address",
                section: "address",
                v: handleLastPassIdentityAddressFields("zip")
            },
            Country: {
                field: "address",
                section: "address",
                v: handleLastPassIdentityAddressCountry
            },
            Timezone: {
                field: "timezone",
                section: "address"
            },
            "Email Address": {
                field: "email",
                section: "internet"
            },
            Phone: {
                field: "defphone",
                section: "address"
            },
            "Evening Phone": {
                field: "homephone",
                section: "address"
            },
            "Mobile Phone": {
                field: "cellphone",
                section: "address"
            },
            Fax: {
                field: "fax",
                section: "address"
            }
        }
    };