"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.signupFromAPI = void 0;
var date_1 = require("./date"),
    signupFromAPI = function(e) {
        return {
            availablePlans: e.availablePlans || [],
            completedAt: date_1.dateFromAPI(e.completedAt),
            createdAt: date_1.dateFromAPI(e.createdAt),
            domain: e.domain,
            email: e.email,
            expiresAt: date_1.dateFromAPI(e.expiresAt),
            language: e.language,
            name: e.name,
            source: e.source,
            state: e.state,
            promoCode: e.promoCode,
            tierName: e.tierName,
            defaultBillingFrequency: e.defaultBillingFrequency,
            trialEndsAt: date_1.dateFromAPI(e.trialEndsAt),
            type: e.type,
            uuid: e.uuid,
            stepUuid: e.stepUuid,
            features: e.features,
            duplicateAccounts: e.duplicateAccounts,
            flowServiceUuid: e.flowServiceUuid
        }
    };
exports.signupFromAPI = signupFromAPI;