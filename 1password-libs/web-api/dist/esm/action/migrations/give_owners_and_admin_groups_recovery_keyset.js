var __awaiter = this && this.__awaiter || function(e, r, n, o) {
        return new(n || (n = Promise))(function(t, i) {
            function a(e) {
                try {
                    c(o.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(o.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var r;
                e.done ? t(e.value) : (r = e.value, r instanceof n ? r : new n(function(e) {
                    e(r)
                })).then(a, s)
            }
            c((o = o.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var n, o, t, i, a = {
            label: 0,
            sent: function() {
                if (1 & t[0]) throw t[1];
                return t[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (t = 2 & i[0] ? o.return : i[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, i[1])).done) return t;
                        switch (o = 0, t && (i = [2 & i[0], t.value]), i[0]) {
                            case 0:
                            case 1:
                                t = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(t = (t = a.trys).length > 0 && t[t.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!t || i[1] > t[0] && i[1] < t[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < t[1]) {
                                    a.label = t[1], t = i;
                                    break
                                }
                                if (t && a.label < t[2]) {
                                    a.label = t[2], a.ops.push(i);
                                    break
                                }
                                t[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = r.call(e, a)
                    } catch (e) {
                        i = [6, e], o = 0
                    } finally {
                        n = t = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    };
import {
    Permission
} from "../../model/permission";
import {
    addRecoveryKeysetToGroup,
    getRecoveryKeyset
} from "../group";
export var giveOwnersAndAdminGroupsRecoveryKeyset = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, o, t, i, a, s;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return e.user && e.account && e.user.hasPermission(Permission.BelongsToRecoveryGroup) ? (r = e.account.recoveryGroup, n = e.account.ownersGroup, o = e.account.administratorsGroup, [4, getRecoveryKeyset(e).catch(function(e) {})]) : [2, void 0];
                case 1:
                    return t = c.sent(), r && t ? (i = !!r.recoveryKeyset, a = !n || n.hasPermission(Permission.Recover), s = !o || o.hasPermission(Permission.Recover), i && a && s ? [2, void 0] : [2, function() {
                        return __awaiter(void 0, void 0, void 0, function() {
                            return __generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return console.warn("Running keyset migration!"), i ? [3, 2] : (console.warn("Running RecoveryGroup keyset migration!"), [4, addRecoveryKeysetToGroup(e, r, t)]);
                                    case 1:
                                        c.sent(), c.label = 2;
                                    case 2:
                                        return !n || a ? [3, 4] : (console.warn("Running OwnersGroup keyset migration!"), [4, addRecoveryKeysetToGroup(e, n, t)]);
                                    case 3:
                                        c.sent(), c.label = 4;
                                    case 4:
                                        return !o || s ? [3, 6] : (console.warn("Running AdminGroup keyset migration!"), [4, addRecoveryKeysetToGroup(e, o, t)]);
                                    case 5:
                                        c.sent(), c.label = 6;
                                    case 6:
                                        return [2]
                                }
                            })
                        })
                    }]) : [2, void 0]
            }
        })
    })
};