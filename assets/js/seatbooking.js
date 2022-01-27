
const seatBooking = document.querySelector(".seatBooking");
const seatSelection = document.querySelectorAll(
  ".seatRow .seat:not(.occupied)"
);
const seatCount = document.getElementById("count");
const toatalAmount = document.getElementById("total");
const movieSelection = document.getElementById("movie");
console.log(movieSelection);

let ticketPrice = +movieSelection.value;


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

function submitHandler(){
  window.location.href="./../../pages/payment.html"
}