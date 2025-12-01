// pages/terms.tsx or TermsAndConditions.tsx
import React from 'react';

const TermsAndConditions = () => {
  
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-lg rounded-lg p-8 md:p-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
          <p className="text-sm text-gray-600 mt-3">Last Updated: December 1, 2025</p>
          <p className="text-lg text-gray-700 mt-2">Sanjayasuriya – sanjayasuriya.online</p>
        </header>

        <div className="prose max-w-none text-gray-800 text-lg leading-relaxed space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using sanjayasuriya.online (the "Site"), you agree to be bound by these Terms & Conditions. If you do not agree, you must not use the Site or purchase any content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Nature of Service</h2>
            <p>
              The Site provides digital educational content including tuition class recordings, lesson videos, past papers, notes, and assignments. Access to premium content requires account registration and payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Account & Responsibilities</h2>
            <p>You agree to:</p>
            <ol className="list-decimal list-inside mt-4 space-y-3 ml-6">
              <li>Provide accurate information during registration</li>
              <li>Maintain confidentiality of your login credentials</li>
              <li>Not share, resell, redistribute, or allow third-party access to purchased content</li>
              <li>Not attempt to download, screen recording, hacking, or extraction of video/content</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p>
              All content on the Site, including videos, recordings, and materials, is the exclusive property of Sanjayasuriya and protected by copyright law. Unauthorized reproduction, distribution, or commercial use is strictly prohibited and may result in legal action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Prohibited Activities</h2>
            <p>Users shall not engage in:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-6">
              <li>Content piracy or sharing</li>
              <li>Account sharing or multiple simultaneous logins</li>
              <li>Fraudulent payment or chargeback attempts</li>
              <li>Any form of automated access or data extraction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Termination</h2>
            <p>
              Sanjayasuriya reserves the right to suspend or terminate any account without refund for violation of these Terms, at its sole discretion and without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p>
              Sanjayasuriya shall not be liable for any indirect, incidental, or consequential damages arising from use of the Site, including issues related to internet connectivity, device compatibility, or third-party service outages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p>For any queries regarding these Terms:</p>
            <ul className="list-none mt-4 space-y-3 text-lg">
              <li><strong>Email:</strong> <a href="mailto:support@sanjayasuriya.online" className="text-blue-700 hover:underline">support@sanjayasuriya.online</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/94712453817" className="text-blue-700 hover:underline">+94 712435817</a></li>
            </ul>
          </section>
        </div>

        <footer className="text-center text-gray-600 mt-16 pt-8 border-t">
          <p>© 2025 Sanjayasuriya. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;