"use strict"

function compareArrays ( arr1, arr2 ) {
    if(arr1 === undefined || arr2 === undefined) {
        return false;
    } else {
        return  arr1.length === arr2.length &&
            arr1.every( ( num, idx ) => num === arr2[idx] );
    };
};

function memorize ( fn, limit ) {
    const results = [];

    

    return function rslt ( arg1, arg2 ) {
        const args = [arg1, arg2];

        console.log(results.length);

        if( results.length === 0 ) {

            results.push({args, result: fn(arg1, arg2)});

            return fn(arg1, arg2);

        } else {
            const foundObj = results.find( el => compareArrays(el.args, args) );

            if(foundObj) {
                
                console.log('Результат берется из памяти');
                return foundObj.result;

            } else {
                let result = fn(arg1, arg2);

                results.push({args, result});

                if(results.length > limit) results.shift();

                return result;
            };   
        };
    };
};

const fn = (a, b) => {
    console.log('Функция вызвана не из памяти');
    return a * b;
}

const calc = memorize( fn, 10 );

console.log(calc(8, 9));
console.log(calc(8, 9));
console.log(calc(4, 6));
console.log(calc(3, 9));
console.log(calc(2, 9));
console.log(calc(1, 6));
console.log(calc(99, 9));
console.log(calc(97, 9));
console.log(calc(8, 6));
console.log(calc(67, 6));
console.log(calc(657, 9));
console.log(calc(765, 9));
console.log(calc(54444, 6));
console.log(calc(111, 9));
console.log(calc(665465, 9));
console.log(calc(8, 6));


compareArrays([8, 9], [6]); // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true