import * as model from "../model";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    dateFromAPI
} from "./date";
import {
    parseAndDecryptVaultAccessList
} from "./vault";
var codeLocation = "parser/person",
    makePromise = mp(codeLocation);
export var parsePeople = function(e, r, t) {
    return makePromise("parsePeople", function() {
        if (!r || 0 === r.length) return [];
        var s = r.map(function(r) {
            var s;
            return e.user && r.uuid === e.user.uuid && (s = e.user), parsePerson(e, r, void 0, s || t(r.uuid))
        });
        return Promise.all(s)
    })
};
var _importPubKey = function(e) {
    return makePromise("_importPubKey", function() {
        return e ? new model.RSAPublicKey(e.kid, void 0, e).import() : Promise.resolve(void 0)
    })
};
export var parsePerson = function(e, r, t, s) {
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
        var m = r.proposedEmail;
        return m && (n.proposedEmail = m), r.memberships && r.memberships.length > 0 && (n.groupMemberships = r.memberships), _importPubKey(r.pubKey).then(function(t) {
            return t && (n.pubKey = t), parseAndDecryptVaultAccessList(e, r.vaultAccess)
        }).then(function(e) {
            return e && (n.vaultAccessList = e), n
        })
    })
};
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
        createdAt: dateFromAPI(e.createdAt),
        updatedAt: dateFromAPI(e.updatedAt),
        lastAuthAt: dateFromAPI(e.lastAuthAt),
        csToken: t
    }
};
export var personToAPI = function(e) {
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