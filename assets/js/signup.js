let signup = [];

function pageOnLoad() {
  const user = JSON.parse(localStorage.getItem("details"));
  if (user != null) {
    signup = user;
  }
}

function submitHandler() {
  event.preventDefault();
  const name = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const details = {
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  const emailValidation = mailCheck(email);
  if (emailValidation) {
    alert("Mail Id already Exsists");
    return;
  }

  const passMatch = check();
  if (passMatch) {
    signup.push(details);
    localStorage.setItem("details", JSON.stringify(signup));
    window.location.href = "../pages/pvrlogin.html";
  } else {
    alert("Password Is not matching");
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

pageOnLoad();
