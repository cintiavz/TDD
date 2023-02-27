
function sum(num1, num2){
    if(isNaN(num1) || isNaN( num2)){
        throw 'Não é numero'
    }
    return num1 +num2
}

function sub (num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        throw 'Não é numero'
    }
    return num1 -num2
}

function multi (num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        throw 'Não é numero'
    }
    return num1 * num2
}

function divi (num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        throw 'Não é numero'
    }
    return num1 / num2
}

function poten (num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        throw 'Não é numero'
    }
    return num1 ** num2
}

function raiz (num1) {
    if(isNaN(num1)){
        throw 'Não é numero'
    }
    return num1 = Math.sqrt(num1)
}

module.exports = {
    sum,
    sub,
    multi,
    divi,
    poten,
    raiz,
}