var __awaiter = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))(function(o, a) {
            function i(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(i, u)
            }
            c((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var n, r, o, a, i = {
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
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
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
                        a = t.call(e, i)
                    } catch (e) {
                        a = [6, e], r = 0
                    } finally {
                        n = o = 0
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
export var TOTP_KEY_HANDLE = "totp";
export var EMAIL_KEY_HANDLE = "email";
export var MFAType;
! function(e) {
    e.TOTP = "T", e.Duo = "D", e.DSecret = "S", e.DSecretProxy = "P", e.WebAuthn = "W", e.Email = "E"
}(MFAType || (MFAType = {}));
export var enableMFA = function(e, t) {
    return e.post("/api/v1/user/mfa", t)
};
export var disableMFA = function(e, t) {
    return e.put("/api/v1/user/mfa/" + t).then(function() {})
};
export var sendMFACode = function(e, t) {
    return e.postUnencrypted("/api/v1/user/mfa/code", t)
};
export var getMFA = function(e) {
    return e.get("/api/v1/user/mfa")
};
export var getMFAConfig = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n, r, o, a;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, e.get("/api/v1/user/mfa/config")];
                case 1:
                    if (t = i.sent(), n = t.allowedTypes, r = t.canDisableAll, o = t.enforced, a = t.hasMFA, "object" == typeof n && "boolean" == typeof o && "boolean" == typeof r && "boolean" == typeof a) return [2, t];
                    throw new Error("Failed to validate getMFAConfig's response")
            }
        })
    })
};
export var verifyTotp = function(e, t) {
    return e.post("/api/v1/user/mfa/totp/verify", {
        totpCode: t
    })
};
export var getWebAuthnChallenge = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, e.get("/api/v1/user/mfa/webauthn/challenge")];
                case 1:
                    return [2, t.sent().challenge]
            }
        })
    })
};