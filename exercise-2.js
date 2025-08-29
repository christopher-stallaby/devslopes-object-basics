/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 
function grabCategories(object) {
  return Object.keys(object);
};
function verifyValues(object, numValues) {
  return Object.values(object).length === numValues;
};
function getToppingsInfo(object){
  return Object.entries(object.pizzaToppings);
};


console.log("Pizza place info: ", grabCategories(papaJohns));
console.log("Pizza toppings: ", grabCategories(papaJohns.pizzaToppings));
console.log("Num values match: ", verifyValues(papaJohns, 8));
console.log("Pizza toppings info: ", getToppingsInfo(papaJohns));