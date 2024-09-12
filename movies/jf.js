

const form =document.querySelector("form")
const imgage =document.querySelector(".imgage ")
form.addEventListener('submit',(e) =>{
  e.preventDefault();
  let query =form.querySelector('input').value
  console.log(query )

  movies(query)
})
async function movies(query) {

  const req =await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
     const movies =await req.json();
     makeimage(movies)
     
}

function makeimage(movies){
  
  
  
for(let movie of movies){
  let src =movie.show.image.medium;
  const img =document.createElement('img')
  img.src=src;
  imgage.appendChild(img)
  
 
}


}

