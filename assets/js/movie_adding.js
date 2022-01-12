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
  let movieDescription = document.getElementById("movieDescription").value;


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


  window.location.href="./../../index.html";

  console.groupEnd("Adding Movie Details");
}


pageOnLoad()

