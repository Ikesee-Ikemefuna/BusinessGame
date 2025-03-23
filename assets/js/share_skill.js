import { get, post } from "./request.js";

const share_skill=async()=>{
    const skill_container=document.getElementById("skill_container");
    skill_container.innerHTML="Getting skill details..."
    const params=window.location.href.split("?")[1];
    const response=await get("get_skill", params);
   
    
    if(response.data){
        skill_container.innerHTML=`<div class="item_container"> 
                                    <div class="item">
                                        <div class="label">Skill Name</div> <div class="value">${response.data.SkillModel.skill_name}</div>
                                    </div>
                                    <div class="item">
                                        <div class="label">Skill Category</div> <div class="value">${response.data.SkillModel.skill_category}</div>
                                    </div>
                                    <div class="item">
                                        <div class="label">Skill Level</div> <div class="value">${response.data.SkillModel.skill_level}</div>
                                    </div>
                                    <div class="item">
                                        <div class="label">Skill Description</div> <div class="value">${response.data.SkillModel.skill_description}</div>
                                    </div>
                                </div>`
        const button=document.createElement("button");
        button.innerHTML="Share Skill";
        button.onclick=async()=>{
            if(!response.data){
                return alert("No skill found");
            }
            button.innerHTML="Sharing skill now...";
            const form_data=new FormData();
            form_data.append("provider_id", response.data.SkillModel.user_id);
            form_data.append("requester_id", JSON.parse(sessionStorage.getItem("user")).id);
            form_data.append("requester_skill_id", JSON.parse(sessionStorage.getItem("my_skill")).id);
            form_data.append("provider_skill_id", response.data.SkillModel.id);
            form_data.append("message", "I will like to share my skill with you");
    
            const res=await post("share_skill", form_data);
    
            if(res.detail){
                button.innerHTML="Share Skill";
                alert(res.detail);
                window.location.href="/user/find/skills.html";
                
            }
            else{
                button.innerHTML="Share Skill";
                alert("Skill shared successfully request is pending");
                window.location.href="/user/skills/sent_skill_requests.html";
               
            }
        }

        const trade_button=document.createElement("button");
        trade_button.setAttribute("style", "background:greenyellow");
        trade_button.innerHTML="Purchase Skill";
        trade_button.onclick=async()=>{
            if(!response.data){
                return alert("No skill found");
            }
            trade_button.innerHTML="Purchasing skill now...";
            const form_data=new FormData();
            form_data.append("provider_id", response.data.SkillModel.user_id);
            form_data.append("requester_id", JSON.parse(sessionStorage.getItem("user")).id);
            form_data.append("provider_skill_id", response.data.SkillModel.id);
            form_data.append("message", "I will like to share my skill with you");
    
            const res=await post("share_skill", form_data);
    
            if(res.detail){
                trade_button.innerHTML="Purchase Skill";
                alert(res.detail);
                window.location.href="/user/find/skills.html";
                
            }
            else{
                trade_button.innerHTML="Purchase Skill";
                alert("Skill shared successfully request is pending");
                window.location.href="/user/skills/sent_skill_requests.html";
            }
        }

        skill_container.appendChild(button);
        skill_container.appendChild(trade_button);
    }
    else{
        alert(response.detail);
        skill_container.innerHTML="Skill not found"
    }

    const share_skill_btn=document.getElementById("share_skill_btn");
    
    share_skill_btn.addEventListener("click", async function(){
        
        
    })
}


share_skill();

export default share_skill;