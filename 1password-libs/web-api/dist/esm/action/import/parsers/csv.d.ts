import * as model from "../../../model";
import { VaultItem } from "../../../model";
import { Context } from "../../context";
import { ImportTranslators } from "../index";
interface CsvToVaultItemsOptions {
    readonly context: Context;
    readonly vault: model.Vault;
    readonly translators: ImportTranslators;
}
export declare const csvToVaultItems: (itemParsingKey: ItemParsingKey, props: CsvToVaultItemsOptions) => Promise<VaultItem[]>;
export declare const createLoginItem: (vault: model.Vault, templateInfo: model.VaultItemTemplate, translators: ImportTranslators, row: (BoundTemplateCell<LoginHeader> | BoundCustomCell)[]) => model.VaultItem;
export declare enum ItemKind {
    Login = "login",
    CreditCard = "credit card",
    SecureNote = "secure note"
}
export declare enum LoginHeader {
    Title = "title",
    Username = "username",
    Password = "password",
    Website = "website",
    Notes = "notes"
}
export declare enum CCHeader {
    Title = "title",
    CardHolder = "cardholder",
    CardType = "type",
    CardNumber = "ccnum",
    Cvv = "cvv",
    Expiry = "expiry",
    ValidFrom = "validFrom",
    Notes = "notes"
}
export declare enum SecureNoteHeader {
    Title = "title",
    Notes = "notes"
}
export declare type LoginHeaderKeys = EnumDict<LoginHeader, string>;
export declare type CreditCardHeaderKeys = EnumDict<CCHeader, string>;
export declare type SecureNoteHeaderKeys = EnumDict<SecureNoteHeader, string>;
export declare type ItemHeader = LoginHeader | CCHeader | SecureNoteHeader;
export declare const enum HeaderType {
    Template = 0,
    Custom = 1,
    NotImported = 2,
    NotDefined = 3
}
export interface TemplateHeader<H extends ItemHeader> {
    readonly type: HeaderType.Template;
    readonly value: H;
}
export interface CustomHeader {
    readonly type: HeaderType.Custom;
    readonly value: string;
}
export interface IgnoredHeader {
    readonly type: HeaderType.NotImported;
}
export interface UndefinedHeader {
    readonly type: HeaderType.NotDefined;
}
export declare type TableHeaderOption<H extends ItemHeader> = TemplateHeader<H> | CustomHeader | IgnoredHeader | UndefinedHeader;
export declare enum BoundCellType {
    Template = 0,
    Custom = 1
}
export declare enum CellAttr {
    Date = "Date"
}
export interface BoundTemplateCell<H extends ItemHeader> {
    readonly type: BoundCellType.Template;
    readonly headerValue: H;
    readonly cellValue: string;
    readonly cellAttrs?: EnumDict<CellAttr, string>;
}
export interface BoundCustomCell {
    readonly type: BoundCellType.Custom;
    readonly headerValue: string;
    readonly cellValue: string;
}
export interface LoginItemParsingKey {
    readonly kind: ItemKind.Login;
    readonly rows: (BoundTemplateCell<LoginHeader> | BoundCustomCell)[][];
}
export interface CreditCardItemParsingKey {
    readonly kind: ItemKind.CreditCard;
    readonly rows: (BoundTemplateCell<CCHeader> | BoundCustomCell)[][];
}
export interface SecureNoteParsingKey {
    readonly kind: ItemKind.SecureNote;
    readonly rows: (BoundTemplateCell<SecureNoteHeader> | BoundCustomCell)[][];
}
export declare type ItemParsingKey = LoginItemParsingKey | CreditCardItemParsingKey | SecureNoteParsingKey;
export {};
