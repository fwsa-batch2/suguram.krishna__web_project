let movieDetails = [];

function pageOnLoad() {
  const user = JSON.parse(localStorage.getItem("details"));
  if (user != null) {
    movieDetails = user;
  }
}

function submitHandler() {
  event.preventDefault();
  const name = document.getElementById("userName").value;
  const useremail = document.getElementById("email").value;
  const email = useremail.toLowerCase();
  console.log(email);
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const details = {
    "name": name,
    "email": email,
    "password": password,
    "confirmPassword": confirmPassword,
  };

  const emailValidation = mailCheck(email);
  if (emailValidation) {
    alert("Mail Id already Exsists");
    return;
  }

  const passMatch = check();
  if (passMatch) {
    movieDetails.push(details);
    localStorage.setItem("details", JSON.stringify(movieDetails));
    window.location.href = "../pages/pvrlogin.html";
  } else {
    alert("Password Is not matching");
  }
}

function nameValidation(){
  let userName =  document.getElementById("userName").value
  if(userName=""){
    document.getElementById('inner').innerHTML="Username cant be Empty";
  }
}


function check() {
  event.preventDefault();

  let a = document.getElementById("password").value;
  let b = document.getElementById("confirmPassword").value;
  if (a == b) {
    return true;
  } else {
    return false;
  }
}

function mailCheck(mailInAct) {
  event.preventDefault();
  const userEmail = JSON.parse(localStorage.getItem("details"));
  let alreadyExsists = false;

  if (userEmail != null) {
    for (i = 0; i < userEmail.length; i++) {
      const user = userEmail[i];
      const email = user.email;

      if (mailInAct == email) {
        alreadyExsists = true;
        break;
      }
    }
  }

  return alreadyExsists;
}

function showPassword(){
  const checkbox = document.getElementById("passCheckbox");
  if(checkbox.checked){
    document.getElementById("password").type="text";
    document.getElementById("confirmPassword").type="text";
  }
  else{
    document.getElementById("password").type="password";
    document.getElementById("confirmPassword").type="password";
  }
}

pageOnLoad();
