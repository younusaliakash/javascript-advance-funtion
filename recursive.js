///**Recursive */
function sayHi (n){
    if ( n == 0){
        return
    }
    console.log("This is me")
    sayHi ( n - 1)
}

sayHi (15)

function sum (n){
    if (n == 1){
        return 1
    }
    return n + sum (n -1)
}

var result = sum ( 5)
console.log(result)

function fact( n){
    if ( n==1){
        return 1
    }
    return n * fact (n -1)
}

console.log(fact (10))

var arr = [ 1,2,3,4,5]

function arrsum ( arr, lastIndex){
    if ( lastIndex < 0){
        return 0
    }
    return arr[lastIndex] + arrsum ( arr, lastIndex -1)
}

var res1 = arrsum ( arr, arr.length -1)
console.log(res1)