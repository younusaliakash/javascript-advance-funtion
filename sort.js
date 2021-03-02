///**Sort */
 var obj = [
     {
         Name: 'A',
         age : 20
     },
     {
        Name: 'B',
        age : 15
     },
     {
        Name: 'C',
        age : 19
     },
     { Name: 'D',
       age : 23
     }
 ]

 var arr = [1,5,7,8,9,6,7,-7,4,5,9,2,1,4,5,-2,-5,-1,9,0,3,6,7,2]

//  arr.sort()
//  console.log(arr)

arr.sort(function(a,b){
    if(a >b ){
        return 1
    } else if (a < b){
        return -1
    }
    else{
        return 0
    }
})

console.log(arr)

obj.sort(function (a, b){
    if( a.age > b.age){
        return 1
    }else if( a.age < b.age ){
        return -1
    } else {
        return 0
    }
})

console.log(obj)

var res1 = arr.every(function (value){
    return value % 2 == 0
})
console.log(res1)

var res2 = arr.every(function (value){
    return value <= 1
})
console.log(res2)

 var res3 = arr.some( function(value){
    return value % 2 == 1
})
console.log(res3)