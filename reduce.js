const myNum = [1, 2, 3];
// const totalNum = myNum.reduce(function (accumalator, currentvalue) {
//   console.log(`accumalator: ${accumalator} and currentvalue: ${currentvalue}`);
//   return accumalator + currentvalue;
// }, 0);

const totalNum = myNum.reduce(
  (accumalator, currentvalue) => accumalator + currentvalue,
  0
);

console.log(totalNum);

const shopingCart = [
  { course: "js course", price: 2999 },
  { course: "py course", price: 999 },
  { course: "mobile dev course", price: 6999 },
  { course: "Data Science course", price: 14999 },
];

const priceToPay = shopingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
