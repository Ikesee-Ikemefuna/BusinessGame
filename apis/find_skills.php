<?php
    include_once("request.php");
    
    echo get("skill/search/q?skll_name=".$_GET['skill_name']."&skill_category=".$_GET["skill_category"]."&skill_level=".$_GET["skill_level"], true);
?>