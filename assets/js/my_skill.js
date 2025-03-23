import { get } from "./request.js";
const delete_skill=async(skill_id)=>{
    const res=await get("delete_skill", "skill_id="+skill_id);
    alert("Could not delete skill");
}

const my_skill=async()=>{
    const skill_container=document.querySelector("#skill_container");
    skill_container.innerHTML="Loading skill now";

    const response=await get("my_skill");


    sessionStorage.setItem("my_skill", JSON.stringify(response.data[0]));
   

    if(response.data.length===0){
        skill_container.innerHTML="You have not added any skill yet";
    }
    
    skill_container.innerHTML=`<div class="item_container"> 
                                    <div class="item">
                                        <div class="label">Skill Name</div> <div class="value">${response.data[0].skill_name}</div>
                                    </div>
                                    <div class="item">
                                        <div class="label">Skill Category</div> <div class="value">${response.data[0].skill_category}</div>
                                    </div>
                                    <div class="item">
                                        <div class="label">Skill Level</div> <div class="value">${response.data[0].skill_level}</div>
                                    </div>
                                    <div class="item">
                                        <div class="label">Skill Description</div> <div class="value">${response.data[0].skill_description}</div>
                                    </div>
                                </div>`;

    const button=document.createElement("button");
    button.onclick=()=>delete_skill(response.data[0].id);
    button.innerHTML="Delete Skill";
    button.setAttribute("style", "background:red; color:#fff; padding:10px; border-radius:5px;");
    skill_container.appendChild(button);
}





my_skill();