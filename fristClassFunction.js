///**Frist Class function */

function add ( a, b){
    return a + b
}

///**Condition 1 = A Function can be stored in variable */
var sum = add
console.log(sum)
console.log(sum(4, 6))

///**Condition 2 = A function can be store in an array */
var arr = []
arr.push (add)
console.log(arr)
console.log(arr[0](1, 3))

///**Consition 3 = A function can be stored in an object */

var obj = {}
 obj.new = add
 console.log(obj)
 console.log(obj.new(5, 5))

///**Condition 4 = We create function as we need */
setTimeout ( function (){
    console.log('I will do this')
}, 5000)