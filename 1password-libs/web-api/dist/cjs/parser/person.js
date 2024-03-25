"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, s) {
        void 0 === s && (s = t), Object.defineProperty(e, s, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, s) {
        void 0 === s && (s = t), e[s] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.personToAPI = exports.parsePerson = exports.parsePeople = void 0;
var model = __importStar(require("../model")),
    make_promise_1 = require("../util/make_promise"),
    date_1 = require("./date"),
    vault_1 = require("./vault"),
    codeLocation = "parser/person",
    makePromise = make_promise_1.makePromise(codeLocation),
    parsePeople = function(e, r, t) {
        return makePromise("parsePeople", function() {
            if (!r || 0 === r.length) return [];
            var s = r.map(function(r) {
                var s;
                return e.user && r.uuid === e.user.uuid && (s = e.user), exports.parsePerson(e, r, void 0, s || t(r.uuid))
            });
            return Promise.all(s)
        })
    };
exports.parsePeople = parsePeople;
var _importPubKey = function(e) {
        return makePromise("_importPubKey", function() {
            return e ? new model.RSAPublicKey(e.kid, void 0, e).import() : Promise.resolve(void 0)
        })
    },
    parsePerson = function(e, r, t, s) {
        return void 0 === t && (t = 0), makePromise("parsePerson", function() {
            var a = _jsonToAttrs(r),
                n = s ? s.setAttrs(a) : new model.Person(a);
            n.addAttrMask(t);
            var o = r.activities;
            o && (n.activities = o.map(model.Activity.fromLegacyApi));
            var i = r.personalItemsCount;
            i && (n.personalItemsCount = i);
            var u = r.devices;
            u && (n.devices = u);
            var l = r.proposedEmail;
            return l && (n.proposedEmail = l), r.memberships && r.memberships.length > 0 && (n.groupMemberships = r.memberships), _importPubKey(r.pubKey).then(function(t) {
                return t && (n.pubKey = t), vault_1.parseAndDecryptVaultAccessList(e, r.vaultAccess)
            }).then(function(e) {
                return e && (n.vaultAccessList = e), n
            })
        })
    };
exports.parsePerson = parsePerson;
var _jsonToAttrs = function(e) {
        var r, t = null !== (r = e.csToken) && void 0 !== r ? r : void 0;
        return {
            uuid: e.uuid,
            name: e.name,
            state: e.state,
            type: e.type,
            attrVersion: e.attrVersion,
            keysetVersion: e.keysetVersion,
            language: e.language,
            avatar: e.avatar,
            combinedPermissions: e.combinedPermissions,
            newsletterPrefs: e.newsletterPrefs,
            preferences: e.preferences,
            externalGUID: e.externalGUID || "",
            hasMFAEnabled: e.hasMFAEnabled,
            email: e.email,
            createdAt: date_1.dateFromAPI(e.createdAt),
            updatedAt: date_1.dateFromAPI(e.updatedAt),
            lastAuthAt: date_1.dateFromAPI(e.lastAuthAt),
            csToken: t
        }
    },
    personToAPI = function(e) {
        return {
            uuid: e.uuid,
            email: e.email,
            name: e.name,
            attrVersion: e.attrVersion,
            keysetVersion: e.keysetVersion,
            state: e.state,
            type: e.type,
            avatar: e.avatar,
            language: e.language,
            newsletterPrefs: e.newsletterPrefs,
            preferences: e.preferences,
            externalGUID: e.externalGUID,
            hasMFAEnabled: e.hasMFAEnabled,
            keysets: null,
            memberships: null,
            vaultAccess: null,
            devices: null,
            activities: null,
            personalItemsCount: null
        }
    };
exports.personToAPI = personToAPI;