let movie = "";

function pageOnLoad() {
  const movieInList = JSON.parse(localStorage.getItem("details"));
  if (movieInList !== null) {
    movie = movieInList;
  }
  console.log(movieInList);
}

let movieDetails = JSON.parse(localStorage.getItem("details"));
for (let i of movieDetails) {
  let nameOfMovie = i.movieName;
  let nameOfHero = i.heroName;
  let nameOfDirector = i.directorName;
  let descriptionOfMovie = i.movieDescription;
  let imageLink = i.movieImgLink;

  movie +=
    `<div class="imagePoster">
     <a href="./pages/vikram.html"><img src="${imageLink}" alt="Movie Poster"></a>  
     <div class="movieName">
       <p>${nameOfMovie}</p>
     </div>
     </div>`;
}

let div = document.getElementById("poster");
div.innerHTML += movie;
