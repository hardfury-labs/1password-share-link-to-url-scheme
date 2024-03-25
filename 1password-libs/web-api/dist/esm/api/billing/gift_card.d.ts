import * as t from "io-ts";
import { Session } from "../session";
export declare const GiftCard: t.ReadonlyC<t.TypeC<{
    code: t.StringC;
    redeemedAt: t.StringC;
    amount: t.NumberC;
    description: t.StringC;
    purchaserEmail: t.StringC;
}>>;
export declare type GiftCard = t.TypeOf<typeof GiftCard>;
export declare const redeemGiftCard: (s: Session, giftCardCode: string) => Promise<void>;
export declare const getGiftCards: (s: Session) => Promise<readonly GiftCard[]>;
export declare const checkGiftCard: (s: Session, giftCardCode: string) => Promise<void>;
