import * as api from "../api";
import { Context } from "./context";
export declare const createMonitoringCheck: (c: Context, params: api.CreateMonitoringParams) => Promise<void>;
export declare const getMonitoringStatus: (c: Context) => Promise<api.MonitoringStatus>;
