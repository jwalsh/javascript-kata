// All characters are unique
let su = (s) => {
  // array of charCode
  let ua = [];
  // hash
  // let uo = {}; 
  return s.split('').reduce((a, b) => {
    let matched = false; 
    if (ua[b.charCodeAt()]) {
      matched = true; 
    } else {
      ua[b.charCodeAt()] = true; 
    }
    return a && !matched; 
  }, true)
}

// tests

console.log(su('abcdef'), true)
console.log(su('fish'), true)
console.log(su('aa'), false)
console.log(su('hello'), false)
