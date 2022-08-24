const {DateTime} = require("luxon");

var now = DateTime.now();
//console.log(currtime);
console.log(now.day);
console.log(now.year);
dt = DateTime.now().toString();
console.log(dt);