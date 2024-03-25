"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.rollUserKeyset = void 0;
var rollUserKeyset = function(e, r) {
    return e.post("/api/v1/rollkeyset", r).then(function() {})
};
exports.rollUserKeyset = rollUserKeyset;