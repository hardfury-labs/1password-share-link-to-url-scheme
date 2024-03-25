import * as util from "../util";
import { BitSet } from "./bit_set";
import { Named } from "./fully_named";
import { OldUser } from "./old_user";
export declare namespace User {
    const enum State {
        Registered = "R",
        VerifiedIncomplete = "V",
        PendingActivation = "P",
        Active = "A",
        Suspended = "S",
        Deleted = "D",
        RecoveryStarted = "1",
        RecoveryAccepted = "2",
        ProvisionPending = "T",
        ProvisionStarted = "3",
        ProvisionAccepted = "4"
    }
    const AllStates: State[];
    const enum Type {
        Regular = "R",
        Guest = "G",
        ServiceAccount = "S"
    }
    const getInitials: ({ name }: Named) => string;
    const compareByFullName: util.Comparator<Named>;
    const isOwner: (user: {
        combinedPermissions: BitSet;
    }) => boolean;
    const isSecurity: (user: {
        combinedPermissions: BitSet;
    }) => boolean;
    const isAdmin: (user: {
        combinedPermissions: BitSet;
    }) => boolean;
    const isProvisionManager: (user: {
        combinedPermissions: BitSet;
    }) => boolean;
    const isGuest: (user: {
        type: string;
    }) => boolean;
    const isMember: (user: {
        type: string;
    }) => boolean;
    const isServiceAccount: (user: {
        type: string;
    }) => boolean;
    const isActive: (user: {
        state: string;
    }) => boolean;
    const isSuspended: (user: {
        state: string;
    }) => boolean;
    const isEnrolled: (user: {
        state: string;
    }) => boolean;
    const canBeRecovered: (user: {
        type: string;
        state: string;
    }) => boolean;
    const canBeDeleted: (user: {
        state: string;
        type: string;
    }) => boolean;
    const canHaveNameChanged: (user: {
        state: string;
    }) => boolean;
    const canUseTravelMode: (user: {
        type: string;
        state: string;
    }) => boolean;
    const managesSomeGroup: (user: OldUser) => boolean;
    const canHaveGroupsManaged: (user: {
        type: string;
        state: string;
    }) => boolean;
    const canHaveVaultsManaged: (user: {
        state: string;
    }) => boolean;
    const canReceivePackage: (user: {
        state: string;
        type: string;
    }) => boolean;
    const canCreateReportOn: (user: {
        state: string;
    }) => boolean;
    enum FilterTypes {
        Recoverable = "Recoverable",
        CanHaveGroupsManaged = "CanHaveGroupsManaged",
        CanUseTravelMode = "CanUseTravelMode",
        CanReceivePackage = "CanReceivePackage",
        CanCreateReportOn = "CanCreateReportOn"
    }
    const Filters: {
        [type in FilterTypes]: PartialUserFilterOptions;
    };
}
interface PartialUserFilterOptions {
    readonly states: readonly User.State[];
    readonly types: readonly User.Type[];
}
export {};
