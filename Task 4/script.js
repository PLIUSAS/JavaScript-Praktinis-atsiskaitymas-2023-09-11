/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const carList = document.getElementById("output");

  fetch("cars.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((car) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${car.brand} And he have models: ${car.models};`;
        carList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
