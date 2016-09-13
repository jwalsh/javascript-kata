'use strict'

// Example as provide in
// _The Magical World of Functional Programming_, 1.4 (The Map Function)
const fbTest = (n) => {
    let r = [n]; 
    if (n % 3 === 0) {
        r.push('fizz');
    }
    if (n % 5 === 0) {
        r.push('buzz');
    }
    return r; 
}
const fbRange = (n) => {
    return Array
        .from({length: n})
        .map((e, i) => i)
        .map((e, i) => fbTest(e))
}

const fbReport = () => {
    fbRange(90)
        .map((e, i) => {
            let s = e.splice(1, e.length - 1).join('');
            let r = s !== '' ? s : e[0];
            console.log(e[0], r);
        })

}
fbReport();
