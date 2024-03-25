"use strict";
var __awaiter = this && this.__awaiter || function(e, r, n, t) {
        return new(n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(t.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                try {
                    s(t.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof n ? r : new n(function(e) {
                    e(r)
                })).then(a, u)
            }
            s((t = t.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var n, t, o, i, a = {
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
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, t && (o = 2 & i[0] ? t.return : i[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, i[1])).done) return o;
                        switch (t = 0, o && (i = [2 & i[0], o.value]), i[0]) {
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
                                a.label++, t = i[1], i = [0];
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
                        i = [6, e], t = 0
                    } finally {
                        n = o = 0
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
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.runBackgroundMigrations = exports.runBlockingMigrations = void 0;
var lodash_es_1 = require("lodash-es"),
    create_team_members_group_1 = require("./create_team_members_group"),
    give_owners_and_admin_groups_recovery_keyset_1 = require("./give_owners_and_admin_groups_recovery_keyset"),
    update_special_vault_descriptions_1 = require("./update_special_vault_descriptions"),
    runBlockingMigrations = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, Promise.resolve()]
            })
        })
    };
exports.runBlockingMigrations = runBlockingMigrations;
var runBackgroundMigrations = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, Promise.all([update_special_vault_descriptions_1.updateSpecialVaultDescriptions(e), give_owners_and_admin_groups_recovery_keyset_1.giveOwnersAndAdminGroupsRecoveryKeyset(e), create_team_members_group_1.createTeamMembersGroup(e)])];
                case 1:
                    return r = n.sent(), [4, Promise.all(lodash_es_1.compact(r).map(function(e) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            return __generator(this, function(r) {
                                return [2, e()]
                            })
                        })
                    }))];
                case 2:
                    return n.sent(), [2]
            }
        })
    })
};
exports.runBackgroundMigrations = runBackgroundMigrations;