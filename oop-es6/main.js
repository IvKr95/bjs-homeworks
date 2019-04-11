"use strict"

//Первое задание

class Weapon {
    constructor ({name, attack, durability, range}) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this._durability = durability;
        this.range = range;
    }
 
    takeDamage (damage) {
        if(damage > this.durability || damage === Infinity) {
            return this.durability = 0;
        };
        return this.durability -= damage;
    }

    getDamage () {
        if( this.durability >= 0.3*this._durability ) {
            return this.attack;
        } else if( this.durability === 0 ){
            return 0;
        };
        return this.attack / 2;
    }

    isBroken () {
        return this.durability < 0;
    }
};

const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});

sword.takeDamage(5);
console.log(sword.durability);

sword.takeDamage(50);
console.log(sword.durability);

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
  });

arm.takeDamage(20);
console.log(arm.durability);
console.log(arm.durability);
console.log(arm.getDamage());
console.log(arm.durability);
console.log(arm.isBroken());

const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

bow.takeDamage(141);
console.log(bow.durability);
bow.takeDamage(200);
console.log(bow.durability);
console.log(bow.getDamage());
console.log(bow.isBroken());

const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

const longBow = new Weapon({
    name: 'Длинный лук',
    attack: 15,
    durability: 200,
    range: 4,
});

const poleaxe = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: 1,
});

const stormStaff = new Weapon({
    name: 'Посох Бури',
    attack: 10,
    durability: 300,
    range: 3,
});

//Второе задание

class Arm extends Weapon {};

const newArm = new Arm({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

console.log(newArm.getDamage());
console.log(newArm.takeDamage(Infinity));

class Bow extends Weapon {};

class Sword extends Weapon {};

class Knife extends Weapon {};

class Staff extends Weapon {};

class LongBow extends Bow {};

class Poleaxe extends Sword {};

class StormStaff extends Staff {};

const newStormStaff = new StormStaff({
    name: 'Посох Бури',
    attack: 10,
    durability: 300,
    range: 3,
});

console.log(newStormStaff.takeDamage(20));
console.log(newStormStaff.takeDamage(300));
console.log(newStormStaff.getDamage());

//Третье задание
class StudentLog {
    constructor( studName, subjects ) {
        this.studName = studName;
        this.subjects = subjects;
    }

    getName() {
        return this.studName;
    }

    getSubjects() {
        return this.subjects;
    }

    addGrade( grade, subject ) {
        let sbj = this.subjects[subject];

        if(!sbj) {
            console.log(`Извините, предмет ${subject} отсутствует в базе данных :(`);
            return sbj;
        } else if( grade > 5 || !Number.isInteger(grade) ) {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}".
                        Допускаются только числа от 1 до 5.`);
            return sbj.length;
        };

        return sbj.push( grade );
    }

    getAverageBySubject( subject ) {
        let sbj = this.subjects[subject];

        if( !sbj || sbj.length === 0 ) {return 0};
        
        return sbj.reduce(( a, b ) => {
            return a + b;
        }, 0) / sbj.length;
    }

    getTotalAverage() {
        let sbjs = this.subjects,
            total = 0;

        if( !sbjs ) {return 0};

        for( let sbj in sbjs ) {
            total += this.getAverageBySubject(sbj);
        };

        return (total / Object.keys(sbjs).length).toFixed(2);
    }
};

const log = new StudentLog( 'Олег Никифоров', {
    geometry: [],
    math: [],
    physics: [],
});

console.log(log.getName());
log.addGrade(5, 'math');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');
log.addGrade(4, 'physics');
log.addGrade(25, 'math');
log.addGrade('отлично', 'geometry');
log.addGrade(2, 'geometry');
log.addGrade(4, 'physics');
log.addGrade(4, 'art');
console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('math'));
console.log(log.getAverageBySubject('physics')); 
console.log( log.getTotalAverage() );


