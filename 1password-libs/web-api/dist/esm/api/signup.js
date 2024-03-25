import * as t from "io-ts";
import {
    unsafeDecodeAs
} from "../util/validator";
import * as billing from "./billing";
export var SignupFeatureCreditCardForm = t.readonly(t.type({
    isEnabled: t.boolean,
    isRequired: t.boolean
}), "SignupFeatureCreditCardForm");
export var SignupFeatures = t.readonly(t.type({
    creditCardForm: SignupFeatureCreditCardForm
}), "SignupFeatures");
export var AccountInfo = t.readonly(t.type({
    accountUuid: t.string,
    accountName: t.string,
    domain: t.string,
    avatar: t.string,
    type: t.string,
    userAvatar: t.string,
    accountKeyFormat: t.string,
    accountKeyUuid: t.string,
    lastAuthAt: t.string,
    createdAt: t.string
}), "AccountInfo");
export var Signup = t.readonly(t.intersection([t.type({
    uuid: t.string,
    domain: t.string,
    state: t.string,
    createdAt: t.string,
    completedAt: t.string,
    expiresAt: t.string,
    name: t.string,
    type: t.string,
    source: t.string,
    email: t.string,
    language: t.string,
    availablePlans: t.array(billing.Plan),
    tierName: t.string,
    trialEndsAt: t.string,
    features: SignupFeatures
}, "SignupRequired"), t.partial({
    stepUuid: t.string,
    promoCode: t.string,
    flowServiceUuid: t.string,
    defaultBillingFrequency: billing.FrequencyCodec,
    duplicateAccounts: t.array(AccountInfo)
}, "SignupPartial")], "Signup"));
var AccountSignUp = t.readonly(t.type({
    emailResendToken: t.string
}));
export var legacySignUpAccount = function(t, n) {
    return t.postUnencrypted("/api/v1/signup", n).then(function() {})
};
export var signUpAccount = function(t, n) {
    return t.postUnencrypted("/api/v2/signup", n)
};
export var signUpUser = function(t, n) {
    return t.postUnencrypted("/api/v1/user", n)
};
export var getSignupDetails = function(t, n) {
    return t.get("/api/v2/signup/" + n).then(unsafeDecodeAs(Signup))
};
export var updateSignupAccountType = function(t, n, e) {
    return t.patch("/api/v2/signup/" + n, e)
};
export var signUpAndGetInfo = function(t, n, e, r) {
    return t.get("/api/v2/signup/" + n + "?email=" + encodeURIComponent(e) + "&account-type=" + r).then(unsafeDecodeAs(Signup))
};
export var postAccount = function(t, n) {
    return t.postUnencrypted("/api/v1/account", n)
};
export var resendVerificationEmail = function(t, n) {
    return t.post("/api/v1/signup/resend/" + n)
};