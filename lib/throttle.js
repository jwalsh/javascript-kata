var throttle = (func, timeout) => {
  var start = (new Date()).getTime();
  return function() {
    var current = (new Date()).getTime();
    if ( current - start >= timeout) {
      start = current;
      func();
    }
  }
}

// only show every two seconds
var throttledPing = throttle(() => { console.log('ping');}, 2000);
setInterval(throttledPing, 500);
setInterval(() => { console.log('pong'); }, 500);
