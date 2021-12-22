class Thermostat {
  constructor(scaleF) {
    this._scale = 5/9 * (scaleF - 32);
  }
  
  get temperature() {
    return this._scale;
  }
 
  set temperature(newScale) {
    this._scale = newScale;
  }
}
 
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
