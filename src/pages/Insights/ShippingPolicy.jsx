import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="p-6  text-red">
      {/* Shipping Policy Title */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Shipping Policy</h2>
        <p className="text-lg leading-relaxed mb-4">
          At Shriworks, we strive to ensure that all our handcrafted temple items and jewelry are securely packaged and delivered to you on time. Below are the details of our shipping policy:
        </p>
      </section>

      {/* Shipping Locations */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Shipping Locations:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Shriworks offers shipping within India and to select international countries. For international orders, please contact Shriworks’ customer service team for available shipping options and costs.</li>
        </ul>
      </section>

      {/* Processing Time */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Processing Time:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>All orders placed with Shriworks are processed within 5-7 business days. Custom or bespoke orders may require additional time depending on the complexity of the product.</li>
          <li>Orders will not be processed, shipped, or delivered on weekends or holidays.</li>
          <li>For custom-made products, additional time is required for crafting and quality checks. Shriworks will notify you when your order is ready for dispatch.</li>
        </ul>
      </section>

      {/* Shipping Rates and Delivery Estimates */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Shipping Rates and Delivery Estimates:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Shipping rates will be calculated and displayed at checkout based on your location and the size/weight of the items ordered.</li>
          <li>Estimated delivery times are as follows:
            <ul className="list-disc list-inside ml-6">
              <li><strong>Domestic Orders (within India):</strong> 5-10 business days after dispatch.</li>
              <li><strong>International Orders:</strong> 10-20 business days, depending on customs and destination country.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Shipment Confirmation and Tracking */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Shipment Confirmation and Tracking:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>After your order is shipped, you will receive a shipment confirmation email with tracking details.</li>
          <li>If you do not receive tracking information within 7 business days, please reach out to us at [your customer service email].</li>
        </ul>
      </section>

      {/* Customs, Duties, and Taxes */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Customs, Duties, and Taxes:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Shriworks is not responsible for any customs fees, taxes, or duties on international shipments. All fees imposed during or after shipping are the customer’s responsibility.</li>
        </ul>
      </section>

      {/* Packaging */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Packaging:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>We take extra care to package your items securely. However, Shriworks is not responsible for damage during shipping. We recommend considering shipping insurance, especially for valuable or delicate items.</li>
        </ul>
      </section>

      {/* Undeliverable or Incorrect Address */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Undeliverable or Incorrect Address:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>It is important to provide accurate and complete shipping information at checkout. Shriworks is not responsible for undeliverable shipments due to incorrect addresses provided by the customer.</li>
        </ul>
      </section>

      {/* Lost or Delayed Shipments */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Lost or Delayed Shipments:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>For delayed or lost shipments, please contact the carrier using your tracking information. While we cannot control carrier delays, we will assist in resolving any issues.</li>
        </ul>
      </section>

      {/* Contact Information */}
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          If you have further questions regarding the Shriworks shipping policy, please contact us at [your contact information].
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
