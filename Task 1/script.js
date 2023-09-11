/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const value = parseFloat(document.getElementById("search").value);
  const unit = document.getElementById("unit").value;
  const result = converToKilograms(value, unit);

  document.getElementById(
    "output"
  ).textContent = `${value} ${unit} yra lygus ${result} kilograms`;
});

function convertToKilograms(value, unit) {
  if (unit === "Svaru") {
    return value * 2.2046;
  } else if (unit === "Gramu") {
    return value / 0.001;
  } else if (unit === "Uncijos") {
    return value * 35.274;
  } else {
    return "Unsupported unit";
  }
}
