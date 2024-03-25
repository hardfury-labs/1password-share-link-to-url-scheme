var __awaiter = this && this.__awaiter || function(e, t, i, n) {
        return new(i || (i = Promise))(function(r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                    e(t)
                })).then(s, a)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var i, n, r, o, s = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(o) {
            return function(a) {
                return function(o) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                        switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return s.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < r[1]) {
                                    s.label = r[1], r = o;
                                    break
                                }
                                if (r && s.label < r[2]) {
                                    s.label = r[2], s.ops.push(o);
                                    break
                                }
                                r[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = t.call(e, s)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        i = r = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    };
import {
    assignWith,
    isNil,
    throttle
} from "lodash-es";
import * as util from "../util";
import {
    refreshKeysetsIfNecessary
} from "./keyset";
import {
    Notifier
} from "./notifier";
import * as cache from "./request_cache";
import {
    Session
} from "./session";
var lastID = 0,
    Context = function() {
        function e(e) {
            var t = this;
            this.onNotificationReceived = function(e) {
                var i = JSON.parse(e.data);
                i ? i.session === t.session.sessionID ? (console.log("Notification received from self."), t.nc.emit(util.notification.ServerChangedFromSelf)) : (invalidateCache(t), t.sendServerChanged()) : console.error(new Error("Invalid server notification"))
            }, this.sendServerChanged = throttle(function() {
                return __awaiter(t, void 0, void 0, function() {
                    var e, t;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, refreshKeysetsIfNecessary(this)];
                            case 1:
                                return e = i.sent(), [3, 3];
                            case 2:
                                return t = i.sent(), console.error("Failed to refresh keysets", t), [3, 3];
                            case 3:
                                return this.nc.emit(util.notification.ServerChanged), e && this.nc.emit(util.notification.ServerChangedWithData, {
                                    keysets: e
                                }), [2]
                        }
                    })
                })
            }, 5e3, {
                leading: !0,
                trailing: !0
            }), this.config = assignWith({
                demoGeneratorIsEnabled: !1,
                host: "start.1password.com",
                env: "prd",
                inboxBase: "",
                internalFeaturesAreEnabled: !1,
                inWebView: !1,
                server: "1password.com",
                shouldResetWhenSessionExpires: !0,
                siblingDomains: [],
                txtBase: "/txt"
            }, e, function(e, t) {
                return isNil(t) || "string" == typeof t && 0 === t.length ? e : t
            }), this.nc = new util.events.EventEmitter, this.id = ++lastID, cache.saveServerChangedForContext(this.id);
            var i = this.reset(),
                n = i.notifier,
                r = i.session;
            this.notifier = n, this.session = r
        }
        return e.prototype.reset = function() {
            var e = this,
                t = this.config.lang || navigator.language || "en";
            return this.session = new Session(this.config.host, t), this.notifier = new Notifier(this.onNotificationReceived), this.session.nc.on(util.notification.SessionExpired, function() {
                e.nc.emit(util.notification.SessionExpired), e.config.shouldResetWhenSessionExpires && e.reset()
            }), this.nc.on(util.notification.SignedOut, function() {
                e.reset()
            }), this.account = void 0, this.user = void 0, this.userAuth = void 0, this.accountOverview = void 0, {
                notifier: this.notifier,
                session: this.session
            }
        }, Object.defineProperty(e.prototype, "user", {
            get: function() {
                return this._user
            },
            set: function(e) {
                this._user = e
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.setUserUUID = function(e) {
            if (!this._user) throw new Error("User is not set yet");
            this._user.uuid = e
        }, Object.defineProperty(e.prototype, "account", {
            get: function() {
                return this._account
            },
            set: function(e) {
                this._account = e
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "domain", {
            get: function() {
                if (this.account) return this.account.domain;
                var e = this.config.host.split(".").shift();
                if (!e) throw new Error("No domain found, invalid host provided.");
                return e
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.resetWithHost = function(e) {
            if (!isValidHost(e)) throw new Error("Invalid host");
            var t = getServerFromValidHost(e);
            if (!t) throw new Error("Invalid host");
            this.config.host = e, this.config.server = t, this.reset()
        }, e.prototype.isSignedIn = function() {
            return this.session.isSignedIn
        }, e
    }();
export {
    Context
};
var isValidHost = function(e) {
        try {
            return e === new URL("https://" + e).host
        } catch (e) {
            return !1
        }
    },
    getServerFromValidHost = function(e) {
        return "string" == typeof e && e ? e.slice(e.indexOf(".") + 1) : ""
    };
export var invalidateCache = function(e) {
    cache.saveServerChangedForContext(e.id)
};
export var changed = function(e) {
    e.nc.emit(util.notification.ClientStateChanged)
};
export var isSignedInAccountLoaded = function(e) {
    return e.session.isSignedIn && e.user && e.user.uuid && e.user.keysetVersion > 0 && e.user.attrVersion > 0
};