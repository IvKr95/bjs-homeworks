function setDailyRhythm ( wakeUpTime, bedTime ) {

    let currentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
    
    const checkWakeUp = setAlarm( wakeUpTime, goodMorning ),
            checkSleepTime = setAlarm( bedTime, goodNight );

    let wakeIntId = setInterval(() => {
        checkWakeUp(currentTime)
        clearInterval(wakeIntId);
    }, 1000);

    let sleepIntId = setInterval(() => {
        checkSleepTime(currentTime);
        clearInterval(sleepIntId);
    }, 1000);
};

function setAlarm ( time, callback ) {
    return systemTime => {
        if( systemTime === time ) callback();
        return;
    };
};

const goodMorning = () => console.log('Доброе утро!');
const goodNight = () => console.log('Спокойной ночи!');

setDailyRhythm('16:12', '16:13');
