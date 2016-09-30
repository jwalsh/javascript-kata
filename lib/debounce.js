// debounce means wait until something has stopped being active before we perform work

var debounce = (func, timeout) => {
  var last = (new Date()).getTime();
  return () => {
    var now = (new Date()).getTime();
    if (now  - last < timeout) {
      console.log('debouncing', now, last);
      last = now;
    } else {
      func()
    }
  }
}


var rto = (func) => {
  // Approximately every two seconds start the activity
  var r = Math.floor(Math.random() * 2000);
  var s = String((r / 1000).toFixed(2)) + "s";
  setTimeout(function() {
    console.log((new Date()).getTime(), 'rto elapsed', s);
    func(func); }, r);
}

var rtt = () => {
  console.log('rtt');
}

var dbr = debounce(rtt, 1000);

setInterval(dbr, 985); 
// rto(dbr)

// debounce(rto(rto), 200);

