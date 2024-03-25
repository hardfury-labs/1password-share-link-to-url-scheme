export var dateFromGolang = function(t) {
    return "string" != typeof t || 0 === t.indexOf("0001") ? void 0 : new Date(t)
};
export var dateToGolang = function(t) {
    return t ? t.toISOString() : ""
};