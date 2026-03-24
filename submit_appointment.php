// submit_appointment.php
<?php
$servername = "localhost";
$username = "root"; // My DB username
$password = ""; // MyDB password
$dbname = "medical_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = mysqli_real_escape_string($conn, $_POST['name']);
$phone = mysqli_real_escape_string($conn, $_POST['phone']);
$email = mysqli_real_escape_string($conn, $_POST['email']);

$sql = "INSERT INTO appointments (name, phone, email) VALUES ('$name', '$phone', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Appointment requested successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>