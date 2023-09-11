/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
var count = 0;
const button = document.querySelector("#btn__element");
const resultate = document.querySelector("#btn__state");

button.onclick = function () {
  count++;
  resultate.innerHTML = count;
};
