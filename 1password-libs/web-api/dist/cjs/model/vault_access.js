"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    },
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
        return new(r || (r = Promise))(function(i, a) {
            function u(e) {
                try {
                    o(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                try {
                    o(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function o(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(u, c)
            }
            o((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, a, u = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function c(a) {
            return function(c) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                        switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return u.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    u.label = a[1];
                                    break
                                }
                                if (6 === a[0] && u.label < i[1]) {
                                    u.label = i[1], i = a;
                                    break
                                }
                                if (i && u.label < i[2]) {
                                    u.label = i[2], u.ops.push(a);
                                    break
                                }
                                i[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        a = t.call(e, u)
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
                }([a, c])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.VaultAccess = void 0;
var util_1 = require("../util"),
    make_promise_1 = require("../util/make_promise"),
    rsa_public_key_1 = require("./rsa_public_key"),
    symmetric_key_pf_1 = require("./symmetric_key_pf"),
    vaultACL = __importStar(require("./vault_acl")),
    codeLocation = "model/vault_access",
    makePromise = make_promise_1.makePromise(codeLocation),
    VaultAccess = function() {
        function e(e) {
            var t = this;
            if (this.canManageVault = function(e) {
                    return t.vaultUuid === e.uuid && (t.acl & vaultACL.Manage) === vaultACL.Manage
                }, this.encryptVaultKey = function(e) {
                    return makePromise("encryptVaultKey", function() {
                        if (!t.vaultKey) throw new Error("Missing vault key");
                        if (!e) throw new Error("Missing accessor");
                        if (!e.pubKey) throw new Error("Missing accessor's pubKey");
                        return t.vaultKey.encryptWithKey(e.pubKey).then(function(e) {
                            return t.encVaultKey = e, e
                        })
                    })
                }, this.decryptVaultKey = function(e) {
                    return makePromise("decryptVaultKey", function() {
                        if (!t.encVaultKey) throw new Error("Missing encrypted vault key.");
                        if (!e) throw new Error("Missing keyset");
                        return t.vaultKey = symmetric_key_pf_1.createSymmetricKey(), t.vaultKey.decryptWithKeyset(e, t.encVaultKey)
                    })
                }, !util_1.isValidVaultUuid(e.vaultUuid)) throw new Error("Invalid vault UUID");
            if (!util_1.isValidAccessorUuid(e.accessorType)(e.accessorUuid)) throw new Error("Invalid accessor UUID");
            this.vaultUuid = e.vaultUuid, this.accessorType = e.accessorType, this.accessorUuid = e.accessorUuid, this.vaultKeySN = e.vaultKeySN, this.encVaultKey = e.encVaultKey && "kid" in e.encVaultKey && e.encVaultKey.kid ? e.encVaultKey : void 0, this.encryptedBy = e.encryptedBy, this.acl = e.acl, this.leaseTimeout = e.leaseTimeout
        }
        return e.combineACLs = function(e) {
            return e ? e.reduce(function(e, t) {
                return e | t.acl
            }, 0) : 0
        }, e.generate = function(t, r, n) {
            return makePromise("generate", function() {
                return __awaiter(void 0, void 0, void 0, function() {
                    var i, a, u;
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                if (!t || !t.activeKey) throw new Error("Missing vault key");
                                if (void 0 === t.activeKey.sn) throw new TypeError("Missing active key SN");
                                if (!r || !r.pubKey) throw new Error("Missing accessor's public key");
                                return [4, rsa_public_key_1.getImportedPubKey(r.pubKey)];
                            case 1:
                                return i = c.sent(), [4, t.activeKey.encryptWithKey(i)];
                            case 2:
                                return a = c.sent(), (u = new e(__assign({
                                    accessorType: r.accessorType,
                                    accessorUuid: r.uuid,
                                    encryptedBy: i.uuid,
                                    encVaultKey: a,
                                    leaseTimeout: 0,
                                    vaultKeySN: t.activeKey.sn,
                                    vaultUuid: t.uuid
                                }, n))).vaultKey = t.activeKey, [2, u]
                        }
                    })
                })
            })
        }, e
    }();
exports.VaultAccess = VaultAccess;