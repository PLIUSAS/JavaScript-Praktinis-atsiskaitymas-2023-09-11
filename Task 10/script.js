/* ------------------------------ TASK 9 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */

let a = composition(one, four);
let c = substraction(three, two);
let d = multiplication(five, two);
let b = division(four, two);

import { composition } from "./modules/math/composition.js";
import { substraction } from "./modules/math/subtraction.js";
import { multiplication } from "./modules/math/multiplication.js";
import { division } from "./modules/math/division.js";

import { one } from "./modules/numbers/numbers.js";
import { two } from "./modules/numbers/numbers.js";
import { three } from "./modules/numbers/numbers.js";
import { four } from "./modules/numbers/numbers.js";
import { five } from "./modules/numbers/numbers.js";

console.log(a);
console.log(c);
console.log(d);
console.log(b);
