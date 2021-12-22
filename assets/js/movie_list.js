let movie = "";
let movieDetails = JSON.parse(localStorage.getItem("details"));
for(let i of movieDetails){
    let nameOfMovie = i.movieName;
    let nameOFHero = i.heroName;
    let nameOfDirector = i.directorName;
   
    movie += 
   "<div class='movieInfo' id='movieInfo'><p class='movieDetails'>Movie Name:<span class='movieNameSpan'>"+
   nameOfMovie+"</span></p><p class='movieDetails'>Hero Name:<span class='heroNameSpan'>"+
        nameOFHero+"</span></p><p class='movieDetails'>Director Name:<span class='directorNameSpan'>"+
        nameOfDirector+"</span></p></div>"
}

let div = document.getElementById("movieListing");
div.innerHTML = movie;