import {
    clearContextCache,
    resetContext
} from "./context_cache";
import {
    clearPartialUserCache,
    clearPartialUserCacheForContext
} from "./partial_user";
import {
    clearServiceAccountCache,
    clearServiceAccountCacheForContext
} from "./serviceaccounts";
import {
    clearUserCache,
    clearUserCacheForContext
} from "./user";
import {
    clearVaultCache,
    clearVaultCacheForContext,
    clearVaultWithPreviewsCache,
    clearVaultWithPreviewsCacheForContext
} from "./vault";
export var clearAllCaches = function() {
    clearContextCache(), clearUserCache(), clearVaultCache(), clearVaultWithPreviewsCache(), clearServiceAccountCache(), clearPartialUserCache()
};
export var clearAllCachesForContext = function(e) {
    resetContext(e.id), clearUserCacheForContext(e), clearVaultCacheForContext(e), clearVaultWithPreviewsCacheForContext(e), clearServiceAccountCacheForContext(e), clearPartialUserCacheForContext(e)
};