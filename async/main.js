function setDailyRhythm ( wakeUpTime, bedTime ) {
    let currentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;

    const checkWakeUp = setAlarm( wakeUpTime, goodMorning ),
        checkSleepTime = setAlarm( bedTime, goodNight );

    checkWakeUp(currentTime);
    checkSleepTime(currentTime);
};

function setAlarm ( time, callback ) {
    return systemTime => {
        if( systemTime === time ) callback();
    };
};


const goodMorning = () => console.log('Доброе утро!');
const goodNight = () => console.log('Спокойной ночи!');

setInterval(setDailyRhythm, 1000, '23:11', '23:14');
