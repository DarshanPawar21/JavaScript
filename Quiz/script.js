
    let email_input = document.getElementById("email");
    let password_input = document.getElementById("password");
    let button = document.getElementById("btn");
    //dummay statement;
    const dummy = {
        email :"dp7878036@gmail.com",
        password : "Darshan@2110",
    };
    const signnup = ()=>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(emailRegex.test(email_input.value) && passwordRegex.test(password_input.value)){
            if(email_input.value == dummy.email && password_input.value == dummy.password ){
                alert("succesfull !");
                button.href ="Queations.html";   
            }else{
                alert("Envalid email");
            }
        }else{
            alert("Invalide form !");
        }
    };

    button.addEventListener("click",signnup);