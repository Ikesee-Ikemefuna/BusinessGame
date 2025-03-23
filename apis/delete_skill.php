<?php
    include_once("request.php");
    echo delete("skill/".$_GET['skill_id'], true);
?>