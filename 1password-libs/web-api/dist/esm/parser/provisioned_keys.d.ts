import { Context } from "../action/context";
import * as api from "../api";
import * as model from "../model";
export declare const parseProvisionedVaultKey: (json: api.ProvisionedVaultKey, keyset: model.Keyset) => Promise<model.ProvisionedVaultKey>;
export declare const parseProvisionedGroupKeyset: (json: api.ProvisionedGroupKeyset, keyset: model.Keyset) => Promise<model.ProvisionedGroupKeyset>;
export declare const parseProvisionedKeys: (c: Context, json: api.ProvisionedKeys) => Promise<model.ProvisionedKeys>;
