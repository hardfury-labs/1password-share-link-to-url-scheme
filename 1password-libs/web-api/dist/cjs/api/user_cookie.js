"use strict";
var __awaiter = this && this.__awaiter || function(e, t, o, r) {
        return new(o || (o = Promise))(function(n, i) {
            function s(e) {
                try {
                    a(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                try {
                    a(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                    e(t)
                })).then(s, c)
            }
            a((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var o, r, n, i, s = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function c(i) {
            return function(c) {
                return function(i) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, i[1])).done) return n;
                        switch (r = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return s.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = s.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < n[1]) {
                                    s.label = n[1], n = i;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(i);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = t.call(e, s)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        o = n = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.deleteUserCookie = exports.deleteAccountCookie = exports.setUserCookie = exports.getUserCookies = void 0;
var getUserCookies = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return o.trys.push([0, 2, , 3]), [4, e.get("https://accounts." + t + "/api/v1/accountcookies", void 0, {
                        withCredentials: !0,
                        timeout: 5e3
                    })];
                case 1:
                    return [2, o.sent()];
                case 2:
                    return o.sent(), [2, []];
                case 3:
                    return [2]
            }
        })
    })
};
exports.getUserCookies = getUserCookies;
var setUserCookie = function(e, t) {
    return e.patch("https://accounts." + t + "/api/v1/accountcookie", void 0, {
        withCredentials: !0
    })
};
exports.setUserCookie = setUserCookie;
var deleteAccountCookie = function(e, t, o) {
    return e.delete("https://accounts." + t + "/api/v1/accountcookie/account/" + o, void 0, {
        withCredentials: !0
    })
};
exports.deleteAccountCookie = deleteAccountCookie;
var deleteUserCookie = function(e, t, o) {
    return e.delete("https://accounts." + t + "/api/v1/accountcookie/user/" + o, void 0, {
        withCredentials: !0
    })
};
exports.deleteUserCookie = deleteUserCookie;