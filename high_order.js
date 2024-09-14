// for of loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  //   console.log(`Each character is ${greet}`);
}

//Maps

const map = new Map();
map.set("PAK", "PAKISTAN");
map.set("USA", "United State Of America");
map.set("Fr", "France");

console.log(map);

// for of loop on maps

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// for of loop didn't work on objects

//++++++++++++++++++++++++++++++for in loop++++++++++++++++++++++++++++++++

//for in loop for objexts
const myObject = {
  js: "javaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "swift of apple",
};

for (const key in myObject) {
  console.log(`${key} shortcuts for ${myObject[key]}`);
}

// for in loop for arrays

const programming = ["js", "cpp", "rb", "java", "py"];
for (key in programming) {
  //   console.log(key); //this loop show only keys
  console.log(programming[key]);
}
