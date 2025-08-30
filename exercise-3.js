// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

function printPizzaPlace(pizzaPlace) { 
  for (key in pizzaPlace) {
    console.log(key, pizzaPlace[key]);
  } 
};

function toppingsPriceRange(pizzaPlace) {
  const toppings = pizzaPlace.pizzaToppings;
  let maxToppingPrice = -Infinity;
  let minToppingPrice = Infinity;
  for (key in toppings) {
    if (toppings[key] > maxToppingPrice) {
      maxToppingPrice = toppings[key];
    } else if (toppings[key] < minToppingPrice) {
      minToppingPrice = toppings[key];
    }
  }
  return [maxToppingPrice, minToppingPrice];
};

function calculateAverageRating(pizzaPlace) {
  const reviews = pizzaPlace.starReviews;
  let average = Object.values(reviews).reduce((previousReviewValue, currentReviewValue) => previousReviewValue + currentReviewValue, 0) / Object.values(reviews).length;
  return (average.toFixed(2));
}

printPizzaPlace(dominos);
console.log(toppingsPriceRange(dominos));
console.log(calculateAverageRating(dominos));