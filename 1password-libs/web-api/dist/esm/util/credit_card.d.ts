import { Card } from "../model/billing/card";
export declare const getObfuscatedCardNumber: (cardNumber: Card["lastFour"], type: Card.Brand) => string;
