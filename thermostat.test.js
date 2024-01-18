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
    });

});

///////// Desired output:
// thermostat.getTemperature(); // should be 25 (max reached)

// thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

// thermostat.up();
// thermostat.getTemperature(); // should now return 26

// thermostat.reset();
// thermostat.getTemperature(); // should be back to 20