import { MFAType } from "../action/mfa";
import { Account as apiAccount } from "../api/account";
import { Promotion } from "../api/billing/coupon";
import * as util from "../util";
import { Activity } from "./activity";
import * as billing from "./billing";
import { Group } from "./group";
export { Promotion };
export interface AccountSettings {
    slackURLs: SlackSettings;
    betaIsEnabled?: boolean;
    richIconsAreDisabled?: boolean;
    duo: DuoSettings;
    support: SupportSettings;
    provisioning: ProvisioningSettings;
    masterPasswordPolicy: MasterPasswordPolicySettings;
    twoFactor: TwoFactorSettings;
    clientRestrictions: ClientRestrictionSettings;
}
export interface AccountInviteSettings {
    inviteSecret: string;
    inviteEmailDomains: string;
}
export interface SlackSettings {
    alerts: string;
    notifications: string;
}
export interface DuoSettings {
    isEnabled: boolean;
    rememberDays: number;
    integrationKey: string;
    secretKey: string;
    host: string;
}
export interface SupportSettings {
    readonly url: string;
}
export interface ReplyToEmailAddress {
    readonly address: string;
    readonly verified: boolean;
}
export interface ProvisioningSettings {
    readonly isEnabled: boolean;
    readonly lastBridgeAuth: string | undefined;
    readonly notificationEmails: string;
    readonly monitoringEnabled: boolean;
    readonly monitoringDomain?: string;
    readonly deploymentOption?: string;
    readonly identityProvider?: string;
    readonly replyToEmail?: ReplyToEmailAddress;
}
export interface MasterPasswordPolicySettings {
    readonly type: MasterPasswordPolicyType;
    readonly customString: string;
}
export declare const enum MasterPasswordPolicyType {
    Minimum = "",
    Medium = "M",
    Strong = "S",
    Custom = "C"
}
export interface TwoFactorSettings {
    readonly enforced: boolean;
    readonly availableTypes?: MFAType[];
}
export interface ClientRestrictionSettings {
    readonly requireModernApps: boolean;
}
export interface EntityCounts {
    groups: number;
    invitations: number;
    users: number;
    vaults: number;
}
export interface AccountMeta {
    companySize?: string;
}
export declare const MY_DOMAIN = "my";
export declare const GENERATED_FAMILY_DOMAIN_PREFIX = "pg8-;";
export declare class Account {
    attrVersion: number;
    avatar: string;
    baseAttachmentURL?: string;
    baseAvatarURL?: string;
    createdAt: Date | undefined;
    counts: EntityCounts;
    domain: string;
    inviteEmail: string;
    inviteSecret: string;
    name: string;
    state: string;
    trialStartedAt: Date | undefined;
    trialDays: number;
    type: string;
    uuid: string;
    settings: AccountSettings;
    subscription: billing.Subscription;
    promotions: Promotion[];
    meta: AccountMeta;
    activities: Activity[];
    hasPackages: boolean;
    hasNativeClient: boolean;
    hasNonSafariClient: boolean;
    hasRecoveryMembers: boolean;
    mustShowIntegrations: boolean;
    mustMigrate: boolean;
    private _cache;
    static readonly StateRegistered: "R";
    static readonly StateActive: "A";
    static readonly StateSuspended: "S";
    static readonly StateDeleted: "D";
    static isValidType(type: string): boolean;
    static readonly defaultMfaTypes: MFAType[];
    static readonly defaultSettings: AccountSettings;
    constructor(attrs: apiAccount);
    setAttrs(attrs: apiAccount): void;
    get hasFeature(): billing.TierFeatures;
    get isFamily(): boolean;
    get isIndividual(): boolean;
    get isBusiness(): boolean;
    get isBackoffice(): boolean;
    urlHost(server: string): string;
    urlOrigin(server: string): string;
    supportsBetaFeatures(): boolean;
    get administratorsGroup(): Group | undefined;
    get ownersGroup(): Group | undefined;
    get recoveryGroup(): Group | undefined;
    get teamMembersGroup(): Group | undefined;
    get securityGroup(): Group | undefined;
    get groups(): Group[];
    findGroup(uuid: string): Group | undefined;
    setGroups(groups: Group[]): void;
    pushGroup(group: Group): void;
    removeGroup(groupRef: util.UuidRef): void;
}
export declare namespace Account {
    const enum Type {
        Individual = "I",
        Family = "F",
        Business = "B"
    }
    const isProvisioningEnabled: (account: {
        settings: {
            provisioning: ProvisioningSettings;
        };
    } | undefined) => boolean;
    const isInExtendedPromotionalTrial: (account: Account) => boolean;
}
