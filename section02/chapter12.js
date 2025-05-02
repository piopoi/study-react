// function add(a, b, callback) {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 1000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

// 음식을 주문하는 기능
function orderFood(callback) {
  setTimeout(() => {
    const food = "햄버거";
    callback(food);
  }, 1000);
}

// 음식을 식히는 기능
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 1000);
}

// 음식을 냉동하는 기능
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1000);
}

orderFood((food) => {
  console.log(food);
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
