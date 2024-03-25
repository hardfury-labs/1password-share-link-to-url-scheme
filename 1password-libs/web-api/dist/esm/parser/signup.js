import {
    dateFromAPI
} from "./date";
export var signupFromAPI = function(e) {
    return {
        availablePlans: e.availablePlans || [],
        completedAt: dateFromAPI(e.completedAt),
        createdAt: dateFromAPI(e.createdAt),
        domain: e.domain,
        email: e.email,
        expiresAt: dateFromAPI(e.expiresAt),
        language: e.language,
        name: e.name,
        source: e.source,
        state: e.state,
        promoCode: e.promoCode,
        tierName: e.tierName,
        defaultBillingFrequency: e.defaultBillingFrequency,
        trialEndsAt: dateFromAPI(e.trialEndsAt),
        type: e.type,
        uuid: e.uuid,
        stepUuid: e.stepUuid,
        features: e.features,
        duplicateAccounts: e.duplicateAccounts,
        flowServiceUuid: e.flowServiceUuid
    }
};