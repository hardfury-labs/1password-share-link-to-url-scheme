import * as t from "io-ts";
import { Session } from "../session";
export declare const Feature: t.ReadonlyC<t.TypeC<{
    title: t.StringC;
    desc: t.StringC;
}>>;
export declare type Feature = t.TypeOf<typeof Feature>;
export declare const Tier: t.ReadonlyC<t.TypeC<{
    name: t.StringC;
    accountType: t.StringC;
    isPublic: t.BooleanC;
    sortOrder: t.NumberC;
    trialDays: t.NumberC;
    backupDays: t.NumberC;
    guestsIncluded: t.NumberC;
    maxGuests: t.NumberC;
    membersIncluded: t.NumberC;
    maxMembers: t.NumberC;
    minQuantity: t.NumberC;
    storagePerAccount: t.NumberC;
    storagePerUser: t.NumberC;
    marketingText: t.ReadonlyC<t.TypeC<{
        defaultPriceDisplayFrequency: t.Type<import("./plan").Frequency, import("./plan").Frequency, unknown>;
        localizedFeatures: t.Type<readonly Readonly<{
            title: string;
            desc: string;
        }>[], readonly Readonly<{
            title: string;
            desc: string;
        }>[], unknown>;
        name: t.StringC;
        viewDetailsURL: t.StringC;
    }>>;
    features: t.Type<readonly string[], readonly string[], unknown>;
    plans: t.Type<readonly Readonly<{
        frequency: import("./plan").Frequency;
        sortOrder: number;
        currency: string;
        display: Readonly<{
            amount: number;
            isPerUser: boolean;
        }>;
    }>[], readonly Readonly<{
        frequency: import("./plan").Frequency;
        sortOrder: number;
        currency: string;
        display: Readonly<{
            amount: number;
            isPerUser: boolean;
        }>;
    }>[], unknown>;
}>>;
export declare type Tier = t.TypeOf<typeof Tier>;
export declare const getAvailableTiers: (s: Session) => Promise<readonly Tier[]>;
export declare const getUpgradeTiers: (s: Session) => Promise<readonly Tier[]>;
