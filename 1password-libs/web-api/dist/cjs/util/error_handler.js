"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.errorHandler = void 0;
var lodash_es_1 = require("lodash-es");
exports.errorHandler = lodash_es_1.curry(function(r, e, o) {
    throw console.error("[" + r + "#" + e + "]", o), o
});