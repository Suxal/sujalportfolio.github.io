<?php
if ($_SERVER["REQUEST_METHOD"]==="POST"){
    
    $fname = htmlspecialchars($_POST['firstname']);
    $lname = htmlspecialchars($_POST['lastname']);

    echo "<script>
        alert('Thank you $fname $lname! Your message has been sent.');
        window.location.href = 'index.html#contact';
    </script>";
}
?>
