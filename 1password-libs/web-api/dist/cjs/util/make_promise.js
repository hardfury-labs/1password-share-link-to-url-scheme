"use strict";
var __awaiter = this && this.__awaiter || function(e, r, n, t) {
        return new(n || (n = Promise))(function(o, i) {
            function s(e) {
                try {
                    u(t.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    u(t.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof n ? r : new n(function(e) {
                    e(r)
                })).then(s, a)
            }
            u((t = t.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var n, t, o, i, s = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function a(i) {
            return function(a) {
                return function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, t && (o = 2 & i[0] ? t.return : i[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, i[1])).done) return o;
                        switch (t = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return s.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, t = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < o[1]) {
                                    s.label = o[1], o = i;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(i);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = r.call(e, s)
                    } catch (e) {
                        i = [6, e], t = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.debouncePromise = exports.makePromise = void 0;
var error_handler_1 = require("./error_handler"),
    makePromise = function(e) {
        return function(r, n) {
            return Promise.resolve().then(n).catch(error_handler_1.errorHandler(e, r))
        }
    };
exports.makePromise = makePromise;
var debouncePromise = function(e, r, n) {
    return void 0 === n && (n = 0), __awaiter(void 0, void 0, void 0, function() {
        var t, o, i;
        return __generator(this, function(s) {
            return t = e.join("#"), (null === (o = debouncedPromises[t]) || void 0 === o ? void 0 : o.promise) && isFreshEntry(o, n) ? [2, o.promise] : (i = Promise.resolve().then(r), debouncedPromises[t] = {
                promise: i,
                timeFinished: 1 / 0
            }, [2, i.then(function(e) {
                return markPromiseFinished(t), e
            }, function(e) {
                throw markPromiseFinished(t), e
            })])
        })
    })
};
exports.debouncePromise = debouncePromise;
var isFreshEntry = function(e, r) {
        return Date.now() - e.timeFinished < r
    },
    debouncedPromises = {},
    markPromiseFinished = function(e) {
        var r = debouncedPromises[e];
        r && (r.timeFinished = Date.now())
    };