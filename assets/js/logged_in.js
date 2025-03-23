import { get_cookie } from "./cookie.js";
import { get } from "./request.js";

const user_data=async()=>{
    const response=await get("profile");
}

if(get_cookie("token")==null){
    window.location.href="/access/login.html"
}
else{
    const first_name=document.getElementById("first_name");
    if(first_name){
        first_name.innerHTML=JSON.parse(sessionStorage.getItem("user")).first_name;
    }
    user_data();
}




