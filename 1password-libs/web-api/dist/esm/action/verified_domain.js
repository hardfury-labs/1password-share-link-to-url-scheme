import * as api from "../api";
export var beginDomainVerification = function(i, e, n, o) {
    return api.beginDomainVerification(i.session, e, n, o || "")
};
export var completeDomainVerification = function(i, e, n, o) {
    return api.completeDomainVerification(i.session, e, n, o)
};
export var getVerifiedDomains = function(i) {
    return api.getVerifiedDomains(i.session)
};
export var updateVerifiedDomain = function(i, e) {
    return api.updateVerifiedDomain(i.session, e)
};
export var deleteVerifiedDomain = function(i, e) {
    return api.deleteVerifiedDomain(i.session, e)
};