var __awaiter = this && this.__awaiter || function(t, n, e, r) {
        return new(e || (e = Promise))(function(o, a) {
            function i(t) {
                try {
                    c(r.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function u(t) {
                try {
                    c(r.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function c(t) {
                var n;
                t.done ? o(t.value) : (n = t.value, n instanceof e ? n : new e(function(t) {
                    t(n)
                })).then(i, u)
            }
            c((r = r.apply(t, n || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, n) {
        var e, r, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function u(a) {
            return function(u) {
                return function(a) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                        switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, r = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1], o = a;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(a);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = n.call(t, i)
                    } catch (t) {
                        a = [6, t], r = 0
                    } finally {
                        e = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, u])
            }
        }
    };
import {
    dataToParamString
} from "./util";
export var getAccountWithAttrs = function(t, n) {
    return t.get("/api/v3/account" + dataToParamString({
        attrs: n
    })).then(function(t) {
        if (!t) throw new Error("Server response is empty");
        return t
    })
};
export var activateAccount = function(t, n, e) {
    return t.put("/api/v1/account/activate", {
        vaults: n,
        groups: e
    }).then(function() {})
};
export var joinAccount = function(t, n) {
    return t.put("/api/v1/person/join", {
        vault: n
    }).then(function() {})
};
export var updateAccount = function(t, n) {
    return t.put("/api/v1/account/attrs", n).then(function() {})
};
export var updateBillingSettings = function(t, n) {
    return t.put("/api/v1/account/billingsettings", n).then(function() {})
};
export var deleteAccount = function(t) {
    return t.delete("/api/v1/account").then(function() {})
};
export var verifyLockedOutAccountDeletion = function(t, n, e) {
    return t.get("/api/v1/account/" + n + "/" + e + "/verifydeletion").then(function() {})
};
export var lockedOutDeleteAccount = function(t, n, e) {
    return t.delete("/api/v1/account/" + n + "/" + e).then(function() {})
};
export var checkDomainAvailability = function(t, n, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return n && e ? (r = {
                        domain: n,
                        email: e
                    }, [4, t.postUnencrypted("/api/v1/domain/check", r)]) : [2, !1];
                case 1:
                    return [2, o.sent().result]
            }
        })
    })
};
export var getSuggestedDomain = function(t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, t.postUnencrypted("/api/v1/domain/suggestion", {
                        accountName: n
                    })];
                case 1:
                    return [2, e.sent().domain]
            }
        })
    })
};
export var changeDomain = function(t, n) {
    return t.put("/api/v1/account/domain/" + n).then(function() {})
};
export var postImage = function(t, n) {
    return t.postUnencrypted("/api/v1/image", n, {
        dataType: "arraybuffer",
        responseType: "text"
    })
};
export var changeAccountType = function(t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, t.put("/api/v2/account/type", n)];
                case 1:
                    return e.sent(), [2]
            }
        })
    })
};