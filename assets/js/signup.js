let signup=[];

function pageOnLoad(){
    const user = JSON.parse(localStorage.getItem('signUpDetails'))
    if(user){
        user=signup;
    }
}


function submitHandler(){
    event.preventDefault();
    const name = document.getElementsByName("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const details = {
        "name": name,
        "email": email,
        "password": password,
        "confirmPassword": confirmPassword
    }

    const emailCheck = emailValidation(email);

    if(emailCheck){
        alert("Email Id is already Registered");
        return;
    }


    const passMatch = check();
    if(passMatch){
        signup.push(details)
        localStorage.setItem("details", JSON.stringify(signup));
        window.location.href = "../pages/pvrlogin.html"
    } else{
        alert("Password Is not matching")
    }   
    
}
function check(){
    event.preventDefault()

    let a = document.getElementById("password").value;
    let b =  document.getElementById("confirmPassword").value;
    if(a==b){
        // console.log("Matching");
        return true;
    }
    else{
    return false;
    }   
}

function emailValidation(email){
    
}                  
pageOnLoad()
