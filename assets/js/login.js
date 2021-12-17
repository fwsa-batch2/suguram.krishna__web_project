let userDetails = [];
console.log(userDetails);


function pageOnLoad() {
  const loginUser = JSON.parse(localStorage.getItem("details"));
  console.log(loginUser);
  if (loginUser) {
    userDetails = loginUser;
  }
}



pageOnLoad()


function submitHandler(){
    event.preventDefault();

    const userMail = document.getElementById("email").value;
    const userPass = document.getElementById("password").value;


    for(let i=0; i<userDetails.length; i++){
        const userValues = userDetails[i];
        const mailId = userValues.email;
        const passwrd = userValues.password;

        if(userMail !== mailId || userPass !== passwrd){
            alert("Invalid Login Credentials Or You have to create a Account");
            // document.getElementById('invalidError').innerHTML="Invalid Login Credentials";
            return;
        }
        else{
            window.location.href="../index.html";
            localStorage.setItem("loginedUser", mailId)
        }
    }
}

function showPassword(){
  const checkbox = document.getElementById("passCheckbox");
  if(checkbox.checked){
    document.getElementById("password").type="text";
  }
  else{
    document.getElementById("password").type="password";
  }
}

