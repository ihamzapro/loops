const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums);

// do this by using foreach method

const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
console.log(newNums);

const books = [
  { title: "Book one", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book two", genre: "Non-fiction", publish: 2001, edition: 2010 },
  { title: "Book three", genre: "History", publish: 1999, edition: 2009 },
  { title: "Book four", genre: "Fiction", publish: 1990, edition: 2000 },
  { title: "Book five", genre: "Fiction", publish: 19991, edition: 2003 },
  { title: "Book six", genre: "History", publish: 1980, edition: 2002 },
  { title: "Book seven", genre: "Fiction", publish: 1997, edition: 2005 },
  { title: "Book eight", genre: "History", publish: 2001, edition: 2011 },
  { title: "Book nine", genre: "Fiction", publish: 1981, edition: 2004 },
];

// const userBooks = books.filter((bk) => bk.genre === "History");
const userBooks = books.filter((bk) => bk.publish >= 2000);
console.log(userBooks);
