class Thermostat {
    constructor() {
        this.initialTemperature = 20;
    }

    up() {
        this.initialTemperature += 1
        return this.initialTemperature
    }

    down() {
        this.initialTemperature -= 1
        return this.initialTemperature
    }


}

module.exports = Thermostat;