"use strict";
var __extends = this && this.__extends || function() {
        var e = function(t, r) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(t, r)
        };
        return function(t, r) {
            function n() {
                this.constructor = t
            }
            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
        }
    }(),
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
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
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
        return __setModuleDefault(t, e), t
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, s) {
            function a(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function o(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, o)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, s, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function o(s) {
            return function(o) {
                return function(s) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                        switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                            case 0:
                            case 1:
                                i = s;
                                break;
                            case 4:
                                return a.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = s[1], s = [0];
                                continue;
                            case 7:
                                s = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                    a.label = s[1];
                                    break
                                }
                                if (6 === s[0] && a.label < i[1]) {
                                    a.label = i[1], i = s;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(s);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        s = t.call(e, a)
                    } catch (e) {
                        s = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, o])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, s = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = s.next()).done;) a.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = s.return) && r.call(s)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.OldUser = exports.BasicNewsletter = void 0;
var util = __importStar(require("../util")),
    kdf = __importStar(require("./kdf")),
    keyset_1 = require("./keyset"),
    person_1 = require("./person"),
    symmetric_key_constants_1 = require("./symmetric_key_constants"),
    symmetric_key_pf_1 = require("./symmetric_key_pf"),
    vault_1 = require("./vault"),
    vaultACL = __importStar(require("./vault_acl"));
exports.BasicNewsletter = 1;
var OldUser = function(e) {
    function t(t) {
        var r = e.call(this, t) || this;
        return r.deriveMasterKey = function(e, t) {
            return __awaiter(r, void 0, void 0, function() {
                var r;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, symmetric_key_pf_1.deriveMasterKey(e || getDefaultMasterKeyDerivation(), t || this.getCredentials())];
                        case 1:
                            return r = n.sent(), this.masterKey = r, [2, r]
                    }
                })
            })
        }, r.importMasterKey = function(e, t) {
            return __awaiter(r, void 0, void 0, function() {
                var r;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return r = this, [4, symmetric_key_pf_1.importMasterKey(e, t)];
                        case 1:
                            return r.masterKey = n.sent(), [2, this.masterKey]
                    }
                })
            })
        }, r.generateNewKeyset = function() {
            return __awaiter(r, void 0, void 0, function() {
                var e, t;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, keyset_1.Keyset.generateWithSigningKeys()];
                        case 1:
                            return e = r.sent(), this.activeKeyset ? (e.sn = this.activeKeyset.sn + 1, [4, this.activeKeyset.encryptWithKey(e.symKey)]) : [3, 3];
                        case 2:
                            return t = r.sent(), this.archivedKeysets = __spread([t], this.archivedKeysets), [3, 4];
                        case 3:
                            e.sn = 1, r.label = 4;
                        case 4:
                            return this.setActiveKeyset(e), [2, this]
                    }
                })
            })
        }, r.encryptActiveKeysetWithMasterKey = function() {
            return __awaiter(r, void 0, void 0, function() {
                return __generator(this, function(e) {
                    if (!this.activeKeyset) throw new Error("Missing activeKeyset");
                    if (!this.masterKey) throw new Error("Missing masterKey");
                    return [2, this.activeKeyset.encryptWithKey(this.masterKey)]
                })
            })
        }, r.getCredentials = function() {
            if (!r.email) throw new Error("Missing email");
            if (!r.password) throw new Error("Missing Master Password");
            if (!r.secretKey) throw new Error("Missing Secret Key");
            return {
                email: r.email,
                password: r.password,
                secretKey: r.secretKey
            }
        }, r.canManageVault = function(e) {
            return !!e && vault_1.Vault.activeUserHasAcl(e, vaultACL.Manage)
        }, r.password = t.password, r.secretKey = t.secretKey, r
    }
    return __extends(t, e), t
}(person_1.Person);
exports.OldUser = OldUser;
var MASTER_SALT_LENGTH_IN_BITS = 128,
    getDefaultMasterKeyDerivation = function() {
        return {
            alg: kdf.DEFAULT_ALG,
            iterations: kdf.DEFAULT_ITERATIONS,
            enc: symmetric_key_constants_1.JWK_ALG_A256GCM,
            salt: util.crypto.getSalt(MASTER_SALT_LENGTH_IN_BITS)
        }
    };