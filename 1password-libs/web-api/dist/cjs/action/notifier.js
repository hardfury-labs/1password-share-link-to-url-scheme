"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Notifier = void 0;
var INITIAL_NOTIFIER_RECONNECT_DELAY = 1e3,
    Notifier = function() {
        return function(e) {
            var n = this;
            this.connect = function(e) {
                e ? (console.log("Connecting to " + e), n.websocket = new WebSocket(e), n.websocket.addEventListener("open", function() {
                    console.log("Connected to " + e)
                }), n.websocket.addEventListener("close", function() {
                    console.log("Notifier connection '" + e + "' closed"), n.websocket = void 0, n._notifierReconnectDelay *= 1.3, console.log("Reconnecting in " + n._notifierReconnectDelay + "ms"), setTimeout(function() {
                        return n.connect(e)
                    }, n._notifierReconnectDelay)
                }), n.websocket.addEventListener("message", function(e) {
                    n._notifierReconnectDelay = INITIAL_NOTIFIER_RECONNECT_DELAY, n.eventHandler(e)
                })) : console.warn("Notifier not available")
            }, this.eventHandler = e, this._notifierReconnectDelay = INITIAL_NOTIFIER_RECONNECT_DELAY
        }
    }();
exports.Notifier = Notifier;