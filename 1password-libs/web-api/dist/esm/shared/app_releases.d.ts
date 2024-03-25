import * as t from "io-ts";
export declare const AppBuild: t.ReadonlyC<t.TypeC<{
    version: t.StringC;
    url: t.UnionC<[t.StringC, t.UndefinedC]>;
    buildnum: t.NumberC;
    bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
}>>;
export declare type AppBuild = t.TypeOf<typeof AppBuild>;
export declare const AppRelease: t.ReadonlyC<t.TypeC<{
    release: t.UnionC<[t.ReadonlyC<t.TypeC<{
        version: t.StringC;
        url: t.UnionC<[t.StringC, t.UndefinedC]>;
        buildnum: t.NumberC;
        bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
    }>>, t.UndefinedC]>;
    beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
        version: t.StringC;
        url: t.UnionC<[t.StringC, t.UndefinedC]>;
        buildnum: t.NumberC;
        bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
    }>>, t.UndefinedC]>;
}>>;
export declare type AppRelease = t.TypeOf<typeof AppRelease>;
export declare const AppReleases: t.ReadonlyC<t.TypeC<{
    B: t.UnionC<[t.ReadonlyC<t.TypeC<{
        release: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
    }>>, t.UndefinedC]>;
    CLI: t.UnionC<[t.ReadonlyC<t.TypeC<{
        release: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
    }>>, t.UndefinedC]>;
    KNOX: t.UnionC<[t.ReadonlyC<t.TypeC<{
        release: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
    }>>, t.UndefinedC]>;
    OPA4: t.UnionC<[t.ReadonlyC<t.TypeC<{
        release: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
    }>>, t.UndefinedC]>;
    OPI4: t.UnionC<[t.ReadonlyC<t.TypeC<{
        release: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
    }>>, t.UndefinedC]>;
    OPM4: t.UnionC<[t.ReadonlyC<t.TypeC<{
        release: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
    }>>, t.UndefinedC]>;
    OPM7: t.UnionC<[t.ReadonlyC<t.TypeC<{
        release: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
    }>>, t.UndefinedC]>;
    OPM8: t.UnionC<[t.ReadonlyC<t.TypeC<{
        release: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
    }>>, t.UndefinedC]>;
    OPW4: t.UnionC<[t.ReadonlyC<t.TypeC<{
        release: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
    }>>, t.UndefinedC]>;
    OPW8: t.UnionC<[t.ReadonlyC<t.TypeC<{
        release: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
    }>>, t.UndefinedC]>;
    SCIM: t.UnionC<[t.ReadonlyC<t.TypeC<{
        release: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
            version: t.StringC;
            url: t.UnionC<[t.StringC, t.UndefinedC]>;
            buildnum: t.NumberC;
            bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
    }>>, t.UndefinedC]>;
}>>;
export declare type AppReleases = t.TypeOf<typeof AppReleases>;
