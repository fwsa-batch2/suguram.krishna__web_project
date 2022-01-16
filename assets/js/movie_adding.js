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
    movieName: movieName,
    heroName: heroName,
    directorName: directorName,
    movieImgLink: movieImgLink,
    movieTrailerLink: movieTrailerLink,
    movieDescription: movieDescription,
  };

  const movieValidation = movieNameCheck(movieName);
  if (movieValidation) {
    alert("Movie is Already Added");
    return;
  }

  function movieNameCheck(nameOfMovie) {
    const movieNameGetting = JSON.parse(localStorage.getItem("details"));
    let alreadyExsists = false;

    if (movieNameGetting != null) {
      for (let i of movieNameGetting) {
        const movieList = i;
        const movieCheck = movieList.movieName;

        if (nameOfMovie == movieCheck) {
          alreadyExsists = true;
          break;
        }
      }
    }

    return alreadyExsists;
  }

  movieDetails.push(movieAddingdetails);
  localStorage.setItem("details", JSON.stringify(movieDetails));

  window.location.href = "./../../pages/tamilMovieList.html";

  console.groupEnd("Adding Movie Details");
}

pageOnLoad();
