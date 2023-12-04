let score = "31"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

//"31" => 31
//"31abc" => NaN
//true/false => 1/0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1/0 => true/false
//  "" => false
//"string" => true

let someNumber = 31
let stringNumber = String(someNumber)
console.log(typeof stringNumber);