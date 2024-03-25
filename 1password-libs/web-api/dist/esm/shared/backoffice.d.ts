export { dateFromAPI } from "../parser/date";
export interface Section {
    id: string;
    name: string;
    subsections: Subsection[];
}
export interface Subsection {
    id: string;
    name: string;
    actions: Action[];
    description?: string;
}
export interface Action {
    name: string;
    method: string;
    id: string;
    display: boolean;
    sectionId: string;
    subsectionId: string;
    disabled: boolean;
    inputText?: string;
    bulkAction?: boolean;
    params?: ActionParam[];
}
export declare enum ActionParamType {
    Bool = "bool",
    ContextData = "contextData",
    Currency = "currency",
    Date = "date",
    Email = "email",
    Int = "int",
    JSON = "json",
    Number = "number",
    Select = "select",
    String = "string",
    Text = "text",
    UUID = "uuid",
    URL = "url"
}
export declare enum ActionParamMaskType {
    CerbMask = "cerb_ticket_mask",
    UUID = "uuid"
}
export interface ActionParam {
    id: string;
    name: string;
    type: ActionParamType;
    key?: string;
    maxLength?: number;
    options?: ActionParamOption[];
    requiresInput?: boolean;
    placeholder?: string;
    multiSelect?: boolean;
    listType?: string;
    optional?: boolean;
    defaultChecked?: boolean;
    readonly?: boolean;
    mask?: ActionParamMaskType;
    max?: number;
    min?: number;
    value?: string;
}
export interface ActionParamOption {
    id: string;
    name: string;
}
export interface ActionRequest {
    sectionId: string;
    subsectionId: string;
    actionId: string;
    values?: Record<string, string>;
}
export declare enum ResultFormat {
    CSV = "csv",
    Details = "details",
    Error = "error",
    List = "list",
    Table = "table",
    Text = "text"
}
export declare type PageData = string | number | boolean;
export interface ActionResult {
    format: ResultFormat;
    error?: string;
    text?: string;
    title?: string;
    headers?: ActionResultHeader[];
    data?: Record<string, DataValue>[];
    actions?: Action[];
    sectionActions?: Record<string, Action[]>;
    table_ids?: string;
    page_data?: Record<string, PageData>;
    skipDataRefresh?: boolean;
    searchedBy?: string;
    searchTerm?: string;
}
export declare type DataValue = string | number | boolean | string[] | null;
export declare enum ActionHeaderCellType {
    Bool = "bool",
    ClientAccess = "clientAccess",
    Code = "code",
    Currency = "currency",
    Date = "date",
    GroupPermissions = "groupPermissions",
    Hyperlink = "hyperlink",
    Icons = "icons",
    Image = "image",
    Note = "note",
    JSON = "json",
    Text = "text",
    Timestamp = "timestamp",
    UserPreferences = "userPreferences",
    VaultACL = "vaultACL"
}
export interface ActionResultHeader {
    section?: string;
    display: string;
    key: string;
    action?: Action;
    type: ActionHeaderCellType;
    map?: {
        [key: string]: string;
    };
    link?: boolean;
    externalUrl?: string;
    tooltips?: ActionResultTooltip[];
    includeInSummary?: boolean;
    isCopyable: boolean;
    isGroupByColumn?: boolean;
    includeInCopyGroup?: boolean;
}
export interface ActionResultTooltip {
    header?: string;
    value: string;
    map?: {
        [key: string]: string;
    };
}
export interface SelectInputOptionList {
    items: SelectInputOption[];
}
export interface SelectInputOption {
    display: string;
    key: string;
    selected: boolean;
}
