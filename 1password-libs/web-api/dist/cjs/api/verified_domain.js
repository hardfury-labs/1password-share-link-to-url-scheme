"use strict";
var __awaiter = this && this.__awaiter || function(e, i, t, n) {
        return new(t || (t = Promise))(function(r, o) {
            function a(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var i;
                e.done ? r(e.value) : (i = e.value, i instanceof t ? i : new t(function(e) {
                    e(i)
                })).then(a, u)
            }
            c((n = n.apply(e, i || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, i) {
        var t, n, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(o) {
            return function(u) {
                return function(o) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                        switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1], r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = i.call(e, a)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        t = r = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, u])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.deleteVerifiedDomain = exports.updateVerifiedDomain = exports.getVerifiedDomains = exports.completeDomainVerification = exports.beginDomainVerification = void 0;
var beginDomainVerification = function(e, i, t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, e.post("/api/v1/verifieddomains/begin", {
                type: i,
                domain: t,
                emailMailbox: n
            })]
        })
    })
};
exports.beginDomainVerification = beginDomainVerification;
var completeDomainVerification = function(e, i, t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, e.post("/api/v1/verifieddomains/complete", {
                        type: i,
                        domain: t,
                        token: n
                    })];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
exports.completeDomainVerification = completeDomainVerification;
var getVerifiedDomains = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(i) {
            return [2, e.get("/api/v1/verifieddomains")]
        })
    })
};
exports.getVerifiedDomains = getVerifiedDomains;
var updateVerifiedDomain = function(e, i) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, e.put("/api/v1/verifieddomains/update", i)]
        })
    })
};
exports.updateVerifiedDomain = updateVerifiedDomain;
var deleteVerifiedDomain = function(e, i) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, e.delete("/api/v1/verifieddomains/" + i)]
        })
    })
};
exports.deleteVerifiedDomain = deleteVerifiedDomain;