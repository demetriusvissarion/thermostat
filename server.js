const express = require('express');
const Thermostat = require('./thermostat');

const app = express();
const port = 3000;

const myThermostat = new Thermostat();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const temperature = myThermostat.getTemperature();
    const energyUsage = myThermostat.getCurrentEnergyUsage();
    const powerSavingMode = myThermostat.powerSavingMode ? 'On' : 'Off';

    res.send(`
        <h1>Thermostat Status</h1>
        <p>Current Temperature: ${temperature}°C</p>
        <p>Energy Usage: ${energyUsage}</p>
        <div>
            <p>Power Saving Mode: ${powerSavingMode}</p>
            <form id="powerSavingForm" action="/toggle-power-saving" method="post">
                <label for="powerSavingToggle">change Power Saving Mode:</label>
                <select name="powerSavingToggle" onchange="document.getElementById('powerSavingForm').submit();">
                    <option value="on" ${myThermostat.powerSavingMode ? 'selected' : ''}>On</option>
                    <option value="off" ${!myThermostat.powerSavingMode ? 'selected' : ''}>Off</option>
                </select>
            </form>
        </div>
        <form action="/up" method="post">
            <button type="submit">Increase Temperature</button>
        </form>
        <form action="/down" method="post">
            <button type="submit">Decrease Temperature</button>
        </form>
        <form action="/temperature" method="post">
            <input type="hidden" name="_method" value="DELETE">
            <button type="submit">Reset Thermostat (20°C)</button>
        </form>
        `);
    });

app.post('/up', (req, res) => {
    myThermostat.up();
    res.redirect('/');
});

app.post('/down', (req, res) => {
    myThermostat.down();
    res.redirect('/');
});

app.post('/toggle-power-saving', (req, res) => {
    const powerSavingToggle = req.body.powerSavingToggle === 'on';
    myThermostat.setPowerSavingMode(powerSavingToggle);
    res.redirect('/');
});

app.post('/temperature', (req, res) => {
    myThermostat.reset();
    res.redirect('/');
});

app.delete('/temperature', (req, res) => {
    myThermostat.reset();
    res.redirect('/');
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);