 
let result =document.getElementById("result")
   



async function converte() {
    const apiKey = " https://v6.exchangerate-api.com/v6/25c1a2744d32a085a9fcb6ad/latest/USD";

    const response = await fetch(apiKey);
    const data = await response.json();
    console.log(data);
 




}
converte()