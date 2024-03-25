export var getKeysets = function(e) {
    return e.get("/api/v2/account/keysets")
};