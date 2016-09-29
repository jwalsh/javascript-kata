var rto = (func) => {
  // Approximately every two seconds start the activity
  var r = Math.floor(Math.random() * 2000);
  setTimeout(function() {
    console.log('rto elapsed', r);
    func(func); }, r);
}


rto(rto);

