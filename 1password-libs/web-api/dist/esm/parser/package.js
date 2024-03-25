var __awaiter = this && this.__awaiter || function(e, t, r, i) {
        return new(r || (r = Promise))(function(n, a) {
            function o(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, u)
            }
            c((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, i, n, a, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, i && (n = 2 & a[0] ? i.return : a[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, a[1])).done) return n;
                        switch (i = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, i = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < n[1]) {
                                    o.label = n[1], n = a;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(a);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = t.call(e, o)
                    } catch (e) {
                        a = [6, e], i = 0
                    } finally {
                        r = n = 0
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
import * as model from "../model";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    dateFromAPI,
    dateToAPI
} from "./date";
var codeLocation = "parser/package",
    makePromise = mp(codeLocation);
export var packagesFromAPI = function(e, t, r, i) {
    return makePromise("packagesFromAPI", function() {
        return r && 0 !== r.length ? Promise.all(r.map(function(r) {
            return packageFromAPI(e, t, r, i)
        })).catch(function() {
            return []
        }) : []
    })
};
export var packageFromAPI = function(e, t, r, i) {
    return makePromise("packageFromAPI", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, a, o, u, c, d, s;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return [4, i([r.senderUuid, r.recipientUuid])];
                    case 1:
                        if (n = l.sent(), a = n.find(function(e) {
                                return e.uuid === r.recipientUuid
                            }), o = n.find(function(e) {
                                return e.uuid === r.senderUuid
                            }), !a || !o) throw new Error("Missing recipient or sender.");
                        return [4, model.importPubKey(o.pubKey)];
                    case 2:
                        if (u = l.sent(), (c = new model.Person({
                                uuid: o.uuid
                            })).pubKey = u, (d = new model.Package(c, a)).uuid = r.uuid, d.createdAt = dateFromAPI(r.createdAt), d.updatedAt = dateFromAPI(r.updatedAt), d.itemUuid = r.itemUuid, d.itemVersion = r.itemVersion, d.templateUuid = r.templateUuid, d.clientCreatedAt = dateFromAPI(r.clientCreatedAt), d.clientUpdatedAt = dateFromAPI(r.clientUpdatedAt), d.encKey = r.encKey, d.recoverableEncKey = r.recoverableEncKey, d.encOverview = r.encOverview, d.encDetails = r.encDetails, d.signature = r.signature, !e.user) throw new Error("Missing user");
                        return [2, (s = a.uuid === e.user.uuid && e.user.activeKeyset) ? d.verifyAndDecrypt(t, s) : d]
                }
            })
        })
    })
};
export var packageToAPI = function(e) {
    if (!e.item) throw new Error("Missing item");
    if (!e.encKey) throw new Error("Missing encKey");
    if (!e.recoverableEncKey) throw new Error("Missing recoverableEncKey");
    if (!e.encOverview) throw new Error("Missing encOverview");
    if (!e.signature) throw new Error("Missing signature");
    if (!e.item.templateUuid) throw new Error("Missing template UUID");
    var t = {
        uuid: e.uuid,
        senderUuid: e.sender.uuid,
        recipientUuid: e.recipient.uuid,
        sourceVaultUuid: e.item.vault.uuid,
        itemUuid: e.item.uuid,
        itemVersion: e.item.itemVersion,
        templateUuid: e.item.templateUuid,
        encKey: e.encKey,
        recoverableEncKey: e.recoverableEncKey,
        encOverview: e.encOverview,
        encDetails: e.encDetails,
        signature: e.signature
    };
    return e.createdAt && (t.createdAt = dateToAPI(e.createdAt)), e.updatedAt && (t.updatedAt = dateToAPI(e.updatedAt)), e.item.createdAt && (t.clientCreatedAt = dateToAPI(e.item.createdAt)), e.item.updatedAt && (t.clientUpdatedAt = dateToAPI(e.item.updatedAt)), t
};