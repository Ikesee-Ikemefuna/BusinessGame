import { set_cookie } from "./cookie.js";

const logout_btn=document.getElementById("logout_btn");

if(logout_btn){
    logout_btn.addEventListener("click", function(){
        sessionStorage.removeItem("user");
        set_cookie("token", null, -200);
        window.location.href="/access/login.html";
    })
}