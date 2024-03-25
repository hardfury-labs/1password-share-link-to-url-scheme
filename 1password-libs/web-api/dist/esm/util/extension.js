export function hasExtensionInstalled() {
    var o, n;
    return !!(null === (n = null === (o = null === document || void 0 === document ? void 0 : document.body) || void 0 === o ? void 0 : o.dataset) || void 0 === n ? void 0 : n.onepasswordExtensionVersion)
};