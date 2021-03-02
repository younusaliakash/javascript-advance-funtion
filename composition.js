///**Composition */
function print (inpt){
    console.log(inpt)
}

function multipleBy (n){
    return n * 5
}

function abc ( a, b){
    return a +b
}

print(multipleBy(abc(4,7)))