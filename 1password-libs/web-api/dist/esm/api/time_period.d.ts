export declare const enum TimePeriod {
    AllTime = 0,
    LastWeek = 7,
    LastMonth = 30,
    Last2Months = 60,
    Last3Months = 90,
    Last6Months = 180,
    Last12Months = 365
}
export declare const timePeriodToDate: (timePeriod: TimePeriod) => Date;
export declare const Durations: TimePeriod[];
export declare const findFirstDateOfDuration: (end: number) => (durationBetween: TimePeriod) => number;
export declare const findOldestUsageDate: (currentDate: number) => (itemUsages: {
    lastUsedAt: string;
}[]) => number;
