var __awaiter = this && this.__awaiter || function(n, t, e, i) {
        return new(e || (e = Promise))(function(r, o) {
            function a(n) {
                try {
                    s(i.next(n))
                } catch (n) {
                    o(n)
                }
            }

            function u(n) {
                try {
                    s(i.throw(n))
                } catch (n) {
                    o(n)
                }
            }

            function s(n) {
                var t;
                n.done ? r(n.value) : (t = n.value, t instanceof e ? t : new e(function(n) {
                    n(t)
                })).then(a, u)
            }
            s((i = i.apply(n, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(n, t) {
        var e, i, r, o, a = {
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
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (e = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                        switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
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
                                a.label++, i = o[1], o = [0];
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
                        o = t.call(n, a)
                    } catch (n) {
                        o = [6, n], i = 0
                    } finally {
                        e = r = 0
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
import * as api from "../api";
import * as model from "../model";
import * as util from "../util";
import {
    changed
} from "./context";
var DEFAULT_USER_API_BATCH_SIZE = 15,
    invitationsFromApi = function(n) {
        return n.filter(function(n) {
            return n.email
        }).map(function(n) {
            return new model.Invitation(n)
        })
    };
export var getPendingInvitations = function(n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, api.getPendingInvitations(n.session)];
                case 1:
                    return t = e.sent(), [2, invitationsFromApi(t)]
            }
        })
    })
};
export var getPendingInviteVaults = function(n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, api.getPendingInviteVaults(n.session)];
                case 1:
                    return [2, t.sent().vaultsByUserUuid]
            }
        })
    })
};
export var inviteUsersViaEmail = function(n, t, e, i, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, a;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return o = function(t) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var o;
                            return __generator(this, function(a) {
                                return o = t.map(function(n) {
                                    return {
                                        email: n,
                                        language: "en",
                                        vaults: i
                                    }
                                }), [2, api.inviteUsersViaEmail(n.session, o, e, r)]
                            })
                        })
                    }, [4, util.batchChain(o, 100, t)];
                case 1:
                    return a = u.sent(), [2, invitationsFromApi(a)]
            }
        })
    })
};
export var inviteViaSlack = function(n, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, api.inviteViaSlack(n.session, t)];
                case 1:
                    return e = i.sent(), [2, invitationsFromApi(e)]
            }
        })
    })
};
export var resendInvitations = function(n, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, i, r;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return e = t.map(function(n) {
                        return n.uuid
                    }), i = function(t) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            return __generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, api.resendInvitations(n.session, t)];
                                    case 1:
                                        return e.sent(), [2, []]
                                }
                            })
                        })
                    }, [4, util.batchChain(i, DEFAULT_USER_API_BATCH_SIZE, e)];
                case 1:
                    return r = o.sent(), [2, invitationsFromApi(r)]
            }
        })
    })
};
export var lookUpInvitation = function(n, t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, api.lookUpInvitation(n.session, t, e)];
                case 1:
                    return [2, i.sent()]
            }
        })
    })
};
export var lookUpTeamInvitation = function(n, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, api.lookUpTeamInvitation(n.session, t)];
                case 1:
                    return [2, e.sent()]
            }
        })
    })
};
export var teamInvitePerson = function(n, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, api.teamInvitePerson(n.session, t)];
                case 1:
                    return [2, e.sent()]
            }
        })
    })
};
export var regenerateSignUpLink = function(n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, api.regenerateSignUpLink(n.session)];
                case 1:
                    return t = e.sent(), n.account && (n.account.inviteSecret = t.inviteSecret, n.account.attrVersion++, changed(n)), [2, t]
            }
        })
    })
};
export var revokeInvitations = function(n, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return e = t.map(function(n) {
                        return n.uuid
                    }), [4, api.revokeInvitations(n.session, e)];
                case 1:
                    return i.sent(), [2]
            }
        })
    })
};
export var generateReplyToConfirmation = function(n, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, api.generateReplyToConfirmation(n.session, t)];
                case 1:
                    return [2, e.sent()]
            }
        })
    })
};
export var completeReplyToConfirmation = function(n, t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, api.completeReplyToConfirmation(n.session, t, e)];
                case 1:
                    return [2, i.sent()]
            }
        })
    })
};