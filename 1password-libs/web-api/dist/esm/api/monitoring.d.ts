import { Session } from "./session";
export interface CreateMonitoringParams {
    domain: string;
    bearerToken: string;
}
export interface UpdateMonitoringParams {
    domain?: string;
    bearerToken?: string;
    active?: boolean;
}
export interface MonitoringStatus {
    status?: "error" | "ok" | "unknown";
    lastChecked?: string;
}
export declare const createMonitoringCheck: (s: Session, monitoringParams: CreateMonitoringParams) => Promise<void>;
export declare const getMonitoringStatus: (s: Session) => Promise<MonitoringStatus>;
