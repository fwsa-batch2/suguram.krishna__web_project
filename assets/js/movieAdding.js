let movieDetails = [];

function pageOnLoad() {
  const movieListing = JSON.parse(localStorage.getItem("details"));
  if (movieListing != null) {
    movieDetails = movieListing;
  }
}


// storing the data in localstorage
function submitHandler(event) {
  event.preventDefault();
  console.group("Adding Movie Details");
  let movieName = document.getElementById("movieName").value;
  let heroName = document.getElementById("heroName").value;
  let movieImgLink = document.getElementById("movieImgLink").value;
  let cbfcRating = document.getElementById("cbfcRating").value;
  let movieType = document.getElementById("movieType").value;
  let movieLang = document.getElementById("movieLang").value;


  const movieAddingdetails = {
    movieName: movieName,
    heroName: heroName,
    movieImgLink: movieImgLink,
    cbfcRating: cbfcRating,
    movieType: movieType,
    movieLang: movieLang,
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

  window.location.href = "./../pages/movieList.html";

  console.groupEnd("Adding Movie Details");
}

pageOnLoad();
