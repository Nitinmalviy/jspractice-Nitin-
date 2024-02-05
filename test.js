// function createCounter(n){
//     function counter(){
//         return n++;

//     }
//     return counter;
// }

// const myCounter = createCounter(5);

// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
function expect(value){
    return {
        toBe: function (expecpted)
        {
            if(value !== expecpted ){
                throw new Error("Not Equel");
            }
            return true;
        },
        notToBe: function (expecpted)
        {
            if(value === expecpted)
            {
                throw new Error("Equal");
            }
            return true;
        }
    };
}

// exampale 
try{
    // expect(5).toBe(6);
    // expect("hello").notToBe("world");
    expect(3).toBe(3);
    expect(true).notToBe(true);

}catch(error)
{
    console.error(error.message);
}