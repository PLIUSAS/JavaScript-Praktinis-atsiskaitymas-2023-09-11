/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  Expensive() {
    return this.budget > 100000000;
  }
}
const movie1 = new Movie("The Fast and the Furious", "Rob Cohen", 38000000);
const movie2 = new Movie("Avatar", "James Cameron", 250000);

console.log(movie1.Expensive());
console.log(movie2.Expensive()); // Sumažinau kaina jog butu false variantas.
