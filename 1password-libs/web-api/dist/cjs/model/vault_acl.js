"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.includesFrozenACL = exports.DEFAULT_VAULT_ACL = exports.isEffectivelyZero = exports.RWE = exports.TOKEN_WRITE = exports.TOKEN_READ = exports.ALL_EXPORT = exports.ALL_WRITE = exports.ALL_READ = exports.ALL = exports.Print = exports.Export = exports.Import = exports.SendItem = exports.ViewHistory = exports.DeleteItem = exports.ArchiveItem = exports.CreateItem = exports.UpdateItem = exports.ReadItem = exports.RevealPassword = exports.Manage = exports.Recover = void 0, exports.Recover = 1, exports.Manage = 2, exports.RevealPassword = 16, exports.ReadItem = 32, exports.UpdateItem = 64, exports.CreateItem = 128, exports.ArchiveItem = 256, exports.DeleteItem = 512, exports.ViewHistory = 1024, exports.SendItem = 1048576, exports.Import = 2097152, exports.Export = 4194304, exports.Print = 8388608, exports.ALL = 2147483646, exports.ALL_READ = exports.ReadItem | exports.RevealPassword | exports.ViewHistory, exports.ALL_WRITE = exports.UpdateItem | exports.CreateItem | exports.Import | exports.ArchiveItem | exports.DeleteItem, exports.ALL_EXPORT = exports.Export | exports.Print | exports.SendItem, exports.TOKEN_READ = exports.ReadItem | exports.RevealPassword, exports.TOKEN_WRITE = exports.UpdateItem | exports.CreateItem | exports.ArchiveItem, exports.RWE = exports.ALL_READ | exports.ALL_WRITE | exports.ALL_EXPORT;
var isEffectivelyZero = function(e) {
    return 0 == (e & (exports.RWE | exports.Manage | exports.Recover))
};
exports.isEffectivelyZero = isEffectivelyZero, exports.DEFAULT_VAULT_ACL = exports.RWE;
var includesFrozenACL = function(e) {
    return (e & exports.UpdateItem) > 0 || (e & exports.CreateItem) > 0 || (e & exports.DeleteItem) > 0 || (e & exports.ArchiveItem) > 0
};
exports.includesFrozenACL = includesFrozenACL;