///**Filter */
var arr = [1,2,3,4,5,6,7,8,9]

// var nwearr = arr.filter(function ( value){
//     return value % 2 == 0
// })
// console.log(nwearr)

// function myfilter(arr){
//     var newarr = []
//     for ( i = 0 ; i < arr.length ; i++)
//         if ( arr[i] % 2 == 0){
//             newarr.push(arr[i])
//         }
//         return newarr
// }
// console.log(myfilter(arr))

function myfilter(arr, cb){
    var newarr = []
    for ( i = 0 ; i < arr.length ; i++)
        if ( cb (arr[i], i, arr)){
            newarr.push(arr[i])
        }
        return newarr
}
console.log(myfilter(arr, function (value){
    return value % 2 == 1
}))
console.log(myfilter(arr, function (value){
    return value % 2 == 0
}))