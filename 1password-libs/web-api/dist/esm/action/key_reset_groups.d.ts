import * as api from "../api";
import { Context } from "./context";
export declare const getCliAffectedGroups: (c: Context) => Promise<readonly api.PartialGroup[]>;
export declare const getCliGroupEffort: (groups: readonly api.PartialGroup[]) => number;
export declare const correctCliAffectedGroups: (c: Context, updateProgress: (percentage: number) => void) => Promise<void>;
