import * as api from "../api";
export var reportOutdatedBrowser = function(r, o) {
    return api.reportOutdatedBrowser(r.session, o).catch(function(r) {
        console.error("Failed to report outdated browser:", r)
    })
};