import { post } from "./request.js";

const create_skill=()=>{
    const create_btn=document.getElementById("create_skill_btn");
    create_btn.addEventListener("click", async function(event){
        const form_data=new FormData();

        event.target.innerHTML="Creating skill now";
        
        form_data.append("skill_category", document.getElementById("skill_category").value);
        form_data.append("skill_name", document.getElementById("skill_name").value);
        form_data.append("skill_description", document.getElementById("skill_description").value);
        form_data.append("skill_level", document.getElementById("skill_level").value);
        form_data.append("available_times", JSON.stringify([
            {
                available_day: document.getElementById("available_day").value,
                start_time: document.getElementById("start_time").value,
                end_time: document.getElementById("end_time").value
            }
        ]));
        const response=await post("skill", form_data);
       if(response.data){
            alert("Skill has been added successfully");
            window.location.href="/user";
       }
       else{
        alert(response.detail.message);
       }
    })
}


create_skill();