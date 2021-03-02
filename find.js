///**Finnd & find index */

 var arr = [1,2,3,4,5,6,7,8,9]

//  var myfind = arr. find(function(value){
//      return value == 9
//  })
//  console.log(myfind)

// var myindex = arr.findIndex (function (value){
//     return value == 6
// })
// console.log(myindex)

function myfind(arr, cb){
    for (var i = 0 ; i < arr.length ; i++){
        if ( cb (arr[i]))
        return arr[i]
    }
}

var result = myfind(arr, function( value){
    return value == 5
})
console.log(result)
