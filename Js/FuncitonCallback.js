function test(a,b){
    console.log(a+b)
}

function Calc(a,b){
    console.log(a*b)
}


function doCalculation(calc,a,b){
    return calc(a,b)
}

doCalculation(function Calc(a,b){
    console.log(a*b)
},1,2)
doCalculation(Calc,1,2)