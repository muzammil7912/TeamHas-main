<?php
require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));
$allUsers = mysqli_query($db_conn,"SELECT * FROM `users` WHERE `email`='$data->email'");
if(mysqli_num_rows($allUsers) > 0){
$allUsers = mysqli_query($db_conn,"SELECT * FROM `users` WHERE `email`='$data->email' and `password`='$data->password'");
if(mysqli_num_rows($allUsers) > 0){
    
while($row_users = mysqli_fetch_array($allUsers)){ 
$json_array[] = array(
'id' =>  $row_users['id'],
'user_email' =>  $row_users['email'],
'user_password' =>  $row_users['password'],
);
}
echo json_encode(["fetchusers"=>$json_array,"message"=>"You have successfully logged in.","token"=>rand(), "success"=>1]);
return;

}else{
echo json_encode(["success"=>false,"message"=>"Password incorrect!"]);
return;
}


}
else{
echo json_encode(["success"=>false,"message"=>"Email not Found!"]);
return;
}

?>