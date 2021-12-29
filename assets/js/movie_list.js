let movie = "";
let movieDetails = JSON.parse(localStorage.getItem("details"));
for(let i of movieDetails){
    let nameOfMovie = i.movieName;
    let nameOfHero = i.heroName;
    let nameOfDirector = i.directorName;
    let  descriptionOfMovie = i.movieDescription;
   
    movie += 
   "<div class='movieInfo' id='movieInfo'><p class='movieDetails'>Movie Name:<span class='movieNameSpan'>"+
   nameOfMovie+"</span></p><p class='movieDetails'>Hero Name:<span class='heroNameSpan'>"+
        nameOfHero+"</span></p><p class='movieDetails'>Director Name:<span class='directorNameSpan'>"+
        nameOfDirector+"</span></p></div>"
}

//<p class='movieDetails'>Movie Description:<span class='descriptionSpan'>"+descriptionOfMovie+"</span></p></div>"
let div = document.getElementById("movieListing");
div.innerHTML = movie;