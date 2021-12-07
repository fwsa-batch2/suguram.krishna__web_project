// function submitHandler(){
//     let email = document.getElementById('emailInput').value;
//     let password = document.getElementById('password').value;

//     localStorage.setItem('email',email);
//     localStorage.setItem('password',password);



// }

let login=[];

function pageOnLoad(){
    const user = JSON.parse(localStorage.getItem('loginDetails'))
    if(user){
        user=login;
    }
}


function submitHandler(){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const details = {
        "email": email,
        "password": password,
    }

    
    
    login.push(details)
    localStorage.setItem("details", JSON.stringify(login))
}



