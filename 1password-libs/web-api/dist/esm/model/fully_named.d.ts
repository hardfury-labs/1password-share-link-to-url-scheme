export interface Named {
    readonly name: string;
}
export declare namespace Named {
    const getInitials: ({ name }: Named) => string;
}
