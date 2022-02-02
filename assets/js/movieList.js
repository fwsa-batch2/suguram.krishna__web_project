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
  let imageLink = i.movieImgLink;
  let movieLanguage = i.movieLang;
  let movieCertificate = i.cbfcRating;
  let typeOfMovie = i.movieType;


  movie += `  <div class="imagePoster">
  <div class="subDiv">
      <img src="${imageLink}" alt="Movie Image" />
      <p>${nameOfMovie}</p>
  </div>
  <div class="movieInfo">
      <div class="movieContent">
          <p>${nameOfMovie}</p>
          <p>${nameOfHero}</p>
          <p>${movieLanguage}⋅${movieCertificate}⋅${typeOfMovie}</p>
          <input class="bookingButton" type="submit" value="Book Tickets" onclick="onclickEvent()">
      </div>
  </div>
</div>`;
}

let div = document.getElementById("poster");
div.innerHTML += movie;


function onclickEvent(){
  window.location.href="./../pages/newBooking.html"
}