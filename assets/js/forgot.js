let forgotPassword = [];
console.log(forgotPassword);

function pageOnLoad() {
  const forgetPass = JSON.parse(localStorage.getItem("details"));
  console.log(forgetPass);
  if (forgetPass) {
    let forgotdetail = forgetPass;
  }
}

pageOnLoad();

function submitHandler(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  for(let i=0; i<forgotdetail.length; i++){
    const userInput = forgotdetail[i];
    const mailId = userInput.email;
    if(email !== mailId){
        alert("You dont have a account Please create a account")
    }
    else{
        // window.location.href="./../index.html";
        alert("We have sent a Reset mail to your Account")
    }
  }
}


