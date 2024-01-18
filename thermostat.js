class Thermostat {
    constructor() {
        this.initialTemperature = 20;
    }

    getTemperature() {
        return this.initialTemperature
    }

    up() {
        this.initialTemperature += 1
    }

    down() {
        this.initialTemperature -= 1
    }


}

module.exports = Thermostat;