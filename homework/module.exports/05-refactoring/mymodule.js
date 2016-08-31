module.exports = {
  items: ["cereal", "lightbulbs", "paper towels"],
  now: new Date,
  utils: {
    encode: function (string) {
      return string.toUpperCase()
    },
    decode: function (string) {
      return string.toLowerCase()
    }
  },
  flipIt: function (string) {
    return string.split('').reverse().join('');
  }
};