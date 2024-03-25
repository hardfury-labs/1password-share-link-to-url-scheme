var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(t) {
        for (var n, e = 1, s = arguments.length; e < s; e++)
            for (var i in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        return t
    }).apply(this, arguments)
};
import {
    map,
    mapValues as _mapValues,
    omit,
    values as _values
} from "lodash-es";
var mapValues = _mapValues,
    values = _values;
export var create = function() {
    return {
        contexts: {},
        getAllEntries: function(t) {
            return getAllEntries(this, t)
        },
        getEntry: function(t, n, e) {
            return getEntry(this, t, n, e)
        },
        withEntries: function(t, n, e) {
            return withEntries(this, t, n, e)
        },
        withOnlyEntries: function(t, n, e) {
            return withOnlyEntries(this, t, n, e)
        },
        withoutEntries: function(t, n) {
            return withoutEntries(this, t, n)
        },
        withoutContext: function(t) {
            return withoutContext(this, t)
        }
    }
};
export var saveServerChangedForContext = function(t) {
    var n;
    serverChangeTimestamps = __assign(__assign({}, serverChangeTimestamps), ((n = {})[t] = Date.now(), n))
};
var getAllEntries = function(t, n) {
        var e = t.contexts[n];
        if (e && e.timestamp > getLastServerChange(n)) return map(values(e.entries), function(t) {
            return t.value
        })
    },
    fillGetOptions = function(t) {
        return __assign({
            attrMask: 0
        }, t)
    },
    getEntry = function(t, n, e, s) {
        var i = fillGetOptions(s).attrMask,
            r = t.contexts[n],
            a = r && r.entries[e];
        if (a && a.timestamp > getLastServerChange(n) && (a.attrMask & i) === i) return a.value
    },
    fillSaveOptions = function(t) {
        return __assign({
            attrMask: 0,
            timestamp: Date.now()
        }, t)
    },
    withEntries = function(t, n, e, s) {
        var i = fillSaveOptions(s),
            r = i.attrMask,
            a = i.timestamp,
            o = t.contexts[n],
            u = o && o.entries || {},
            l = mapValues(e, function(t) {
                return {
                    attrMask: r,
                    value: t,
                    timestamp: a
                }
            }),
            m = __assign(__assign({}, u), l);
        return withContext(t, n, {
            entries: m
        })
    },
    withOnlyEntries = function(t, n, e, s) {
        var i = fillSaveOptions(s),
            r = i.attrMask,
            a = i.timestamp,
            o = mapValues(e, function(t) {
                return {
                    attrMask: r,
                    value: t,
                    timestamp: a
                }
            });
        return withContext(t, n, {
            entries: o,
            timestamp: a
        })
    },
    withoutEntries = function(t, n, e) {
        var s = t.contexts[n],
            i = s && s.entries || {},
            r = omit(i, e);
        return withContext(t, n, {
            entries: r
        })
    },
    withoutContext = function(t, n) {
        return __assign(__assign({}, t), {
            contexts: omit(t.contexts, n)
        })
    },
    withContext = function(t, n, e) {
        var s, i = t.contexts[n] || {};
        return __assign(__assign({}, t), {
            contexts: __assign(__assign({}, t.contexts), (s = {}, s[n] = __assign(__assign({
                entries: {},
                timestamp: 0
            }, i), e), s))
        })
    },
    serverChangeTimestamps = {},
    getLastServerChange = function(t) {
        return serverChangeTimestamps[t] || 0
    };