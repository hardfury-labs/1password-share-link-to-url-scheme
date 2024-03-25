import { GiftCard } from "../model/billing/gift_card";
import { Context } from "./context";
export declare const getGiftCards: (c: Context) => Promise<GiftCard[]>;
export declare const redeemGiftCard: (c: Context, giftCardCode: string) => Promise<void>;
export declare const checkGiftCard: (c: Context, giftCardCode: string) => Promise<void>;
