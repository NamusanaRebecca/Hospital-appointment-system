// login.php
<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "medical_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user = mysqli_real_escape_string($conn, $_POST['username']);
$pass = mysqli_real_escape_string($conn, $_POST['password']);

$sql = "SELECT * FROM users WHERE username='$user'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($pass, $row['password'])) {
        $_SESSION['user'] = $user;
        echo "Login successful!";
    } else {
        echo "Invalid password!";
    }
} else {
    echo "No user found!";
}

$conn->close();
?>