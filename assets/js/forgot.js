let forgotPassword = [];
console.log(forgotPassword);

function pageOnLoad() {
  const forgetPass = JSON.parse(localStorage.getItem("details"));
  console.log(forgetPass);
}

pageOnLoad();

function submitHandler(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  for(let i of forgetPass){
    const userInput = i;
    const mailId = userInput.email;
    if(email !== mailId){
        alert("You dont have a account Please create a account")
    }
    else{
        alert("We have sent a Reset mail to your Account")
    }
  }
}


