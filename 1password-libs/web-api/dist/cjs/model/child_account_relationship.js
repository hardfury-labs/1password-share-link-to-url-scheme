"use strict";
var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(t) {
        for (var i, e = 1, n = arguments.length; e < n; e++)
            for (var o in i = arguments[e]) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
        return t
    }).apply(this, arguments)
};

function ChildAccountRelationship(t) {
    return Object.freeze(__assign({
        code: "",
        state: ""
    }, t))
}
Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ChildAccountRelationship = void 0, exports.ChildAccountRelationship = ChildAccountRelationship,
    function(t) {
        t.CodePrefix = "CA"
    }(ChildAccountRelationship = exports.ChildAccountRelationship || (exports.ChildAccountRelationship = {}));