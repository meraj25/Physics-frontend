

const PrivacyPolicy = () => {
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 px-8 py-12 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-xl opacity-90">Sanjayasuriya</p>
          <p className="mt-2 text-sm opacity-80">Last updated: December 1, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none px-8 py-12 text-gray-800 space-y-12">
          <section className="text-center">
            <p className="text-lg leading-relaxed">
              This Privacy Policy explains how <strong>Sanjaya Suriya (sanjayasuriya.online)</strong> collects, uses, and protects your personal information when you access our tuition class recordings, lesson videos, educational materials, and online services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-gray-50 rounded-xl p-8 border">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Information We Collect</h2>
            <p>We may collect the following personal and usage information:</p>
            <ul className="mt-4 space-y-3 text-lg list-disc list-inside marker:text-green-600">
              <li>Full name, email address, and phone number</li>
              <li>Billing information (securely processed via PayHere)</li>
              <li>Account login credentials (encrypted)</li>
              <li>Usage data: pages viewed, classes accessed, time spent, device info</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-5">How We Use Your Information</h2>
            <p>We use your data only to:</p>
            <ul className="mt-4 space-y-3 text-lg list-disc list-inside marker:text-blue-600">
              <li>Provide and manage access to your purchased content</li>
              <li>Improve platform performance and your learning experience</li>
              <li>Process secure payments and issue receipts</li>
              <li>Send important service updates (e.g., new classes, password reset)</li>
              <li>Detect and prevent fraud, piracy, and unauthorized account access</li>
            </ul>
          </section>

          {/* Payments */}
          <section className="bg-green-50 rounded-xl p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-green-900 mb-5">Secure Payments</h2>
            <p className="text-lg">
              All payments are processed through <strong>PayHere</strong> — Sri Lanka’s trusted and licensed payment gateway.
            </p>
            <p className="mt-4 text-lg font-semibold text-green-800">
              We do <span className="underline">NOT</span> store your credit/debit card details on our servers.
            </p>
          </section>

          {/* Data Protection */}
          <section className="bg-purple-50 rounded-xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-purple-900 mb-5">Data Protection & Security</h2>
            <p className="text-lg">
              We implement industry-standard technical and organizational measures (encryption, secure servers, access controls) to protect your personal data from unauthorized access, loss, or misuse.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="bg-amber-50 rounded-xl p-8 border border-amber-300">
            <h2 className="text-2xl font-bold text-amber-900 mb-5">Third-Party Services</h2>
            <p>We only share data with trusted partners such as:</p>
            <ul className="mt-4 space-y-2 text-lg list-disc list-inside marker:text-amber-700">
              <li>PayHere (payment processing)</li>
              <li>Google Analytics or similar tools (anonymous usage statistics only)</li>
              <li>Secure cloud hosting providers</li>
            </ul>
            <p className="mt-4">All third parties are bound by strict privacy and security obligations.</p>
          </section>

          {/* Your Rights */}
          <section className="bg-indigo-50 rounded-xl p-8 border border-indigo-300">
            <h2 className="text-2xl font-bold text-indigo-900 mb-5">Your Rights</h2>
            <p>You may contact us to:</p>
            <ul className="mt-4 space-y-3 text-lg list-disc list-inside marker:text-indigo-600">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your account and data (subject to legal requirements)</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl mb-6">
              Have questions about your privacy or this policy?
            </p>
            <div className="space-y-4 text-xl font-medium">
              <p>
                Email:{' '}
                <a href="mailto:support@sanjayasuriya.online" className="underline hover:text-cyan-200">
                  support@sanjayasuriya.online
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a href="https://wa.me/94771234567" className="underline hover:text-cyan-200">
                  +94 77 123 4567
                </a>
              </p>
            </div>
          </section>
        </div>

        <div className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
          © 2025 Sanjayasuriya • sanjayasuriya.online • Your Privacy Matters
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;