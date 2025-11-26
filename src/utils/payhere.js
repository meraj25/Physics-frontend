// Load PayHere script dynamically
export const loadPayHereScript = () => {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.payhere) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.payhere.lk/lib/payhere.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load PayHere script'));
    document.body.appendChild(script);
  });
};

// Initiate PayHere payment
export const initiatePayHerePayment = async ({
  orderId,
  amount,
  currency,
  hash,
  merchantId,
  contentTopic,
  userInfo,
  onCompleted,
  onDismissed,
  onError,
}) => {
  try {
    await loadPayHereScript();

    const payment = {
      sandbox: true, // Set to false for production
      merchant_id: merchantId,
      return_url: `${window.location.origin}/payment/success`,
      cancel_url: `${window.location.origin}/payment/cancel`,
      notify_url: 'http://localhost:5000/api/payments/notify', // Your backend notify URL
      order_id: orderId,
      items: contentTopic,
      amount: amount.toFixed(2),
      currency: currency,
      hash: hash,
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      email: userInfo.email,
      phone: userInfo.phone || '0771234567',
      address: 'N/A',
      city: 'Colombo',
      country: 'Sri Lanka',
    };

    // Set up callbacks
    window.payhere.onCompleted = onCompleted;
    window.payhere.onDismissed = onDismissed;
    window.payhere.onError = onError;

    // Start payment
    window.payhere.startPayment(payment);
  } catch (error) {
    console.error('PayHere initialization error:', error);
    onError('Failed to initialize payment gateway');
  }
};