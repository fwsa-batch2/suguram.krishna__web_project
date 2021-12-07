// function submitHandler(){
//     let email = document.getElementById('emailInput').value;
//     let password = document.getElementById('password').value;

//     localStorage.setItem('email',email);
//     localStorage.setItem('password',password);



// }

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



