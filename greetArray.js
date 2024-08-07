
let namesArr = ["John", "Mary", "Lisa", "Jimbo", "Bort"];
let namesArr2 = ["Bob", "Joe", "Peter", "Jim", "BORT"];

//for (let i = 0; i < people.length; i++) {
//    console.log(`Hi, ${people[i]}.`)
//}

function greetNames(arr) {
    arr.forEach((name) => {
        console.log(`Hello, ${name}.`)
    })
}

// greetNames(namesArr);
// greetNames(namesArr2);
global.namesArr = namesArr;
global.namesArr2 = namesArr2;
global.greetNames = greetNames;