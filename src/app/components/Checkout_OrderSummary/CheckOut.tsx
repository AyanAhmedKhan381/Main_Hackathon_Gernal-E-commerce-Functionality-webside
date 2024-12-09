

import BillingForm from "../Checkout_Billing details/Checkout_Billing details";
import OrderSummary from "../Checkout_OrderSummary/Checkout_OrderSummary";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <BillingForm />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
