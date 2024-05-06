
<?php
// Database connection
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to sanitize input data
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Form submission handling
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize inputs
    $name = sanitize_input($_POST["name"]);
    $email = sanitize_input($_POST["email"]);
    $contact_number = sanitize_input($_POST["contact_number"]);
    $subject = sanitize_input($_POST["subject"]);
    $message = sanitize_input($_POST["message"]);
    
    // SQL query to insert data into the database
    $sql = "INSERT INTO contact_form (name, email, contact_number, subject, message)
    VALUES ('$name', '$email', '$contact_number', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Thank you! Your form has been received.";
    } else {
        echo "Error:Sorry, there was an error processing your form. Please try again later. " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>