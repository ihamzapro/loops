const coding = ["js", "ruby", "cpp", "python"];

// coding.forEach(function (val) {
//   // We write callback function in foreach loop
//   console.log(val);
// });

coding.forEach((item) => {
  // console.log(item);
});

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

const myCoding = [
  {
    languageName: "javaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
  console.log(item.languageFileName);
});
