<?php 
    require 'connection.php';
    echo "submitted";
    if($_POST) {
    
      $userid = $_POST['userid'];
      $pass = $_POST['pass'];
    
      $result = $con->query("
        SELECT * FROM personel WHERE user_id = '$userid' AND password = '$pass'
      ");
    
      if ($result->fetch_assoc()) {
              
        echo json_encode("You are now logged in");
    
      } else 
        echo "User ID or Password is incorrect";
      
    }
?>