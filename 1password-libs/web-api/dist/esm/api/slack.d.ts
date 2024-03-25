import { SlackApp, SlackChannel, SlackGroup, SlackTeam, SlackUser, SlackNonce } from "../model";
import { Session } from "./session";
export interface SlackUsers {
    users: SlackUser[];
}
export interface PostSlackAccessTokenBody {
    code: string;
    nonce: string;
}
interface SlackChannels {
    channels: SlackChannel[];
}
interface SlackGroups {
    userGroups: SlackGroup[];
}
export declare const getSlackUsers: (s: Session) => Promise<SlackUsers>;
export declare const getSlackChannels: (s: Session) => Promise<SlackChannels>;
export declare const getGridSlackChannels: (s: Session, teamUid: string) => Promise<SlackChannels>;
export declare const getGridSlackGroups: (s: Session, teamUid: string) => Promise<SlackGroups>;
export declare const getGridSlackUsers: (s: Session, teamUid: string) => Promise<SlackUsers>;
export declare const getGridSlackTeams: (s: Session) => Promise<{
    teams: SlackTeam[];
}>;
export declare const getSlackGroups: (s: Session) => Promise<SlackGroups>;
export declare const getSlackApp: (s: Session) => Promise<SlackApp>;
export declare const updateSlackApp: (s: Session, slackApp: SlackApp) => Promise<void>;
export declare const postSlackNonce: (s: Session) => Promise<SlackNonce>;
export declare const postSlackAccessToken: (s: Session, body: PostSlackAccessTokenBody) => Promise<void>;
export {};
