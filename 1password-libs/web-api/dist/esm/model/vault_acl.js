export var Recover = 1;
export var Manage = 2;
export var RevealPassword = 16;
export var ReadItem = 32;
export var UpdateItem = 64;
export var CreateItem = 128;
export var ArchiveItem = 256;
export var DeleteItem = 512;
export var ViewHistory = 1024;
export var SendItem = 1048576;
export var Import = 2097152;
export var Export = 4194304;
export var Print = 8388608;
export var ALL = 2147483646;
export var ALL_READ = ReadItem | RevealPassword | ViewHistory;
export var ALL_WRITE = UpdateItem | CreateItem | Import | ArchiveItem | DeleteItem;
export var ALL_EXPORT = Export | Print | SendItem;
export var TOKEN_READ = ReadItem | RevealPassword;
export var TOKEN_WRITE = UpdateItem | CreateItem | ArchiveItem;
export var RWE = ALL_READ | ALL_WRITE | ALL_EXPORT;
export var isEffectivelyZero = function(e) {
    return 0 == (e & (RWE | Manage | Recover))
};
export var DEFAULT_VAULT_ACL = RWE;
export var includesFrozenACL = function(e) {
    return (e & UpdateItem) > 0 || (e & CreateItem) > 0 || (e & DeleteItem) > 0 || (e & ArchiveItem) > 0
};