// debounce means wait until something has stopped being active before we perform work

const debounce = (func, timeout) => {
  let last = (new Date()).getTime();
  return () => {
    const now = (new Date()).getTime();
    if (now  - last < timeout) {
      console.log('debouncing', now, last);
      last = now;
    } else {
      func()
    }
  }
};


const rto = (func) => {
  // Approximately every two seconds start the activity
  const r = Math.floor(Math.random() * 2000);
  const s = String((r / 1000).toFixed(2)) + "s";
  setTimeout(() => {
    console.log((new Date()).getTime(), 'rto elapsed', s);
    func(func); }, r);
};

const rtt = () => {
  console.log('rtt');
};

const dbr = debounce(rtt, 1000);

setInterval(dbr, 985); 
// rto(dbr)

// debounce(rto(rto), 200);

