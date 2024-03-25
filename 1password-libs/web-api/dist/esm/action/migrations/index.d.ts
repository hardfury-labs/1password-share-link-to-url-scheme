import { Context } from "../context";
export declare const runBlockingMigrations: (_c: Context) => Promise<void>;
export declare const runBackgroundMigrations: (c: Context) => Promise<void>;
