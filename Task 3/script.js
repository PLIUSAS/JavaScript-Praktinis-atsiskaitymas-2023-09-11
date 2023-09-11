/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", function () {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((users) => {
      const userContainer = document.getElementById("output");
      userContainer.innerHTML = "";

      users.forEach((user) => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        const userName = document.createElement("h2");
        userName.textContent = user.login;

        const userAvatar = document.createElement("img");
        userAvatar.src = user.avatar_url;

        userCard.appendChild(userName);
        userCard.appendChild(userAvatar);
        userContainer.appendChild(userCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching GitHub users:", error);
    });
});
