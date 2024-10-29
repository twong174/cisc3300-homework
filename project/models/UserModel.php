<?php
class UserModel {
    public function getAllUsers() {
        return [
            ['id' => 1, 'name' => 'Tyler Wong', 'email' => 'twong@fordham.edu'],
            ['id' => 2, 'name' => 'Lola Gunter', 'email' => 'lgunter@fordham.edu'],
            ['id' => 3, 'name' => 'Molla Molla', 'email' => 'mmolla@fordham.edu']
        ];
    }
}
