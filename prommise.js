const promiseOne = new Promise(function (resolve, reject) {
  // do async task
  //DB calls , cryptoghraphy --  encry
  //netwok call etc

  setTimeout(function () {
    console.log("Asunc task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise comsumed");
});
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task tow");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Asyn 2 is resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  console.log("");
  setTimeout(function () {
    resolve({ username: "Nitin", email: "nitinmalviya172@gmail.com" });
  }, 2000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFoure = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ username: "Nitin", email: "nitinmalviya172@gmail.com" });
    } else {
      reject("Error : Somthing went wrong");
    }
  }, 2000);
});

promiseFoure
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Promise etire rejected or resolved"));

const promiseFive = new Promise((reject, resolve) => {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ username: "sagar", passsword: "12345678" });
    } else {
      reject("Error : Js wnet Wrong");
    }
  }, 2000);
});

// using async awiat
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log("Error rejected " + error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://api.github.com/users/Nitinmalviy");

//     // console.log(response);

//     const myData = await response.json();

//     console.log(myData);
//   } catch (error) {'error',error}
// }

// getAllUsers();

const userData = fetch("https://api.github.com/users/Nitinmalviy");

userData
  .then((response) => {
    const data = response.json();
    return data;
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((error) => console.log("Somthing went Wrong ", error));
