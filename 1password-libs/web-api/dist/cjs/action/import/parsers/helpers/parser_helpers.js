"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, n) {
        void 0 === n && (n = t), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, n) {
        void 0 === n && (n = t), e[n] = r[t]
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
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.findLongestRowLength = exports.removeEmptyColumns = exports.unparse = exports.parseWithHeaders = exports.parse = void 0;
var Papa = __importStar(require("papaparse")),
    parse = function(e) {
        var r = checkAndParseWithOptions(e, {
                skipEmptyLines: !0
            }),
            t = r.errors.length > 0;
        return t && console.error("Possible errors importing data:", r.errors), {
            parsedData: r.data,
            hasErrors: t
        }
    };
exports.parse = parse;
var parseWithHeaders = function(e) {
    return checkAndParseWithOptions(e, {
        skipEmptyLines: !0,
        header: !0
    }).data
};
exports.parseWithHeaders = parseWithHeaders;
var unparse = function(e) {
    return checkAndUnparseWithOptions(e, {
        skipEmptyLines: !0
    })
};
exports.unparse = unparse;
var checkAndParseWithOptions = function(e, r) {
        return isPapaLoaded(), Papa.parse(e, r)
    },
    checkAndUnparseWithOptions = function(e, r) {
        return isPapaLoaded(), Papa.unparse(e, r)
    },
    isPapaLoaded = function() {
        if (void 0 === Papa) throw new TypeError("Papa Parse must be loaded first.")
    },
    removeEmptyColumns = function(e) {
        for (var r = exports.findLongestRowLength(e), t = [], n = function(r) {
                var n = e.some(function(e) {
                    return e[r]
                });
                t.push(n)
            }, a = 0; a < r; a++) n(a);
        return e.map(function(e) {
            return e.filter(function(e, r) {
                return t[r]
            })
        })
    };
exports.removeEmptyColumns = removeEmptyColumns;
var findLongestRowLength = function(e) {
    return e.reduce(function(e, r) {
        return r.length > e ? r.length : e
    }, 0)
};
exports.findLongestRowLength = findLongestRowLength;