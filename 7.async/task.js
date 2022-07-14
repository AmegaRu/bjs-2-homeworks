class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if(id === undefined) {
            throw new Error("Id не передан");
        } else if(this.alarmCollection.some(i => i.id === id)) {
            console.error('Такой Id существует');
        } else {
              this.alarmCollection.push({time, callback, id})
        }
    }

    removeClock(id) {
        let clockId = this.alarmCollection.findIndex(i => i.id === id)
        if(clockId === -1) {
            return false;
        } else {
            this.alarmCollection.splice(clockId, 1);
            return true;
        }
    }

    getCurrentFormattedTime() {
        let date = new Date();
        let hours = ("0" + date.getHours()).substring(("0" + date.getHours()).length - 2);
        let minutes = ("0" + date.getMinutes()).substring(("0" + date.getMinutes()).length - 2);
        
        return `${hours}:${minutes}`
    }

    checkClock(alarm) {  
        if (alarm.time === this.getCurrentFormattedTime()) {  
            alarm.callback();
        }
    }

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => {this.alarmCollection.forEach(alarm => this.checkClock(alarm))}, 1000);
        }
    }

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        return this.alarmCollection.forEach(clock => console.log('Звонок ' +  `${clock.id}` + ' на ' + `${clock.time}`))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let alarm = new AlarmClock;

    alarm.addClock('10:00', () => console.log('Просыпайся!'), 1);

    alarm.addClock('10:01', () => {
        console.log('Пора вставать!');
        alarm.removeClock(2)
    }, 2);

    alarm.addClock('10:02', () => {
        console.log('Подъем!');
        alarm.clearAlarms();
        alarm.printAlarms();
    }, 3);

    alarm.printAlarms();

    alarm.start();
}