<?php
    include_once("request.php");
    
    echo patch("skill-share/request/".$_GET['request_id']."/status?new_status=".$_GET["status"], true);
?>