<?php
require_once 'models/UserModel.php';

class UserController {
    private $userModel;

    public function __construct() {
        $this->userModel = new UserModel();
    }

    public function getIndexView() {
        require_once 'views/index.html';
    }

    public function getUsersJson() {
        http_response_code(200);
        header('Content-Type: application/json');
        echo json_encode($this->userModel->getAllUsers());
    }
}