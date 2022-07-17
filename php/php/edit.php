<?php

header("Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE");
header('Access-Control-Allow-Credentials: true');
header('Content-Type: plain/text');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Methods,Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Authorization, X-Requested-With");

include_once("../php/config.php");

if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        edit($conn);
        // echo "hii";
    }

function edit($conn){

    try{
        if(isset($_POST['fname']) && isset($_POST['lname']) && isset($_POST['email'])  && isset($_POST['password'])  && isset($_POST['mobile']) && isset($_POST['dob'])){
           
            session_start();
            $id = $_SESSION['id'];
            $fname = trim($_POST['fname']);
            $lname = trim($_POST['lname']);
            $email = trim($_POST['email']);
            $password = trim($_POST['password']);
            $mobile =trim($_POST['mobile']);
            $dob = trim($_POST['dob']);
        
        
            $pdoQuery = "UPDATE users SET fname=:fname, lname=:lname, email=:email, password=:password,mobile=:mobile,dob=:dob WHERE id=:id";
            $pdoQuery_run = $conn->prepare($pdoQuery);
            $pdoQuery_exec = $pdoQuery_run->execute(array(":fname"=>$fname, ":lname"=>$lname, ":email"=>$email,":password"=>$password, ":mobile"=>$mobile,":dob"=>$dob, ":id"=>$id));
            
            if($pdoQuery_exec){
                // session_start();
                $_SESSION['id'] = $id;
                $_SESSION['fname'] = $fname;
                $_SESSION['lname'] = $lname;
                $_SESSION['email'] = $email;
                $_SESSION['password'] = $password;
                $_SESSION['mobile'] = $mobile;
                $_SESSION['dob'] = $dob;
    
                $user = new stdClass();
                $user->fname = $_SESSION['fname'];
                $user->lname = $_SESSION['lname'];
                $user->email = $_SESSION['email'];
                $user->password = $_SESSION['password'];
                $user->mobile = $_SESSION['mobile'];
                $user->dob = $_SESSION['dob'];

                $myJSON = json_encode($user);
                // session_start();
                $_SESSION['profileData'] = $myJSON;  
                $_SESSION['create'] = "Updated Successfully";

                echo json_encode(['status' => 'success']);
            }else{
                echo json_encode(['status' => 'error', 'message' => 'Update failure']);
            }      
        }    
    }catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }

}


?>