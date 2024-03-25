import * as api from "../api";
import { PostSlackAccessTokenBody } from "../api";
import * as model from "../model";
import * as util from "../util";
import { Context } from "./context";
export interface SlackAppResponse {
    type: "slack-app";
    slackApp: model.SlackApp;
}
export interface SlackNonceError {
    type: "error";
    error: Error;
}
export declare type SlackError = SlackAppServerError | SlackAppError | SlackAppUnknownError | SlackNonceError;
export interface SlackAppServerError {
    type: "server-error";
    error: util.errors.ServerError;
}
export interface SlackAppError {
    type: "error";
    error: Error;
}
export interface SlackAppUnknownError {
    type: "unknown-error";
    error: unknown;
}
export declare const getSlackApp: (c: Context) => Promise<SlackAppResponse | SlackError>;
export declare const getSlackChannels: (c: Context) => Promise<model.SlackChannel[]>;
export declare const getGridSlackGroups: (c: Context, teamUid: string) => Promise<model.SlackGroup[]>;
export declare const getGridSlackChannels: (c: Context, teamUid: string) => Promise<model.SlackChannel[]>;
export declare const getGridSlackUsers: (c: Context, teamUid: string) => Promise<SlackUsersResponse | SlackUsersResponseLargeTeamError | SlackUsersResponseOtherError>;
export declare const getGridSlackTeams: (c: Context) => Promise<model.SlackTeam[]>;
export declare const getSlackGroups: (c: Context) => Promise<model.SlackGroup[]>;
export declare const updateSlackApp: (c: Context, slackApp: model.SlackApp) => Promise<void>;
interface SlackUsersResponse {
    type: "slack_users_response";
    slackUsers: api.SlackUsers;
}
interface SlackUsersResponseLargeTeamError {
    type: "slack_users_response_large_team_error";
}
interface SlackUsersResponseOtherError {
    type: "slack_users_response_other_error";
}
export declare const getSlackUsers: (c: Context) => Promise<SlackUsersResponse | SlackUsersResponseLargeTeamError | SlackUsersResponseOtherError>;
/**
 * postSlackNonce - used to request a one-time code from B5 to verify that
 *                  the user is the same on both sides of the OAuth flow
 *
 * (used to prevent user spoofing)
 */
export declare const postSlackNonce: (c: Context) => Promise<string | SlackNonceError>;
/**
 * postSlackAccessToken - used to exchange the given access code for
 * a permanent access token for future API calls to the resource server.
 * If the nonce passed in does not match the user's nonce, the exchange
 * will not happen.
 * (used to prevent user spoofing)
 */
export declare const postSlackAccessToken: (c: Context, body: PostSlackAccessTokenBody) => Promise<void>;
export {};
