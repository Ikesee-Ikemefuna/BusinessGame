<?php
    include_once("request.php");
    
    echo get("user/".$_GET['user_id'], true);
?>