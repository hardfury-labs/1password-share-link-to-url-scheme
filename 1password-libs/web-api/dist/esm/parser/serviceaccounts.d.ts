import * as api from "../api";
import * as model from "../model";
/**
 * Serializes the b5 API response into a ServiceAccountUser instance
 *
 * If defined, Service Account tokens are added to the return model instance.
 */
export declare const parseServiceAccount: (apiResponse: api.ServiceAccount, attrMask?: number, serviceAcctFromCache?: model.ServiceAccountUser | undefined) => Promise<model.ServiceAccountUser>;
/**
 * serviceAccountToApi
 *
 * This is a helper to prepare a serviceAccountUser object to be sent to the server.
 *
 * @param sa : model.ServiceAccountUser
 * @returns api.ServiceAccount
 */
export declare const serviceAccountToApi: (sa: model.ServiceAccountUser) => api.ServiceAccount;
