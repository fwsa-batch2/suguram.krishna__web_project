const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))
console.log(loggedInUser);

if(loggedInUser === null){
    window.location.href= "./../pages/pvrlogin.html"
}
