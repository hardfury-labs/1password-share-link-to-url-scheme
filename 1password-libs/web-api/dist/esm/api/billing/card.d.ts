import * as t from "io-ts";
import { Session } from "../session";
export declare const Card: t.ReadonlyC<t.TypeC<{
    stripeCardUid: t.StringC;
    brand: t.StringC;
    country: t.StringC;
    isDefault: t.BooleanC;
    expMonth: t.NumberC;
    expYear: t.NumberC;
    name: t.StringC;
    state: t.UnionC<[t.StringC, t.UndefinedC]>;
    zip: t.UnionC<[t.StringC, t.UndefinedC]>;
    lastFour: t.Type<string, string, unknown>;
}>>;
export declare type Card = t.TypeOf<typeof Card>;
export interface AddCardRequestBody {
    isDefault: boolean;
    token: string;
}
export interface UpdateCardRequestBody {
    expMonth: number;
    expYear: number;
    name: string;
    state: string;
    country: string;
    zip: string;
}
export declare const addCard: (s: Session, data: AddCardRequestBody) => Promise<void>;
export declare const changeDefaultCard: (s: Session, card: Card) => Promise<void>;
export declare const deleteCard: (s: Session, card: Card) => Promise<void>;
export declare const updateCard: (s: Session, stripeCardUid: string, data: UpdateCardRequestBody) => Promise<void>;
export declare const getCard: (s: Session, stripeCardUid: string) => Promise<Card>;
