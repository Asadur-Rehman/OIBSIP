function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const inputUnitSelect = document.getElementById("inputUnitSelect");
    const outputUnitSelect = document.getElementById("outputUnitSelect");
    
    const inputUnit = inputUnitSelect.options[inputUnitSelect.selectedIndex].value;
    const outputUnit = outputUnitSelect.options[outputUnitSelect.selectedIndex].value;
    
    let convertedTemperature;

    if (inputUnit === outputUnit) {
        convertedTemperature = temperatureInput;
    } else if (inputUnit === "celsius") {
        if (outputUnit === "fahrenheit") {
            convertedTemperature = celsiusToFahrenheit(temperatureInput);
        } else if (outputUnit === "kelvin") {
            convertedTemperature = celsiusToKelvin(temperatureInput);
        }
    } else if (inputUnit === "fahrenheit") {
        if (outputUnit === "celsius") {
            convertedTemperature = fahrenheitToCelsius(temperatureInput);
        } else if (outputUnit === "kelvin") {
            convertedTemperature = fahrenheitToKelvin(temperatureInput);
        }
    } else if (inputUnit === "kelvin") {
        if (outputUnit === "celsius") {
            convertedTemperature = kelvinToCelsius(temperatureInput);
        } else if (outputUnit === "fahrenheit") {
            convertedTemperature = kelvinToFahrenheit(temperatureInput);
        }
    }

    document.getElementById("resultArea").innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${outputUnit.toUpperCase()}`;
}

// Conversion functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5 / 9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin * 9 / 5) - 459.67;
}
