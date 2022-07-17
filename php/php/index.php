<?php

header("Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE");
header('Access-Control-Allow-Credentials: true');
header('Content-Type: plain/text');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Methods,Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Authorization, X-Requested-With");

include_once("../php/config.php");

if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        signup($conn);
        // echo "hii";
    }

function signup($conn){

try {
    if(isset($_POST['fname']) && isset($_POST['lname']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['mobile']) && isset($_POST['dob'])){
        $fname = trim($_POST['fname']);
        $lname = trim($_POST['lname']);
        $email = trim($_POST['email']);
        $password = trim($_POST['password']);
        $mobile = trim($_POST['mobile']);
        $dob = trim($_POST['dob']);
    
        $checkEmail = $conn->prepare("SELECT email FROM users WHERE email =?");
        $checkEmail->execute([$email]);
        if($checkEmail->rowCount() > 0){
            echo json_encode(['status' => 'error']);
        }else{
            $Query = $conn->prepare("INSERT INTO users (fname, lname, email, password, mobile, dob) VALUES(?,?,?,?,?,?)");
            $Query->execute([$fname,$lname,$email,$password,$mobile,$dob]);
            if($Query){
                echo json_encode(['status'=>'success']);
            }
        }
        
    }

} catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }

}


?>