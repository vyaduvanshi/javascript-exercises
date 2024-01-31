const convertToCelsius = function(temp) {
  // (F − 32) × 5/9

  return Number(((temp - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(temp) {
  // (C × 9/5) + 32

  return Number(((temp * 9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
