import * as t from "io-ts";
export var AppBuild = t.readonly(t.type({
    version: t.string,
    url: t.union([t.string, t.undefined]),
    buildnum: t.number,
    bbn: t.union([t.string, t.undefined])
}, "AppBuild"));
export var AppRelease = t.readonly(t.type({
    release: t.union([AppBuild, t.undefined]),
    beta: t.union([AppBuild, t.undefined])
}, "AppRelease"));
export var AppReleases = t.readonly(t.type({
    B: t.union([AppRelease, t.undefined]),
    CLI: t.union([AppRelease, t.undefined]),
    KNOX: t.union([AppRelease, t.undefined]),
    OPA4: t.union([AppRelease, t.undefined]),
    OPI4: t.union([AppRelease, t.undefined]),
    OPM4: t.union([AppRelease, t.undefined]),
    OPM7: t.union([AppRelease, t.undefined]),
    OPM8: t.union([AppRelease, t.undefined]),
    OPW4: t.union([AppRelease, t.undefined]),
    OPW8: t.union([AppRelease, t.undefined]),
    SCIM: t.union([AppRelease, t.undefined])
}, "AppReleases"));