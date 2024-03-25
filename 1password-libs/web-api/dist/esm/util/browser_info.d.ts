export declare const enum Browser {
    Chrome = "Chrome",
    Firefox = "Firefox",
    Safari = "Safari",
    Edge = "Microsoft Edge",
    Opera = "Opera",
    IE = "Internet Explorer",
    AndroidBrowser = "Android Browser",
    Other = "Browser"
}
export declare const enum OperatingSystem {
    macOS = "MacOSX",
    iOS = "iOS",
    Windows = "Windows",
    Android = "Android",
    Linux = "Linux",
    ChromeOS = "ChromeOS",
    Other = ""
}
export interface BrowserInfo {
    name: Browser;
    version: string;
    osName: OperatingSystem;
    osVersion: string;
}
export declare const getBrowserInfo: (userAgent: string) => BrowserInfo;
