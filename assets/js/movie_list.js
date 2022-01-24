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
  let imageLink = i.movieImgLink;

  movie +=  `<div class="imagePoster">
  <div class="subDiv">
      <a href="./annathe.html"><img src="${imageLink}" alt="Movie Image" /></a>
  </div>
  <div class="movieInfo">
      <div class="movieContent">
          <p>${nameOfMovie}</p>
          <p>${nameOfHero}⋅(U/A)⋅${nameOfDirector}</p>
          <input class="bookingButton" type="submit" value="Book Tickets">
      </div>
  </div>`
}

let div = document.getElementById("poster");
div.innerHTML += movie;
