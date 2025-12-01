// pages/refund-policy.tsx or RefundPolicy.tsx
import React from 'react';

const RefundPolicy = () => {
  

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-lg rounded-lg p-8 md:p-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Return & Refund Policy</h1>
          <p className="text-sm text-gray-600 mt-3">Last Updated: December 1, 2025</p>
          <p className="text-lg text-gray-700 mt-2">Sanjayasuriya – sanjayasuriya.online</p>
        </header>

        <div className="prose max-w-none text-gray-800 text-lg leading-relaxed space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Nature of Products</h2>
            <p>
              Sanjayasuriya provides digital educational products including but not limited to tuition class recordings, lesson videos, past papers, assignments, notes, and study materials. All products are delivered instantly upon successful payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. No Refund Policy</h2>
            <p>
              Due to the instantaneous and non-returnable nature of digital content, <strong>all sales are final</strong>. Once payment is completed and access is granted to the purchased material, <strong>no refunds will be issued</strong> under any circumstances, including but not limited to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-6">
              <li>Change of mind</li>
              <li>Accidental purchase</li>
              <li>Unsatisfactory content quality perception</li>
              <li>Device or internet issues preventing playback</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Limited Exceptions</h2>
            <p>
              A refund may be considered <strong>only</strong> in the following rare technical cases:
            </p>
            <ol className="list-decimal list-inside mt-4 space-y-3 ml-6">
              <li>Double charging for the same transaction (verified duplicate payment)</li>
              <li>Confirmed system error where purchased content was not delivered or made accessible</li>
            </ol>
            <p className="mt-4 ">
              Such requests must be submitted <strong>within 48 hours</strong> of the transaction with payment reference and proof.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How to Request an Exception</h2>
            <p>Contact us immediately at:</p>
            <ul className="list-none mt-4 space-y-3 text-lg">
              <li><strong>Email:</strong> <a href="mailto:support@sanjayasuriya.online" className="text-blue-700 hover:underline">support@sanjayasuriya.online</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/94712453817" className="text-blue-700 hover:underline">+94 712453817</a></li>
            </ul>
            <p className="mt-4">Include your PayHere transaction ID and screenshots.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Final Decision</h2>
            <p>
              Sanjayasuriya reserves the sole right to approve or deny any refund request after review. Approved refunds will be processed within 7–14 business days.
            </p>
          </section>
        </div>

        <footer className="text-center text-gray-600 mt-16 pt-8 border-t">
          <p>© 2025 Sanjayasuriya. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default RefundPolicy;