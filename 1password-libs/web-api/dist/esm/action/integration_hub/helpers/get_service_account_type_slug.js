import {
    ServiceAccountType
} from "../../../api";
export var getServiceAccountTypeSlug = function(e) {
    switch (e) {
        case ServiceAccountType.Provisioning:
            return "provisioning";
        case ServiceAccountType.Connect:
            return "connect";
        case ServiceAccountType.DataStreaming:
            return "events_reporting";
        case ServiceAccountType.CLI:
            return "cli";
        case ServiceAccountType.Slack:
            return "slack";
        case ServiceAccountType.Duo:
            return "duo";
        case ServiceAccountType.MaskedEmails:
            return "fastmail";
        case ServiceAccountType.UserManaged:
            return "serviceaccount";
        default:
            return "na"
    }
};