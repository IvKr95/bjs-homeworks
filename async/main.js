function setDailyRhythm ( wakeUpTime, bedTime ) {

    let currentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
    
    const checkWakeUp = setAlarm( wakeUpTime, goodMorning ),
            checkSleepTime = setAlarm( bedTime, goodNight );
    

    let wakeIntId = setInterval(() => {
        checkWakeUp( currentTime, wakeIntId );
    }, 1000);

    let sleepIntId = setInterval(() => {
        checkSleepTime( currentTime, sleepIntId );
    }, 1000);
};

function setAlarm ( time, callback ) {
    return ( systemTime, intId ) => {
        
        if( systemTime === time ) {
            clearInterval(intId);
            return callback();
        };
    };
};

const goodMorning = () => console.log('Доброе утро!');
const goodNight = () => console.log('Спокойной ночи!');

setDailyRhythm('14:11', '14:10');




