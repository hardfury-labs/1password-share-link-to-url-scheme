"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.orAll = exports.andNot = exports.xor = exports.or = exports.includesAny = exports.includesAll = void 0;
var jsbn_1 = require("jsbn"),
    lodash_es_1 = require("lodash-es"),
    bn = function(n) {
        return new jsbn_1.BigInteger(n.toString(10), 10)
    },
    toInt = function(n) {
        return Number.parseInt(n.toString(10), 10)
    },
    includesAll = function(n, r) {
        return bn(n).and(bn(r)).equals(bn(r))
    };
exports.includesAll = includesAll;
var includesAny = function(n, r) {
    return bn(n).and(bn(r)).compareTo(jsbn_1.BigInteger.ZERO) > 0
};
exports.includesAny = includesAny;
var or = function(n, r) {
    return toInt(bn(n).or(bn(r)))
};
exports.or = or;
var xor = function(n, r) {
    return toInt(bn(n).xor(bn(r)))
};
exports.xor = xor;
var andNot = function(n, r) {
    return toInt(bn(n).andNot(bn(r)))
};
exports.andNot = andNot;
var orAll = function(n) {
    return toInt(lodash_es_1.reduce(n, function(n, r) {
        return n.or(bn(r))
    }, bn(0)))
};
exports.orAll = orAll;