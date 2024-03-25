import * as model from "../model";
export var userCookiesFromAPI = function(a) {
    return a.map(function(a) {
        return new model.UserCookie({
            userUuid: a.userUuid,
            userEmail: a.userEmail,
            userName: a.userName,
            userAvatarURL: a.userAvatarURL,
            usingMyDomain: !!a.usingMyDomain,
            accountUuid: a.accountUuid,
            accountType: a.accountType,
            accountName: a.accountName,
            accountDomain: a.accountDomain,
            accountAvatarURL: a.accountAvatarURL,
            hasPrioritySupport: !!a.hasPrioritySupport
        })
    })
};