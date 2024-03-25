import { InvitationDetails as apiInvitation, InviteVault as apiInviteVault, InviteVaultList as apiInviteVaultList } from "../api/invitation";
export declare const EmailProviderDomains: string[];
export declare class Invitation {
    static StatePending: string;
    static StateAccepted: string;
    static StateRevoked: string;
    static TypeRegular: string;
    static TypeGuest: string;
    uuid: string;
    accountName: string;
    accountType: string;
    email: string;
    language: string;
    state: string;
    type: string;
    sentAt: Date | undefined;
    timeout: number;
    acceptedAt: Date | undefined;
    revokedAt: Date | undefined;
    constructor(attrs: apiInvitation);
    get expiresAt(): Date;
    /**
     * Returns whether or not this invitation has expired.
     */
    get isExpired(): boolean;
    get joined(): Date | undefined;
    get lastAuthAt(): Date | undefined;
    travelModeIsEnabled(): boolean;
}
export declare class InviteVault {
    /** The ACL to apply to the user. */
    readonly acl: number;
    /** The vault UUID. */
    readonly uuid: string;
    constructor(attrs: apiInviteVault);
}
export declare class InviteVaultList {
    /** Whether or not the user should try to confirm the user. */
    readonly shouldConfirm: boolean;
    /** The list of vaults to add the user to. */
    readonly vaults: InviteVault[];
    constructor(attrs: apiInviteVaultList);
}
export interface InviteVaultListByUserUuid {
    [userUuid: string]: undefined | InviteVaultList;
}
