var __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(a, i) {
            function o(t) {
                try {
                    c(n.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(n.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(o, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, a, i, o = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (a = 2 & i[0] ? n.return : i[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, i[1])).done) return a;
                        switch (n = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < a[1]) {
                                    o.label = a[1], a = i;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(i);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = e.call(t, o)
                    } catch (t) {
                        i = [6, t], n = 0
                    } finally {
                        r = a = 0
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
    ServiceAccountType
} from "../../../api";
import {
    getSystemVault
} from "../../vault";
import {
    getVaultItems
} from "../../vault_item";
import {
    buildSummaryObject
} from "./summary";
export var getAndFormatMaskedEmails = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, r, n, a, i;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return (null === (i = null === (a = t.account) || void 0 === a ? void 0 : a.hasFeature) || void 0 === i ? void 0 : i.integrationHubEmailAlias) ? [4, getSystemVault(t)] : [2, []];
                case 1:
                    return (e = o.sent()) ? [4, getVaultItems(t, e)] : [2, []];
                case 2:
                    return r = o.sent(), n = r.filter(function(t) {
                        return "fastmail" === t.overview.integration
                    }), [4, Promise.all(n.map(function(e) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var r;
                            return __generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return r = {
                                            type: "S",
                                            uuid: e.uuid,
                                            name: "Fastmail",
                                            createdAt: "",
                                            state: "",
                                            creatorUuid: "",
                                            serviceAccountType: ServiceAccountType.MaskedEmails,
                                            email: "",
                                            avatar: ""
                                        }, [4, buildSummaryObject({
                                            type: ServiceAccountType.MaskedEmails,
                                            vaultItem: e,
                                            CTX: t
                                        })];
                                    case 1:
                                        return [2, (r.summary = n.sent(), r)]
                                }
                            })
                        })
                    }))];
                case 3:
                    return [2, o.sent()]
            }
        })
    })
};