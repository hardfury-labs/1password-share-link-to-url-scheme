"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, n, s) {
        void 0 === s && (s = n), Object.defineProperty(e, s, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    } : function(e, t, n, s) {
        void 0 === s && (s = n), e[s] = t[n]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && __createBinding(t, e, n);
        return __setModuleDefault(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.User = void 0;
var User, lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    util = __importStar(require("../util")),
    bit_set_1 = require("./bit_set"),
    fully_named_1 = require("./fully_named"),
    permission_1 = require("./permission");
! function(e) {
    var t, n;
    e.AllStates = ["R", "V", "P", "A", "S", "D", "1", "2", "T", "3", "4"], e.getInitials = fully_named_1.Named.getInitials, e.compareByFullName = util.compare.strings(function(e) {
            return e.name
        }), e.isOwner = function(e) {
            return bit_set_1.BitSet.includes(e.combinedPermissions, permission_1.Permission.BelongsToOwnersGroup)
        }, e.isSecurity = function(e) {
            return bit_set_1.BitSet.includes(e.combinedPermissions, permission_1.Permission.BelongsToSecurityGroup)
        }, e.isAdmin = function(e) {
            return bit_set_1.BitSet.includes(e.combinedPermissions, permission_1.Permission.BelongsToAdminsGroup)
        }, e.isProvisionManager = function(t) {
            return bit_set_1.BitSet.includes(t.combinedPermissions, permission_1.Permission.ProvisionPeople) && !e.isOwner(t) && !e.isAdmin(t)
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
            return lodash_es_1.includes(["A", "T", "3", "S", "1", "2"], e.state)
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
            return lodash_es_1.includes(["A", "P", "1", "2", "T", "3", "4"], e.state)
        }, e.canUseTravelMode = function(e) {
            return !("A" !== e.state && "1" !== e.state && "2" !== e.state || "R" !== e.type && "G" !== e.type)
        }, e.managesSomeGroup = function(t) {
            return !(!t || !t.groupMemberships || 0 === t.groupMemberships.length) && (e.isOwner(t) || e.isAdmin(t) || t.hasPermission(permission_1.Permission.ManageGroups) || t.groupMemberships.some(function(e) {
                return e.role === api.GroupMembership.Role.Manager
            }))
        }, e.canHaveGroupsManaged = function(t) {
            return !e.isGuest(t) && e.isEnrolled(t)
        }, e.canHaveVaultsManaged = e.isEnrolled, e.canReceivePackage = function(t) {
            return e.isMember(t) && lodash_es_1.includes(["P", "A", "S", "1", "2", "4"], t.state)
        }, e.canCreateReportOn = function(e) {
            return lodash_es_1.includes(["R", "A", "S", "D", "1", "2", "T", "3", "4"], e.state)
        },
        function(e) {
            e.Recoverable = "Recoverable", e.CanHaveGroupsManaged = "CanHaveGroupsManaged", e.CanUseTravelMode = "CanUseTravelMode", e.CanReceivePackage = "CanReceivePackage", e.CanCreateReportOn = "CanCreateReportOn"
        }(n = e.FilterTypes || (e.FilterTypes = {})), e.Filters = ((t = {})[n.Recoverable] = {
            states: ["A"],
            types: ["R", "G"]
        }, t[n.CanHaveGroupsManaged] = {
            states: ["A", "2", "1", "S"],
            types: ["R"]
        }, t[n.CanUseTravelMode] = {
            states: ["A", "1", "2"],
            types: ["R", "G"]
        }, t[n.CanReceivePackage] = {
            states: ["P", "A", "S", "1", "2", "4"],
            types: ["R"]
        }, t[n.CanCreateReportOn] = {
            states: ["R", "A", "S", "D", "1", "2", "T", "3", "4"],
            types: ["R", "G"]
        }, t)
}(User = exports.User || (exports.User = {}));