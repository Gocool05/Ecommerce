import React from 'react';

const ReplacementPolicy = () => {
  return (
    <div className="p-6 text-red">
      {/* Replacement Policy Title */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Replacement Policy</h2>
        <p className="text-lg leading-relaxed mb-4">
          At Shriworks, we are committed to delivering high-quality, handcrafted products. We offer a replacement policy for defective items or items that do not match the product description. Please review our replacement policy details below:
        </p>
      </section>

      {/* Eligibility for Replacement Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Eligibility for Replacement:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Replacements are only available for items that are defective or significantly different from what was described at the time of purchase.</li>
          <li>Custom-made items, such as bespoke temple jewelry, statues, or other custom orders, are not eligible for replacement unless there is a manufacturing defect.</li>
          <li>Items damaged during transport are not covered under our replacement policy. We recommend purchasing shipping insurance or working with the transport company to ensure safe delivery.</li>
        </ul>
      </section>

      {/* Replacement Process Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Replacement Process:</h3>
        <ol className="list-decimal list-inside text-lg leading-relaxed mb-4">
          <li>Contact Us: To request a replacement, please contact us at [your customer service email] within 7 days of receiving your order. Include your order number and a description of the issue, along with photos of the product.</li>
          <li>Approval: Once we review your request, we will confirm if the item is eligible for replacement and provide instructions for the next steps.</li>
          <li>Return of Defective Item: If a replacement is approved, the defective item must be returned to us in its original packaging. The cost of return shipping is the customer’s responsibility unless otherwise specified.</li>
          <li>Replacement Shipping: After we receive and inspect the returned item, we will send a replacement product. Shipping times for replacements may vary depending on product availability.</li>
        </ol>
      </section>

      {/* Exclusions Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Exclusions:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Shriworks is not responsible for any damage caused during shipping or transit. We ensure that all items are securely packaged before dispatch. If you receive a damaged product due to transport, please contact the shipping carrier directly to file a claim.</li>
          <li>We do not offer replacements for custom-made or personalized items unless they are defective.</li>
        </ul>
      </section>

      {/* Important Note Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Important Note:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>All replacement requests must be made within 1 day of receiving the item. Beyond this period, replacement requests will not be accepted.</li>
          <li>Replacement items are subject to availability. If the same product is no longer available, we will offer an alternative or refund at our discretion.</li>
        </ul>
      </section>
    </div>
  );
};

export default ReplacementPolicy;
