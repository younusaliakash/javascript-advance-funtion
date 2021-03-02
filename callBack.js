///**Call back */
// function simple (a , b){
//     var c = a+b
//     var d = a-b
//     var result = c+d
//     console.log(result);
// }
// simple(20, 10)

///******************************* */
// function simple (a , b){
//     var c = a+b
//     var d = a-b
//     var result =  tt (c , d)
//     console.log(result);
// }
// function tt(c, d){
//     return c + d
// }
// simple (7, 6)

///************************* */
function simple (a , b, cb){
    var c = a+b
    var d = a-b
    var result =  cb (c , d)
    return result
}
function sum(a, b){
    return a + b
}
var result1 = simple(6, 7, sum)
console.log(result1)

var result2 = simple (4, 7 , function(c, d){
    return c -d
})
console.log(result2)


