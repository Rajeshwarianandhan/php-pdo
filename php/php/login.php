<?php

header("Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE");
header('Access-Control-Allow-Credentials: true');
header('Content-Type: plain/text');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Methods,Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Authorization, X-Requested-With");

include_once("../php/config.php");

if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        signin($conn);
        // echo "hii";
    }

    function signin($conn){

try {
    if(isset($_POST['email']) && isset($_POST['password'])){
        $email = trim($_POST['email']);
        $password = trim($_POST['password']);
    
        $select = $conn->prepare("SELECT * FROM users WHERE email =?");
        $select->execute([$email]);
          if($select->rowCount() > 0){
            $row = $select->fetch(PDO::FETCH_OBJ);
            $email = $row->email;
            $cpassword = $row->password;
            $fname = $row->fname;
            $lname = $row->lname;
            $mobile = $row->mobile;
            $dob = $row->dob;
            $id = $row->id;
            if($password === $cpassword){
                session_start();
                $_SESSION['id'] = $id;
                $_SESSION['fname'] = $fname;
                $_SESSION['lname'] = $lname;
                $_SESSION['email'] = $email;
                $_SESSION['password'] = $password;
                $_SESSION['mobile'] = $mobile;
                $_SESSION['dob'] = $dob;
                echo json_encode(['status' => 'success']);
            }else {
                // echo json_encode(['status' => 'passwordError', 'message' => 'Your password is wrong']);
                echo json_encode(['status' => 'passwordError']);
            }
         }else {
            // echo json_encode(['status' => 'emailError','message' => 'Your email is wrong']);
            echo json_encode(['status' => 'emailError']);
         }
        }
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
        
}


?>