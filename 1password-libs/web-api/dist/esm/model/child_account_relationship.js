var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(t) {
        for (var n, i = 1, e = arguments.length; i < e; i++)
            for (var o in n = arguments[i]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        return t
    }).apply(this, arguments)
};
export function ChildAccountRelationship(t) {
    return Object.freeze(__assign({
        code: "",
        state: ""
    }, t))
};
! function(t) {
    t.CodePrefix = "CA"
}(ChildAccountRelationship || (ChildAccountRelationship = {}));