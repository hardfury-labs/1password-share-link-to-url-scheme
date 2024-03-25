import * as api from "../api";
import * as model from "../model";
import { Context } from "./context";
export declare const getPendingInvitations: (c: Context) => Promise<model.Invitation[]>;
export declare const getPendingInviteVaults: (c: Context) => Promise<model.InviteVaultListByUserUuid>;
export declare const inviteUsersViaEmail: (c: Context, emails: string[], inviteType: string, vaults?: {
    uuid: string;
    acl: number;
}[] | undefined, source?: string | undefined) => Promise<model.Invitation[]>;
export declare const inviteViaSlack: (c: Context, invites: api.SlackInvitation) => Promise<model.Invitation[]>;
export declare const resendInvitations: (c: Context, invitations: model.Invitation[]) => Promise<model.Invitation[]>;
export declare const lookUpInvitation: (c: Context, invitationUUID: string, token: string) => Promise<api.InvitationDetails>;
export declare const lookUpTeamInvitation: (c: Context, inviteSecret: string) => Promise<api.TeamInvitationDetails>;
export declare const teamInvitePerson: (c: Context, invitation: api.TeamInvitation) => Promise<void>;
export declare const regenerateSignUpLink: (c: Context) => Promise<{
    inviteSecret: string;
}>;
export declare const revokeInvitations: (c: Context, invitations: model.Invitation[]) => Promise<void>;
export declare const generateReplyToConfirmation: (c: Context, email: string) => Promise<void>;
export declare const completeReplyToConfirmation: (c: Context, email: string, token: string) => Promise<void>;
