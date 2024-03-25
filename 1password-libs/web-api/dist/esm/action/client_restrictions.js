import * as api from "../api";
import {
    ModernAppVersion
} from "../api/client_restrictions";
export {
    ModernAppVersion
};
export var getModernAppVersions = function(r) {
    return api.getModernAppVersions(r.session)
};