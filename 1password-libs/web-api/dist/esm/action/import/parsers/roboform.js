var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(r) {
            for (var e, t = 1, o = arguments.length; t < o; t++)
                for (var a in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
            return r
        }).apply(this, arguments)
    },
    __read = this && this.__read || function(r, e) {
        var t = "function" == typeof Symbol && r[Symbol.iterator];
        if (!t) return r;
        var o, a, n = t.call(r),
            i = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(o = n.next()).done;) i.push(o.value)
        } catch (r) {
            a = {
                error: r
            }
        } finally {
            try {
                o && !o.done && (t = n.return) && t.call(n)
            } finally {
                if (a) throw a.error
            }
        }
        return i
    },
    __spread = this && this.__spread || function() {
        for (var r = [], e = 0; e < arguments.length; e++) r = r.concat(__read(arguments[e]));
        return r
    };
import {
    groupBy,
    last
} from "lodash-es";
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
import * as Csv from "./helpers/parser_helpers";
var codeLocation = "action/import/roboform",
    makePromise = mp(codeLocation),
    columnDictionary = {
        Name: "title",
        Url: "url",
        Login: "username",
        Pwd: "password",
        Note: "notes",
        Folder: "tags",
        Rf_fields: "rfExtraFields"
    },
    determineColumnOrder = function(r) {
        var e = {};
        return r.forEach(function(r, t) {
            var o = columnDictionary[r];
            o && (e[o] = t)
        }), e
    };
export var parseRoboFormExport = function(r, e, t) {
    return makePromise("parseRoboFormExport", function() {
        var o, a = Csv.parse(e).parsedData;
        if (0 === a.length) return [];
        if (a[0] && a[0].includes("Name") && a[0].includes("Url")) o = determineColumnOrder(a[0]), a.shift();
        else {
            o = determineColumnOrder(["Name", "Url", "MatchUrl", "Login", "Pwd", "Note", "Folder", "Rf_fields"])
        }
        return getTemplates(r).then(function(r) {
            var e = r.find(function(r) {
                return r.uuid === model.VaultItemTemplate.LoginUuid
            });
            return a.map(createItemFromRecord(t, e, o))
        }).catch(function(r) {
            throw r
        })
    })
};
var extractDataFromRecord = function(r, e) {
        return Object.keys(e).reduce(function(t, o) {
            var a, n, i = e[o];
            if (void 0 === i) return t;
            if (o === columnDictionary.Rf_fields) return __assign(__assign({}, t), {
                rfExtraFields: r.slice(i)
            });
            if (o === columnDictionary.Folder) {
                var s = r[i];
                return __assign(__assign({}, t), ((a = {})[o] = s ? [s.replace(/^(\/)/, "")] : [], a))
            }
            return __assign(__assign({}, t), ((n = {})[o] = r[i], n))
        }, {
            title: "",
            url: "",
            username: "",
            password: "",
            notes: "",
            tags: [],
            rfExtraFields: []
        })
    },
    createItemFromRecord = function(r, e, t) {
        return function(o) {
            var a = new VaultItem(r),
                n = extractDataFromRecord(o, t),
                i = n.title,
                s = n.url,
                l = n.username,
                m = n.password,
                u = n.notes,
                d = n.tags,
                c = n.rfExtraFields;
            if (a.templateUuid = model.VaultItemTemplate.LoginUuid, a.title = i || e.singularName, a.url = s, a.notes = u, a.tags = d, c && c.length > 0) {
                var f = c.map(function(r) {
                        return r.split(":")
                    }),
                    p = util.compact(f.map(createWebformField({
                        username: l,
                        password: m
                    }))),
                    _ = groupBy(p, "designation"),
                    v = _.username,
                    g = void 0 === v ? [] : v,
                    h = _.password,
                    F = void 0 === h ? [] : h,
                    w = _.undefined,
                    y = void 0 === w ? [] : w;
                a.webFormFields = util.compact(__spread(a.webFormFields, [last(g), last(F)], y))
            }
            return a.setUsername(l), a.setPassword(m), a
        }
    },
    createWebformField = function(r) {
        return function(e) {
            if (!(e.length < 3)) {
                var t = __read(e),
                    o = t[0],
                    a = t[1],
                    n = t.slice(2).join(":");
                if (void 0 !== o && n && ("txt" === a || "pwd" === a)) {
                    var i = "txt" === a ? "T" : "P";
                    return {
                        designation: "txt" === a && n === r.username ? "username" : "pwd" === a && n === r.password ? "password" : void 0,
                        name: o,
                        type: i,
                        value: n
                    }
                }
            }
        }
    };