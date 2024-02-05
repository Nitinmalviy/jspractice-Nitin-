const setUserName = function(username){
    //db complax checking 
    this.username = username;
}

const createUser = function(username,email,password)
{
    setUserName.call(this,username)
    this.email = email;
    this.password = password;
}


const userinfo = new createUser("Niitn",'nitinmalviya172@gmail.com','12345678');
console.log(userinfo);