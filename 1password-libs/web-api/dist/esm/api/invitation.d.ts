import * as t from "io-ts";
import { Session } from "./session";
export interface TeamInvitation {
    secret: string;
    email: string;
    language: string;
}
export interface TeamInvitationDetails {
    secret: string;
    accountName: string;
}
interface EmailInvitation {
    email: string;
    language: string;
    vaults?: {
        uuid: string;
        acl: number;
    }[];
}
declare const InvitationDetails: t.ReadonlyC<t.TypeC<{
    uuid: t.StringC;
    token: t.UnionC<[t.StringC, t.UndefinedC]>;
    accountUuid: t.StringC;
    accountName: t.UnionC<[t.StringC, t.UndefinedC]>;
    accountType: t.UnionC<[t.StringC, t.UndefinedC]>;
    accountHost: t.StringC;
    email: t.StringC;
    language: t.StringC;
    senderFullName: t.UnionC<[t.StringC, t.UndefinedC]>;
    state: t.UnionC<[t.StringC, t.UndefinedC]>;
    type: t.UnionC<[t.StringC, t.UndefinedC]>;
    sentAt: t.UnionC<[t.StringC, t.UndefinedC]>;
    timeout: t.UnionC<[t.NumberC, t.UndefinedC]>;
    acceptedAt: t.UnionC<[t.StringC, t.UndefinedC]>;
    revokedAt: t.UnionC<[t.StringC, t.UndefinedC]>;
    migratingFrom: t.UnionC<[t.StringC, t.UndefinedC]>;
    accountUsesNewKeysets: t.BooleanC;
    passwordRules: t.StringC;
    iconSet: t.ReadonlyC<t.TypeC<{
        version: t.StringC;
        icons: t.ReadonlyArrayC<t.TypeC<{
            url: t.StringC;
            description: t.StringC;
        }>>;
    }>>;
}>>;
export declare type InvitationDetails = t.TypeOf<typeof InvitationDetails>;
declare const InviteVault: t.ReadonlyC<t.TypeC<{
    acl: t.NumberC;
    uuid: t.StringC;
}>>;
export declare type InviteVault = t.TypeOf<typeof InviteVault>;
declare const InviteVaultList: t.ReadonlyC<t.TypeC<{
    shouldConfirm: t.BooleanC;
    vaults: t.ArrayC<t.ReadonlyC<t.TypeC<{
        acl: t.NumberC;
        uuid: t.StringC;
    }>>>;
}>>;
export declare type InviteVaultList = t.TypeOf<typeof InviteVaultList>;
export interface InviteVaultsResponse {
    vaultsByUserUuid: {
        [k: string]: InviteVaultList;
    };
}
export declare const lookUpInvitation: (s: Session, invitationUuid: string, token: string) => Promise<InvitationDetails>;
export declare const lookUpTeamInvitation: (s: Session, invitationSecret: string) => Promise<TeamInvitationDetails>;
export declare const getPendingInvitations: (s: Session) => Promise<InvitationDetails[]>;
export interface SlackInvitation {
    slackUserUids: string[];
    slackChannelUids: string[];
    slackGroupUids: string[];
    teamUid: string;
}
export declare const inviteViaSlack: (s: Session, invitations: SlackInvitation) => Promise<InvitationDetails[]>;
export declare const inviteUsersViaEmail: (s: Session, invitations: EmailInvitation[], type: string, source?: string | undefined) => Promise<InvitationDetails[]>;
export declare const teamInvitePerson: (s: Session, invitation: TeamInvitation) => Promise<void>;
export declare const resendInvitations: (s: Session, uuids: readonly string[]) => Promise<InvitationDetails[]>;
export declare const revokeInvitations: (s: Session, uuids: string[]) => Promise<void>;
export declare const generateReplyToConfirmation: (s: Session, email: string) => Promise<void>;
export declare const completeReplyToConfirmation: (s: Session, email: string, token: string) => Promise<void>;
export declare const regenerateSignUpLink: (s: Session) => Promise<{
    inviteSecret: string;
}>;
export declare const getPendingInviteVaults: (s: Session) => Promise<InviteVaultsResponse>;
export {};
