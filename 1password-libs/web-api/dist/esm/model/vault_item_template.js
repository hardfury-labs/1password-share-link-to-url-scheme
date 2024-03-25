export var TEMPLATE_TITLE_MAX_LENGTH = 30;
export var VaultItemTemplate;
! function(e) {
    e.LoginUuid = "001", e.CreditCardUuid = "002", e.SecureNoteUuid = "003", e.IdentityUuid = "004", e.PasswordUuid = "005", e.DocumentUuid = "006", e.SoftwareUuid = "100", e.BankAccountUuid = "101", e.DatabaseUuid = "102", e.DriverLicenseUuid = "103", e.OutdoorLicenseUuid = "104", e.MembershipUuid = "105", e.PassportUuid = "106", e.RewardsUuid = "107", e.SocialSecurityNumberUuid = "108", e.RouterUuid = "109", e.ServerUuid = "110", e.EmailUuid = "111", e.ApiCredentialUuid = "112", e.MedicalRecordUuid = "113", e.InboxKeysUuid = "901", e.sort = function(u) {
        var i = {};
        i[e.LoginUuid] = 1, i[e.SecureNoteUuid] = 2, i[e.CreditCardUuid] = 3, i[e.IdentityUuid] = 4, i[e.PasswordUuid] = 5, i[e.DocumentUuid] = 6;
        var t = [],
            d = [];
        return u.forEach(function(e) {
            i[e.uuid] ? t.push(e) : d.push(e)
        }), t.sort(function(e, u) {
            return (i[e.uuid] || 10) - (i[u.uuid] || 10)
        }), d.sort(function(e, u) {
            return e.singularName.localeCompare(u.singularName)
        }), t.concat(d)
    }, e.StateActive = "A", e.StateHidden = "H", e.StateDeleted = "D"
}(VaultItemTemplate || (VaultItemTemplate = {}));