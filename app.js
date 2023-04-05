// function expression with hoisting 
 
// sum(2,9)  Cannot access 'sum' before initialization -> 
let sum = function( ){

    console.log(a+b)

}
// with function expression ,the call MUST be after the function expression;
sum();
var a =6 ,b=12;