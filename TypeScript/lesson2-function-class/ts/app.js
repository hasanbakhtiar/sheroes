function info(a, b, c) {
    if (a === void 0) { a = 5; }
    var d = a + b;
    return "".concat(c, " price:").concat(d, "$");
}
console.log(info(3, 4, "Tomato"));
