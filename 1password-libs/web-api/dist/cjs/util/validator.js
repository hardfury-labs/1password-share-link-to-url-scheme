"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
        return __setModuleDefault(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.readonlyArrayOmitNullish = exports.fromStringEnum = exports.withDefault = exports.unsafeDecodeAs = exports.decodeAs = void 0;
var Either_1 = require("fp-ts/es6/Either"),
    t = __importStar(require("io-ts")),
    lodash_es_1 = require("lodash-es"),
    result_1 = require("./result"),
    secure_path_reporter_1 = require("./secure_path_reporter"),
    decodeAs = function(e) {
        return function(t) {
            return result_1.fromEither(Either_1.mapLeft(toString)(e.decode(t)))
        }
    };
exports.decodeAs = decodeAs;
var unsafeDecodeAs = function(e) {
    return function(t) {
        return unwrap(e.decode(t))
    }
};
exports.unsafeDecodeAs = unsafeDecodeAs;
var unwrap = function(e) {
        if (Either_1.isLeft(e)) throw new Error(toString(e.left));
        return e.right
    },
    toString = function(e) {
        return secure_path_reporter_1.SecurePathReporter.reportFailure(e).join("\n")
    },
    withDefault = function(e, r) {
        return new t.Type("withDefault(" + e.name + ", " + JSON.stringify(r) + ")", e.is, function(t, n) {
            return e.validate(null !== t && void 0 !== t ? t : r, n)
        }, e.encode)
    };
exports.withDefault = withDefault;
var fromStringEnum = function(e, r) {
    var n = function(t) {
        return "string" == typeof t && lodash_es_1.values(e).includes(t)
    };
    return new t.Type(r, n, function(e, r) {
        return n(e) ? t.success(e) : t.failure(e, r)
    }, t.identity)
};
exports.fromStringEnum = fromStringEnum;
var readonlyArrayOmitNullish = function(e) {
    var r = function(e) {
            return null !== e && void 0 !== e
        },
        n = t.readonlyArray(t.union([e, t.null, t.undefined]));
    return new t.Type("readonlyArrayOmitNullish(" + e.name + ")", function(e) {
        return n.is(e) && e.every(r)
    }, function(e, i) {
        var u = n.validate(e, i);
        return "Left" === u._tag ? u : t.success(u.right.filter(r))
    }, t.identity)
};
exports.readonlyArrayOmitNullish = readonlyArrayOmitNullish;