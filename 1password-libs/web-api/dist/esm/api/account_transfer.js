var __awaiter = this && this.__awaiter || function(t, n, e, r) {
        return new(e || (e = Promise))(function(o, i) {
            function a(t) {
                try {
                    c(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var n;
                t.done ? o(t.value) : (n = t.value, n instanceof e ? n : new e(function(t) {
                    t(n)
                })).then(a, u)
            }
            c((r = r.apply(t, n || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, n) {
        var e, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (e = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
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
                                a.label++, r = i[1], i = [0];
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
                        i = n.call(t, a)
                    } catch (t) {
                        i = [6, t], r = 0
                    } finally {
                        e = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    };
import * as t from "io-ts";
import * as util from "../util";
var AccountTransferAccount = t.readonly(t.intersection([t.type({
        uuid: t.string
    }), t.partial({
        domain: t.string
    })])),
    AccountTransferUserCounts = t.readonly(t.type({
        pending: t.number,
        complete: t.number,
        declined: t.number
    }));
export var AccountTransferDetails = t.readonly(t.intersection([t.type({
    originAccount: AccountTransferAccount,
    destinationAccount: AccountTransferAccount
}), t.partial({
    userCounts: AccountTransferUserCounts
})]));
export var getAccountTransfersDetails = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, t.get("/api/v1/account/transfer").then(util.unsafeDecodeAs(AccountTransferDetails))]
        })
    })
};
export var postMigratingUsers = function(t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, t.post("/api/v1/accountmigration/users", n)];
                case 1:
                    return e.sent(), [2]
            }
        })
    })
};
export var patchMigratingUserState = function(t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, t.patch("/api/v1/accountmigration/user/" + n)];
                case 1:
                    return e.sent(), [2]
            }
        })
    })
};
export var suspendMigratedUser = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, t.put("/api/v1/accountmigration/user/suspend")];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};