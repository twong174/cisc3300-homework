<?php
$studentGrades = [
    "John" => "A",
    "Sarah" => "B",
    "Paul" => "C",
    "Anna" => "A+"
];

header('Content-Type: application/json');
echo json_encode($studentGrades);
?>
