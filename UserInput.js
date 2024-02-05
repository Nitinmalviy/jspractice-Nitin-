// let readLine  = require('readline');

// const { stdin, stdout } = require('process');

// const el = readLine.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// el.question('Enter somthing : ',(answer)=>
// {
//     console.log(`your enterd : ${answer}`);
//     el.close();
// });


// =========Get input from user 
let readline  = require('readline').createInterface({
    input : process.stdin,
    output:process.stdout
});

readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    readline.close();
  });




