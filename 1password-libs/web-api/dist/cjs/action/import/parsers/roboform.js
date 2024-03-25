"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, o = arguments.length; t < o; t++)
                for (var a in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, o) {
        void 0 === o && (o = t), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, o) {
        void 0 === o && (o = t), e[o] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var o, a, i = t.call(e),
            n = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(o = i.next()).done;) n.push(o.value)
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (t = i.return) && t.call(i)
            } finally {
                if (a) throw a.error
            }
        }
        return n
    },
    __spread = this && this.__spread || function() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(__read(arguments[r]));
        return e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseRoboFormExport = void 0;
var lodash_es_1 = require("lodash-es"),
    model = __importStar(require("../../../model")),
    model_1 = require("../../../model"),
    util = __importStar(require("../../../util")),
    make_promise_1 = require("../../../util/make_promise"),
    vault_item_template_1 = require("../../vault_item_template"),
    Csv = __importStar(require("./helpers/parser_helpers")),
    codeLocation = "action/import/roboform",
    makePromise = make_promise_1.makePromise(codeLocation),
    columnDictionary = {
        Name: "title",
        Url: "url",
        Login: "username",
        Pwd: "password",
        Note: "notes",
        Folder: "tags",
        Rf_fields: "rfExtraFields"
    },
    determineColumnOrder = function(e) {
        var r = {};
        return e.forEach(function(e, t) {
            var o = columnDictionary[e];
            o && (r[o] = t)
        }), r
    },
    parseRoboFormExport = function(e, r, t) {
        return makePromise("parseRoboFormExport", function() {
            var o, a = Csv.parse(r).parsedData;
            if (0 === a.length) return [];
            if (a[0] && a[0].includes("Name") && a[0].includes("Url")) o = determineColumnOrder(a[0]), a.shift();
            else {
                o = determineColumnOrder(["Name", "Url", "MatchUrl", "Login", "Pwd", "Note", "Folder", "Rf_fields"])
            }
            return vault_item_template_1.getTemplates(e).then(function(e) {
                var r = e.find(function(e) {
                    return e.uuid === model.VaultItemTemplate.LoginUuid
                });
                return a.map(createItemFromRecord(t, r, o))
            }).catch(function(e) {
                throw e
            })
        })
    };
exports.parseRoboFormExport = parseRoboFormExport;
var extractDataFromRecord = function(e, r) {
        return Object.keys(r).reduce(function(t, o) {
            var a, i, n = r[o];
            if (void 0 === n) return t;
            if (o === columnDictionary.Rf_fields) return __assign(__assign({}, t), {
                rfExtraFields: e.slice(n)
            });
            if (o === columnDictionary.Folder) {
                var s = e[n];
                return __assign(__assign({}, t), ((a = {})[o] = s ? [s.replace(/^(\/)/, "")] : [], a))
            }
            return __assign(__assign({}, t), ((i = {})[o] = e[n], i))
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
    createItemFromRecord = function(e, r, t) {
        return function(o) {
            var a = new model_1.VaultItem(e),
                i = extractDataFromRecord(o, t),
                n = i.title,
                s = i.url,
                u = i.username,
                l = i.password,
                d = i.notes,
                m = i.tags,
                c = i.rfExtraFields;
            if (a.templateUuid = model.VaultItemTemplate.LoginUuid, a.title = n || r.singularName, a.url = s, a.notes = d, a.tags = m, c && c.length > 0) {
                var _ = c.map(function(e) {
                        return e.split(":")
                    }),
                    f = util.compact(_.map(createWebformField({
                        username: u,
                        password: l
                    }))),
                    p = lodash_es_1.groupBy(f, "designation"),
                    v = p.username,
                    h = void 0 === v ? [] : v,
                    g = p.password,
                    b = void 0 === g ? [] : g,
                    y = p.undefined,
                    F = void 0 === y ? [] : y;
                a.webFormFields = util.compact(__spread(a.webFormFields, [lodash_es_1.last(h), lodash_es_1.last(b)], F))
            }
            return a.setUsername(u), a.setPassword(l), a
        }
    },
    createWebformField = function(e) {
        return function(r) {
            if (!(r.length < 3)) {
                var t = __read(r),
                    o = t[0],
                    a = t[1],
                    i = t.slice(2).join(":");
                if (void 0 !== o && i && ("txt" === a || "pwd" === a)) {
                    var n = "txt" === a ? "T" : "P";
                    return {
                        designation: "txt" === a && i === e.username ? "username" : "pwd" === a && i === e.password ? "password" : void 0,
                        name: o,
                        type: n,
                        value: i
                    }
                }
            }
        }
    };