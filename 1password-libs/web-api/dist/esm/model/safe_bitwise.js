import {
    BigInteger
} from "jsbn";
import {
    reduce
} from "lodash-es";
var bn = function(n) {
        return new BigInteger(n.toString(10), 10)
    },
    toInt = function(n) {
        return Number.parseInt(n.toString(10), 10)
    };
export var includesAll = function(n, r) {
    return bn(n).and(bn(r)).equals(bn(r))
};
export var includesAny = function(n, r) {
    return bn(n).and(bn(r)).compareTo(BigInteger.ZERO) > 0
};
export var or = function(n, r) {
    return toInt(bn(n).or(bn(r)))
};
export var xor = function(n, r) {
    return toInt(bn(n).xor(bn(r)))
};
export var andNot = function(n, r) {
    return toInt(bn(n).andNot(bn(r)))
};
export var orAll = function(n) {
    return toInt(reduce(n, function(n, r) {
        return n.or(bn(r))
    }, bn(0)))
};