"use strict"

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    let params = {
        percent,
        contribution,
        amount
    };

    for ( let p in params ) {
        
        if( typeof params[p] === 'string' ) {

            if( !isNaN( Number( params[p] ))) {
                params[p] = Number( params[p] );
            } else {
                console.log(`Параметр ${p} содержит неправильное значение ${params[p]}`);
                return `Параметр ${p} содержит неправильное значение ${params[p]}`;
            };        
        };
    };
    
    const sumToReturn = amount - contribution;
    const P = ( percent / 100 ) / 12;
    let n = 12;
    const monthlyPay = sumToReturn * P * ( ( 1 + P )**n / ( ( 1 + P )**n - 1 ) );
    const totalAmount = ( monthlyPay * n );
    
    console.log(totalAmount);
    return totalAmount;
};

// function isDataCorrect() {

// };

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    return `Привет, мир! Меня зовут ${checkName(name)}.`;
};

function checkName(name) {
    if( name === 'null' || name === 'undefined' || name === '' ) {
        return "Аноним";
    };
    return name;
};