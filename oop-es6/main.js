"use strict"

//Первое задание

class Weapon {
    constructor ({name, attack, durability, range}) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.initDurability = durability;
        this.range = range;
    }
 
    takeDamage (damage) {
        if(damage > this.durability || damage === Infinity) {
            this.durability = 0;
        } else {
            this.durability -= damage;
        }; 
    }

    getDamage () {
        if( this.durability >= 0.3*this.initDurability ) {
            return this.attack;
        } else if( this.durability === 0 ){
            return 0;
        };

        return this.attack / 2;
    }

    isBroken () {
        return this.durability === 0;
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
console.log(arm.getDamage());
console.log(arm.isBroken());

const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

bow.takeDamage(141);
console.log(bow.durability);
bow.takeDamage(59);
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

class Arm {
    constructor () {
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.initDurability = Infinity;
        this.range = 1;
    }
 
    takeDamage (damage) {
        if(damage > this.durability || damage === Infinity) {
            this.durability = 0;
        } else {
            this.durability -= damage;
        }; 
    }

    getDamage () {
        if( this.durability >= 0.3 * this.initDurability ) {
            return this.attack;
        } else if( this.durability === 0 ){
            return 0;
        };

        return this.attack / 2;
    }

    isBroken () {
        return this.durability === 0;
    }
};

class Sword extends Arm {
    constructor () {
        super();
        this.range = 1;
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.initDurability = 500;
    }
};

class Knife extends Arm {
    constructor () {
        super();
        this.range = 1;
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 300;
        this.initDurability = 300;
    }
};

class Staff extends Arm {
    constructor () {
        super();
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.initDurability = 300;
        this.range = 2;
    }
};

class Bow extends Arm {
    constructor () {
        super();
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.initDurability = 200;
        this.range = 3;
    }
};

class LongBow extends Bow {
    constructor () {
        super();
        this.durability = 200;
        this.initDurability = 200;
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
};

class Poleaxe extends Sword {
    constructor () {
        super();
        this.range = 1;
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
        this.initDurability = 800;
    }
};

class StormStaff extends Staff {
    constructor () {
        super();
        this.durability = 300;
        this.initDurability = 300;
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
};

const weapons = [
    new Arm(),
    new Bow(),
    new Sword(),
    new Knife(),
    new Staff(),
    new LongBow(),
    new Poleaxe(),
    new StormStaff()
];

function testIt ( weapons ) {
    const damage = 210;

    for ( let weapon of weapons ) {
        console.log(`Название оружия: ${weapon.name}`);
        console.log(`Дальность: ${weapon.range}`);
        console.log(`Прочность: ${weapon.durability}`);
        console.log(`Уровень аттаки до нанесения повреждения ${damage}: ${weapon.getDamage()}`);
        weapon.takeDamage(damage);
        console.log(`Уровень аттаки после нанесенного повреждения ${damage}: ${weapon.getDamage()}`);
        console.log(`Прочность: ${weapon.durability}`);
        console.log(`Оружие сломано? -${weapon.isBroken()}-`);
    };
};

testIt(weapons);

//Третье задание
class StudentLog {
    constructor( studName ) {
        this.studName = studName;
        this.subjects = {};
    }

    getName () {
        return this.studName;
    }

    getSubjects () {
        return this.subjects;
    }

    addGrade( grade, subject ) {

        if( grade < 1 || grade > 5 || !Number.isInteger(grade) ) {

            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}".
                        Допускаются только числа от 1 до 5.`);

        } else if ( !this.subjects[subject] ) {

            this.subjects[subject] = [grade]; 

        } else {
            this.subjects[subject].push( grade );
        };

        return this.subjects[subject].length;
    }

    getAverageBySubject( subject ) {
        const sbj = this.subjects[subject];

        if( !sbj || sbj.length === 0 ) {return 0};
        
        return sbj.reduce(( a, b ) => {
            return a + b;
        }, 0) / sbj.length;
    }

    getTotalAverage() {
        const sbjs = this.subjects;
        let total = 0;

        if( !sbjs ) {return 0};

        for( const sbj in sbjs ) {
            total += this.getAverageBySubject(sbj);
        };

        return (total / Object.keys(sbjs).length).toFixed(2);
    }
};

const log = new StudentLog( 'Олег Никифоров' );

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
log.addGrade(-1, 'art');
console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('math'));
console.log(log.getAverageBySubject('physics'));
console.log(log.getAverageBySubject('art')); 
console.log( log.getTotalAverage() );