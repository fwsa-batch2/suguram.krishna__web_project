alert("Please Select the Movie You want To Watch")

const seatBooking = document.querySelector(".seatBooking");
const seatSelection = document.querySelectorAll(
  ".seatRow .seat:not(.occupied)"
);
const seatCount = document.getElementById("count");
const toatalAmount = document.getElementById("total");
const movieSelection = document.getElementById("movie");
console.log(movieSelection);

gettingAndDisplaying();

let ticketPrice = +movieSelection.value;

function movieDetails(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndexValue", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

function bookingSeats() {
  const selectedSeats = document.querySelectorAll(".seatRow .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) =>
    [...seatSelection].indexOf(seat)
  );

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  seatCount.innerText = selectedSeatsCount;
  toatalAmount.innerText = selectedSeatsCount * ticketPrice;

  movieDetails(movieSelection.selectedIndex, movieSelection.value);
}

function gettingAndDisplaying() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seatSelection.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndexValue = localStorage.getItem(
    "selectedMovieIndexValue"
  );

  if (selectedMovieIndexValue !== null) {
    movieSelection.selectedIndex = selectedMovieIndexValue;
  }
}

movieSelection.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
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
