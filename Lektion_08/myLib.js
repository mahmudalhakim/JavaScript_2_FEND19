let myLib = (function() {
  // Privata variabler
  const info = "myLib.js är ett demo-bibliotek";
  const version = "0.1";

  // Ett objekt som innehåller publika metoder
  let myLib = {
    random: function(min, max) {
      return Math.floor(Math.random() * (max + 1 - min) + min);
    }
  };
  return myLib;
})();
