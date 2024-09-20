const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.map((num) => num + 10);

//Chainning
const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
//Chainning ma jab ap dusra function call karta ha jasa ka map ka baad dubara map kiya ha to pahla wala map ki value hi dosra wala map ma aye gi
console.log(newNums);
