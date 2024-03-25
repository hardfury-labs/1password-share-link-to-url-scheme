"use strict";

function hasExtensionInstalled() {
    var e, n;
    return !!(null === (n = null === (e = null === document || void 0 === document ? void 0 : document.body) || void 0 === e ? void 0 : e.dataset) || void 0 === n ? void 0 : n.onepasswordExtensionVersion)
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hasExtensionInstalled = void 0, exports.hasExtensionInstalled = hasExtensionInstalled;