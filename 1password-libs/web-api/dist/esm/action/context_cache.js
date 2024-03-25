var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
        return e
    }).apply(this, arguments)
};
import {
    assign
} from "lodash-es";
export var getContextCache = function(e, t) {
    return {
        getEntry: getEntry(e.id, t),
        saveEntry: saveEntry(e.id, t),
        saveEntries: saveEntries(e.id, t)
    }
};
export var resetContext = function(e) {
    var t, n = createEmptyContextCaches();
    return caches = __assign(__assign({}, caches), ((t = {})[e] = n, t)), n
};
var caches = {},
    createEmptyContextCaches = function() {
        return {
            keysets: {}
        }
    },
    getOrCreateCache = function(e, t) {
        return (caches[e] || resetContext(e))[t]
    },
    getEntry = function(e, t) {
        return function(n) {
            return getOrCreateCache(e, t)[n]
        }
    },
    saveEntry = function(e, t) {
        return function(n, r) {
            var s;
            saveEntries(e, t)(((s = {})[n] = r, s))
        }
    },
    saveEntries = function(e, t) {
        return function(n) {
            var r, s, a = getOrCreateCache(e, t);
            caches = __assign(__assign({}, caches), ((r = {})[e] = __assign(__assign({}, caches[e]), ((s = {})[t] = assign({}, a, n), s)), r))
        }
    };
export var clearContextCache = function() {
    caches = {}
};