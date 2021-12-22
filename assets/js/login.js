let userDetails = [];
console.log(userDetails);


function pageOnLoad() {
  const loginUser = JSON.parse(localStorage.getItem("details"));
  if (loginUser !== null) {
    userDetails = loginUser;
  }
  console.log(loginUser);
}


function submitHandler(event) {
  event.preventDefault();


  const userMailId = document.getElementById("email").value;
  console.log(userMailId)
  const userPass = document.getElementById("password").value;
  console.log(userPass);


  let isDetailExist = isUserDetailExist(userMailId, userPass);
  if (isDetailExist !== true) {
    document.getElementById("invalidError").innerText = "Invalid login credentials";
    return null;

  }
  else {

    window.location.href = "./../../index.html";
    localStorage.setItem("LoggedInUser", userMailId);
  }


}


function isUserDetailExist(userMailId, userPassword) {
  let isExist = false;
  const lengthOfArray = userDetails.length;

  for (let i = 0; i < lengthOfArray; i++) {
    const valuesInArray = userDetails[i];
    const userEmail = valuesInArray.email;
    console.log(userEmail);
    const userPass = valuesInArray.password;
    console.log(userPass);
    if (userMailId == userEmail && userPassword == userPass) {
      isExist = true;
      break;
    }
  }
  return isExist;
}


function showPassword() {
  const passwordCheckBox = document.getElementById("passCheckbox");
  if (passwordCheckBox.type === "password") {
    passwordCheckBox.type = "text";
  }
  else {
    passwordCheckBox.type = "password";
  }
}

pageOnLoad()


