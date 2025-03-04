import React from 'react';

const CancellationPolicy = () => {
  return (
    <div className="p-6 text-red">
      {/* Title */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Cancellation Policy</h2>
        <p className="text-lg leading-relaxed mb-4">
          At Shriworks, we understand that plans can change. To accommodate this, we offer a 24-hour window for order cancellations. Please review the details of our cancellation policy below:
        </p>
      </section>

      {/* Order Cancellation */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Order Cancellation (Within 24 Hours):</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Cancellations are allowed within 24 hours of placing your order, provided the order has not been processed or shipped.</li>
          <li>After 24 hours, or if the order has been processed or shipped, cancellations will not be accepted.</li>
        </ul>
      </section>

      {/* Custom and Bespoke Orders */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Custom and Bespoke Orders:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Cancellations for custom-made or bespoke items must be made within 24 hours of placing the order.</li>
          <li>Once production begins after 24 hours, custom orders cannot be canceled.</li>
        </ul>
      </section>

      {/* How to Cancel an Order */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">How to Cancel an Order:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>To request a cancellation, please contact Shriworks at [customer service email or phone number] within 24 hours of placing your order.</li>
          <li>Provide your order number and any relevant details. Shriworks will confirm whether your order is eligible for cancellation.</li>
        </ul>
      </section>

      {/* Refunds for Canceled Orders */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Refunds for Canceled Orders:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>If your order is canceled within the eligible time frame, Shriworks will issue a full refund to the original payment method.</li>
          <li>Refunds typically take 7-10 business days to appear in your account after confirmation of cancellation.</li>
        </ul>
      </section>

      {/* Non-Cancellable Orders */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Non-Cancellable Orders:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Orders that have been processed, shipped, or are custom-made and in production cannot be canceled after the 24-hour window.</li>
          <li>If you have received your order and there is an issue, please refer to Shriworks’ Return and Replacement Policy for further assistance.</li>
        </ul>
      </section>

      {/* Shriworks-Initiated Cancellations */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Shriworks-Initiated Cancellations:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Shriworks reserves the right to cancel any order due to unforeseen circumstances such as pricing errors, product unavailability, or other issues.</li>
          <li>In such cases, you will be notified, and a full refund will be issued.</li>
        </ul>
      </section>

      {/* Contact Information */}
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
        For any questions or to request a cancellation, please reach out to us at:
          {" "}
          <a href="mailto:info@shriworks.com" className="hover:underline font-bold">
          info@shriworks.com
          </a>
          {" "}
          call us at 
          {" "}
          <a href="tel:+919176554626" className="hover:underline font-bold">
          (+91) 91765 54626
        </a>
          {" "}
        </p>
      </section>
    </div>
  );
};

export default CancellationPolicy;
