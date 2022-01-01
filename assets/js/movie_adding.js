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
  let movieName = document.getElementById("movieName").value.toLowerCase();
  let heroName = document.getElementById("heroName").value.toLowerCase();
  let directorName = document.getElementById("directorName").value.toLowerCase();
  let movieImgLink = document.getElementById("movieImgLink").value.toLowerCase();
  let movieTrailerLink = document.getElementById("movieTrailerLink").value.toLowerCase();
  let movieDescription = document.getElementById("movieDescription").value.toLowerCase();



  const movieAddingdetails = {
    "movieName": movieName,
    "heroName": heroName,
    "directorName": directorName,
    "movieImgLink": movieImgLink,
    "movieTrailerLink": movieTrailerLink,
    "movieDescription": movieDescription
  };


  movieDetails.push(movieAddingdetails);
  localStorage.setItem("details", JSON.stringify(movieDetails));

  window.location.href="./../../pages/tamilMovieList.html";

  console.groupEnd("Adding Movie Details");
}

pageOnLoad()

