const OrderSummary = () => {
  return (
    <div className="p-6 rounded-md space-y-6">
      {/* Product Header with Subtotal */}
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-bold ">Product</h2>
        <div className="text-right">
          <p className="font-semibold text-2xl">Subtotal</p>
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-2">
        <div className="flex justify-between">
        <p>Asgaard sofa x 1</p>
        <p>Rs. 250,000.00</p>
        </div>
      </div>

      {/* Subtotal and Total */}
      <div className="space-y-4">
        <div className="flex justify-between font-semibold">
          <p>Subtotal</p>
          <p>Rs. 250,000.00</p>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <p>Total</p>
          <p className="text-yellow-500">Rs. 250,000.00</p>
        </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Payment Method</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              id="bank"
              name="payment"
              className="mr-2"
              defaultChecked
            />
            Direct Bank Transfer
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              id="cash"
              name="payment"
              className="mr-2"
            />
            Cash On Delivery
          </label>
        </div>
        <p className="text-sm text-gray-600">
          Your personal data will be used to support your experience
          throughout this website, to manage access to your account, and
          for other purposes described in our{" "}
          <a href="#" className="text-black underline">
            privacy policy
          </a>.
        </p>
      </div>

      {/* Place Order Button */}
      <button className="w-fit mt-6 border ml-28 border-black text-black py-2.5 px-14 rounded-md">
        Place order
      </button>
    </div>
  );
};

export default OrderSummary;
