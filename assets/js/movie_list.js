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
    `<div class="movieInfo">
    <div class="posterImg">
        <img class="movieImage"
            src="${imageLink}"
            alt="moviePoster">
    </div>
    <div class="movieList">
        <p class="movieDetails">Movie Name:<span class="movieNameSpan">
        ${nameOfMovie}</span></p>
        <p class="movieDetails">Hero Name:<span class="heroNameSpan">
        ${nameOfHero}</span></p>
        <p class="movieDetails">Director Name:<span class="directorNameSpan">
        ${nameOfDirector}</span></p>
        <p class="movieDetails">Movie Description:<span class="descriptionSpan">
        ${descriptionOfMovie}</span></p>
    </div>
</div>`
}

let div = document.getElementById("movieListing");
div.innerHTML = movie;
