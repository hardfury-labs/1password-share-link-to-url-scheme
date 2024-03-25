export interface VaultItemTemplateAttrs {
    uuid: string;
    localizedStrings: Record<string, string>;
    subtitle?: string;
    hidden?: string;
    availability?: string;
    icons?: VaultItemTemplateIcons;
    contents: VaultItemTemplateContent[];
}
export interface VaultItemTemplateIcons {
    source?: string;
    detail?: string;
}
export interface VaultItemTemplateContent {
    set: string;
    title?: string;
    disclosed?: string;
    fields: VaultItemTemplateContentField[];
}
export interface VaultItemTemplateContentField {
    name: string;
    type: string;
    title?: string;
    attributes?: Record<string, string>;
    inputTraits?: Record<string, string>;
    menuitems?: string[];
    subtype?: string;
    isUsername?: string;
    width?: string;
}
export interface VaultItemTemplate {
    uuid: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    state: string;
    version: number;
    singularName: string;
    pluralName: string;
    icon: string;
    sidebarIcon: string;
    activeItemCount: number;
    attrs: VaultItemTemplateAttrs;
    /**
     * Set and used only by clients with a local database, such as b5x.
     */
    localId?: number;
}
export declare const TEMPLATE_TITLE_MAX_LENGTH = 30;
export declare namespace VaultItemTemplate {
    const LoginUuid = "001";
    const CreditCardUuid = "002";
    const SecureNoteUuid = "003";
    const IdentityUuid = "004";
    const PasswordUuid = "005";
    const DocumentUuid = "006";
    const SoftwareUuid = "100";
    const BankAccountUuid = "101";
    const DatabaseUuid = "102";
    const DriverLicenseUuid = "103";
    const OutdoorLicenseUuid = "104";
    const MembershipUuid = "105";
    const PassportUuid = "106";
    const RewardsUuid = "107";
    const SocialSecurityNumberUuid = "108";
    const RouterUuid = "109";
    const ServerUuid = "110";
    const EmailUuid = "111";
    const ApiCredentialUuid = "112";
    const MedicalRecordUuid = "113";
    const InboxKeysUuid = "901";
    const sort: (templates: VaultItemTemplate[]) => VaultItemTemplate[];
    const StateActive = "A";
    const StateHidden = "H";
    const StateDeleted = "D";
}
