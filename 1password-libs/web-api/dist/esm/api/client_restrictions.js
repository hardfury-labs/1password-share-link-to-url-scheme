import * as t from "io-ts";
import {
    unsafeDecodeAs
} from "../util";
export var ModernAppVersion = t.readonly(t.intersection([t.type({
    clientName: t.string,
    version: t.string
}), t.partial({
    osVersion: t.string
})]));
export var getModernAppVersions = function(r) {
    return r.get("/api/v1/modern-app-versions").then(function(r) {
        if (!r) throw new Error("Server response is empty");
        return unsafeDecodeAs(t.array(ModernAppVersion))(r)
    })
};