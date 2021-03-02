///**Higher order function */

function add ( a, b){
    return a+b
}

function anything (a, b , agg){
    var c = a + b
    var d = a - b
    function anything1(){
        var x = agg (a, b)
        return a*b*x
    }
    return anything1
}
var asp = anything(6, 5, add )
console.log(asp())