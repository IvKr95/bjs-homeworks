"use strict"

//First Task

function getSolutions( a, b, c ) {
    const D = b**2 - 4*a*c;

    if( D < 0 ) {
        return { D };
    } else if( D === 0 ) {

        let x1 = (-b) / (2*a);

        return { roots: [x1],
                D };
    } else {

        let x1 = ( -b + Math.sqrt(D) ) / ( 2*a ),
            x2 = ( -b - Math.sqrt(D) ) / ( 2*a );
        
        return { roots: [x1, x2],
                D };
    };
};

function showSolutionsMessage( a = 0, b = 0, c = 0 ) {
    let result = getSolutions( a, b, c );

    console.log(`«Вычисляем корни квадратного уравнения 
                ${a}x² + ${b}x + ${c}»`);
    console.log(`«Значение дискриминанта: ${result.D}»`);

    //если бы D не был передан в резалт

    if( !result.roots ) {
        console.log('«Уравнение не имеет вещественных корней»');
    } else if( result.roots.length === 1 ) {
        console.log(`«Уравнение имеет один корень X₁ = ${result.roots}»`);
    } else if( result.roots.length === 2 ) {
        console.log(`«Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}»`);
    };

};

//Second Task доработать

function getPersonData( secretData ) {
    let result = [];

    for ( let key in secretData ) {
        result.push(getName(secretData[key]));
    };

    return {firstName: result[0], lastName: result[1]};
};

function getName( key ) {
    return key === 0 ? "Родриго" : "Эмильо";
};

// Check
console.log( getPersonData({
    aaa: 1,
    bbb: 1
}));

// Third Task

function getAverageScore( data ) {
    
    let subjAverage = {average: 0};

    // for ( let subj in data ) {
    //     subjAverage[subj] = data[subj].reduce(( prevMark, curMark ) =>
    //         prevMark + curMark
    //     ) / data[subj].length;
    // };

    for (let marks in data) {
        subjAverage[marks] = getSubjAverage(data[marks]);
    };

    subjAverage.average = Object.values(subjAverage).reduce( ( a, b ) => a + b ) /
                            Object.keys(data).length;
    
    return subjAverage;
};

function getSubjAverage( marks ) {
    let totalSum = 0,
        amountOfMarks = 0;

    for ( let mark of marks ) {
        totalSum += mark;
        amountOfMarks++;
    };

    const average = totalSum / amountOfMarks;

    return average;
};

console.log(getAverageScore({
    algebra: [ 5, 4, 2, 2, 3, 4 ],
    geometry: [ 5, 4, 2 ],
    russian: [ 5, 3, 3, 4 ],
    physics: [ 5, 5 ],
    music: [ 2, 2, 6],
    english: [ 4, 4, 3],
    poetry: [ 5, 3, 4],
    chemistry: [ 2 ],
    french: [ 4, 4 ]
}));