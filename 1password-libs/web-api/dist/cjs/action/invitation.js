"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
        void 0 === i && (i = n), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    } : function(e, t, n, i) {
        void 0 === i && (i = n), e[i] = t[n]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && __createBinding(t, e, n);
        return __setModuleDefault(t, e), t
    },
    __awaiter = this && this.__awaiter || function(e, t, n, i) {
        return new(n || (n = Promise))(function(r, o) {
            function a(e) {
                try {
                    u(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    u(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var t;
                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(a, s)
            }
            u((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
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
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], i = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.completeReplyToConfirmation = exports.generateReplyToConfirmation = exports.revokeInvitations = exports.regenerateSignUpLink = exports.teamInvitePerson = exports.lookUpTeamInvitation = exports.lookUpInvitation = exports.resendInvitations = exports.inviteViaSlack = exports.inviteUsersViaEmail = exports.getPendingInviteVaults = exports.getPendingInvitations = void 0;
var api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    util = __importStar(require("../util")),
    context_1 = require("./context"),
    DEFAULT_USER_API_BATCH_SIZE = 15,
    invitationsFromApi = function(e) {
        return e.filter(function(e) {
            return e.email
        }).map(function(e) {
            return new model.Invitation(e)
        })
    },
    getPendingInvitations = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, api.getPendingInvitations(e.session)];
                    case 1:
                        return t = n.sent(), [2, invitationsFromApi(t)]
                }
            })
        })
    };
exports.getPendingInvitations = getPendingInvitations;
var getPendingInviteVaults = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, api.getPendingInviteVaults(e.session)];
                case 1:
                    return [2, t.sent().vaultsByUserUuid]
            }
        })
    })
};
exports.getPendingInviteVaults = getPendingInviteVaults;
var inviteUsersViaEmail = function(e, t, n, i, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, a;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return o = function(t) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var o;
                            return __generator(this, function(a) {
                                return o = t.map(function(e) {
                                    return {
                                        email: e,
                                        language: "en",
                                        vaults: i
                                    }
                                }), [2, api.inviteUsersViaEmail(e.session, o, n, r)]
                            })
                        })
                    }, [4, util.batchChain(o, 100, t)];
                case 1:
                    return a = s.sent(), [2, invitationsFromApi(a)]
            }
        })
    })
};
exports.inviteUsersViaEmail = inviteUsersViaEmail;
var inviteViaSlack = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, api.inviteViaSlack(e.session, t)];
                case 1:
                    return n = i.sent(), [2, invitationsFromApi(n)]
            }
        })
    })
};
exports.inviteViaSlack = inviteViaSlack;
var resendInvitations = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, r;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return n = t.map(function(e) {
                        return e.uuid
                    }), i = function(t) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            return __generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, api.resendInvitations(e.session, t)];
                                    case 1:
                                        return n.sent(), [2, []]
                                }
                            })
                        })
                    }, [4, util.batchChain(i, DEFAULT_USER_API_BATCH_SIZE, n)];
                case 1:
                    return r = o.sent(), [2, invitationsFromApi(r)]
            }
        })
    })
};
exports.resendInvitations = resendInvitations;
var lookUpInvitation = function(e, t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, api.lookUpInvitation(e.session, t, n)];
                case 1:
                    return [2, i.sent()]
            }
        })
    })
};
exports.lookUpInvitation = lookUpInvitation;
var lookUpTeamInvitation = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, api.lookUpTeamInvitation(e.session, t)];
                case 1:
                    return [2, n.sent()]
            }
        })
    })
};
exports.lookUpTeamInvitation = lookUpTeamInvitation;
var teamInvitePerson = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, api.teamInvitePerson(e.session, t)];
                case 1:
                    return [2, n.sent()]
            }
        })
    })
};
exports.teamInvitePerson = teamInvitePerson;
var regenerateSignUpLink = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, api.regenerateSignUpLink(e.session)];
                case 1:
                    return t = n.sent(), e.account && (e.account.inviteSecret = t.inviteSecret, e.account.attrVersion++, context_1.changed(e)), [2, t]
            }
        })
    })
};
exports.regenerateSignUpLink = regenerateSignUpLink;
var revokeInvitations = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return n = t.map(function(e) {
                        return e.uuid
                    }), [4, api.revokeInvitations(e.session, n)];
                case 1:
                    return i.sent(), [2]
            }
        })
    })
};
exports.revokeInvitations = revokeInvitations;
var generateReplyToConfirmation = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, api.generateReplyToConfirmation(e.session, t)];
                case 1:
                    return [2, n.sent()]
            }
        })
    })
};
exports.generateReplyToConfirmation = generateReplyToConfirmation;
var completeReplyToConfirmation = function(e, t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, api.completeReplyToConfirmation(e.session, t, n)];
                case 1:
                    return [2, i.sent()]
            }
        })
    })
};
exports.completeReplyToConfirmation = completeReplyToConfirmation;