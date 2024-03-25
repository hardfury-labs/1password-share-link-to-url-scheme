var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, i) {
            function a(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function l(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(a, l)
            }
            u((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: l(0),
            throw: l(1),
            return: l(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function l(i) {
            return function(l) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = r.call(e, a)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, l])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, o, i = t.call(e),
            a = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = i.next()).done;) a.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = i.return) && t.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    };
import * as model from "../model";
import {
    createSymmetricKey,
    JWK_ALG_A256GCM
} from "../model";
import * as util from "../util";
var CONNECT_LOCALAUTH_VERSION = "2";
export var generateCredentialsFileAndBearerToken = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n, o, i;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    if (!e.account) throw new Error("Account is missing.");
                    if (!r.userAuth) throw new Error("Missing credential auth information.");
                    return [4, Promise.all([model.LocalAuth.generate(r), createSymmetricKey().generate(JWK_ALG_A256GCM)])];
                case 1:
                    return t = __read.apply(void 0, [a.sent(), 2]), n = t[0], o = t[1], i = __assign(__assign({}, n.localAuth), {
                        version: CONNECT_LOCALAUTH_VERSION,
                        deviceUuid: util.generateUUID(),
                        uniqueKey: o
                    }), [2, {
                        bearerToken: n.bearerToken,
                        fileContents: JSON.stringify(i)
                    }]
            }
        })
    })
};