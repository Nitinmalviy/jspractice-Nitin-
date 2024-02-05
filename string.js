var name = new String("Nitin");
var name2 = new  String("Muskan");
var name = "Nitin";
var surname = "Malviya";
console.log(a.length);
console.log("Ji".replace(name));
const userName = "Nitin 123";
const mood= "Happy!";
console.log(userName.replace("123","Malviya"));
// replace() method rplace the string where you want relce any word or letter in string 
console.log(`I feel ${mood.repeat(3)}`);
// that is call string manupultion  repeat method basically repeat String given value in argument 
const sentance = "Hii this is a monkey and monkey son";
console.log(sentance.replaceAll('monkey','dog'));
// Diffrance b/w replace and replcaeAll replace finde the word and rplce on it but in sentance replace find simmiler word and rplace on it.

let s1= "Niti\ n";
console.log(s1.length);
const str1 = 'Don\'t say "goodbye"'; 
const str2 = "Don't say \"goodbye\""; // string literals
console.log(str2.length);


//--------------------------------------------------------------------------------------------------------------------
// ---------------------- (1)Imediately invoke functions in js IIFE  
(
    function(){
        let str  = "Good morrning";
        console.log(str);
    }
)();

(
    function(){
        let str1  = "Hii My Name is Nitin Malviya.";
        console.log("String length : "+str1.length);
        let str2 = "";

        for(let i = 0; i<str1.length;i++)
        {
            console.log(str2+=str1.charAt(i));

        }

        console.log("Strig concatinate : "+str2);
    }
)();


//----------------------(2)----Higher Order functions ------------------------------------------------
let arr1  = [10,20,30,40];
let arr2  = arr1.map((element) =>element + 12);
console.log(arr2);

let myfun = () => {
    // console.log("My function ");
    return "Higher order function";
}

function myfun2(myfun, n) {
    console.log(myfun() + "\t" + n);
}

myfun2(myfun, "JavaScript");

//=====(3)==============Named Functions ---======================================
function scoreCount()
{
    let userName = "Ni3op";
    let userScore = Math.floor(Math.random()*((100-10+1)+10));
    console.log("Dear "+ userName +" your score is : "+userScore);
}
scoreCount();
// ==================================================================================
// ======(4)=========================Anonoymous function +========================
let myName = function(name){
    console.log(`Hello Dear ${name}`);
};

myName("Nitin");
//================================================================================


//==========(5)-------Arrow function-===========================
let gameOver  = () => console.log("Game is Over !");

gameOver();


// ================================(6)================constructor function in js=======================

function StudentDetails(studnetName , studnetAddress)
{
    this.studnetName = studnetName;
    this.studnetAddress = studnetAddress;

}
let studnet1 = new StudentDetails("Mohan Malli","Khategoane");
function getStudentDetails()
{
    console.log(studnet1.studnetName);
    console.log(studnet1.studnetAddress);
}
    
getStudentDetails();
//=====================================================================================================================