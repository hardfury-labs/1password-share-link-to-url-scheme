"use strict";
var __awaiter = this && this.__awaiter || function(t, e, n, o) {
        return new(n || (n = Promise))(function(c, r) {
            function i(t) {
                try {
                    u(o.next(t))
                } catch (t) {
                    r(t)
                }
            }

            function a(t) {
                try {
                    u(o.throw(t))
                } catch (t) {
                    r(t)
                }
            }

            function u(t) {
                var e;
                t.done ? c(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                    t(e)
                })).then(i, a)
            }
            u((o = o.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var n, o, c, r, i = {
            label: 0,
            sent: function() {
                if (1 & c[0]) throw c[1];
                return c[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }), r;

        function a(r) {
            return function(a) {
                return function(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (n = 1, o && (c = 2 & r[0] ? o.return : r[0] ? o.throw || ((c = o.return) && c.call(o), 0) : o.next) && !(c = c.call(o, r[1])).done) return c;
                        switch (o = 0, c && (r = [2 & r[0], c.value]), r[0]) {
                            case 0:
                            case 1:
                                c = r;
                                break;
                            case 4:
                                return i.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(c = (c = i.trys).length > 0 && c[c.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === r[0] && (!c || r[1] > c[0] && r[1] < c[3])) {
                                    i.label = r[1];
                                    break
                                }
                                if (6 === r[0] && i.label < c[1]) {
                                    i.label = c[1], c = r;
                                    break
                                }
                                if (c && i.label < c[2]) {
                                    i.label = c[2], i.ops.push(r);
                                    break
                                }
                                c[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        r = e.call(t, i)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = c = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }([r, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.changeAccountType = exports.postImage = exports.changeDomain = exports.getSuggestedDomain = exports.checkDomainAvailability = exports.lockedOutDeleteAccount = exports.verifyLockedOutAccountDeletion = exports.deleteAccount = exports.updateBillingSettings = exports.updateAccount = exports.joinAccount = exports.activateAccount = exports.getAccountWithAttrs = void 0;
var util_1 = require("./util"),
    getAccountWithAttrs = function(t, e) {
        return t.get("/api/v3/account" + util_1.dataToParamString({
            attrs: e
        })).then(function(t) {
            if (!t) throw new Error("Server response is empty");
            return t
        })
    };
exports.getAccountWithAttrs = getAccountWithAttrs;
var activateAccount = function(t, e, n) {
    return t.put("/api/v1/account/activate", {
        vaults: e,
        groups: n
    }).then(function() {})
};
exports.activateAccount = activateAccount;
var joinAccount = function(t, e) {
    return t.put("/api/v1/person/join", {
        vault: e
    }).then(function() {})
};
exports.joinAccount = joinAccount;
var updateAccount = function(t, e) {
    return t.put("/api/v1/account/attrs", e).then(function() {})
};
exports.updateAccount = updateAccount;
var updateBillingSettings = function(t, e) {
    return t.put("/api/v1/account/billingsettings", e).then(function() {})
};
exports.updateBillingSettings = updateBillingSettings;
var deleteAccount = function(t) {
    return t.delete("/api/v1/account").then(function() {})
};
exports.deleteAccount = deleteAccount;
var verifyLockedOutAccountDeletion = function(t, e, n) {
    return t.get("/api/v1/account/" + e + "/" + n + "/verifydeletion").then(function() {})
};
exports.verifyLockedOutAccountDeletion = verifyLockedOutAccountDeletion;
var lockedOutDeleteAccount = function(t, e, n) {
    return t.delete("/api/v1/account/" + e + "/" + n).then(function() {})
};
exports.lockedOutDeleteAccount = lockedOutDeleteAccount;
var checkDomainAvailability = function(t, e, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return e && n ? (o = {
                        domain: e,
                        email: n
                    }, [4, t.postUnencrypted("/api/v1/domain/check", o)]) : [2, !1];
                case 1:
                    return [2, c.sent().result]
            }
        })
    })
};
exports.checkDomainAvailability = checkDomainAvailability;
var getSuggestedDomain = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, t.postUnencrypted("/api/v1/domain/suggestion", {
                        accountName: e
                    })];
                case 1:
                    return [2, n.sent().domain]
            }
        })
    })
};
exports.getSuggestedDomain = getSuggestedDomain;
var changeDomain = function(t, e) {
    return t.put("/api/v1/account/domain/" + e).then(function() {})
};
exports.changeDomain = changeDomain;
var postImage = function(t, e) {
    return t.postUnencrypted("/api/v1/image", e, {
        dataType: "arraybuffer",
        responseType: "text"
    })
};
exports.postImage = postImage;
var changeAccountType = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, t.put("/api/v2/account/type", e)];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};
exports.changeAccountType = changeAccountType;