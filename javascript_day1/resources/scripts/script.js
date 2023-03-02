
let userDetails=
{
    userEmail:"",
    userPassword:"",
    rememberMe:""
}

const getUserDetails = () =>{
    
    userDetails.userEmail=document.getElementById("email").value;
    userDetails.userPassword=document.getElementById("pwd").value;
    userDetails.rememberMe=document.getElementById("remember").value;
    return userDetails;
 }


 document.getElementById("submitBtn").addEventListener("click", myFunction); 
 function myFunction(e) {
    e.preventDefault();
    
    userDetails=getUserDetails();
    console.log(email);
    const thankyoumessage=`Thank you for registering....The details are ===> Email Id : ${userDetails.userEmail} and Password : ${userDetails.userPassword}`;
    const formMessage=document.querySelector('form');
    formMessage.innerHTML=thankyoumessage;

  }