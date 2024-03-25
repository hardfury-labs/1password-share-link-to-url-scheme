"use strict";
var VaultItemTemplate;
Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.VaultItemTemplate = exports.TEMPLATE_TITLE_MAX_LENGTH = void 0, exports.TEMPLATE_TITLE_MAX_LENGTH = 30,
    function(e) {
        e.LoginUuid = "001", e.CreditCardUuid = "002", e.SecureNoteUuid = "003", e.IdentityUuid = "004", e.PasswordUuid = "005", e.DocumentUuid = "006", e.SoftwareUuid = "100", e.BankAccountUuid = "101", e.DatabaseUuid = "102", e.DriverLicenseUuid = "103", e.OutdoorLicenseUuid = "104", e.MembershipUuid = "105", e.PassportUuid = "106", e.RewardsUuid = "107", e.SocialSecurityNumberUuid = "108", e.RouterUuid = "109", e.ServerUuid = "110", e.EmailUuid = "111", e.ApiCredentialUuid = "112", e.MedicalRecordUuid = "113", e.InboxKeysUuid = "901", e.sort = function(t) {
            var u = {};
            u[e.LoginUuid] = 1, u[e.SecureNoteUuid] = 2, u[e.CreditCardUuid] = 3, u[e.IdentityUuid] = 4, u[e.PasswordUuid] = 5, u[e.DocumentUuid] = 6;
            var i = [],
                d = [];
            return t.forEach(function(e) {
                u[e.uuid] ? i.push(e) : d.push(e)
            }), i.sort(function(e, t) {
                return (u[e.uuid] || 10) - (u[t.uuid] || 10)
            }), d.sort(function(e, t) {
                return e.singularName.localeCompare(t.singularName)
            }), i.concat(d)
        }, e.StateActive = "A", e.StateHidden = "H", e.StateDeleted = "D"
    }(VaultItemTemplate = exports.VaultItemTemplate || (exports.VaultItemTemplate = {}));