var __awaiter = this && this.__awaiter || function(e, t, r, i) {
        return new(r || (r = Promise))(function(n, s) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function o(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function c(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, o)
            }
            c((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, i, n, s, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
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
                        if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                        switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                            case 0:
                            case 1:
                                n = s;
                                break;
                            case 4:
                                return a.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = s[1], s = [0];
                                continue;
                            case 7:
                                s = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                    a.label = s[1];
                                    break
                                }
                                if (6 === s[0] && a.label < n[1]) {
                                    a.label = n[1], n = s;
                                    break
                                }
                                if (n && a.label < n[2]) {
                                    a.label = n[2], a.ops.push(s);
                                    break
                                }
                                n[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        s = t.call(e, a)
                    } catch (e) {
                        s = [6, e], i = 0
                    } finally {
                        r = n = 0
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
        var i, n, s = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(i = s.next()).done;) a.push(i.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (r = s.return) && r.call(s)
            } finally {
                if (n) throw n.error
            }
        }
        return a
    };
import * as util from "../util";
import {
    importPubKey
} from "./rsa_public_key";
import {
    JWK_ALG_A256GCM
} from "./symmetric_key_constants";
import {
    createSymmetricKey
} from "./symmetric_key_pf";
import {
    VaultItem
} from "./vault_item";
var Package = function() {
    return function(e, t, r) {
        var i = this;
        this.encryptAndSign = function(e) {
            return __awaiter(i, void 0, void 0, function() {
                var t, r, i, n, s, a, o, c;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            if (!this.item) throw new Error("Missing item.");
                            if (!this.recipient.pubKey) throw new Error("Missing recipient's public key");
                            return this.key = createSymmetricKey(), [4, Promise.all([importPubKey(this.recipient.pubKey), this.key.generate(JWK_ALG_A256GCM)])];
                        case 1:
                            if (t = __read.apply(void 0, [u.sent(), 1]), r = t[0], !this.key.jwk) throw new Error("Missing JWK.");
                            return i = this, [4, r.encrypt(util.json2ab(this.key.jwk))];
                        case 2:
                            return i.encKey = u.sent(), [4, this.item.encryptWithKey(this.key)];
                        case 3:
                            if (n = __read.apply(void 0, [u.sent(), 2]), s = n[0], a = n[1], this.encOverview = s, this.encDetails = a, o = util.concatUint8Arrays([util.str2ab(this.sender.uuid), util.str2ab(this.recipient.uuid), util.json2ab(this.encOverview), util.json2ab(this.encDetails)]), !this.sender.activeKeyset) throw new Error("Missing active keyset.");
                            return c = this, [4, this.sender.activeKeyset.sign(o)];
                        case 4:
                            return c.signature = u.sent(), [4, this._enableKeyRecovery(e)];
                        case 5:
                            return u.sent(), [2, this]
                    }
                })
            })
        }, this._enableKeyRecovery = function(e) {
            return __awaiter(i, void 0, void 0, function() {
                var t;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            if (!e.pubKey) throw new Error("Missing group's public key");
                            if (!this.key) throw new Error("Missing key");
                            return t = this, [4, this.key.encryptWithKey(e.pubKey)];
                        case 1:
                            return t.recoverableEncKey = r.sent(), [2, this]
                    }
                })
            })
        }, this.verifyAndDecrypt = function(e, t) {
            return __awaiter(i, void 0, void 0, function() {
                var r;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (this.key = createSymmetricKey(), r = new VaultItem(e, void 0, this.uuid), !this.templateUuid) throw new Error("Missing template UUID");
                            if (!this.itemUuid) throw new Error("Missing item UUID");
                            if (!this.encOverview) throw new Error("Missing encrypted overview");
                            if (!this.encKey) throw new Error("Missing encryption key");
                            return [4, this.key.decryptWithKeyset(t, this.encKey)];
                        case 1:
                            return i.sent(), [4, r.decryptWithKey(this.key, this.encOverview, this.encDetails)];
                        case 2:
                            return i.sent(), r.templateUuid = this.templateUuid, r.packageUuid = this.uuid, r.uuid = this.itemUuid, r.itemVersion = 1, r.state = "N", r.createdAt = this.clientCreatedAt, r.updatedAt = this.clientUpdatedAt, this.item = r, [2, this]
                    }
                })
            })
        }, this.sender = e, this.recipient = t, this.item = r, this.createdAt = new Date
    }
}();
export {
    Package
};
export var PackageV2;
! function(e) {
    var t = this;
    e.encryptAndSign = function(e, r, i) {
        return __awaiter(t, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, e.verifyAndDecrypt = function(e) {
        return __awaiter(t, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }
}(PackageV2 || (PackageV2 = {}));