import { Context } from "../action/context";
import * as api from "../api";
import * as model from "../model";
export declare const packagesFromAPI: (c: Context, vault: model.Vault, items: api.Package[], getUserPubKeys: (uuids: readonly string[]) => Promise<readonly api.UserPubKey[]>) => Promise<model.Package[]>;
export declare const packageFromAPI: (c: Context, vault: model.Vault, json: api.Package, getUserPubKeys: (uuids: string[]) => Promise<readonly api.UserPubKey[]>) => Promise<model.Package>;
export declare const packageToAPI: (m: model.Package) => api.Package;
