export var getObfuscatedCardNumber = function(e, r) {
    return ("American Express" === r ? "•••• •••••• •" : "•••• •••• •••• ") + e.slice(-4)
};