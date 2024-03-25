import { Device } from "../shared";
import { Session } from "./session";
export declare const addDevice: (s: Session, device: Device.Type) => Promise<void>;
export declare const deleteDevice: (s: Session, deviceUUID: string, userUUID?: string | undefined) => Promise<void>;
export declare const deleteInactiveDevices: (s: Session) => Promise<void>;
export declare const reauthorizeDevice: (s: Session, deviceUUID: string) => Promise<void>;
export declare const clearDeviceDSecret: (s: Session, deviceUUID: string) => Promise<void>;
