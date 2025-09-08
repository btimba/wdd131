function calculateWindChill(tempF, speed, unit = "C") {
    return (unit === "C" && tempF <= 10 && speed > 4.8) ?
        (13.12 + 0.6215 * tempF - 11.37 * Math.pow(speed, 0.16) + 0.3965 * tempF * Math.pow(speed, 0.16)).toFixed(1) + "°C" :
        (unit === "F" && tempF <= 50 && speed > 3) ?
        (35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16)).toFixed(1) + "°F" 
        : "N/A";
}

const temperatureC = 24; // ℃
const windSpeedKmh = 7; // km/h
const unit = "C"; // "C" for Celsius, "F" for Fahrenheit

document.getElementById("temp").textContent = temperatureC + "℃";
document.getElementById("speed").textContent = windSpeedKmh + "km/h";
document.getElementById("windchill").textContent = calculateWindChill(temperatureC, windSpeedKmh, unit);   