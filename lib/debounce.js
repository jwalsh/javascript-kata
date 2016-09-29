var rto = (func) => {
  // Approximately every two seconds start the activity
  var r = Math.floor(Math.random() * 2000);
  var s = String((r / 1000).toFixed(2)) + "s";
  setTimeout(function() {
    console.log((new Date()).getTime(), 'rto elapsed', s);
    func(func); }, r);
}


rto(rto);

