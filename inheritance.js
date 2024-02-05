class User {
    constructor(username){
        this.username = username
    }

    logMe()
    {
        console.log(`UserName is ${this.username}`);
    }
}

class Techer extends User {

    constructor(username,email,password)
    {
        super(username) 
        this.email = email;
        this.password = password;
        
    }


    addCourses()
    {
        console.log(`New Courses add by ${this.username}`);
    }
}


const chai = new Techer('Mohan','nitin@gmail.com','123')

chai.addCourses()



const addchai = new User('niitn')
addchai.logMe();
chai.logMe();

console.log(chai instanceof User);