import { get } from "./request.js"

const get_sent_requests=async()=>{
    const skill_container=document.querySelector("#skill_container");
    skill_container.innerHTML="Getting sent skills requests";
    const response=await get("sent_skill_request");
    skill_container.innerHTML="";

    if(response.data){
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

            const cancel_btn=document.createElement("button");
            cancel_btn.setAttribute("style", "margin-right:10px; background:#aaa");
            cancel_btn.innerHTML="Cancel";
            cancel_btn.onclick=async()=>{
                cancel_btn.innerHTML="Processing...";
                const response=await get("update_skill_status", "request_id="+resp.id+"&&status=canceled");
                if(response.detail){
                    alert(response.detail);
                }
                else{
                    alert("Status updated successfully")
                    get_received_requests()
                }
                cancel_btn.innerHTML="Cancel";
            }
            
            resp.status=="pending" && skill_card.appendChild(cancel_btn);
            skill_container.appendChild(skill_card);
        }
    }
    else{
        skill_container.innerHTML="No skill request has been sent"
    }
}

get_sent_requests()