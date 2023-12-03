const accountId = 1008 //unchangable value
let accountEmail = "guts@email.com" // 
var accountPwd = "12345"
accountCity = "Udaipur"
let accountState; //result --> undefined

//accountId = 21 // not allowed

accountEmail = "yoyo@yo.com"
accountPwd = "2345"
accountCity = "delhi"
/*
prefer not to use var because of issue in block and fucntional scope
*/
console.log(accountId)
console.table([accountId, accountEmail, accountPwd, accountCity])