const hashes = [];
const hashCode = (s) => {
  // create a 10 bucket code
  const arr = s.split('');
  const bucket = arr.reduce((a, b) => {
    return a + b.charCodeAt()
  }, 0) % 10;
  hashes[bucket] = typeof hashes[bucket] === 'array' ? hashes[bucket].push(s) : [s];
  console.log('Added', s, bucket);
};

hashCode("a")
hashCode("hi")
hashCode("abc")
hashCode("hello")
hashCode("qs")
console.log(hashes)
