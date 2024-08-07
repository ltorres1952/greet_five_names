const greet = require('./greet.js');
const goodbye = require('./goodbye.js');
const nameObj = {
    name1: "John", name2: "Mary", name3: "Jimbo", name4: "Lisa", name5: "Bort"
}

function conversation(object) {
    for (let name in object) {
        greet(object[name]);
        goodbye(object[name]);
    }
}

conversation(nameObj);