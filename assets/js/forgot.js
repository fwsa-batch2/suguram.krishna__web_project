let forgotPassword = [];
console.log(forgotPassword);

function pageOnLoad() {
  const forgetPass = JSON.parse(localStorage.getItem("details"));
  console.log(forgetPass);
  if (forgetPass) {
    forgotdetail = forgetPass;
  }
}

pageOnLoad();

function submitHandler() {
  event.preventDefault();

  const email = document.getElementById("email").value;
  for(let i=0; i<forgotdetail.length; i++){
    const userInput = forgotdetail[i];
    const mailId = userInput.email;
    if(email !== mailId){
        document.getElementById('invalidError').innerHTML="You dont have a account Please create a account";
    }
    else{
        window.location.href="./../index.html";
    }
  }
}


