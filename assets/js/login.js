let userDetails = [];
console.log(userDetails);


function pageOnLoad() {
  const loginUser = JSON.parse(localStorage.getItem("details"));
  if (loginUser  !== null) {
    userDetails = loginUser;
  }

}


function isUserDetailExist(userMailId, userPassword) {
    event.preventDefault();
    let isExist = false;
    const lengthOfArray = userDetails.length;

    for (let i = 0; i < lengthOfArray; i++) {
      const valuesInArray = userDetails[i];
      const userEmail = valuesInArray.email;
      const userPass = valuesInArray.password;
      console.log(userEmail);
      console.log(userPass);

      if (userMailId === userEmail && userPassword === userPass) {

          isExist = true;
          break;
      }
      else {
          isExist = false;

      }
  }
  return isExist;
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


pageOnLoad()





