//**Reduce */
var  arr  = [1,2,3,4,50]
// var sum = arr. reduce(function (pre, curr){
//     return pre + curr
// }, 500)  
// console.log(sum)

// var max = arr.reduce(function (pre, curr){
//     return Math.max(pre, curr)
// }, 0)
// console.log(max)

function myreduce (arr, cb , acc){
    for ( var i = 0;  i < arr.length ; i++){
        acc = cb (acc, arr[i])
    }
    return acc
}

var max = myreduce(arr, function (pre, curr){
    return Math.max(pre, curr)
},0)

var sum = myreduce(arr, function (pre, curr){
    return pre + curr
},0)
console.log(max ,sum)