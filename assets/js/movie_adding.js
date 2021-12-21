let movieDetails = [];

function pageOnLoad() {
  const movieListing = JSON.parse(localStorage.getItem("details"));
  if (movieListing != null) {
    movieDetails = movieListing;
  }
}


function submitHandler(event) {
  event.preventDefault();
  console.group("Adding Movie Details");
  let movieName = document.getElementById("movieName").value;
  let heroName = document.getElementById("heroName").value;
  let directorName = document.getElementById("directorName").value;
  let movieImgLink = document.getElementById("movieImgLink").value;
  let movieTrailerLink = document.getElementById("movieTrailerLink").value;

  //    console.log(movieName)
  //    console.log(heroName)
  //    console.log(directorName)
  //    console.log(movieLink)
  //    console.log(movieTrailerLink)

  const movieAddingdetails = {
    "movieName": movieName,
    "heroName": heroName,
    "directorName": directorName,
    "movieImageLink": movieImgLink,
    "movieTrailerLink": movieTrailerLink,
  };

  movieDetails.push(movieAddingdetails);
  localStorage.setItem("details", JSON.stringify(movieDetails));

  window.location.href="./../../pages/tamilMovieList.html";

  console.groupEnd("Adding Movie Details");
}

pageOnLoad()

