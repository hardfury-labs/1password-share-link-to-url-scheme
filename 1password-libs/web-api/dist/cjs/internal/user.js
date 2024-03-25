"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.migrateKeyset = void 0;
var error_handler_1 = require("../util/error_handler"),
    migrateKeyset = function(e, r) {
        return Promise.resolve().then(function() {
            return e.post("/internal/v1/user/keyset", {
                keyset: r
            }).then(function() {})
        }).catch(error_handler_1.errorHandler("internal/user", "migrateKeyset"))
    };
exports.migrateKeyset = migrateKeyset;