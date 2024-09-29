<?php 
    $username = $_POST["username"];
    $password = $_POST["password"];
    if($username == "batom" && $password == "1212"){
        echo "valid";
    }else{
        header("Location: ./index.html");
    }
?>