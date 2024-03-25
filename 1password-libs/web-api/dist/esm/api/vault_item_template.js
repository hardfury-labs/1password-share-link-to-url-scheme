import * as t from "io-ts";
export var VaultItemTemplate = t.intersection([t.type({
    uuid: t.string,
    singularName: t.string,
    pluralName: t.string,
    icon: t.string,
    sourceIcon: t.string
}), t.partial({
    templateUuid: t.string,
    createdAt: t.string,
    updatedAt: t.string,
    state: t.string,
    version: t.number,
    activeItemCount: t.number,
    attrs: t.any
})]);
export var getAccountTemplates = function(t, e) {
    var a = "/api/v3/templates";
    return e && (a += "/all"), t.get(a)
};
export var getDefaultTemplate = function(t, e) {
    return t.get("/api/v2/template/default/" + e)
};
export var postTemplate = function(t, e) {
    return t.post("/api/v1/template", e).then(function() {})
};
export var changeTemplatesState = function(t, e, a) {
    var r = "/api/v1/template/" + e.join(",") + "/state/" + a;
    return t.patch(r).then(function() {})
};