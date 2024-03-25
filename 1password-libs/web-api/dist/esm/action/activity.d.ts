import * as model from "../model";
import { Context } from "./context";
export declare const getFilteredActivities: (c: Context, eid: number, direction: model.ActivityFilterDirection, filters?: model.ActivityFilters | undefined) => Promise<model.Activity[]>;
