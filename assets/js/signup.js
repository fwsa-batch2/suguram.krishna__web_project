let movieDetails = [];

function pageOnLoad() {
  const user = JSON.parse(localStorage.getItem("details"));
  if (user != null) {
    movieDetails = user;
  }
}

function submitHandler(event) {
  event.preventDefault();
  const name = document.getElementById("userName").value;
  const useremail = document.getElementById("email").value;
  const email = useremail.toLowerCase();
  console.log(email);
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
    movieDetails.push(details);
    localStorage.setItem("details", JSON.stringify(movieDetails));
    window.location.href = "../pages/pvrlogin.html";
  } else {
    alert("Password Is not matching");
  }
}

function check() {
  let a = document.getElementById("password").value;
  let b = document.getElementById("confirmPassword").value;
  if (a == b) {
    return true;
  }
}

function mailCheck(mailInAct) {
  const userEmail = JSON.parse(localStorage.getItem("details"));
  let alreadyExsists = false;

  if (userEmail != null) {
    for (let i of userEmail) {
      const user = i;
      const email = user.email;

      if (mailInAct == email) {
        alreadyExsists = true;
        break;
      }
    }
  }

  return alreadyExsists;
}

function showPassword() {
  const passCheckBox = document.getElementById("password");
  const confirmPassChackBox = document.getElementById("confirmPassword");

  if (
    confirmPassChackBox.type === "password" &&
    passCheckBox.type === "password"
  ) {
    passCheckBox.type = "text";
    confirmPassChackBox.type = "text";
  } else {
    passCheckBox.type = "password";
    confirmPassChackBox.type = "password";
  }
}

pageOnLoad();
