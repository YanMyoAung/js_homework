let num = prompt("Enter a number");
function typeChecker(number,fun){
    if(fun(number)){
        return true;
    }else{
        return false;
    }
}

function even(value){
    return value % 2 === 0;
}

function odd(value){
    return value % 2 !== 0;
}

function greaterThan10(value){
    return value > 10;
}

alert(typeChecker(num,even));

let isOdd = typeChecker(num,odd);
alert(isOdd);





let checkerFunction = function(n){ return  n % 2 === 0};

typeChecker(num,checkerFunction);
typeChecker(num,function(n){ return n % 2 === 0})





typeChecker(num,(n) => n % 2 === 0);

