class PaymentError extends Error {
  constructor(message, paymentId, amount) {
    super(message);
    this.name = "PaymentError";
    this.paymentId = paymentId;
    this.amount = amount;
    this.timestamp = new Date();
  }
}

function processPayment(payment) {
  if (!payment.valid) {
    throw new PaymentError(
      "Invalid payment details",
      payment.id,
      payment.amount
    );
  }
  if (payment.amount > 10000) {
    throw new PaymentError(
      "Amount exceeds limit",
      payment.id,
      payment.amount
    );
  }
  // Process payment...
}

try {
  processPayment({ id: "txn123", amount: 15000, valid: true });
} catch (error) {
  if (error instanceof PaymentError) {
    console.error(`Payment failed (${error.paymentId}): ${error.message}`);
    console.error(`Amount: ${error.amount}, Time: ${error.timestamp}`);
  } else {
    console.error("Unexpected error:", error);
  }
}