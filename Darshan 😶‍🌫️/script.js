let email_input = document.getElementById("email");
let password_input = document.getElementById("password");
let button = document.getElementById("btn");
//dummay statement
let current =()=>{
    email = "darshan@gmail.com";
    password = "admin@123456"
};

const signup = ()=>{
    const emailver = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordsver = ["Password@123", "weakpass", "12345678", "StrongPass1!", "Short1!"];
    if(emailver.test(email) && passwordsver.test(password)){
        if(email_input.value ==current.email && password_input == current.password){
          alert("success !")
        }else{
            alert("email !")
        }
    }else{
        alert("invalid !")
    }
}
button.addEventListener("click",signup);