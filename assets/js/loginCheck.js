const loggedInUser = JSON.parse(localStorage.getItem("LOGGED_IN_USER"))

if(loggedInUser === null){
    window.location.href= "./../pages/pvrlogin.html"
}
