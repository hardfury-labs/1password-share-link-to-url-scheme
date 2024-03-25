import {
    includes
} from "lodash-es";
import * as api from "../api";
import * as util from "../util";
import {
    BitSet
} from "./bit_set";
import {
    Named
} from "./fully_named";
import {
    Permission
} from "./permission";
export var User;
! function(e) {
    var n, t;
    e.AllStates = ["R", "V", "P", "A", "S", "D", "1", "2", "T", "3", "4"], e.getInitials = Named.getInitials, e.compareByFullName = util.compare.strings(function(e) {
            return e.name
        }), e.isOwner = function(e) {
            return BitSet.includes(e.combinedPermissions, Permission.BelongsToOwnersGroup)
        }, e.isSecurity = function(e) {
            return BitSet.includes(e.combinedPermissions, Permission.BelongsToSecurityGroup)
        }, e.isAdmin = function(e) {
            return BitSet.includes(e.combinedPermissions, Permission.BelongsToAdminsGroup)
        }, e.isProvisionManager = function(n) {
            return BitSet.includes(n.combinedPermissions, Permission.ProvisionPeople) && !e.isOwner(n) && !e.isAdmin(n)
        }, e.isGuest = function(e) {
            return "G" === e.type
        }, e.isMember = function(e) {
            return "R" === e.type
        }, e.isServiceAccount = function(e) {
            return "S" === e.type
        }, e.isActive = function(e) {
            return "A" === e.state
        }, e.isSuspended = function(e) {
            return "S" === e.state
        }, e.isEnrolled = function(e) {
            return includes(["A", "T", "3", "S", "1", "2"], e.state)
        }, e.canBeRecovered = function(e) {
            return "A" === e.state && ("R" === e.type || "G" === e.type)
        }, e.canBeDeleted = function(e) {
            switch (e.state) {
                case "S":
                case "P":
                case "T":
                case "3":
                case "4":
                    return !0;
                case "A":
                    return "S" === e.type;
                default:
                    return !1
            }
        }, e.canHaveNameChanged = function(e) {
            return includes(["A", "P", "1", "2", "T", "3", "4"], e.state)
        }, e.canUseTravelMode = function(e) {
            return !("A" !== e.state && "1" !== e.state && "2" !== e.state || "R" !== e.type && "G" !== e.type)
        }, e.managesSomeGroup = function(n) {
            return !(!n || !n.groupMemberships || 0 === n.groupMemberships.length) && (e.isOwner(n) || e.isAdmin(n) || n.hasPermission(Permission.ManageGroups) || n.groupMemberships.some(function(e) {
                return e.role === api.GroupMembership.Role.Manager
            }))
        }, e.canHaveGroupsManaged = function(n) {
            return !e.isGuest(n) && e.isEnrolled(n)
        }, e.canHaveVaultsManaged = e.isEnrolled, e.canReceivePackage = function(n) {
            return e.isMember(n) && includes(["P", "A", "S", "1", "2", "4"], n.state)
        }, e.canCreateReportOn = function(e) {
            return includes(["R", "A", "S", "D", "1", "2", "T", "3", "4"], e.state)
        },
        function(e) {
            e.Recoverable = "Recoverable", e.CanHaveGroupsManaged = "CanHaveGroupsManaged", e.CanUseTravelMode = "CanUseTravelMode", e.CanReceivePackage = "CanReceivePackage", e.CanCreateReportOn = "CanCreateReportOn"
        }(t = e.FilterTypes || (e.FilterTypes = {})), e.Filters = ((n = {})[t.Recoverable] = {
            states: ["A"],
            types: ["R", "G"]
        }, n[t.CanHaveGroupsManaged] = {
            states: ["A", "2", "1", "S"],
            types: ["R"]
        }, n[t.CanUseTravelMode] = {
            states: ["A", "1", "2"],
            types: ["R", "G"]
        }, n[t.CanReceivePackage] = {
            states: ["P", "A", "S", "1", "2", "4"],
            types: ["R"]
        }, n[t.CanCreateReportOn] = {
            states: ["R", "A", "S", "D", "1", "2", "T", "3", "4"],
            types: ["R", "G"]
        }, n)
}(User || (User = {}));