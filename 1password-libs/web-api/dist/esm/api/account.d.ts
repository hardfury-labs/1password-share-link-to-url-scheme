import * as billing from "./billing";
import { Group } from "./group";
import { MFAType } from "./mfa";
import { Person } from "./person";
import { Session } from "./session";
import { User } from "./user";
import { Vault } from "./vault";
export interface Account {
    uuid: string;
    name: string;
    domain: string;
    type: string;
    state: string;
    avatar: string;
    attrVersion: number;
    createdAt: string;
    storageUsed?: number;
    baseAttachmentURL?: string;
    baseAvatarURL?: string;
    me?: User;
    meta?: AccountMeta;
    counts?: {
        groups: number;
        invitations: number;
        users: number;
        vaults: number;
    };
    users?: Person[];
    groups?: Group[];
    tier?: billing.Tier;
    userFlags?: UserFlags;
    accountFlags?: AccountFlags;
    invite?: InviteSettings;
    billing?: BillingInfo;
    promotions?: billing.Promotion[];
    settings?: AccountSettings;
}
interface AccountMeta {
    companySize?: string;
}
export interface UserFlags {
    hasPackages: boolean;
    hasNativeClient: boolean;
    hasNonSafariClient: boolean;
    mustShowIntegrations: boolean;
    mustMigrate: boolean;
}
export interface AccountFlags {
    hasRecoveryMembers: boolean;
}
export interface InviteSettings {
    inviteSecret: string;
    inviteEmailDomains: string;
}
export interface BillingInfo {
    trialStartedAt: string;
    trialDays: number;
    status: string;
    provider: string;
    freezesAt: string;
    members: number;
    guests: number;
    settings: BillingSettings;
}
export interface BillingSettings {
    billingCompanyName: string;
    billingAddress: string;
    billingEmails: string;
}
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
export interface ReplyToEmailSettings {
    readonly address: string;
    readonly verified: boolean;
}
export interface ProvisioningSettings {
    readonly isEnabled: boolean;
    readonly lastBridgeAuth: string;
    readonly notificationEmails: string;
    readonly monitoringEnabled: boolean;
    readonly monitoringDomain?: string;
    readonly deploymentOption?: string;
    readonly identityProvider?: string;
    readonly replyToEmail?: ReplyToEmailSettings;
}
export interface MasterPasswordPolicySettings {
    readonly type: any;
    readonly customString: string;
}
export interface TwoFactorSettings {
    readonly enforced: boolean;
    readonly availableTypes?: MFAType[];
}
export interface ClientRestrictionSettings {
    readonly requireModernApps: boolean;
}
export interface CheckDomainRequest {
    domain?: string;
    email?: string;
}
export declare const enum AccountAttrs {
    AccountFlags = "account-flags",
    Billing = "billing",
    Counts = "counts",
    Groups = "groups",
    Invite = "invite",
    Me = "me",
    MeMemberships = "me.memberships",
    Meta = "meta",
    Promotions = "promotions",
    Settings = "settings",
    Tier = "tier",
    UserFlags = "user-flags",
    Users = "users"
}
export declare const getAccountWithAttrs: (s: Session, attrs: AccountAttrs[]) => Promise<Account>;
export declare const activateAccount: (s: Session, vaults: readonly Vault[], groups: readonly Group[]) => Promise<void>;
export declare const joinAccount: (s: Session, personalVault: Vault) => Promise<void>;
export declare const updateAccount: (s: Session, account: Account) => Promise<void>;
export declare const updateBillingSettings: (s: Session, account: Account) => Promise<void>;
export declare const deleteAccount: (s: Session) => Promise<void>;
export declare const verifyLockedOutAccountDeletion: (s: Session, accountUUID: string, token: string) => Promise<void>;
export declare const lockedOutDeleteAccount: (s: Session, accountUUID: string, token: string) => Promise<void>;
export declare const checkDomainAvailability: (s: Session, domain: string, email: string) => Promise<boolean>;
export declare const getSuggestedDomain: (s: Session, accountName: string) => Promise<string>;
export declare const changeDomain: (s: Session, domain: string) => Promise<void>;
export declare const postImage: (s: Session, data: ArrayBuffer) => Promise<string>;
export interface ChangeAccountTypeRequest {
    type: string;
    accountName?: string;
    domain?: string;
    childAccountCode?: string;
}
export declare const changeAccountType: (s: Session, data: ChangeAccountTypeRequest) => Promise<void>;
export {};
