import moment from "moment";
/**
 * A function that takes two values of the same type and returns
 * a comparison value.
 * a < b => v < 0
 * a = b => v = 0
 * a > b => v > 0
 */
export declare type Comparator<T> = (a: T, b: T) => number;
/**
 * Combine comparators in order.
 * If the first comparator returns 0, move to the next comparator.
 */
export declare const combineComparators: <T>(...comparators: Comparator<T>[]) => Comparator<T>;
/**
 * Compose a comparator with a lens that yields the value for comparison.
 */
export declare const composeComparator: <G>(comp: Comparator<G>) => <H>(lens: (s: H) => G) => Comparator<H>;
/**
 * Transform a comparator based on the sort direction
 */
export declare const getOrderedComparator: <G>(comp: Comparator<G>, asc?: boolean) => Comparator<G>;
/**
 * Comparator function for strings.
 * Sorts alphabetically using the current locale.
 * Undefined values are initialized as empty strings.
 */
export declare const compareStrings: (a?: string, b?: string) => number;
/**
 * Comparator function for Dates.
 * Sorts earlier dates first.
 * Undefined values will be sorted first.
 */
export declare const compareDates: (a?: Date, b?: Date) => number;
/**
 * A dictionary of functions that take a lens and return a comparator
 */
export declare const compare: {
    booleans: <H>(lens: (s: H) => boolean | undefined) => Comparator<H>;
    dates: <H_2>(lens: (s: H_2) => Date | undefined) => Comparator<H_2>;
    moments: <H_3>(lens: (s: H_3) => moment.MomentInput) => Comparator<H_3>;
    numbers: <H_4>(lens: (s: H_4) => number | undefined) => Comparator<H_4>;
    strings: <H_5>(lens: (s: H_5) => string | undefined) => Comparator<H_5>;
    desc: {
        booleans: <H>(lens: (s: H) => boolean | undefined) => Comparator<H>;
        dates: <H_2>(lens: (s: H_2) => Date | undefined) => Comparator<H_2>;
        moments: <H_3>(lens: (s: H_3) => moment.MomentInput) => Comparator<H_3>;
        numbers: <H_4>(lens: (s: H_4) => number | undefined) => Comparator<H_4>;
        strings: <H_5>(lens: (s: H_5) => string | undefined) => Comparator<H_5>;
    };
};
