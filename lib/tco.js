console.log(`Tail Call Optimization`);

function id(x) {
    return x; // (A)
}
function f(a) {
    let b = a + 1;
    return id(b); // (B)
}
function g(a) {
    let b = a + 1;
    return id(b); // (B)
}

console.log(f(2)); // (C)


const a = x => x ? f() : g();

console.log(a(3));

const b = () => f() || g();

console.log(b(4));
