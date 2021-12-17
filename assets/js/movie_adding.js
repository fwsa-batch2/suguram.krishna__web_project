let movieDetails = [];

function submitHandler() {
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
    "Movie Name": movieName,
    "Hero Name": heroName,
    "Director Name": directorName,
    "Movie Image Link": movieImgLink,
    "Movie Trailer Link": movieTrailerLink,
  };

  movieDetails.push(movieAddingdetails);
  localStorage.setItem("details", JSON.stringify(movieDetails));

  console.groupEnd("Adding Movie Details");

  renderList();
}

function renderList() {

  console.group("Rendering")
  const movieListInString = localStorage.getItem("details");
  const movieListInArray = JSON.parse(movieListInString);

  const movieList = movieListInArray.length;

  let newMovieList = "";
  for (i = 0; i < movieList; i++) {
    const movie_task = movieListInArray[i];
    let newList = " <li class='list-group-item'> " + movie_task + " </li> ";
    newMovieList = newMovieList + newList;  
  }

  const ulTag = document.getElementById("movieListOutput");
  ulTag.innerHTML = newMovieList;

  console.groupEnd("Rendering")
}

renderList();



