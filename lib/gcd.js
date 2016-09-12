console.log(`GCD`);
// http://glat.info/pub/tailopt-js/#gcd
function gcd_iter(a, b) {
    while (true) {
        if (a > b) {
            a -= b;
        } else if (b > a) {
            b -= a;
        } else {
            break;
        }
    }
    return a;
}
console.log(gcd_iter(75, 45));

function gcd_rec(a, b) {
    if (a > b) {
        return gcd_rec(a-b, b);
    } else if (a < b) {
        return gcd_rec(a, b-a);
    }
    // a === b
    return a;
}
