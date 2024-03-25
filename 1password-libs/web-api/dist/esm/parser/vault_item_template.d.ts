import * as api from "../api";
import * as model from "../model";
export declare const vaultItemTemplatesFromAPI: (templates: api.VaultItemTemplate[]) => model.VaultItemTemplate[];
export declare const vaultItemTemplateAttrsFromAPI: (uuid?: string, attrs?: any) => model.VaultItemTemplateAttrs;
export declare const vaultItemTemplateFromAPI: (a: api.VaultItemTemplate) => model.VaultItemTemplate;
export declare const vaultItemTemplateToAPI: (m: model.VaultItemTemplate) => api.VaultItemTemplate;
