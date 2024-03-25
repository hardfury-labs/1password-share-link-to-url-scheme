export declare const TopBarContentChanged = "TopBarContentChanged";
export declare const SpecialNavChanged = "SpecialNavChanged";
export declare const UniverseReloaded = "UniverseReloaded";
export declare const ClientStateChanged = "ClientStateChanged";
export declare const ServerChanged = "ServerChanged";
export declare const ServerChangedWithData = "ServerChangedWithData";
export declare const LanguageRefreshed = "LanguageRefreshed";
export declare const UsersChanged = "UsersChanged";
/**
 * Notification received from the server, but was filtered out as it is from current session.
 * The client generally should not need this, only use if a unique case requires it.
 */
export declare const ServerChangedFromSelf = "ServerChangedFromSelf";
export declare const SessionInitialized = "SessionInitialized";
export declare const SessionInitError = "SessionInitError";
export declare const ReloadForced = "ReloadForced";
export declare const SessionExpired = "SessionExpired";
export declare const SignedIn = "SignedIn";
export declare const SignedOut = "SignedOut";
export declare const TimeoutWarning = "TimeoutWarning";
export declare const RecoveryStarted = "RecoveryStarted";
