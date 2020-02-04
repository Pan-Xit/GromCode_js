export const timer = {
    secondsPassed: 0,
    minsPassed: 0,

    setTime() {
        this.secondsPassed += 5

        if (this.secondsPassed === 60) {
            this.secondsPassed = 0;
            this.minsPassed += 1;
        }
    },
    
    startTimer() {
        this.timerID = setInterval(this.setTime.bind(timer), 5000)
    },

    stopTimer() {
        clearInterval(this.timerID)
    },

    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },

    getTime() {
        return (`${this.minsPassed}:${this.secondsPassed > 5 ? this.secondsPassed : '0' + this.secondsPassed}` )
    },
}