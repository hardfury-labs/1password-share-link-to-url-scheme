"use strict";
var __awaiter = this && this.__awaiter || function(e, r, n, o) {
        return new(n || (n = Promise))(function(t, i) {
            function s(e) {
                try {
                    u(o.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    u(o.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var r;
                e.done ? t(e.value) : (r = e.value, r instanceof n ? r : new n(function(e) {
                    e(r)
                })).then(s, a)
            }
            u((o = o.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var n, o, t, i, s = {
            label: 0,
            sent: function() {
                if (1 & t[0]) throw t[1];
                return t[1]
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
                        if (n = 1, o && (t = 2 & i[0] ? o.return : i[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, i[1])).done) return t;
                        switch (o = 0, t && (i = [2 & i[0], t.value]), i[0]) {
                            case 0:
                            case 1:
                                t = i;
                                break;
                            case 4:
                                return s.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(t = (t = s.trys).length > 0 && t[t.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!t || i[1] > t[0] && i[1] < t[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < t[1]) {
                                    s.label = t[1], t = i;
                                    break
                                }
                                if (t && s.label < t[2]) {
                                    s.label = t[2], s.ops.push(i);
                                    break
                                }
                                t[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = r.call(e, s)
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
                }([i, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.giveOwnersAndAdminGroupsRecoveryKeyset = void 0;
var permission_1 = require("../../model/permission"),
    group_1 = require("../group"),
    giveOwnersAndAdminGroupsRecoveryKeyset = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, o, t, i, s, a;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return e.user && e.account && e.user.hasPermission(permission_1.Permission.BelongsToRecoveryGroup) ? (r = e.account.recoveryGroup, n = e.account.ownersGroup, o = e.account.administratorsGroup, [4, group_1.getRecoveryKeyset(e).catch(function(e) {})]) : [2, void 0];
                    case 1:
                        return t = u.sent(), r && t ? (i = !!r.recoveryKeyset, s = !n || n.hasPermission(permission_1.Permission.Recover), a = !o || o.hasPermission(permission_1.Permission.Recover), i && s && a ? [2, void 0] : [2, function() {
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return console.warn("Running keyset migration!"), i ? [3, 2] : (console.warn("Running RecoveryGroup keyset migration!"), [4, group_1.addRecoveryKeysetToGroup(e, r, t)]);
                                        case 1:
                                            u.sent(), u.label = 2;
                                        case 2:
                                            return !n || s ? [3, 4] : (console.warn("Running OwnersGroup keyset migration!"), [4, group_1.addRecoveryKeysetToGroup(e, n, t)]);
                                        case 3:
                                            u.sent(), u.label = 4;
                                        case 4:
                                            return !o || a ? [3, 6] : (console.warn("Running AdminGroup keyset migration!"), [4, group_1.addRecoveryKeysetToGroup(e, o, t)]);
                                        case 5:
                                            u.sent(), u.label = 6;
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
exports.giveOwnersAndAdminGroupsRecoveryKeyset = giveOwnersAndAdminGroupsRecoveryKeyset;