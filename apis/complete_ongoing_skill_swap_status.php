<?php
    include_once("request.php");
    
    echo patch("ongoing_router/".$_GET['request_id']."/complete", true);
?>