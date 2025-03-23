<?php


function post($endpoint, $should_auth=false){
    $curl=curl_init();
 
    $post=json_encode($_POST);

    $curl_arr=[
        CURLOPT_URL=>"https://backend-2hw1.onrender.com/api/v1/".$endpoint,
        CURLOPT_RETURNTRANSFER=>true,
        CURLOPT_POST=>true,
        CURLOPT_POSTFIELDS=>$post,
        CURLOPT_HEADER=>false,
        CURLOPT_FOLLOWLOCATION=>true,
        CURLOPT_HTTPHEADER=>["Content-Type:application/json"]
    ];

    if($should_auth){
        $token=isset($_COOKIE["token"])?$_COOKIE["token"]:null;
        if(!$token){
            return json_encode(["status"=>"error", "message"=>"Not authenticated"])    ;
         };
        $curl_arr[CURLOPT_HTTPHEADER]=["Authorization: Bearer ". $token, 
                                        "Content-Type:application/json",
                                        "Cache-Control:no-cache"];
    } 

    curl_setopt_array($curl, $curl_arr);

    print_r(curl_exec($curl));
}


function get($endpoint, $should_auth=false){
    $curl=curl_init();

    $curl_arr=[
        CURLOPT_URL=>"https://backend-2hw1.onrender.com/api/v1/".$endpoint,
        CURLOPT_RETURNTRANSFER=>true,
        CURLOPT_POST=>false,
        CURLOPT_FOLLOWLOCATION=>true
    ];

    if($should_auth){
        $token=isset($_COOKIE["token"])?$_COOKIE["token"]:null;
        if(!$token){
            return json_encode(["status"=>"error", "message"=>"Not authenticated"])    ;
         };
        $curl_arr[CURLOPT_HTTPHEADER]=["Authorization: Bearer ". $token];
    } 
  
    curl_setopt_array($curl, $curl_arr);

   print_r(curl_exec($curl));
}

function delete($endpoint, $should_auth=false){
    $curl=curl_init();

    $curl_arr=[
        CURLOPT_URL=>"https://backend-2hw1.onrender.com/api/v1/".$endpoint,
        CURLOPT_RETURNTRANSFER=>true,
        CURLOPT_CUSTOMREQUEST=>"DELETE",
        CURLOPT_FOLLOWLOCATION=>true
    ];

    if($should_auth){
        $token=isset($_COOKIE["token"])?$_COOKIE["token"]:null;
        if(!$token){
            return json_encode(["status"=>"error", "message"=>"Not authenticated"])    ;
         };
        $curl_arr[CURLOPT_HTTPHEADER]=["Authorization: Bearer ". $token];
    } 
  
    curl_setopt_array($curl, $curl_arr);

   print_r(curl_exec($curl));
}

function patch($endpoint, $should_auth=false){
    $curl=curl_init();

    $curl_arr=[
        CURLOPT_URL=>"https://backend-2hw1.onrender.com/api/v1/".$endpoint,
        CURLOPT_RETURNTRANSFER=>true,
        CURLOPT_CUSTOMREQUEST=>"PATCH",
        CURLOPT_FOLLOWLOCATION=>true
    ];

    if($should_auth){
        $token=isset($_COOKIE["token"])?$_COOKIE["token"]:null;
        if(!$token){
            return json_encode(["status"=>"error", "message"=>"Not authenticated"])    ;
         };
        $curl_arr[CURLOPT_HTTPHEADER]=["Authorization: Bearer ". $token];
    } 
  
    curl_setopt_array($curl, $curl_arr);

   print_r(curl_exec($curl));
}

?>