var __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, i) {
            function a(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(a, u)
            }
            c((n = n.apply(e, r || [])).next())
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
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
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
                }([i, u])
            }
        }
    };
import {
    compact
} from "lodash-es";
import {
    createTeamMembersGroup
} from "./create_team_members_group";
import {
    giveOwnersAndAdminGroupsRecoveryKeyset
} from "./give_owners_and_admin_groups_recovery_keyset";
import {
    updateSpecialVaultDescriptions
} from "./update_special_vault_descriptions";
export var runBlockingMigrations = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, Promise.resolve()]
        })
    })
};
export var runBackgroundMigrations = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, Promise.all([updateSpecialVaultDescriptions(e), giveOwnersAndAdminGroupsRecoveryKeyset(e), createTeamMembersGroup(e)])];
                case 1:
                    return r = t.sent(), [4, Promise.all(compact(r).map(function(e) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            return __generator(this, function(r) {
                                return [2, e()]
                            })
                        })
                    }))];
                case 2:
                    return t.sent(), [2]
            }
        })
    })
};