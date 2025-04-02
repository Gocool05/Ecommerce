import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" mx-10 p-6 text-red">
      <h1 className="text-3xl font-bold mb-4 ">Privacy Policy</h1>
      <p className="mb-4">
        Shriworks is committed to protecting your privacy. This Privacy Policy explains how we
        collect, use, and safeguard your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Personal Information: Name, contact details, shipping address, and payment details.</li>
        <li>Non-Personal Information: Browser type, IP address, and browsing behavior.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To process orders and provide customer service.</li>
        <li>To improve our website and services.</li>
        <li>To send promotional emails (only if you opt-in).</li>
        <li>To comply with legal requirements.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. Information Sharing</h2>
      <p className="mb-4">
        We do not sell or share your personal information with third parties, except for service
        providers involved in order fulfillment (e.g., shipping carriers, payment processors).
      </p>

      <h2 className="text-xl font-semibold mt-6">4. Data Security</h2>
      <p className="mb-4">
        We implement security measures to protect your information from unauthorized access.
        However, no online transaction is completely secure. You provide your information at your
        own risk.
      </p>

      <h2 className="text-xl font-semibold mt-6">5. Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party sites. Shriworks is not responsible for their
        privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-6">6. Your Rights</h2>
      <p className="mb-4">
        You may request access to or deletion of your personal data by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-6">7. Policy Updates</h2>
      <p className="mb-4">
        Shriworks reserves the right to update this Privacy Policy. Changes will be posted on our
        website.
      </p>

      <h2 className="text-xl font-semibold mt-6">8. Contact Information</h2>
      <p className="mb-4">
        For any inquiries regarding our Privacy Policy, please contact us at:
      </p>
      <p className="font-semibold">Shriworks Showroom</p>
      <p>296/257, Arcot Road, Vadapalani, Chennai - 600026</p>
      <p>Phone: 9176554626</p>
      <br />
      <p className="font-semibold">Shriworks Factory</p>
      <p>No-3, Aringar Anna Co-operative Nagar, Eluminchangapalayam, Darasuram, Kumbakonam - 612702</p>
    </div>
  );
};

export default PrivacyPolicy;
