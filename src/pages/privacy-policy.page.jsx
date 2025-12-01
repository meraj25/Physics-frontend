// PrivacyPolicy.tsx or pages/privacy-policy.tsx
import React from 'react';

const PrivacyPolicy = () => {


  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-lg rounded-lg p-8">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mt-2">
            Last Updated: December 1, 2025
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Sanjayasuriya (sanjayasuriya.online)
          </p>
        </header>

        <div className="prose max-w-none text-gray-800 leading-relaxed">
          <p className="text-lg mb-8">
            This Privacy Policy governs the manner in which Sanjayasuriya (sanjayasuriya.online) collects, uses, discloses, and protects personal information provided by users of the Site, especially when conducting business transactions or accessing tuition recordings, educational materials, and online services.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p>
              Sanjaya Suriya may collect the following types of personal and usage information:
            </p>
            <ol className="list-decimal list-inside mt-4 space-y-2">
              <li>Full name, email address, and phone number.</li>
              <li>Billing information, securely processed via PayHere.</li>
              <li>Account login credentials, stored in encrypted form.</li>
              <li>Usage data, including pages viewed, classes accessed, time spent, and device information.</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p>
              Sanjaya Suriya uses the collected information for the following purposes:
            </p>
            <ol className="list-decimal list-inside mt-4 space-y-2">
              <li>To provide and manage access to purchased educational content.</li>
              <li>To enhance platform performance and user learning experience.</li>
              <li>To process secure payments and issue transaction receipts.</li>
              <li>To send service-related notifications (e.g., new content updates, password resets).</li>
              <li>To detect and prevent fraud, piracy, and unauthorized account access.</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Payments</h2>
            <p>
              All payment transactions are processed securely through PayHere, a licensed payment gateway in Sri Lanka. Sanjaya Suriya does not store or retain credit or debit card details on its servers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Protection & Security</h2>
            <p>
              Sanjaya Suriya implements reasonable technical and organizational measures, including encryption, secure server hosting, and access controls, to protect personal data against unauthorized access, loss, or misuse.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p>
              Sanjaya Suriya may engage third-party services, including:
            </p>
            <ol className="list-decimal list-inside mt-4 space-y-2">
              <li>PayHere for payment processing.</li>
              <li>Google Analytics or similar tools for anonymous usage statistics.</li>
              <li>Secure cloud hosting providers for content delivery.</li>
            </ol>
            <p className="mt-4">
              All third parties are contractually obligated to adhere to strict privacy and security standards.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
            <p>
              Users may exercise the following rights by contacting Sanjaya Suriya:
            </p>
            <ol className="list-decimal list-inside mt-4 space-y-2">
              <li>Request access to personal data held by us.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Request deletion of account and data, subject to legal obligations.</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
            <p>
              For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:
            </p>
            <ul className="list-none mt-4 space-y-2">
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:support@sanjayasuriya.online" className="text-blue-600 hover:underline">
                  support@sanjayasuriya.online
                </a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{' '}
                <a href="https://wa.me/94712453817" className="text-blue-600 hover:underline">
                  +94 77 123 4567
                </a>
              </li>
            </ul>
          </section>
        </div>

        <footer className="text-center text-gray-600 mt-10 border-t pt-6">
          <p>© 2025 Sanjayasuriya. All rights reserved.</p>
          <p className="mt-2">sanjayasuriya.online</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;