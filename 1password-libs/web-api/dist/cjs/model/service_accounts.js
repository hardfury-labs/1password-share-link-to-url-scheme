"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ServiceAccountTokenState = exports.validServiceAccountAcl = exports.ServiceAccountActions = exports.ServiceAccountUser = void 0;
var lodash_es_1 = require("lodash-es"),
    api_1 = require("../api"),
    util_1 = require("../api/util"),
    bit_set_1 = require("./bit_set"),
    ServiceAccountUser = function() {
        function e(e) {
            this.uuid = e.uuid || "", this.email = e.email || "", this.creatorUuid = e.creatorUuid, this.serviceAccountType = e.serviceAccountType, this.attrVersion = e.attrVersion || 0, this.keysetVersion = e.keysetVersion || 0, this.name = e.name || "", this.state = e.state || "", this.type = e.type || "", this.avatar = e.avatar || "", this.language = e.language || "en", this.combinedPermissions = e.combinedPermissions || bit_set_1.BitSet.empty(), this.newsletterPrefs = e.newsletterPrefs || 0, this.preferences = e.preferences || bit_set_1.BitSet.empty(), this.externalGUID = e.externalGUID, this.createdAt = e.createdAt, this.updatedAt = e.updatedAt, this.lastAuthAt = e.lastAuthAt, this.activities = e.activities, this.billables = e.billables, this._tokenJtiMap = {}, this._attrMask = 0, this._serviceAccountVaultAccess = e.serviceAccountVaultAccess
        }
        return e.prototype.hasAttrMask = function(e) {
            return (this._attrMask & e) === e
        }, e.prototype.addAttrMask = function(e) {
            this._attrMask |= e
        }, e.translateAttrMaskNames = function(t) {
            var c = Object.keys(e.Attr).filter(function(e) {
                return !["None", "All"].includes(e)
            }).map(function(e) {
                return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/^-+|-+$/g, "").toLowerCase()
            });
            return util_1.bitMaskNames(t, c)
        }, Object.defineProperty(e.prototype, "tokens", {
            get: function() {
                if (!this.hasAttrMask(e.Attr.Tokens)) throw new TypeError("Service Account token list has not been loaded");
                return Object.values(this._tokenJtiMap)
            },
            set: function(e) {
                this._tokenJtiMap = lodash_es_1.keyBy(e, function(e) {
                    return e.tokenInfo.jti
                })
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.getToken = function(t) {
            if (!this.hasAttrMask(e.Attr.Tokens)) throw new TypeError("Service Account token list has not been loaded");
            return this._tokenJtiMap[t]
        }, Object.defineProperty(e.prototype, "displayableVaultAccess", {
            get: function() {
                if (!this.hasAttrMask(e.Attr.VaultAccess) || !this._serviceAccountVaultAccess) throw new TypeError("Service Account Vault Access has not been loaded.");
                return this._serviceAccountVaultAccess.displayable
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "totalAccessibleVaults", {
            get: function() {
                if (!this.hasAttrMask(e.Attr.VaultAccess) || !this._serviceAccountVaultAccess) throw new TypeError("Service Account Vault Access has not been loaded.");
                return this._serviceAccountVaultAccess.totalVaults
            },
            enumerable: !1,
            configurable: !0
        }), e.Attr = {
            None: 0,
            Tokens: 1,
            VaultAccess: 2,
            Activities: 4,
            Billables: 8,
            All: 255
        }, e
    }();
exports.ServiceAccountUser = ServiceAccountUser, exports.ServiceAccountActions = {
    CreateToken: api_1.ObjectDataAccessAcl.ServiceAccountTokenCreate,
    RevokeToken: api_1.ObjectDataAccessAcl.ServiceAccountTokenRevoke,
    EditToken: api_1.ObjectDataAccessAcl.ServiceAccountTokenEdit,
    CreateServiceAccount: api_1.ObjectDataAccessAcl.ServiceAccountCreate,
    EditServiceAccount: api_1.ObjectDataAccessAcl.ServiceAccountEdit,
    DeleteServiceAccount: api_1.ObjectDataAccessAcl.ServiceAccountDelete,
    EditVaultAccess: api_1.ObjectDataAccessAcl.ServiceAccountConnectVaultAccessEdit
}, exports.validServiceAccountAcl = Object.values(exports.ServiceAccountActions), exports.ServiceAccountTokenState = {
    Active: "A",
    Revoked: "R"
};