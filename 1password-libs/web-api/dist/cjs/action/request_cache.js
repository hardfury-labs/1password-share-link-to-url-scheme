"use strict";
var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(t) {
        for (var e, n = 1, s = arguments.length; n < s; n++)
            for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t
    }).apply(this, arguments)
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.saveServerChangedForContext = exports.create = void 0;
var lodash_es_1 = require("lodash-es"),
    mapValues = lodash_es_1.mapValues,
    values = lodash_es_1.values,
    create = function() {
        return {
            contexts: {},
            getAllEntries: function(t) {
                return getAllEntries(this, t)
            },
            getEntry: function(t, e, n) {
                return getEntry(this, t, e, n)
            },
            withEntries: function(t, e, n) {
                return withEntries(this, t, e, n)
            },
            withOnlyEntries: function(t, e, n) {
                return withOnlyEntries(this, t, e, n)
            },
            withoutEntries: function(t, e) {
                return withoutEntries(this, t, e)
            },
            withoutContext: function(t) {
                return withoutContext(this, t)
            }
        }
    };
exports.create = create;
var saveServerChangedForContext = function(t) {
    var e;
    serverChangeTimestamps = __assign(__assign({}, serverChangeTimestamps), ((e = {})[t] = Date.now(), e))
};
exports.saveServerChangedForContext = saveServerChangedForContext;
var getAllEntries = function(t, e) {
        var n = t.contexts[e];
        if (n && n.timestamp > getLastServerChange(e)) return lodash_es_1.map(values(n.entries), function(t) {
            return t.value
        })
    },
    fillGetOptions = function(t) {
        return __assign({
            attrMask: 0
        }, t)
    },
    getEntry = function(t, e, n, s) {
        var r = fillGetOptions(s).attrMask,
            i = t.contexts[e],
            a = i && i.entries[n];
        if (a && a.timestamp > getLastServerChange(e) && (a.attrMask & r) === r) return a.value
    },
    fillSaveOptions = function(t) {
        return __assign({
            attrMask: 0,
            timestamp: Date.now()
        }, t)
    },
    withEntries = function(t, e, n, s) {
        var r = fillSaveOptions(s),
            i = r.attrMask,
            a = r.timestamp,
            o = t.contexts[e],
            u = o && o.entries || {},
            _ = mapValues(n, function(t) {
                return {
                    attrMask: i,
                    value: t,
                    timestamp: a
                }
            }),
            h = __assign(__assign({}, u), _);
        return withContext(t, e, {
            entries: h
        })
    },
    withOnlyEntries = function(t, e, n, s) {
        var r = fillSaveOptions(s),
            i = r.attrMask,
            a = r.timestamp,
            o = mapValues(n, function(t) {
                return {
                    attrMask: i,
                    value: t,
                    timestamp: a
                }
            });
        return withContext(t, e, {
            entries: o,
            timestamp: a
        })
    },
    withoutEntries = function(t, e, n) {
        var s = t.contexts[e],
            r = s && s.entries || {},
            i = lodash_es_1.omit(r, n);
        return withContext(t, e, {
            entries: i
        })
    },
    withoutContext = function(t, e) {
        return __assign(__assign({}, t), {
            contexts: lodash_es_1.omit(t.contexts, e)
        })
    },
    withContext = function(t, e, n) {
        var s, r = t.contexts[e] || {};
        return __assign(__assign({}, t), {
            contexts: __assign(__assign({}, t.contexts), (s = {}, s[e] = __assign(__assign({
                entries: {},
                timestamp: 0
            }, r), n), s))
        })
    },
    serverChangeTimestamps = {},
    getLastServerChange = function(t) {
        return serverChangeTimestamps[t] || 0
    };