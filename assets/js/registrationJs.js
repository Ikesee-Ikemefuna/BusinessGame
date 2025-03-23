import { post } from "./request.js";

document.getElementById('register_btn').addEventListener('click', async function(event) {
    const form=document.getElementById("registration_form");
    const form_data=new FormData(form);

     event.target.innerHTML="Signing you up...";
   const response=await post("signup", form_data);
   if(response.detail){
    alert(response.detail.message);
    event.target.innerHTML="Register";
   }
   else{
        window.location.href="/access/login.html";
   }
});
