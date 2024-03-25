"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getServiceAccountTypeSlug = void 0;
var api_1 = require("../../../api"),
    getServiceAccountTypeSlug = function(e) {
        switch (e) {
            case api_1.ServiceAccountType.Provisioning:
                return "provisioning";
            case api_1.ServiceAccountType.Connect:
                return "connect";
            case api_1.ServiceAccountType.DataStreaming:
                return "events_reporting";
            case api_1.ServiceAccountType.CLI:
                return "cli";
            case api_1.ServiceAccountType.Slack:
                return "slack";
            case api_1.ServiceAccountType.Duo:
                return "duo";
            case api_1.ServiceAccountType.MaskedEmails:
                return "fastmail";
            case api_1.ServiceAccountType.UserManaged:
                return "serviceaccount";
            default:
                return "na"
        }
    };
exports.getServiceAccountTypeSlug = getServiceAccountTypeSlug;