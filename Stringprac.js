const { log } = require("console");

const myname  =  new String("Nitin Malviya");

console.log(myname.length);
console.log(myname.charAt(8));
console.log(myname.charCodeAt(8))
console.log(myname.codePointAt(1));
console.log(myname.indexOf('n'));
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.match('n'));
console.log(myname.lastIndexOf('t'));
console.log(myname.trimStart());
console.log(myname.trimEnd());
console.log(myname.trim());
console.log(myname.search('t'));
console.log("split method : "+ myname.split(" "));
console.log("Reapet method "+ myname.repeat(3));
console.log("Slice : " + myname.slice(3) );
console.log("search " +myname.search('n'));
console.log("StartWiht : "+myname.startsWith('n'));
console.log("EndWiht : "+myname.endsWith('n'));
console.log("Substring : " +myname.substring(2,5));
console.log("Well Formed : " +myname.toWellFormed());
const strings = [
    // Lone leading surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone trailing surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
  ];
  
  for (const str of strings) {
    console.log(str.toWellFormed());
  }
  
  console.log(myname.valueOf());

  