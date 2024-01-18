const Thermostat = require('./thermostat');

describe('Unit tests for the thermostat class', () => {
    it('gets the current temperature', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toEqual(20);
    });

    it('increases the temperature by 1', () => {
        const thermostat = new Thermostat();
        thermostat.up()
        thermostat.up()
        expect(thermostat.getTemperature()).toEqual(22);
    });
    
    it('decreases the temperature by 1', () => {
        const thermostat = new Thermostat();
        thermostat.up()
        thermostat.up()
        thermostat.down()
        expect(thermostat.getTemperature()).toEqual(21);
    });
    
    it('set PowerSavingMode to true, which limits the max temperature to 25', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(true);
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(25);

        thermostat.setPowerSavingMode(false);
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(26);
        
        thermostat.reset();
        expect(thermostat.getTemperature()).toEqual(20);
    });

});

///////// Desired output:
// thermostat.reset();
// thermostat.getTemperature(); // should be back to 20