
const seatBooking = document.querySelector(".seatBooking");
const seatSelection = document.querySelectorAll(
  ".seatRow .seat:not(.occupied)"
);
const seatCount = document.getElementById("count");
const toatalAmount = document.getElementById("total");
const movieSelection = document.getElementById("movie");
console.log(movieSelection);

let ticketPrice = +movieSelection.value;


// price and seat booking updation
function bookingSeats() {
  const selectedSeats = document.querySelectorAll(".seatRow .seat.selected");

  const selectedSeatsCount = selectedSeats.length;
  console.log(selectedSeatsCount);
  seatCount.innerText = selectedSeatsCount;
  toatalAmount.innerText = selectedSeatsCount * ticketPrice;



}

movieSelection.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  bookingSeats();

});

seatBooking.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    bookingSeats();

  }
});

bookingSeats();


// Redirecting to Payment Page
function submitHandler() {
  window.location.href = "./../pages/payment.html"
}


//Movie Option List Updating

let movie = "";

let movieDetails = JSON.parse(localStorage.getItem("details"));
for (let i of movieDetails) {
  let nameOfMovie = i.movieName;


  movie +=  `<div class="movie-container">
  <p>Select a movie to Book Tickets:<span><select id="movie">
        <option value="120">${nameOfMovie} (₹120)</option>
      </select></span></p>
</div>`
}

let div = document.getElementById("movie");
div.innerHTML += movie;

