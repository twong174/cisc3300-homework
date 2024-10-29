<?php
class Product {
    // Properties
    private $name;
    private $price;

    // Constructor to set initial properties
    public function __construct($name, $price) {
        $this->name = $name;
        $this->price = $price;
    }

    // Getter for name
    public function getName() {
        return $this->name;
    }

    // Setter for name
    public function setName($name) {
        $this->name = $name;
    }

    // Getter for price
    public function getPrice() {
        return $this->price;
    }

    // Setter for price
    public function setPrice($price) {
        $this->price = $price;
    }

    // Static method
    public static function applyDiscount($price, $discount) {
        return $price - ($price * $discount / 100);
    }
}

$product = new Product("Laptop", 1500);
echo "Product Name: " . $product->getName() . "\n"; // Output: Product Name: Laptop
echo "Product Price: $" . $product->getPrice() . "\n"; // Output: Product Price: $1500

// Using the static method
$discountedPrice = Product::applyDiscount($product->getPrice(), 10);
echo "Discounted Price: $" . $discountedPrice . "\n"; // Output: Discounted Price: $1350
?>
