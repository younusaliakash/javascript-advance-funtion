///**Return Function */
function greet (msg){
    function greeting( name){
        return msg + ',' + name + '!'

    }
    return greeting
}

var hell =  greet('Hello')
var gm = greet ('Good Morning')
var gv = greet ('Good Evening')

var nam = hell ('Younus Ali Akash')
var nam1 = gm ('Tanvir Reza')
var nam2 = gv ('Robiul Islam')
console.log(nam, nam1, nam2)

