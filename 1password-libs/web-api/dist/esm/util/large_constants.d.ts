export declare const COUNTRY_EMOJIS: Record<string, string>;
export interface CountryAddressFormat {
    COUNTRY: string;
    Street: string;
    City: string;
    State?: string;
    Region?: string;
    ZIP?: string;
    Country: string;
    Sama?: string;
    EDIT_FORMAT: string;
    FORMAT: string;
    LABEL_FORMAT?: string;
    PHONETIC_COUNTRY: string;
    URL_FORMAT: string;
    EDIT_WEIGHTS?: {
        City?: string;
        Region?: string;
        ZIP?: string;
    };
    kbdSettings?: {
        [key: string]: {
            caps?: "All";
            fmt?: "Alpha";
            suggest?: "never";
        };
    };
    STREET_NUMBER_BEFORE_NAME?: "YES";
}
export declare const COUNTRY_ADDRESS_FORMATS: Record<string, CountryAddressFormat>;
