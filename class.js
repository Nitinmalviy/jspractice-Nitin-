// class User{
//     constructor(username,email,password)
//     {
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changUserName()
//     {
//         return `${this.username.toUpperCase()}`
//     }
// }


// const userOne = new User("Niitn","nitinmavlia172@gmail.com","123");
// console.log(userOne.encryptPassword());
// console.log(userOne.changUserName());


// behind the scens


function Admin(name,password,email)
{
    this.name=name
    this.password=password
    this.email=email
}

Admin.prototype.encryptPassword = function(){
    return   `${this.password}abc`
}

Admin.prototype.changUserName = function(){
    return `${this.name.toUpperCase()}`
}

const adminOne = new Admin('Admin','12345','nitinmalviya172@gmail.com')


    console.log(adminOne.encryptPassword());

    console.log(adminOne.changUserName());
