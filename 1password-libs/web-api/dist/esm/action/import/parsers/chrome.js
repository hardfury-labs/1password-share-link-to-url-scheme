import {
    makePromise as mp
} from "../../../util/make_promise";
import {
    createLoginItems
} from "./helpers/create_login_items";
import * as Csv from "./helpers/parser_helpers";
var codeLocation = "action/import/chrome",
    makePromise = mp(codeLocation);
export var parseChromeExport = function(e, r, o) {
    return makePromise("parseChromeExport", function() {
        var m = Csv.parse(r).parsedData;
        return 0 === m.length ? [] : (m[0] && "name" === m[0][0] && m.shift(), createLoginItems(e, m, o))
    })
};