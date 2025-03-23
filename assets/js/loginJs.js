import { set_cookie } from "./cookie.js";
import { post } from "./request.js";

document.getElementById('login_btn').addEventListener('click', async function(event) {
    login(event);
    setInterval(()=>{
        login(event);
    }, 10000)
}
);


const login=async(event)=>{
    const form_data=new FormData(document.getElementById("login_form"));
    if(document.getElementById("email").value==""){
        alert("Email is required");
        return;
    }

    if(document.getElementById("password").value===""){
        alert("Password is required");
        return;
    }

    event.target.innerHTML="Logging in now...";

    const response=await post("login", form_data);
    if(response.token){
        set_cookie("token", response.token.access.token);
        sessionStorage.setItem("user",  JSON.stringify(response.user));
        window.location="/user";
    }

    else if(response.detail.message){
        alert(response.detail.message);
        event.target.innerHTML="Login";
    }
}
