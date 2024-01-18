class Thermostat {
    constructor() {
        this.temperature = 20;
        this.powerSavingMode = true;
        this.currentEnergyUsage = 'medium-usage'
    }

    getTemperature() {
        return this.temperature
    }

    up() {
        if (this.powerSavingMode === true && this.temperature < 25) {
            this.temperature += 1
        } else if (this.powerSavingMode === false && this.temperature < 32) {
            this.temperature += 1
        }
    }

    down() {
        if (this.temperature > 10) {
            this.temperature -= 1
        }
    }
    
    setPowerSavingMode(input) {
        this.powerSavingMode = input
    }

    reset() {
        this.temperature = 20
    }

    getCurrentEnergyUsage() {
        if (this.temperature < 18) {
            this.currentEnergyUsage = 'low-usage'
        } else if (18 <= this.temperature && this.temperature <= 25) {
            this.currentEnergyUsage = 'medium-usage'
        } else if (this.temperature > 25) {
            this.currentEnergyUsage = 'high-usage'
        }
        return this.currentEnergyUsage
    }

}

module.exports = Thermostat;