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

  movie += `<div class="imagePoster">
  <a href="./beast.html"><img src="${imageLink}" alt="Movie Image"></a>
  <div class="imageInside"><p>${nameOfMovie}<span class="imageHeroName">${nameOfHero}</span><span class="imageDirectorName">${nameOfDirector}<span><span><a class="button" href="./newBooking.html"><button>Book
  Tickets</button></a></span></p></div>
  <div class="movieName">
      <p>${nameOfMovie}</p>
  </div>
</div>`;
}

let div = document.getElementById("poster");
div.innerHTML += movie;
