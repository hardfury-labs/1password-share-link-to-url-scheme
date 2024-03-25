import * as model from "../model";
import { Context } from "./context";
export declare const getTemplates: (c: Context, includeHidden?: boolean) => Promise<model.VaultItemTemplate[]>;
export declare const getAllTemplates: (c: Context) => Promise<model.VaultItemTemplate[]>;
export declare const getDefaultIdentityTemplate: (c: Context) => Promise<model.VaultItemTemplate>;
export declare const getDefaultTemplate: (c: Context, templateUuid: string) => Promise<model.VaultItemTemplate>;
export declare const postTemplate: (c: Context, template: model.VaultItemTemplate) => Promise<void>;
export declare const changeTemplatesState: (c: Context, templates: model.VaultItemTemplate[], state: string) => Promise<void>;
