// File: TermsAndConditions.tsx or pages/terms.tsx
import React from 'react';

const TermsAndConditions = () => {
 

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 px-8 py-12 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          <p className="mt-3 text-xl opacity-90">Sanjayasuriya</p>
          <p className="mt-2 text-sm opacity-80">Last updated: December 1, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none px-8 py-12 text-gray-800 leading-relaxed space-y-10">
          <p className="text-center text-gray-600 italic">
            By accessing <strong>sanjayasuriya.online</strong>, you agree to be bound by these Terms & Conditions.
          </p>

          {/* 1. Use of Our Service */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">1. Use of Our Service</h2>
            <p>Our platform provides:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Tuition class recordings (recorded sessions)</li>
              <li>Educational content such as past papers, notes, model papers, and assignments</li>
            </ul>
            <p className="mt-4">
              Users must create an account to purchase and unlock premium content. Free content may be available without login.
            </p>
          </section>

          {/* 2. Digital Content Access */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">2. Digital Content Access</h2>
            <p>Once a purchase is successfully completed:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Content becomes immediately available in your account</li>
              <li>Access is granted <strong>only to the registered user</strong> who made the purchase</li>
              <li>Sharing, distributing, re-uploading, or screen recording content is <strong>strictly prohibited</strong></li>
            </ul>
          </section>

          {/* 3. Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">3. Payment Terms</h2>
            <p>
              All payments are securely processed through <strong>PayHere</strong> (Sri Lanka's trusted payment gateway).
            </p>
            <p className="mt-3 font-semibold text-red-600">
              All payments are non-refundable, except in rare cases of technical errors (e.g., double charge or system failure), which will be reviewed case-by-case.
            </p>
          </section>

          {/* 4. User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-700  mb-4">4. User Responsibilities</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Share your login credentials with anyone</li>
              <li>Resell, redistribute, or commercially exploit purchased content</li>
              <li>Attempt to download, screen record, hack, extract, or copy video/content</li>
              <li>Use automation tools or bots to access the platform</li>
            </ul>
          </section>

          {/* 5. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">5. Intellectual Property</h2>
            <p>
              All videos, class recordings, notes, papers, and materials are the exclusive intellectual property of <strong>Sanjaya Suriya</strong>.
            </p>
            <p className="mt-3 font-medium text-red-700">
              Unauthorized reproduction, distribution, or sharing may result in permanent account suspension and legal action.
            </p>
          </section>

          {/* 6. Account Suspension */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">6. Account Suspension</h2>
            <p>We reserve the right to suspend or terminate accounts without refund for:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Content piracy or sharing</li>
              <li>Fraudulent payment or chargeback attempts</li>
              <li>Abusive behavior or misuse of the platform</li>
              <li>Multiple logins from different locations/devices indicating sharing</li>
            </ul>
          </section>

         

          {/* 7. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">7. Limitation of Liability</h2>
            <p>We are not responsible for issues caused by:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Internet connectivity problems affecting video playback</li>
              <li>Device or browser incompatibility</li>
              <li>User errors (e.g., wrong purchase, forgotten password)</li>
              <li>Third-party service outages (YouTube, Vimeo, PayHere, etc.)</li>
            </ul>
          </section>

          {/* 8. Contact */}
          <section className="bg-indigo-50 rounded-xl p-8 text-center border border-indigo-200">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Contact Us</h2>
            <p className="text-lg">
              For support, inquiries, or refund requests:
            </p>
            <div className="mt-6 space-y-3 text-lg font-medium">
              <p>Email: <a href="mailto:support@sanjayasuriya.online" className="text-indigo-600 hover:underline">support@sanjayasuriya.online</a></p>
              <p>WhatsApp: <a href="https://wa.me/94771234567" className="text-green-600 hover:underline">+94 77 123 4567</a> (Support only)</p>
              <p>Website: <a href="https://sanjayasuriya.online" className="text-indigo-600 hover:underline">sanjayasuriya.online</a></p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
          © 2025 Sanjayasuriya. All Rights Reserved. | Made with passion for education
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;