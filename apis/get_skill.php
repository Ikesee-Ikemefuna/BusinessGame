<?php
    include_once("request.php");
    echo get("skill/".$_GET['skill_id'], true);
?>