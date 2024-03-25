"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Named = void 0;
var Named, lodash_es_1 = require("lodash-es");
! function(e) {
    e.getInitials = function(e) {
        var r = e.name;
        return lodash_es_1.split(lodash_es_1.trim(r), " ").filter(function(e) {
            return !!e
        }).slice(0, 2).reduce(function(e, r) {
            return e + r[0]
        }, "").toLocaleUpperCase()
    }
}(Named = exports.Named || (exports.Named = {}));