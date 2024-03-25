"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ActionHeaderCellType = exports.ResultFormat = exports.ActionParamMaskType = exports.ActionParamType = exports.dateFromAPI = void 0;
var ActionParamType, ActionParamMaskType, ResultFormat, ActionHeaderCellType, date_1 = require("../parser/date");
Object.defineProperty(exports, "dateFromAPI", {
        enumerable: !0,
        get: function() {
            return date_1.dateFromAPI
        }
    }),
    function(e) {
        e.Bool = "bool", e.ContextData = "contextData", e.Currency = "currency", e.Date = "date", e.Email = "email", e.Int = "int", e.JSON = "json", e.Number = "number", e.Select = "select", e.String = "string", e.Text = "text", e.UUID = "uuid", e.URL = "url"
    }(ActionParamType = exports.ActionParamType || (exports.ActionParamType = {})),
    function(e) {
        e.CerbMask = "cerb_ticket_mask", e.UUID = "uuid"
    }(ActionParamMaskType = exports.ActionParamMaskType || (exports.ActionParamMaskType = {})),
    function(e) {
        e.CSV = "csv", e.Details = "details", e.Error = "error", e.List = "list", e.Table = "table", e.Text = "text"
    }(ResultFormat = exports.ResultFormat || (exports.ResultFormat = {})),
    function(e) {
        e.Bool = "bool", e.ClientAccess = "clientAccess", e.Code = "code", e.Currency = "currency", e.Date = "date", e.GroupPermissions = "groupPermissions", e.Hyperlink = "hyperlink", e.Icons = "icons", e.Image = "image", e.Note = "note", e.JSON = "json", e.Text = "text", e.Timestamp = "timestamp", e.UserPreferences = "userPreferences", e.VaultACL = "vaultACL"
    }(ActionHeaderCellType = exports.ActionHeaderCellType || (exports.ActionHeaderCellType = {}));