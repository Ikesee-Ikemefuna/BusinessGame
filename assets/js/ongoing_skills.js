import { get, post } from "./request.js";

const ongoing_skills=async()=>{
    const skill_container=document.getElementById("skill_container");
    const profile=await get("profile");

    if(skill_container){
        skill_container.innerHTML="Loading sessions now...";

        const response=await get("ongoing_skill_swap");
        
        if(response.data.length===0){
            skill_container.innerHTML="You have not active sessions at the moment";
        }
        
        else{
            skill_container.innerHTML="";
            for(const resp of response.data){
                const skill_card=document.createElement("div");
                skill_card.setAttribute("class", "skill_card")
                skill_card.innerHTML=`<div class="flex_container" style="justify-content:space-between">
                                        <div><strong>User ID:</strong> ${resp.requester_id}</div>
                                        <div>${resp.created_at.split("T")[0]}</div>
                                    </div>
                                    <div>
                                        <strong>Status:</strong> ${resp.status}
                                    </div>
                                            `
              
                const review_btn=document.createElement("button");
                review_btn.setAttribute("style", "margin-right:10px; background:red");
                review_btn.innerHTML="Review";
                review_btn.onclick=async()=>{
                    window.location.href="/user/reviews/create_review.html?reviewer_id="+resp.requester_id+"&&reviewee_id="+resp.provider_id+"&&skill_share_id="+resp.id
                }
    
                const complete_btn=document.createElement("button");
                complete_btn.setAttribute("style", "margin-right:10px; background:yellowgreen");
                complete_btn.innerHTML="Complete";
                complete_btn.onclick=async()=>{
                    complete_btn.innerHTML="Processing...";
                    const response=await get("complete_ongoing_skill_swap_status", "request_id="+resp.id);
                    if(response.detail){
                        alert(response.detail);
                    }
                    else{
                        alert("Status updated successfully")
                        ongoing_skills()
                    }
                    complete_btn.innerHTML="Complete"
                }

                if(profile.id===resp.requester_id){
                    resp.status!=="completed" && skill_card.appendChild(complete_btn);
                    resp.status=="completed" && skill_card.appendChild(review_btn);
                }
            
                skill_container.appendChild(skill_card);
            }  
        }
    }
}

ongoing_skills();