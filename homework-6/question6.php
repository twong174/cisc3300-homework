<?php
$studentGrades = [
    "John" => "A",
    "Sarah" => "B",
    "Paul" => "C",
    "Anna" => "A+"
];

foreach ($studentGrades as $student => $grade) {
    echo "$student has a grade of $grade.<br>";
}

function calculateAverage(int $totalGrades, int $numStudents = 4): float {
    return $totalGrades / $numStudents;
}

echo "The average grade is: " . calculateAverage(360) . "<br>";
?>
