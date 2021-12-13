let userDetails = [];
console.log(userDetails);

function pageOnLoad() {
  const loginUser = JSON.parse(localStorage.getItem("details"));
  if (loginUser) {
    userDetails = loginUser;
  }
}

pageOnLoad();

function submitHandler(){
    event.preventDefault();

    const userMail = document.getElementById("email").value;
    const userPass = document.getElementById("password").value;


    for(let i=0; i<userDetails.length; i++){
        const userValues = userDetails[i];
        const mailId = userValues.email;
        const passwrd = userValues.password;

        if(userMail !== mailId || userPass !== passwrd){
            // alert("Invalid Login Credentials Or You have to create a Account");
            document.getElementById('invalidError').innerHTML="Invalid Login Credentials Or You have to create a Account";
        }
        else{
            window.location.replace("../index.html")
        }
    }
}
