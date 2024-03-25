import * as t from "io-ts";
import { Session } from "./session";
export declare const VaultItemTemplate: t.IntersectionC<[t.TypeC<{
    uuid: t.StringC;
    singularName: t.StringC;
    pluralName: t.StringC;
    icon: t.StringC;
    sourceIcon: t.StringC;
}>, t.PartialC<{
    templateUuid: t.StringC;
    createdAt: t.StringC;
    updatedAt: t.StringC;
    state: t.StringC;
    version: t.NumberC;
    activeItemCount: t.NumberC;
    attrs: t.AnyC;
}>]>;
export declare type VaultItemTemplate = t.TypeOf<typeof VaultItemTemplate>;
export interface AccountTemplatesResponse {
    version: number;
    templates: VaultItemTemplate[];
}
export declare const getAccountTemplates: (s: Session, includeHidden: boolean) => Promise<AccountTemplatesResponse>;
export declare const getDefaultTemplate: (s: Session, uuid: string) => Promise<VaultItemTemplate>;
export declare const postTemplate: (s: Session, template: VaultItemTemplate) => Promise<void>;
export declare const changeTemplatesState: (s: Session, uuids: string[], state: string) => Promise<void>;
