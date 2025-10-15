
// Custom exceptions
// Custom exceptions allow you to create your own error types that are specific to your application's needs.
// They provide more meaningful error information and make error handling more precise.


// Why Use Custom Exceptions?
// Domain-specific errors - Create errors that match your application's logic
// Better error classification - Distinguish between different error types
// Additional error metadata - Include extra information beyond just a message
// Consistent error handling - Standardize how errors are reported in your codebase


// Basic Custom Exception

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Usage
throw new ValidationError("Invalid email format");


// Custom Exception with Additional Properties

class DatabaseError extends Error {
  constructor(message, query, parameters) {
    super(message);
    this.name = "DatabaseError";
    this.query = query;
    this.parameters = parameters;
    this.timestamp = new Date();
  }
}

// Usage
throw new DatabaseError(
  "Connection timeout",
  "SELECT * FROM users",
  { limit: 100 }
);


