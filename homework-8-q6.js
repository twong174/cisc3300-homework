try {
    let result = riskyOperation(); 
} catch (error) {
    throw new Error("Custom error: Something went wrong during the operation!");
}
