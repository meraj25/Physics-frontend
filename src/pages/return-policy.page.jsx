

const RefundPolicy = () => {


  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 px-8 py-12 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Return & Refund Policy</h1>
          <p className="mt-3 text-xl opacity-90">Sanjayasuriya</p>
          <p className="mt-2 text-sm opacity-80">Last updated: December 1, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none px-8 py-12 text-gray-800 space-y-10">
          <div className="text-center">
            <p className="text-lg text-gray-700">
              At <strong>Sanjaya Suriya (sanjayasuriya.online)</strong>, we provide digital educational content such as
              tuition class recordings, lesson videos, past papers, assignments, and study materials.
            </p>
            <p className="mt-6 text-xl font-semibold text-red-700">
              Since all products are digital and instantly accessible after purchase,<br />
              <span className="underline">all sales are final and non-refundable</span>.
            </p>
          </div>

          <section className="bg-red-50 border border-red-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              No Refunds After Purchase
            </h2>
            <p>
              Once a purchase is completed and content is unlocked:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-3 text-lg">
              <li>The content becomes immediately viewable and/or downloadable</li>
              <li>The digital product has been delivered instantly</li>
              <li>The transaction cannot be reversed</li>
            </ul>
            <p className="mt-6 text-xl font-bold text-red-900">
              Therefore, we do not issue refunds for any completed payments.
            </p>
          </section>

          <section className="bg-amber-50 border border-amber-300 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              Exceptions – Refunds May Be Considered Only If:
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg marker:text-amber-600">
              <li>You were charged <strong>twice</strong> for the same item (double charge)</li>
              <li>You purchased but <strong>did not receive access</strong> due to a confirmed technical error on our side</li>
            </ul>
            <p className="mt-6 text-lg font-semibold">
              Such cases will be reviewed individually. You <strong>must contact us within 48 hours</strong> of the transaction
              with your payment reference number and screenshots.
            </p>
          </section>

          <section className="bg-indigo-50 border border-indigo-200 rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold text-indigo-800 mb-6">Contact Us for Refund Requests</h2>
            <div className="space-y-4 text-lg">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:support@sanjayasuriya.online" className="text-indigo-600 hover:underline font-bold">
                  support@sanjayasuriya.online
                </a>
              </p>
              <p>
                <strong>WhatsApp (Support only):</strong>{' '}
                <a href="https://wa.me/94712453817" className="text-green-600 hover:underline font-bold">
                  +94 77 123 4567
                </a>
              </p>
            </div>
            <p className="mt-8 text-gray-600">
              We respond to all legitimate refund requests within 24–48 hours.
            </p>
          </section>

          <div className="text-center text-gray-600 mt-12">
            <p>Thank you for understanding our policy. We are committed to delivering high-quality education fairly and securely.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
          © 2025 Sanjayasuriya • sanjayasuriya.online • All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;