<?php
    include_once("request.php");

    $_POST["rating"]=(int) $_POST["rating"];
    
    echo post("review", true);
?>