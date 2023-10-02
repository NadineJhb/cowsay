const aboutMe = {
    firstname: 'Nadine',
    campus: 'Nantes'
};

module.exports = {
    firstname: aboutMe.firstname,
    campus: aboutMe.campus,
};

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));