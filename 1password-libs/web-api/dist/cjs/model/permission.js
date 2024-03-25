"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.RecoveryKeysetPermissions = exports.DisplayPermission = exports.Permission = void 0;
var bit_set_1 = require("./bit_set"),
    p = bit_set_1.BitSet.fromHex;
exports.Permission = {
    BelongsToTeamMembersGroup: p("000000001"),
    BelongsToOwnersGroup: p("000000002"),
    BelongsToAdminsGroup: p("000000004"),
    BelongsToRecoveryGroup: p("000000008"),
    BelongsToUserDefinedGroup: p("000000010"),
    BelongsToSecurityGroup: p("000000020"),
    Recover: p("000000100"),
    ViewAdminConsole: p("000000200"),
    ViewActivities: p("000000400"),
    ViewTemplates: p("000000800"),
    ViewPeople: p("000001000"),
    AddPerson: p("000002000"),
    ChangePersonName: p("000004000"),
    SuspendPerson: p("000008000"),
    DeletePerson: p("000010000"),
    ViewVaults: p("000020000"),
    UsePersonalVault: p("000040000"),
    CreateVault: p("000080000"),
    ManageTemplates: p("000100000"),
    ManageVaults: p("000200000"),
    ViewGroups: p("000400000"),
    ManageGroups: p("000800000"),
    ViewTeamSettings: p("001000000"),
    ChangeTeamSettings: p("002000000"),
    ChangeTeamAttrs: p("004000000"),
    ChangeTeamDomain: p("008000000"),
    SuspendTeam: p("010000000"),
    DeleteTeam: p("020000000"),
    ViewBilling: p("040000000"),
    ManageBilling: p("080000000"),
    ProvisionPeople: p("10000000000"),
    ViewSecurityReports: p("20000000000"),
    BackofficeView: p("0100000000000"),
    BackofficeViewAdvanced: p("0200000000000"),
    BackofficeUpdate: p("0400000000000"),
    BackofficeChangeDomain: p("0800000000000"),
    BackofficeSuspendTeam: p("1000000000000"),
    BackofficeDeleteTeam: p("2000000000000")
}, exports.DisplayPermission = {
    Recovery: exports.Permission.Recover,
    ViewAdminConsole: bit_set_1.BitSet.combine([exports.Permission.ViewAdminConsole, exports.Permission.ViewActivities, exports.Permission.ViewPeople, exports.Permission.ViewVaults, exports.Permission.ViewTemplates, exports.Permission.ViewGroups, exports.Permission.ViewTeamSettings]),
    ManagePeople1: bit_set_1.BitSet.combine([exports.Permission.AddPerson, exports.Permission.DeletePerson]),
    ManagePeople2: exports.Permission.ChangePersonName,
    SuspendPerson: exports.Permission.SuspendPerson,
    CreateVault: exports.Permission.CreateVault,
    ManageAllVaults: exports.Permission.ManageVaults,
    ManageAllGroups: exports.Permission.ManageGroups,
    ManageTeamSettings: bit_set_1.BitSet.combine([exports.Permission.ChangeTeamSettings, exports.Permission.ChangeTeamAttrs, exports.Permission.ChangeTeamDomain, exports.Permission.ManageTemplates]),
    DeleteTeam: bit_set_1.BitSet.combine([exports.Permission.SuspendTeam, exports.Permission.DeleteTeam]),
    ManageBilling: bit_set_1.BitSet.combine([exports.Permission.ViewBilling, exports.Permission.ManageBilling]),
    ProvisionPeople: exports.Permission.ProvisionPeople,
    ViewSecurityReports: exports.Permission.ViewSecurityReports
}, exports.RecoveryKeysetPermissions = bit_set_1.BitSet.combine([exports.Permission.Recover, exports.Permission.ManageGroups, exports.Permission.ManageVaults]);