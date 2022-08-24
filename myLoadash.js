/**loadash -library */

var Lodash = require('lodash')
let numbers = [1,2,5,6,3,4]

//concat
let newArray = Lodash.concat(numbers,[9,8])
console.log(newArray);

//fill
newArray = Lodash.fill(newArray,0,1,4);
console.log(newArray);

var list = [
    {'user':'Abhishek','age':23, 'active':true},
    {'user':'Abhijeet','age':21, 'active':true}
]

var res = Lodash.every(list,['active',true]);
console.log(res);

//date = Lodash
var date= Lodash.now(); // returm milliseconds elapsed between 1st Jan 1970.
console.log(date);

function generateScratchCard(){
    console.log("Yay , you have received a ScratchCard");
}

var generate = Lodash.once(generateScratchCard);

generate();
generate();
generate();
