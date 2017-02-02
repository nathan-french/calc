promptWindow = function(sayWhat) {alert(sayWhat)};
var bmi = function (Celsius) {return Celsius * 1.8 + 32};
var result = bmi(parseInt(prompt("Celsius")))
if (result < 50) {alert("Shit's cold yo.")} else if (result > 90){alert("Shit's on fire yo.")} else (alert("Shit's JUUUSSSTT right, yo."))
