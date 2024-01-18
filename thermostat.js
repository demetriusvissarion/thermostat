class Thermostat {
    constructor() {
        this.temperature = 20;
        this.powerSavingMode = false;
    }

    getTemperature() {
        return this.temperature
    }

    up() {
        if (this.powerSavingMode === true && this.temperature < 25) {
            this.temperature += 1
        } else if (this.powerSavingMode === false) {
            this.temperature += 1
        }
    }

    down() {
        this.temperature -= 1
    }
    
    setPowerSavingMode(input) {
        this.powerSavingMode = input
    }

    reset() {
        this.temperature = 20
    }

}

module.exports = Thermostat;