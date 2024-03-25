import { Named } from './fully_named';
export interface SlackApp {
  readonly state: SlackAppState;
  readonly notifChannelUid: string;
  readonly alertChannelUid: string;
  readonly scope: string;
  readonly teamName: string;
  readonly alertNotifTeamUid: string;
  readonly enterpriseUid: string;
  readonly enterpriseName: string;
  readonly enterpriseUrl: string;
  readonly enterpriseTeams: string[];
  readonly isGranular: boolean;
}
export interface SlackTeam {
  readonly uid: string;
  readonly name: string;
}
export declare const enum SlackAppState {
  Active = 'A',
  Inactive = 'I',
  NotLoaded = 'N',
}
export declare const enum SlackInvitationScope {
  UsersRead = 'users:read',
  EmailRead = 'users:read.email',
  GroupsRead = 'usergroups:read',
}
export interface SlackUser {
  readonly avatar?: string;
  readonly email: string;
  readonly handle?: string;
  readonly hasPendingInvite: boolean;
  readonly hasTeamUser: boolean;
  readonly name: string;
  readonly uid: string;
}
export interface SlackChannel {
  readonly name: string;
  readonly uid: string;
  readonly numMembers: number;
  readonly topic?: string;
  readonly isPrivate: boolean;
}
export interface SlackGroup {
  readonly uid: string;
  readonly name: string;
  readonly numMembers: number;
  readonly handle: string;
}
export interface SlackNonce {
  readonly nonce: string;
}
export declare const compareSlackUsers: () => void;
export declare const getSlackUserInitials: ({ name }: Named) => string;
export declare const slackAppHasScope: (slackApp: SlackApp | undefined | null, scope: SlackInvitationScope) => boolean;
export declare const slackAppIsActive: (slackAppState?: SlackAppState | undefined) => boolean;
export declare const isSlackGridApp: (slackApp: SlackApp | undefined) => boolean;
export declare const createEmptySlackApp: (slackState?: SlackAppState) => SlackApp;
