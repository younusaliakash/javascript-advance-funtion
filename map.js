///**Map Function */
var arr = [1,2,3,4,9]
// var sqr = arr.map(function (value){
//     return value * value
// })
// console.log(arr)
// console.log(sqr)

function mymap(arr){
    var newarr = []
    for ( i = 0; i < arr.length ; i++){
    var temp = arr[i]*arr[i]
    newarr.push(temp)
    }
    return newarr

}

console.log(mymap(arr))