import {
    isLeft,
    mapLeft
} from "fp-ts/es6/Either";
import * as t from "io-ts";
import {
    values
} from "lodash-es";
import {
    fromEither
} from "./result";
import {
    SecurePathReporter
} from "./secure_path_reporter";
export var decodeAs = function(r) {
    return function(t) {
        return fromEither(mapLeft(toString)(r.decode(t)))
    }
};
export var unsafeDecodeAs = function(r) {
    return function(t) {
        return unwrap(r.decode(t))
    }
};
var unwrap = function(r) {
        if (isLeft(r)) throw new Error(toString(r.left));
        return r.right
    },
    toString = function(r) {
        return SecurePathReporter.reportFailure(r).join("\n")
    };
export var withDefault = function(r, e) {
    return new t.Type("withDefault(" + r.name + ", " + JSON.stringify(e) + ")", r.is, function(t, n) {
        return r.validate(null !== t && void 0 !== t ? t : e, n)
    }, r.encode)
};
export var fromStringEnum = function(r, e) {
    var n = function(t) {
        return "string" == typeof t && values(r).includes(t)
    };
    return new t.Type(e, n, function(r, e) {
        return n(r) ? t.success(r) : t.failure(r, e)
    }, t.identity)
};
export var readonlyArrayOmitNullish = function(r) {
    var e = function(r) {
            return null !== r && void 0 !== r
        },
        n = t.readonlyArray(t.union([r, t.null, t.undefined]));
    return new t.Type("readonlyArrayOmitNullish(" + r.name + ")", function(r) {
        return n.is(r) && r.every(e)
    }, function(r, i) {
        var o = n.validate(r, i);
        return "Left" === o._tag ? o : t.success(o.right.filter(e))
    }, t.identity)
};