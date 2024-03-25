export var Card;
! function(a) {
    a.getValidBrand = function(a) {
        switch (a) {
            case "Visa":
            case "MasterCard":
            case "American Express":
            case "Discover":
                return a;
            default:
                return "Unknown"
        }
    }
}(Card || (Card = {}));