

import BillingForm from "../Checkout_Billing details/Checkout_Billing details";
import OrderSummary from "../Checkout_OrderSummary/Checkout_OrderSummary";

const Checkout = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-6 mt-20 pt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <BillingForm />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
