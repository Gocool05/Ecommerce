import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="p-6 text-red">
      {/* Title */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Terms and Conditions</h2>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to Shriworks. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with these terms. If you do not agree, please do not use our website.
        </p>
      </section>

      {/* Sections */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">1. Use of Website</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>The content on this website is for informational purposes and may be updated without prior notice.</li>
          <li>You agree not to use the website for any unlawful activities or in violation of these terms.</li>
          <li>Unauthorized use of this website may result in legal action.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">2. Product Information</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Shriworks specializes in handcrafted temple jewelry and artifacts. Due to the handmade nature, slight variations may occur.</li>
          <li>We strive to provide accurate product descriptions, but we do not guarantee that the information is error-free.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">3. Order and Payment</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Orders placed on our website are subject to availability and acceptance.</li>
          <li>Prices are listed in INR and are subject to change without notice.</li>
          <li>Payments must be made through our accepted payment methods at checkout.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">4. Shipping & Delivery</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Orders are processed within 5-7 business days. Delivery times may vary based on location.</li>
          <li>Shriworks is not responsible for delays caused by shipping carriers or customs procedures.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">5. Returns & Replacements</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Returns are accepted only for defective items as per our Replacement Policy.</li>
          <li>Custom-made products are non-returnable unless defective.</li>
          <li>Customers must notify us of any issues within 1 day of receiving the item.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">6. Cancellation Policy</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Orders can be canceled within 24 hours of placement if they have not been processed.</li>
          <li>Custom orders cannot be canceled once production has begun.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">7. Intellectual Property</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>All content, including images, text, and logos, are the property of Shriworks and may not be used without permission.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">8. Limitation of Liability</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>Shriworks shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or products.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-red-600 mb-4">9. Governing Law</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li>These terms are governed by the laws of India. Any disputes shall be resolved in courts located in Tamil Nadu.</li>
        </ul>
      </section>
    </div>
  );
};

export default TermsAndConditions;
