<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


           $servername = "sdb-u.hosting.stackcp.net";
            $username = "razxub03ye";
            $password = "razxub03ye";
            $dbname =  "projectApi-3231313606";
            
            
$db_conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if($db_conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
error_reporting(E_ALL);
ini_set('display_errors','Off');
?>