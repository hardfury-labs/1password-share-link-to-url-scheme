import { Device } from "../shared";
export declare let serverVersion: string;
export declare const setServerVersion: (v: string) => string;
export declare let env: string;
export declare const setEnv: (n: string) => string;
export declare let device: Device.Type;
export declare let clientDescriptor: string;
export declare const setDevice: (d: Device.Type) => void;
/** Leftover function used by API consumers */
export declare const initializeDevice: (d: Device.Type) => void;
/** Must be set by code that uses this project */
export declare let isEdge: boolean;
export declare const setIsEdge: (t: boolean) => boolean;
