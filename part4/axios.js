// we can send request using axios
const axios=require('axios');
axios.post("https://jsonplaceholder.typicode.com/users",
{
    name:"Sanjay Kandula" ,
}).then(
    response=>
    {
        console.log("Axios respose",response.data);
    }
)
.catch((error)=>
{
    console.log(error);
});