const temperatureInput = document.getElementById("temperature");
const conversion = document.getElementById("conversion");
const convertButton = document.getElementById("convertButton");
const result = document.getElementById("result");


function convertTemperature() {

    const temperature = Number(temperatureInput.value);
    const type = conversion.value;

    if (temperatureInput.value === "") {
        result.textContent = "⚠️ Please enter a temperature.";
        return;
    }

    let convertedTemperature;

    if (type === "cToF") {

        convertedTemperature =
            (temperature * 9 / 5) + 32;

        result.textContent =
            `${temperature}°C = ${convertedTemperature.toFixed(2)}°F`;

    } else {

        convertedTemperature =
            (temperature - 32) * 5 / 9;

        result.textContent =
            `${temperature}°F = ${convertedTemperature.toFixed(2)}°C`;
    }
}


convertButton.addEventListener(
    "click",
    convertTemperature
);