/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};
function showObjectKeys(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Input is not a object.");
  }
  const keys = Object.keys(obj);
  return keys;
}

const objectKeys = showObjectKeys(audi);
console.log(objectKeys);
