<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "tracking_db";

$conn = new mysqli($host, $user, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$ip = $_SERVER['REMOTE_ADDR'];
$user_agent = $_SERVER['HTTP_USER_AGENT'];

$sql = "INSERT INTO visitor_logs (ip_address, user_agent) VALUES ('$ip', '$user_agent')";
$conn->query($sql);
$conn->close();
?>
