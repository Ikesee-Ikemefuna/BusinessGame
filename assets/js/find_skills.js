import { get } from "./request.js";

const find_skills=async()=>{
    const skill_name=document.getElementById("skill_name");
    const skill_category=document.getElementById("skill_category");
    const skill_level=document.getElementById("skill_level");
    const find_btn=document.getElementById("find_btn");
    const find_all_btn=document.getElementById("find_all_skills_btn");
    const skill_container=document.querySelector("#skill_container");

    find_all();
    
    find_all_btn.addEventListener("click", async function (event){
        find_all();
    })

    find_btn.addEventListener("click", async function(event){
        skill_container.innerHTML="";
        if(skill_name.value===""){
            alert("Skill name is required");
            return;
        }

        if(skill_category.value===""){
            alert("Skill category is required");
            return;
        }

        if(skill_level.value===""){
            alert("Skill level is required");
            return;
        }
        
        event.target.innerHTML="Searching..."
        event.target.disabled=true;
        event.target.style.background="#ccc";

        const response=await get("find_skills", "skill_name="+skill_name.value+"&skill_category="+skill_category.value+"&skill_level="+skill_level.value);

        if(response.detail=="404: Skill not found"){
            skill_container.innerHTML="No skill found";
            event.target.innerHTML="Find Skills"
            event.target.disabled=false;
            event.target.style.background="#3498db";
        }
        else{
            event.target.innerHTML="Find Skills"
            event.target.disabled=false;
            event.target.style.background="#3498db";

            for(const skill of response.data){
                skill_container.innerHTML+=`<div class="skill_card"> 
                                                <div class="flex_container">
                                                    <div>${skill.skill_name}</div>
                                                    <a href="/user/skills/share_skill.html?skill_id=${skill.id}">Share Skills</a>
                                                </div>
                                                
                                                <div class="flex_container">
                                                    <div class="item">
                                                        <div classs="label">Skill Category</div> <div class="value">${skill.skill_category}</div>
                                                    </div>
                                                    <div class="item">
                                                        <div classs="label">Skill Level</div> <div class="value">${skill.skill_level}</div>
                                                    </div>
                                                    <div class="item">
                                                        <div classs="label">Skill Description</div> <div class="value">${skill.skill_description}</div>
                                                    </div>  
                                                </div>
                                            </div>`

                // skill_container.innerHTML+=`<div class="skill_card"> 
                //                                 <div class="flex_container">
                //                                     <div>${skill.skill_name}</div>
                //                                     <button onclick="alert('Skill Has been shared successfully')">Share Skills</button>
                //                                 </div>
                                                
                //                                 <div class="flex_container">
                //                                     <div class="item">
                //                                         <div classs="label">Skill Category</div> <div class="value">${skill.skill_category}</div>
                //                                     </div>
                //                                     <div class="item">
                //                                         <div classs="label">Skill Level</div> <div class="value">${skill.skill_level}</div>
                //                                     </div>
                //                                     <div class="item">
                //                                         <div classs="label">Skill Description</div> <div class="value">${skill.skill_description}</div>
                //                                     </div>  
                //                                 </div>
                //                             </div>`
            }
        }

    })
}


const find_all=async()=>{
    const skill_container=document.querySelector("#skill_container");
    skill_container.innerHTML="";

    const response=await get("all_skills");
        skill_container.innerHTML="";

        for(const skill of response.data){
            skill_container.innerHTML+=`<div class="skill_card"> 
                                            <div class="flex_container id_section">
                                                <div>${skill.skill_name}</div>
                                                <a href="/user/skills/share_skill.html?skill_id=${skill.id}">Share Skills</a>
                                            </div>
                                            
                                            <div class="flex_container">
                                                <div class="item">
                                                    <div class="label">Skill Category</div> 
                                                    <div class="value">${skill.skill_category}</div>
                                                </div>
                                                <div class="item">
                                                    <div class="label">Skill Level</div> 
                                                    <div class="value">${skill.skill_level}</div>
                                                </div>
                                                <div class="item">
                                                    <div class="label">Skill Description</div> 
                                                    <div class="value">${skill.skill_description}</div>
                                                </div>  
                                            </div>
                                        </div>`
        }
}



find_skills();