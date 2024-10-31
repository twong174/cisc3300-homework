<?php
require_once 'controllers/UserController.php';

$controller = new UserController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($_SERVER['REQUEST_URI'] === '/users') {
        $controller->getUsersJson();
    } else {
        $controller->getIndexView();
    }
} else {
    
    http_response_code(405); 
    echo "405 Method Not Allowed";
}
