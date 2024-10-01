console.log("Week 3 - Homework");

// Homework
// I. You and your family are very busy today and don't have time to
// cook for dinner. You decided to order some food, but your
// partner and your kid have a different favourite restaurants.
// a. Write a function that take 3 arguments, the name of the
// restaurant, food, and the amount.
// b. Outputs the result to your console with the text : You are
// ordering (amount) (food) from (name of the restaurant )
// c. call the function 3 times with different values for the
// argument

const ul_element = document.getElementById("result");
let orderedFoodArray = [];

function orderFoodFromDifferentFavouriteRestaurants(nameOfTheRestaurant, nameOfTheFood, costOfFood) {
  const CURRENCY_NAME = "DKK";
  let result = `You are ordering ${costOfFood}(${CURRENCY_NAME}) ${nameOfTheFood} from ${nameOfTheRestaurant}`;
  console.log(result);
  orderedFoodArray.push(result);
}

function displayResults() {
  for (let i = 0; i < orderedFoodArray.length; i++) {
    const li_element = document.createElement("li");
    li_element.textContent = orderedFoodArray[i];
    ul_element.appendChild(li_element);
  }
}

orderFoodFromDifferentFavouriteRestaurants("Napoli Pizzeria", "Pizza Estremo", 81);
orderFoodFromDifferentFavouriteRestaurants("McDonald's", "Double Big Tasty Bacon Menu", 123);
orderFoodFromDifferentFavouriteRestaurants("Thai Kitchen", "Pa naeng", 180);

displayResults();

console.log("orderedFoodArray: ", orderedFoodArray);
