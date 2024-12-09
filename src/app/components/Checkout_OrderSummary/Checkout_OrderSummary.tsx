const OrderSummary = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Product</h2>
      <div className="mb-4">
        <p>Asgaard sofa x 1</p>
        <p>Rs. 250,000.00</p>
      </div>
      <div className="flex justify-between font-bold">
        <p>Subtotal</p>
        <p>Rs. 250,000.00</p>
      </div>
      <div className="flex justify-between font-bold text-lg mt-4">
        <p>Total</p>
        <p className="text-yellow-500">Rs. 250,000.00</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
        <div className="space-y-2">
          <div>
            <input
              type="radio"
              id="bank"
              name="payment"
              className="mr-2"
              checked
            />
            <label htmlFor="bank">Direct Bank Transfer</label>
          </div>
          <div>
            <input type="radio" id="cash" name="payment" className="mr-2" />
            <label htmlFor="cash">Cash On Delivery</label>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Your personal data will be used to support your experience
          throughout this website, to manage access to your account, and
          for other purposes described in our <a href="#" className="text-blue-500">privacy policy</a>.
        </p>
      </div>
      <button className="w-full mt-6 bg-yellow-500 text-white py-2 rounded-md">
        Place order
      </button>
    </div>
  );
};

export default OrderSummary;
