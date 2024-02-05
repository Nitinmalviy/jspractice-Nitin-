// const games = ["Nfs","PUNG","COD","SpiderMan"]
// for(const game in games)
// {
    // console.log(game);
// fro in loop work on basially key 
// work on array and objects
// for of loop work on value 
// for of loop using iteam of array 

// for in loop usig itearate 
//======================objects ====================


// const studentDetials = {

//     StudentName :"Nitin Malviya",
//     age : 23,
//     address : {
//         street :"MG Road",
//         landmark : "HDFC Bank",
//         Town : "Indore"
//     },
//     Email : "nitinmalviya172@gmail.com"

// }

// console.log(studentDetials);
// for (const key in studentDetials) {
    
//     if(typeof studentDetials[key] == 'object'){
//     console.log(`\t${studentDetials[key]}\n`);

//     for (const innerkey in studentDetials[key]) {
//         console.log(`${innerkey}:${studentDetials[key][innerkey]}`);
//     }
//   }
//   else
//   {
//     console.log(`${studentDetials[key]}`);
//   }
   
    
// }

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);