let forgetpassword=[];
function onPageLoad(){
  console.group("onPageLoad");
      const users = JSON.parse(localStorage.getItem('signUpDetails'));
      console.log(users);
      
      if (users==null) {
          forgetpassword = [];
      }
      else{
          forgetpassword=users;
      }
    console.groupEnd("onPageLoad");
  }
  
  function submitHandler(event) {
    event.preventDefault();
      console.group("userInput");
     
      const  email= document.getElementById("email").value.toLowerCase();
     
  
      let emaildetail = {
          "email": email
      }

    const emailAlreadyExist = emailValid(email);
     if (emailAlreadyExist) {
         forgetpassword.push(emaildetail);
         let forgetPageUserInput = JSON.stringify(forgetpassword);
         localStorage.setItem("forgetPage", forgetPageUserInput);
         window.location.href = "";
         alert("We have sent a mail to you")
     }
     else{ 
         alert("Please Create a account");
   
     }
    console.groupEnd("userInput") 
   



  }
  function emailValid(current_email) {
     console.group("emailValidiation");
    const userList = JSON.parse(localStorage.getItem("signUpDetails"));
  
    let isUsed = false;
  
    for (let i = 0; i < userList.length; i++) {
  
      const user = userList[i];
      const email = user.email;
      
      if (current_email == email) {
        console.log("current_email==email");
        isUsed = true;
        break;
      }
    }
    
    return isUsed;
   
  }



