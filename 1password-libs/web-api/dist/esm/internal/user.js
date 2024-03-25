import {
    errorHandler
} from "../util/error_handler";
export var migrateKeyset = function(e, r) {
    return Promise.resolve().then(function() {
        return e.post("/internal/v1/user/keyset", {
            keyset: r
        }).then(function() {})
    }).catch(errorHandler("internal/user", "migrateKeyset"))
};