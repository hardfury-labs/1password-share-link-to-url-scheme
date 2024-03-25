import * as Papa from "papaparse";
export var parse = function(r) {
    var e = checkAndParseWithOptions(r, {
            skipEmptyLines: !0
        }),
        n = e.errors.length > 0;
    return n && console.error("Possible errors importing data:", e.errors), {
        parsedData: e.data,
        hasErrors: n
    }
};
export var parseWithHeaders = function(r) {
    return checkAndParseWithOptions(r, {
        skipEmptyLines: !0,
        header: !0
    }).data
};
export var unparse = function(r) {
    return checkAndUnparseWithOptions(r, {
        skipEmptyLines: !0
    })
};
var checkAndParseWithOptions = function(r, e) {
        return isPapaLoaded(), Papa.parse(r, e)
    },
    checkAndUnparseWithOptions = function(r, e) {
        return isPapaLoaded(), Papa.unparse(r, e)
    },
    isPapaLoaded = function() {
        if ("undefined" == typeof Papa) throw new TypeError("Papa Parse must be loaded first.")
    };
export var removeEmptyColumns = function(r) {
    for (var e = findLongestRowLength(r), n = [], t = function(e) {
            var t = r.some(function(r) {
                return r[e]
            });
            n.push(t)
        }, a = 0; a < e; a++) t(a);
    return r.map(function(r) {
        return r.filter(function(r, e) {
            return n[e]
        })
    })
};
export var findLongestRowLength = function(r) {
    return r.reduce(function(r, e) {
        return e.length > r ? e.length : r
    }, 0)
};