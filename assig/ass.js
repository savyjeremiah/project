// const apiKey = "PqmhOMcOq2YWYu5k4MPi8m0CCro7MRCbN1d-xbBI2aE";

// let forms =document.querySelector(".forms")
// let worl =document.querySelector(".worl")
// let wind =document.querySelector(".wind")
// let secondbutton=document.querySelector(".secondbutton")

//  let typesValue=inputs.Value;
//  let page=1;

// async function getImage(location) {


//     const apiUrl = `https://api.unsplash.com/search/photos?page=&query=${location}&client_id=${apiKey}`;
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     console.log(data);

    



// }
const apiKey = "PqmhOMcOq2YWYu5k4MPi8m0CCro7MRCbN1d-xbBI2aE";

let forms =document.querySelector(".forms")
let worl =document.querySelector(".worl")
let wind =document.querySelector(".wind")
let secondbutton=document.querySelector(".secondbutton")

  let typesValue=inputs.Value;
 let page=1;

async function getImage(location) {


    const apiUrl = `https://api.unsplash.com/search/photos?page=&query=${location}&client_id=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
 

    
    
    let results =data.results;
    console.log(results)
    if(page == 1){wind.innerHTML=" ";

    }
    results.forEach((item)=> {
        console.log(item.urls.regular);

        const image=document.createElement("img");
        image.src=item.urls.regular;
        wind.appendChild(image)
 
     });
 secondbutton.addEventListener("click", ()=>{
         let location= worl.value;
         getImage(location)

      })
  

}
getImage()

