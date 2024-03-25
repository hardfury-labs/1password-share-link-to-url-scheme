import { Card as apiCard } from "../../api/billing";
export declare type Card = apiCard;
export declare namespace Card {
    const enum Brand {
        Visa = "Visa",
        Mastercard = "MasterCard",
        Amex = "American Express",
        Discover = "Discover",
        Unknown = "Unknown"
    }
    const getValidBrand: (brand: string | undefined) => Brand;
}
