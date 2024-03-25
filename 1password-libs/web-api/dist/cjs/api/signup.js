"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, n, r) {
        void 0 === r && (r = n), Object.defineProperty(t, r, {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    } : function(t, e, n, r) {
        void 0 === r && (r = n), t[r] = e[n]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        })
    } : function(t, e) {
        t.default = e
    }),
    __importStar = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && __createBinding(e, t, n);
        return __setModuleDefault(e, t), e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.resendVerificationEmail = exports.postAccount = exports.signUpAndGetInfo = exports.updateSignupAccountType = exports.getSignupDetails = exports.signUpUser = exports.signUpAccount = exports.legacySignUpAccount = exports.Signup = exports.AccountInfo = exports.SignupFeatures = exports.SignupFeatureCreditCardForm = void 0;
var t = __importStar(require("io-ts")),
    validator_1 = require("../util/validator"),
    billing = __importStar(require("./billing"));
exports.SignupFeatureCreditCardForm = t.readonly(t.type({
    isEnabled: t.boolean,
    isRequired: t.boolean
}), "SignupFeatureCreditCardForm"), exports.SignupFeatures = t.readonly(t.type({
    creditCardForm: exports.SignupFeatureCreditCardForm
}), "SignupFeatures"), exports.AccountInfo = t.readonly(t.type({
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
}), "AccountInfo"), exports.Signup = t.readonly(t.intersection([t.type({
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
    features: exports.SignupFeatures
}, "SignupRequired"), t.partial({
    stepUuid: t.string,
    promoCode: t.string,
    flowServiceUuid: t.string,
    defaultBillingFrequency: billing.FrequencyCodec,
    duplicateAccounts: t.array(exports.AccountInfo)
}, "SignupPartial")], "Signup"));
var AccountSignUp = t.readonly(t.type({
        emailResendToken: t.string
    })),
    legacySignUpAccount = function(t, e) {
        return t.postUnencrypted("/api/v1/signup", e).then(function() {})
    };
exports.legacySignUpAccount = legacySignUpAccount;
var signUpAccount = function(t, e) {
    return t.postUnencrypted("/api/v2/signup", e)
};
exports.signUpAccount = signUpAccount;
var signUpUser = function(t, e) {
    return t.postUnencrypted("/api/v1/user", e)
};
exports.signUpUser = signUpUser;
var getSignupDetails = function(t, e) {
    return t.get("/api/v2/signup/" + e).then(validator_1.unsafeDecodeAs(exports.Signup))
};
exports.getSignupDetails = getSignupDetails;
var updateSignupAccountType = function(t, e, n) {
    return t.patch("/api/v2/signup/" + e, n)
};
exports.updateSignupAccountType = updateSignupAccountType;
var signUpAndGetInfo = function(t, e, n, r) {
    return t.get("/api/v2/signup/" + e + "?email=" + encodeURIComponent(n) + "&account-type=" + r).then(validator_1.unsafeDecodeAs(exports.Signup))
};
exports.signUpAndGetInfo = signUpAndGetInfo;
var postAccount = function(t, e) {
    return t.postUnencrypted("/api/v1/account", e)
};
exports.postAccount = postAccount;
var resendVerificationEmail = function(t, e) {
    return t.post("/api/v1/signup/resend/" + e)
};
exports.resendVerificationEmail = resendVerificationEmail;