export var getBackoffice = function(e) {
    return e.get("/api/v1/bo").then(function(e) {
        return e.sections
    })
};
export var getBackofficeInvoice = function(e, t) {
    return e.get("/api/v1/bo/invoice/" + t)
};
export var getBackofficeList = function(e, t, o) {
    return e.get("/api/v1/bo/confirmationlist/" + (t || 0) + "/" + o)
};
export var getBackofficeNextInvoice = function(e, t) {
    return e.get("/api/v1/bo/customer/" + t + "/nextinvoice")
};
export var performBackofficeAction = function(e, t, o) {
    var i = {
        sectionId: t.sectionId,
        subsectionId: t.subsectionId,
        actionId: t.id,
        values: o
    };
    return e.post("/api/v1/bo", i)
};
export var getBackofficeSigningKeysetsForUser = function(e, t) {
    return e.get("/api/v1/bo/user/" + t + "/signingkeysets")
};