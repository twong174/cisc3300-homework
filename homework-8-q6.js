<?php
function divide($a, $b) {
    if ($b == 0) {
        throw new Exception("Division by zero is not allowed.");
    }
    return $a / $b;
}

try {
    $result = divide(10, 0);
    echo "Result: $result";
} catch (Exception $e) {
    echo "An error occurred: " . $e->getMessage();
}
?>
