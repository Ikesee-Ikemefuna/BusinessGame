import { get, post } from "./request.js";

const make_review=()=>{
    const review_btn=document.getElementById("review_btn");
    const params=window.location.href.split("?")[1];
    const review_form=document.getElementById("review_form");

    review_btn.onclick=async(event)=>{
        event.target.innerHTML="Processing...";
        const params_eg_arr=params.split("&&");
        let reviewer_id="";
        let reviewee_id="";
        let skill_share_id="";

        for(const param of params_eg_arr){
            if(param.includes("reviewer_id")){
                reviewer_id=param.replace("reviewer_id=", "");
            }
            if(param.includes("reviewee_id")){
                reviewee_id=param.replace("reviewee_id=", "");
            }
            if(param.includes("skill_share_id")){
                skill_share_id=param.replace("skill_share_id=", "");
            }
        }

        const form_data=new FormData();
        const rating=document.getElementById("rating").value;
        const comment=document.getElementById("comment").value;

        form_data.append("reviewer_id", reviewer_id);
        form_data.append("reviewee_id", reviewee_id);
        form_data.append("skill_share_id", skill_share_id);
        form_data.append("rating", rating);
        form_data.append("comment", comment);

        const response=await post("make_review", form_data);

        if(response.detail){
            alert(response.detail);
        }
        event.target.innerHTML="Review";
    }
   
}

make_review();