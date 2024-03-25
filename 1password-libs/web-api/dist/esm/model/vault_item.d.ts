import * as util from "../util";
import { SymmetricKey } from "./symmetric_key";
import { Vault } from "./vault";
import { VaultItemTemplate } from "./vault_item_template";
export declare enum PASSWORD_STRENGTH {
    FANTASTIC = 100,
    EXCELLENT = 85,
    VERY_GOOD = 73,
    GOOD = 60,
    FAIR = 53,
    WEAK = 44,
    TERRIBLE = 26
}
export declare enum PASSWORD_ENTROPY {
    FANTASTIC = 75,
    EXCELLENT = 64,
    VERY_GOOD = 55,
    GOOD = 45,
    FAIR = 40,
    WEAK = 33,
    TERRIBLE = 20
}
export interface VaultItemDetails {
    sections: VaultItem.Section[];
    fields?: VaultItem.WebFormField[];
    backupKeys?: string[];
    notesPlain?: string;
    password?: string;
    passwordHistory?: VaultItem.PreviouslyUsedPassword[];
    documentAttributes?: VaultItem.DocumentAttributes;
    customData?: {};
}
export interface VaultItemOverview {
    title: string;
    url: string;
    ainfo: string;
    ps: number;
    pbe: number;
    pgrng: boolean;
    tags?: string[];
    URLs?: VaultItem.UrlField[];
    icons?: VaultItem.Icons;
    b5UserUUID?: string;
    b5AccountUUID?: string;
    integration?: string;
}
export declare class VaultItem {
    vault: Vault;
    uuid: string;
    templateUuid: string | undefined;
    faveIndex: number | undefined;
    state: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    changerUuid: string | undefined;
    packageUuid?: string;
    itemVersion: number;
    encryptedBy: string | undefined;
    encOverview: util.crypto.JweB | undefined;
    encDetails: util.crypto.JweB | undefined;
    overview: VaultItemOverview;
    details: VaultItemDetails;
    isNewItem: boolean;
    isRestoredItem: boolean;
    /**
     * Set and used only by clients with a local database, such as b5x.
     */
    localId?: number;
    /**
     * Currently only set and used by clients which support filling, such as b5x.
     */
    nakedDomains?: string[];
    constructor(vault: Vault, template?: VaultItemTemplate, uuid?: string);
    get title(): string;
    set title(value: string);
    get subtitle(): string;
    get notes(): string;
    set notes(value: string);
    get tags(): string[];
    set tags(value: string[]);
    addTag(tag: string): void;
    removeTag(tag: string): void;
    get webFormFields(): VaultItem.WebFormField[];
    set webFormFields(fields: VaultItem.WebFormField[]);
    get username(): VaultItem.WebFormField | undefined;
    set username(field: VaultItem.WebFormField | undefined);
    get url(): string;
    set url(url: string);
    setUsername(value: string): void;
    getPassword(): string | undefined;
    setPassword(value: string, generatorUsed?: boolean, entropy?: number): void;
    private addToPasswordHistory;
    getRichIconUrl(size?: number): string;
    getSortedPasswordHistory: () => VaultItem.PreviouslyUsedPassword[];
    get passwordUpdatedAt(): number;
    parseTemplate: (template: VaultItemTemplate | undefined) => void;
    decryptWithKey: (key: SymmetricKey, overview: util.crypto.JweB, details?: ({
        kid: string;
        enc: string;
        cty: string;
        data: string;
    } & {
        iv?: string | undefined;
        alg?: string | undefined;
        p2c?: number | undefined;
        p2s?: string | undefined;
    }) | undefined) => Promise<VaultItem>;
    decrypt: (overview: util.crypto.JweB, details?: ({
        kid: string;
        enc: string;
        cty: string;
        data: string;
    } & {
        iv?: string | undefined;
        alg?: string | undefined;
        p2c?: number | undefined;
        p2s?: string | undefined;
    }) | undefined) => Promise<VaultItem>;
    /**
     * Encrypts item [overview, details] with the given symmetric key and returns [encOverview, encDetails]
     * Does not modify any of the item attributes.
     */
    encryptWithKey: (key: SymmetricKey) => Promise<[util.crypto.JweB, util.crypto.JweB]>;
    encrypt: () => Promise<VaultItem>;
    clone: () => VaultItem;
    toString(): string;
    exportToJson: () => string;
}
export declare namespace VaultItem {
    interface SectionField {
        k: string;
        n: string;
        v: unknown;
        t: string;
        a?: SectionFieldAdditionalAttributes;
        inputTraits?: SectionFieldInputTraits;
        m?: readonly string[];
    }
    interface SectionFieldAdditionalAttributes {
        guarded?: string;
        clipboardFilter?: string;
        multiline?: string;
        generate?: string;
        placeholder?: string;
        provider?: {
            type: "fastmail";
            data: {
                aliasId: string;
                accountId: string;
            };
        };
    }
    interface SectionFieldInputTraits {
        keyboard?: string;
        autocorrection?: string;
        autocapitalization?: string;
    }
    interface Section {
        name: string;
        title: string;
        fields: SectionField[] | undefined;
    }
    interface WebFormField {
        name: string;
        value: string;
        type: string;
        designation?: string;
    }
    interface PreviouslyUsedPassword {
        time: number;
        value: string;
    }
    interface DocumentAttributes {
        fileName: string;
        documentId: string;
        signingKey?: util.crypto.JwkSymKey;
        unencryptedSize: number;
        encryptedSize: number;
        integrityHash: string;
        encryptionKey: util.crypto.JwkSymKey;
        nonce: string;
    }
    interface FileAttributes {
        fileId: string;
        signingKey?: util.crypto.JwkSymKey;
        encryptionKey: util.crypto.JwkSymKey;
        nonce: string;
    }
    interface FileReference {
        fileId: string;
        signature: string;
    }
    interface UrlField {
        l: string;
        u: string;
    }
    interface Icons {
        detail?: FileAttributes;
    }
    interface Details {
        sections: readonly Section[];
        fields?: readonly WebFormField[];
        backupKeys?: readonly string[];
        notesPlain?: string;
        password?: string;
        passwordHistory?: readonly PreviouslyUsedPassword[];
        documentAttributes?: DocumentAttributes;
        customData?: {};
    }
    interface Overview {
        title: string;
        url: string;
        ainfo: string;
        ps: number;
        pbe: number;
        pgrng: boolean;
        tags: readonly string[];
        URLs?: readonly UrlField[];
        icons?: Icons;
        b5UserUUID?: string;
        b5AccountUUID?: string;
    }
    enum FieldType {
        String = "string",
        Concealed = "concealed",
        Date = "date",
        Phone = "phone",
        Address = "address",
        Url = "URL",
        Email = "email",
        MonthYear = "monthYear",
        Gender = "gender",
        CreditCardType = "cctype",
        Reference = "reference",
        Menu = "menu",
        Country = "country",
        Month = "month",
        OneTimePassword = "totp",
        File = "file"
    }
    const TOTP_PREFIX = "TOTP_";
    const isTotpField: (field: SectionField) => boolean;
    const MaxOverviewSize: number;
    const MaxDetailSize: number;
    const FieldName: {
        CreditCard: {
            CreditCardNumber: string;
            Expiry: string;
        };
        Identity: {
            FirstName: string;
            LastName: string;
        };
        Passport: {
            Expiry: string;
        };
        DriverLicense: {
            Expiry: string;
        };
        Membership: {
            Expiry: string;
        };
        MedicalRecord: {
            Date: string;
        };
    };
    const enum ItemState {
        Active = "N",
        Archived = "Y",
        Deleted = "D"
    }
    const getDateValueFromString: (value: string) => number | undefined;
    const getDateStringFromValue: (seconds: unknown) => string;
    const findFieldWithName: (fieldName: string, item: VaultItem) => SectionField | undefined;
    type UrlPiece = {
        type: "Plain";
        content: string;
    } | {
        type: "Highlighted";
        content: string;
    };
    const getHighlightedUrl: (urlString: string) => readonly UrlPiece[];
    const getAddressValue: (field: VaultItem.SectionField) => {
        street: string;
        city: string;
        state: string;
        zip: string;
        country: string;
    } | undefined;
    const getStringValue: (field: VaultItem.WebFormField | VaultItem.SectionField) => string;
    const getNumberValue: (field: VaultItem.SectionField) => number | undefined;
    const getDocumentAttributesFromField: (field: VaultItem.SectionField) => DocumentAttributes | undefined;
    const getPasswordStrengthFromEntropy: (entropy: number) => number;
    const getPasswordStrength: (password: string, username: string, generatorUsed?: boolean | undefined, entropy?: number | undefined) => number;
    const getCreditCardSubtitle: (ccNum: string) => string;
    const copyAsCorruptedItem: (item: VaultItem) => VaultItem;
    const importFromJson: (vault: Vault, json: string, options?: {
        generateNewUuid?: boolean | undefined;
    } | undefined) => VaultItem;
}
export declare type ExternalVaultItem = Pick<VaultItem, "uuid" | "overview" | "details" | "faveIndex" | "templateUuid"> & {
    createdAt: string | number | Date | undefined;
    updatedAt: string | number | Date | undefined;
    trashed: string;
};
