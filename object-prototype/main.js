function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {

    let now = Date.now(),
        dateOfBirth = +(new Date(birthday)),
        diff = now - dateOfBirth,
        millisecInYear = 1000*60*60*24*365,
        age = diff / millisecInYear;

    return age >= 18 ? true : false;

}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    return sound === undefined ? null : sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let average = 0;

    for( let mark of marks ) {
        average += (mark / marks.length);
    };
    
    let roundedAverage = Math.round(average);

    return roundedAverage;
}