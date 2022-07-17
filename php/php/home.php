<?php

header("Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE");
header('Access-Control-Allow-Credentials: true');
header('Content-Type: plain/text');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Methods,Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Authorization, X-Requested-With");

include_once("../php/config.php");

if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        home($conn);
        // echo "hii";
    }

    function home($conn){

        try{
            $user = new stdClass();
            session_start();
            // var_dump($_SESSION);

            $user->fname = $_SESSION['fname'];
            $user->lname = $_SESSION['lname'];
            $user->email = $_SESSION['email'];
            $user->password = $_SESSION['password'];
            $user->mobile = $_SESSION['mobile'];
            $user->dob = $_SESSION['dob'];

            $myJSON = json_encode($user);
            
            echo $myJSON;
           
            $_SESSION['profileData'] = $myJSON;   
        }catch (PDOException $e) {
            print "Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }


?>
