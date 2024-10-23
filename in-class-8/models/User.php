<?php

namespace models;

class User {
    public function getAllUsers() {
        return [
            ['id' => 1, 'name' => 'Tyler Wong'],
            ['id' => 2, 'name' => 'Lola Gunter'],
            ['id' => 3, 'name' => 'Molla Molla']
        ];
    }
}
