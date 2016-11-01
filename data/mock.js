// http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
var gen4122 = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
};
var users = {

}
var us = [];

for (var i = 0; i < 1000; i++) {
  var uid = gen4122();
  us.push(uid);
  users[uid] = {
    "age": Math.ceil(Math.random() * 100),
    "code": "dnt",
    "geo": {
      "country": "us",
    },
    "technographics": {
      "browser": "Chrome"
    }
  };
}

var pages = ['/home', '/store', '/blog', '/purchased'];
var events = [];

for (var j = 0; j < 10000; j++) {
  var rp = pages[Math.floor(Math.random() * pages.length)];
  var ru = us[Math.floor(Math.random() * us.length)];
  var rt = (new Date()).getTime();
  events.push(
    {
      user_id: ru,
      name: rp,
      timestamp: rt
    }
  );
}

console.log(JSON.stringify('Writing users.json and events.json'));

var fs = require('fs');
fs.writeFileSync('users.json', JSON.stringify(users, null, '  '));
fs.writeFileSync('events.json', JSON.stringify(events, null, '  '));
