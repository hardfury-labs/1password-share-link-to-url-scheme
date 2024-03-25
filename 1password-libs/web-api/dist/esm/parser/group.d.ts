import { Context } from "../action/context";
import * as api from "../api";
import * as model from "../model";
export declare const parseGroups: (c: Context, serverGroups: api.Group[]) => Promise<model.Group[]>;
export declare const parseGroup: (c: Context, json: api.Group, attrMask?: number | undefined, currentGroup?: model.Group | undefined) => Promise<model.Group>;
export declare const groupToAPI: (m: model.Group, attrMask: BitMask) => api.Group;
