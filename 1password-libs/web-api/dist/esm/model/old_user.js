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
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function o(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(s, o)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, a, s = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function o(a) {
            return function(o) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                        switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < i[1]) {
                                    s.label = i[1], i = a;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(a);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = t.call(e, s)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, o])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, a = r.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = a.next()).done;) s.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = a.return) && r.call(a)
            } finally {
                if (i) throw i.error
            }
        }
        return s
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    };
import * as util from "../util";
import * as kdf from "./kdf";
import {
    Keyset
} from "./keyset";
import {
    Person
} from "./person";
import {
    JWK_ALG_A256GCM
} from "./symmetric_key_constants";
import {
    deriveMasterKey,
    importMasterKey
} from "./symmetric_key_pf";
import {
    Vault
} from "./vault";
import * as vaultACL from "./vault_acl";
export var BasicNewsletter = 1;
var OldUser = function(e) {
    function t(t) {
        var r = e.call(this, t) || this;
        return r.deriveMasterKey = function(e, t) {
            return __awaiter(r, void 0, void 0, function() {
                var r;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, deriveMasterKey(e || getDefaultMasterKeyDerivation(), t || this.getCredentials())];
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
                            return r = this, [4, importMasterKey(e, t)];
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
                            return [4, Keyset.generateWithSigningKeys()];
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
            return !!e && Vault.activeUserHasAcl(e, vaultACL.Manage)
        }, r.password = t.password, r.secretKey = t.secretKey, r
    }
    return __extends(t, e), t
}(Person);
export {
    OldUser
};
var MASTER_SALT_LENGTH_IN_BITS = 128,
    getDefaultMasterKeyDerivation = function() {
        return {
            alg: kdf.DEFAULT_ALG,
            iterations: kdf.DEFAULT_ITERATIONS,
            enc: JWK_ALG_A256GCM,
            salt: util.crypto.getSalt(MASTER_SALT_LENGTH_IN_BITS)
        }
    };