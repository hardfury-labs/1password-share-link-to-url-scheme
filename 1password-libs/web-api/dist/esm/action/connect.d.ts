import * as model from "../model";
import { Context } from "./context";
export interface GeneratedConnectData {
    readonly bearerToken: string;
    readonly fileContents: string;
}
/**
 * Creates the credentials file contents & bearerToken used to authenticate
 * 1Password Connect server instances.
 */
export declare const generateCredentialsFileAndBearerToken: (c: Context, credentials: model.LocalAuthCredentials) => Promise<GeneratedConnectData>;
