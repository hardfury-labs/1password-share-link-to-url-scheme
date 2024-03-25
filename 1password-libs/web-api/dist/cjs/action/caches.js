"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearAllCachesForContext = exports.clearAllCaches = void 0;
var context_cache_1 = require("./context_cache"),
    partial_user_1 = require("./partial_user"),
    serviceaccounts_1 = require("./serviceaccounts"),
    user_1 = require("./user"),
    vault_1 = require("./vault"),
    clearAllCaches = function() {
        context_cache_1.clearContextCache(), user_1.clearUserCache(), vault_1.clearVaultCache(), vault_1.clearVaultWithPreviewsCache(), serviceaccounts_1.clearServiceAccountCache(), partial_user_1.clearPartialUserCache()
    };
exports.clearAllCaches = clearAllCaches;
var clearAllCachesForContext = function(e) {
    context_cache_1.resetContext(e.id), user_1.clearUserCacheForContext(e), vault_1.clearVaultCacheForContext(e), vault_1.clearVaultWithPreviewsCacheForContext(e), serviceaccounts_1.clearServiceAccountCacheForContext(e), partial_user_1.clearPartialUserCacheForContext(e)
};
exports.clearAllCachesForContext = clearAllCachesForContext;