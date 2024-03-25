import moment from "moment";
export declare const dataToParamString: (data: Record<string, any>) => string;
export declare const bitMaskNames: (attrMask: number, names: string[]) => string[];
export declare enum DateFilterDirection {
    Older = "older",
    Newer = "newer"
}
export declare const getDateForVaultsFilter: (direction: DateFilterDirection, date: Date | undefined) => moment.Moment;
