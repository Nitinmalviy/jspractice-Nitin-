console.log("hellow");

const objectOne = {
  name: "niitn",
  age: 21,
  homeTown: "indore",
  country: "india",
  getDeails : function(){
    console.log(`Name : ${this.name} \n Age ; ${this.age} \n Home Town : ${this.homeTown} \n Country : ${this.country}`);
  }
};

const objectTow = {
  name: "Mohan",
  age: 20,
  homeTown: "Khategoan",
  country: "india",
};

console.log(objectOne.getDeails());
console.log(objectOne.getDeails.call(objectTow));
