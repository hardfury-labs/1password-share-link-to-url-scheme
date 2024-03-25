import { ModernAppVersion } from "../api/client_restrictions";
import { Context } from "./context";
export { ModernAppVersion };
export declare const getModernAppVersions: (c: Context) => Promise<ModernAppVersion[]>;
