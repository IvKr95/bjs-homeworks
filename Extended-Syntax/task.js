"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let d = b**2 - 4*a*c;
    
    if(d < 0) {
        console.log("Корней нет");
        //Возвращаем пустой массив или null для дальнейшего использования в коде
        return [];
        // return null;
    } else if(d === 0) {
        let x = (-b) / (2*a);
        console.log(x);
        return x;
    } else if(d > 0) {
        let x1 = ((-b + Math.sqrt(d)) / (2*a)).toFixed(2),
            x2 = ((-b - Math.sqrt(d)) / (2*a)).toFixed(2);

        console.log([x1, x2]);
        return [x1, x2];
    }
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    let currentDate = new Date();
    let userAge = currentDate.getFullYear() - dateOfBirthday.getFullYear();

    let responses = [`Не желаете ли олд-фэшн, ${name}?`,
                    `Сожалею, ${name}, но я не могу вам 
                    продать алкоголь. Зато могу предложить
                    вам замечательный клюквенный компот!`];

    if (userAge >= 18) {
        console.log(responses[0]);
        return responses[0];
    } else {
        console.log(responses[1]);
        return responses[1];
    };
}

function calculateAverageRating(){
    //.map(Number) преобразует все элементы в цисла
    let marks = window.marks.value.split("").map(Number).filter(n => {
        return !isNaN(n) && n > 0;
    });
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    let counter = 0;
    //Задаем максимальную длинну массива оценок
    const maxLengthOfArr = 5;

    if(marks.length > maxLengthOfArr) {
        console.log(`Kоличество оценок больше 5`);
        marks.splice(5);
    };
    
    for(let mark of marks) {
        counter += mark;
    };
    //Высчитываем среднюю оценку по всем предметам
    const averageMark = counter / marks.length;

    return averageMark;
}