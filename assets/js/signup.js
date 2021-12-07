let signup=[];

function pageOnLoad(){
    const user = JSON.parse(localStorage.getItem('userDetails'))
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

    
    
    signup.push(details)
    localStorage.setItem("details", JSON.stringify(signup))
}

function check(){
    event.preventDefault()

    let a = document.getElementById("password").value;
    let b =  document.getElementById("confirmPassword").value;
    if(a==b){
        console.log("Matching");
        window.location.href="../pages/pvrlogin.html" 
        alert("You have created your account successfully")   
    }
    else{
        console.log("not matching");
        alert("Sorry :( your password didn't match")
    }
}