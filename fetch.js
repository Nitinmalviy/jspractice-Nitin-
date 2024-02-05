// const fetchData = ()=>{
//     fetch('./userdata.json')
//     .then(response => {
//         if(!response.ok)
//         {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(error =>{
//         console.error('Error', error);
//     })
// }

// const fs = require('fs');
// const { json } = require('stream/consumers');

// const rawData=fs.readFileSync('userdata.json')
// const jsonData=JSON.parse(rawData)

// jsonData.forEach(user => {
//     console.log(`User Name :${user.username},  Name : ${user.password}`);
// });


const fetchProductData = ()=>{
    const productData = fetch('https://dummyjson.com/product');

    productData.then(response =>{
        if(!response.ok)
        {
            reject()
        }
        return response.json()
    }).then((data)=>{
        {
            console.log(data);    
        }
    }).catch(error =>{
                console.error('Error', error);
            })
}