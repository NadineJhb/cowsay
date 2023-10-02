const myInfo = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I am ${myInfo.firstname} and I study in ${myInfo.campus}`,
    e : "oO",
    T : "U "
}));