import { get, post } from "./request.js"

const token_balance=async()=>{
    const response=await get("token_balance");
    const balance_id=document.getElementById("token_balance");
    if(balance_id){
        if(response.data){
            balance_id.innerHTML=response.data.TokenSkillModel.balance;
        }
        else{
            balance_id.innerHTML=response.detail;
        }
    }
}


const top_up_token=async()=>{
    const token_form=document.getElementById("token_form");
    const top_up_btn=document.getElementById("top_up_btn");
    
    top_up_btn.onclick=async(event)=>{
        event.target.innerHTML="Processing...";
        const form_data=new FormData(token_form);
        const response=await post("top_up_token", form_data);
        event.target.innerHTML="Top Up";
        if(response.detail){
            alert(response.detail);
        }
        else{
            alert(response.message);
            window.location.href="/user";
        }

    }
}


token_balance();
top_up_token();