///**Curring */

function currying (a){
    return function (b){
        return function (c){
            return a+b+c
        }
    }
}

var result = currying (10)(20)(30)
console.log(result)