import { get } from "./request.js";

const get_received_requests=async()=>{
    const skill_container=document.querySelector("#skill_container");
    skill_container.innerHTML="Getting recieved skills requests";
    const response=await get("received_skill_request");

    skill_container.innerHTML="";

    if(response.data){
        for(const resp of response.data){
            const skill_card=document.createElement("div");
            skill_card.setAttribute("class", "skill_card")
            skill_card.innerHTML=`<div class="flex_container" style="justify-content:space-between">
                                    <div><strong>User ID:</strong> ${resp.requester_id}</div>
                                    <div>${resp.created_at.split("T")[0]}</div>
                                    ${resp.status==="accepted" ? `<a href="/user/skills/ongoing_skill_swap.html">View in Ongoing Session</a>`:""}
                                </div>
                                <div>
                                    <strong>Status:</strong> ${resp.status}
                                </div>
                                        `
            const accept_btn=document.createElement("button");
            accept_btn.setAttribute("style", "margin-right:10px");
            accept_btn.innerHTML="Accept";
            accept_btn.onclick=async()=>{
                accept_btn.innerHTML="Processing...";
                const response=await get("update_skill_status", "request_id="+resp.id+"&&status=accepted");
                if(response.detail){
                    alert(response.detail);
                }
                else{
                    alert("Status updated successfully")
                    get_received_requests()
                }
                accept_btn.innerHTML="Accept"
            }

            const reject_btn=document.createElement("button");
            reject_btn.setAttribute("style", "margin-right:10px; background:red");
            reject_btn.innerHTML="Reject";
            reject_btn.onclick=async()=>{
                reject_btn.innerHTML="Processing...";
                const response=await get("update_skill_status", "request_id="+resp.id+"&&status=rejected");
                if(response.detail){
                    alert(response.detail);
                }
                else{
                    alert("Status updated successfully")
                    get_received_requests()
                }
                reject_btn.innerHTML="Reject"
            }

            resp.status=="pending" && skill_card.appendChild(accept_btn);
            resp.status=="pending" && skill_card.appendChild(reject_btn);
            skill_container.appendChild(skill_card);
        }
    }
    else{
        skill_container.innerHTML="No skill request has been received";
    }
}

get_received_requests()