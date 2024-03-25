var __values = this && this.__values || function(e) {
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
        var r, s, n = i.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = n.next()).done;) a.push(r.value)
        } catch (e) {
            s = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (i = n.return) && i.call(n)
            } finally {
                if (s) throw s.error
            }
        }
        return a
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    };
import compact from "lodash-es/compact";
import find from "lodash-es/find";
import includes from "lodash-es/includes";
import keys from "lodash-es/keys";
import some from "lodash-es/some";
import moment from "moment";
import * as model from "../../../model";
import {
    VaultItem
} from "../../../model";
import * as util from "../../../util";
import {
    makePromise as mp
} from "../../../util/make_promise";
import {
    getTemplates
} from "../../vault_item_template";
import {
    countryCodeMap
} from "../utility";
import {
    parseWithHeaders
} from "./helpers/parser_helpers";
var HeaderField, codeLocation = "action/import/lastpass",
    makePromise = mp(codeLocation);
! function(e) {
    e.url = "url", e.username = "username", e.password = "password", e.notes = "extra", e.title = "name", e.tags = "grouping", e.fav = "fav"
}(HeaderField || (HeaderField = {}));
export var parseLastPassExport = function(e, t, i, r) {
    return makePromise("parseLastPassExportNew", function() {
        var s = parseWithHeaders(t);
        if (s[0] && void 0 !== s[0].profilename) throw new Error(r["Form Fill importing is not supported. Please use a normal LastPass export file."]());
        return getTemplates(e).then(function(e) {
            var t = e.find(function(e) {
                return e.uuid === model.VaultItemTemplate.LoginUuid
            });
            return s.map(function(s) {
                return "http://sn" === s[HeaderField.url] ? createItemFromLastPassNonLogin(s, i, e, r) : createItemFromLastPassLogin(s, i, t, r)
            })
        })
    })
};
var createItemFromLastPassNonLogin = function(e, t, i, r) {
        var s, n, a = getValueFromRecord(e, HeaderField.notes),
            o = getItemTemplate(i, a),
            d = new VaultItem(t, o),
            l = extractNoteContents(o, a),
            c = l.notes,
            u = l.fieldValues,
            m = getValueFromRecord(e, HeaderField.title),
            f = getValueFromRecord(e, HeaderField.tags),
            p = "1" === getValueFromRecord(e, HeaderField.fav) ? 1 : 0;
        d.title = m || o.singularName, d.notes = c, d.tags = folderNameToTags(f), d.faveIndex = p;
        var v = lastPassFieldLocations[o.uuid];
        if (void 0 === v) return d;
        var y = function(e) {
            var t = u[e] || "",
                i = v[e];
            if (void 0 !== i) {
                var s = find(d.details.sections, function(e) {
                    return e.name === i.section
                });
                if (!s) return "continue";
                !some(null === s || void 0 === s ? void 0 : s.fields, function(e) {
                    if (e.n === i.field) {
                        i.v ? e.v = i.v(e, t) : e.v = convertLastPassFieldValue(t, e.k), e.k === VaultItem.FieldType.Concealed && addModifiedConcealedField(e, d, o, r);
                        var s = getItemOverview(o, e, d);
                        return "" !== s && (d.overview.ainfo = s), !0
                    }
                    return !1
                }) && i.field && t && (s.fields || (s.fields = []), s.fields.push(createField(VaultItem.FieldType.String, i.field, t)))
            } else {
                var n = find(d.details.sections, function(e) {
                    return e.title === r["Other Fields"]()
                });
                void 0 === n ? d.details.sections.push({
                    name: util.generateUUID(),
                    title: r["Other Fields"](),
                    fields: [createField(VaultItem.FieldType.String, e, t)]
                }) : (n.fields || (n.fields = []), n.fields.push(createField(VaultItem.FieldType.String, e, t)))
            }
        };
        try {
            for (var h = __values(keys(u)), g = h.next(); !g.done; g = h.next()) {
                y(g.value)
            }
        } catch (e) {
            s = {
                error: e
            }
        } finally {
            try {
                g && !g.done && (n = h.return) && n.call(h)
            } finally {
                if (s) throw s.error
            }
        }
        return d
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
            s = r[0],
            n = r[1],
            a = {};
        return void 0 !== s && s.trim().split("\n").map(function(e) {
            var t = __read(e.split(/:(.+)?/, 2), 2),
                i = t[0],
                r = t[1];
            void 0 !== i && void 0 !== r && "Language" !== i && (a[i] = r)
        }), {
            notes: n ? n.trim() : "",
            fieldValues: a
        }
    },
    createItemFromLastPassLogin = function(e, t, i, r) {
        var s = new VaultItem(t),
            n = getValueFromRecord(e, HeaderField.url),
            a = getValueFromRecord(e, HeaderField.username),
            o = getValueFromRecord(e, HeaderField.password),
            d = getValueFromRecord(e, HeaderField.notes),
            l = getValueFromRecord(e, HeaderField.title),
            c = getValueFromRecord(e, HeaderField.tags),
            u = "1" === getValueFromRecord(e, HeaderField.fav) ? 1 : 0;
        s.templateUuid = model.VaultItemTemplate.LoginUuid, s.title = l || i.singularName, s.url = n, s.notes = d, s.tags = folderNameToTags(c), s.faveIndex = u;
        var m = unmangleString(a),
            f = unmangleString(o),
            p = compact([m !== a && createUsernameField(i, a), f !== o && createPasswordField(i, o)]);
        return p.length > 0 && (s.details.sections = __spread(s.details.sections, [createOriginalValuesSection(p, r)])), s.setUsername(m), s.setPassword(f), s
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
            fields: __spread(e, [createField(VaultItem.FieldType.Url, t["what's this?"](), "https://support.1password.com/import-lastpass/#get-help")])
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
            s = t.ext,
            n = [];
        if ("string" == typeof i && "" !== i) {
            var a = countryCodeMap[i];
            "string" == typeof a && n.push("+" + a)
        }
        return void 0 !== typeof r && "" !== r && n.push(r), void 0 !== typeof s && "" !== s && n.push(s), n.join(" ")
    },
    handleLastPassGender = function(e, t) {
        return convertLastPassFieldValue(t, VaultItem.FieldType.Gender)
    },
    addModifiedConcealedField = function(e, t, i, r) {
        var s = unmangleString(VaultItem.getStringValue(e));
        s !== e.v && (t.details.sections = __spread(t.details.sections, [createOriginalValuesSection([createPasswordField(i, VaultItem.getStringValue(e))], r)])), e.v = s
    },
    getItemOverview = function(e, t, i) {
        if (e && e.attrs.subtitle === t.n) return VaultItem.getStringValue(t);
        if (i.templateUuid === model.VaultItemTemplate.CreditCardUuid && t.n === VaultItem.FieldName.CreditCard.CreditCardNumber) {
            var r = VaultItem.getStringValue(t);
            return VaultItem.getCreditCardSubtitle(r)
        }
        return ""
    },
    convertLastPassFieldValue = function(e, t) {
        var i = e.toLowerCase();
        switch (t) {
            case VaultItem.FieldType.MonthYear:
                return Number(moment(e).format("YYYYMM")) || 0;
            case VaultItem.FieldType.Date:
                var r = moment.utc(e.trim(), "MMMM,D,YYYY", !0).set({
                    hours: 12,
                    minutes: 1,
                    seconds: 0,
                    milliseconds: 0
                }).unix();
                return util.isValidNumber(r) ? r : void 0;
            case VaultItem.FieldType.Gender:
                return "m" === i || "male" === i ? "male" : "f" === i || "female" === i ? "female" : "";
            case VaultItem.FieldType.CreditCardType:
                return includes(i, "visa") ? "visa" : includes(i, "mastercard") ? "mc" : includes(i, "amex") || includes(i, "american express") ? "amex" : includes(i, "discover") ? "discover" : "";
            case VaultItem.FieldType.Menu:
                return i;
            case VaultItem.FieldType.Phone:
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