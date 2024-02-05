// Current date and time
const currentDate = new Date();

// Specific date and time
const specificDate = new Date("2023-01-23T12:30:00");

// Date with components
const dateWithComponents = new Date(2023, 0, 23, 12, 30, 0); // Month is 0-based (0 is January)
const year = currentDate.getFullYear();
console.log("year: "+ year);
const month = currentDate.getMonth(); // 0-based (0 is January)
console.log("month : "+ month);
const day = currentDate.getDate();
console.log("day : "+day);
const hours = currentDate.getHours();
console.log("hours : "+hours);
const minutes = currentDate.getMinutes();
console.log("minutes : "+minutes);
const seconds = currentDate.getSeconds();
console.log("Second's : "+ seconds);
const milliseconds = currentDate.getMilliseconds();
console.log("milliseconds : " + milliseconds);