//admin login validation 

function submitHandler(event){
    event.preventDefault()
    const adminId = "admin"
    const adminPass = "admin"
    
    let adminIdInput = document.getElementById("adminId").value;
    let adminPassInput = document.getElementById("adminPass").value;

    if(adminId === adminIdInput && adminPass === adminPassInput){
        alert("Welcome Admin");
        window.location.href="./../pages/admin home.html"
    }
    else{
        alert("Invalid Admin Credentials")
    }
}


// admin function for the adding page

function adminRedirection(event){
    event.preventDefault()
    const adminId = "admin"
    const adminPass = "admin"
    
    let adminIdInput = document.getElementById("adminId").value;
    let adminPassInput = document.getElementById("adminPass").value;

    if(adminId === adminIdInput && adminPass === adminPassInput){
        alert("Welcome Admin");
       window.location.href="./../pages/movieAdding.html"
    }
    else{
        alert("Invalid Admin Credentials")
    }
}