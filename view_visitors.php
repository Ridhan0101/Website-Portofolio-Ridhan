<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "tracking_db";

$conn = new mysqli($host, $user, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT * FROM visitor_logs ORDER BY visit_time DESC");
echo "<h2>Daftar Pengunjung</h2>";
echo "<table border='1'><tr><th>IP Address</th><th>User Agent</th><th>Waktu</th></tr>";
while ($row = $result->fetch_assoc()) {
    echo "<tr><td>{$row['ip_address']}</td><td>{$row['user_agent']}</td><td>{$row['visit_time']}</td></tr>";
}
echo "</table>";

$conn->close();
?>
