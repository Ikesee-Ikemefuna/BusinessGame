<?php
    include_once("request.php");
    $_POST["available_times"]=json_decode($_POST["available_times"]);
    
    echo post("skill", true);
?>