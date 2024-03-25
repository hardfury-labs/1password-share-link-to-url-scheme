import * as api from "../api";
import { Context } from "./context";
/**
 * fetch banner(s) to display.
 */
export declare const getBanners: (c: Context, group: number) => Promise<api.BannerInstances>;
/**
 * Accept a banner instance.
 */
export declare const acceptBanner: (c: Context, instanceUuid: string, group: number) => Promise<undefined | Date>;
/**
 * Close out a banner instance.
 */
export declare const dismissBanner: (c: Context, instanceUuid: string, group: number) => Promise<undefined | Date>;
