///**For Each */

// var arr = [1,2,3,4,5]
// var sum = 0
// arr.forEach(function (value, index, arr){
//     // console.log(value, index, arr)
//     sum += value
// })
// console.log(sum)

var arr = [1,2,3,4,5]
function forEach (arr, cb){
    for ( i = 0 ; i < arr.length ; i++){
        cb(arr[i])
    }
}
sum = 0
forEach(arr, function (value){
    sum += value
})
console.log(sum)
