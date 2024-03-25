export declare const enum ServerErrorReason {
    deprecated = "deprecated",
    firewallRule = "firewall_rule",
    provisioningEnabled = "provisioning_enabled",
    billingBadCardCVV = "bad_cc_cvv",
    billingCardDeclined = "cc_declined",
    billingCardProcessingError = "cc_processing_error",
    billingBadCardNumber = "bad_cc_number",
    billingBadCardExpiry = "bad_cc_expiry",
    billingCardExpired = "cc_expired",
    billingBadCardZIP = "bad_cc_zip",
    billingCardMissing = "cc_missing",
    billingRateLimiting = "too_many_billing_requests",
    billingBadProvider = "billing_provider_incorrect",
    billingInsufficientCredit = "insufficient_credit",
    billingStripeDown = "stripe_down",
    billingSubscriptionIncomplete = "subscription_incomplete",
    billingFrozen = "billing_is_frozen",
    slackUserLimitReached = "slack_users_limit_reached",
    slackInvitesZeroSent = "slack_invites_zero_sent",
    slackTimeout = "slack_timeout",
    userSuspended = "user_suspended",
    userDeleted = "user_deleted",
    userIsGuest = "user_is_guest",
    recoveryAccepted = "recovery_accepted",
    transferAccepted = "transfer_accepted",
    emailAlreadyInUse = "email_already_in_use",
    invitesLimitReached = "invites_limit_reached",
    invitesLimitReachedIAP = "invites_limit_reached_iap",
    confirmationLimitReached = "confirmation_limit_reached",
    dnsRecordNotFound = "dns_record_not_found",
    accountTierMismatchOnSubscribe = "account_tier_mismatch_subscribe",
    tooManyVaultAccessCreditsInUseToChangeAccountType = "too_many_vault_access_credits_in_use_to_change_account_type",
    maxVaultAccessCredits = "maximum_vault_access_credits",
    pendingProvisioningUsers = "pending_provisioning_users",
    addressIncomplete = "address_incomplete",
    addressIncorrect = "address_incorrect",
    avataxAPI = "avatax_api",
    unsupported = "unsupported",
    accountPolicy = "account_policy"
}
export declare class ServerError extends Error {
    code: number;
    reason?: ServerErrorReason;
    waitLength?: number | undefined;
    constructor(code: number, reason?: ServerErrorReason);
    toString(): string;
}
export declare const enum ServerErrorCode {
    badRequest = 100,
    operationNotPermitted = 101,
    authenticationRequired = 102,
    internalServerError = 103,
    incorrectVersionValue = 104,
    unknownImageFormat = 105,
    registrationFailed = 106,
    suspendedLoginFailed = 107,
    oneMustRemain = 108,
    deletedLoginFailed = 109,
    cannotHandleRequest = 110,
    domainNotAvailable = 112,
    recoveryAcceptedLoginFailed = 113,
    resourceAlreadyUsed = 115,
    cannotRemoveYourselfFromGroup = 116,
    resourceNotFound = 117,
    requestTooLarge = 118,
    resourceInvalid = 119,
    blockedEmailDomain = 122,
    deprecatedClient = 125,
    invalidPromotionCoupon = 126,
    incorrectAttrVersion = 127,
    emailDomainIsRestricted = 129,
    cardBadCVV = 200,
    cardDeclined = 201,
    cardProcessingError = 202,
    cardBadNum = 203,
    cardBadExpiry = 204,
    cardExpired = 205,
    cardBadZip = 206,
    cardMissing = 207,
    stripeRateLimit = 208,
    badProvider = 481,
    insufficientCredit = 482,
    addressIncomplete = 483,
    resourceExpired = 410,
    resourceLocked = 423,
    memberConfirmationLimitReached = 484,
    guestConfirmationLimitReached = 485,
    unknownError = 900
}
export declare const enum HTTPStatusCode {
    qwestTimeout = 0,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    conflict = 409,
    locked = 423,
    tooManyRequests = 429,
    registrationFailed = 432,
    userOrDeviceNotAllowed = 433,
    applicationError = 434,
    suspendedUserError = 435,
    deletedUserError = 436,
    resourceInvalid = 441,
    deprecatedClient = 445,
    internalServerError = 500
}
export declare const enum ItemStatusCode {
    ok = 0,
    expired = 1,
    validationError = 100,
    permissionError = 101,
    serverError = 103,
    incorrectItemVersion = 104
}
export declare class LegacyServerError extends Error {
    code: ServerErrorCode;
    constructor(code: ServerErrorCode, message?: string);
    toString(): string;
}
export declare const enum ClientErrorCode {
    incorrectMasterPassword = 102,
    invalidEmailOrPassword = 103,
    mustVerifyEmail = 104,
    serverRequestTimedOut = 105,
    deviceDeleted = 106,
    sequenceNumberTooLarge = 107,
    invalidImage = 108,
    invalidMFA = 110,
    noRsaOaep256Support = 111,
    invalidSigningKeyPair = 112,
    invalidFileType = 113,
    signatureVerificationFailed = 114,
    unknownError = 900
}
export declare class ClientError extends Error {
    code: ClientErrorCode;
    constructor(code: ClientErrorCode, message?: string);
    toString(): string;
}
export declare const getError: (error: Error, context?: string | undefined) => Error;
export declare const getErrorMessage: (error: unknown) => string;
export declare const isClientError: (error: Error, codes?: ClientErrorCode | ClientErrorCode[] | undefined) => error is ClientError;
export declare const isServerError: (error: Error, data?: ServerErrorReason | ServerErrorCode | ServerErrorReason[] | ServerErrorCode[] | undefined, code?: HTTPStatusCode | undefined) => error is ServerError | LegacyServerError;
export declare const isNewServerError: (error: Error, reason?: ServerErrorReason | ServerErrorReason[] | undefined, status?: HTTPStatusCode | undefined) => error is ServerError;
export declare const isNewServerErrorWithStatus: (error: Error, status: HTTPStatusCode) => error is ServerError;
export declare const isLegacyServerError: (error: Error, code?: ServerErrorCode | ServerErrorCode[] | undefined) => error is LegacyServerError;
export declare const isOldKeyError: (error: Error) => boolean;
export declare class SecretKeyMissingError extends Error {
    static ERROR_NAME: string;
    name: string;
    message: string;
    constructor(keyId: string);
}
export declare const isSecretKeyMissingError: (error: Error) => error is SecretKeyMissingError;
export declare class SecretKeyIdOrFormatMismatchedError extends Error {
    static ERROR_NAME: string;
    name: string;
    message: string;
    constructor(resKeyId: string, userKeyId: string, resFormat: string, userFormat: string);
}
export declare const isSecretKeyIdOrFormatMismatchedError: (error: Error) => error is SecretKeyIdOrFormatMismatchedError;
