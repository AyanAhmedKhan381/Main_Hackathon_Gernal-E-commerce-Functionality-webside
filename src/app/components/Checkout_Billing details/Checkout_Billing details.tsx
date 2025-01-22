const BillingForm = () => {
  return (
    <div className="p-6 rounded-md bg-white/80 shadow-md shadow-black/50">
      <h2 className="text-2xl font-bold mb-4">Billing details</h2>
      <form className="space-y-4">
        {/* First Name and Last Name */}
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="first-name" className="block mb-1 font-medium text-gray-500">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="w-full py-3.5 px-6 border rounded-md"
            />
          </div>
          <div className="w-full">
            <label htmlFor="last-name" className="block mb-1 font-normal">
              Last Name
            </label>
            <input
              type="text"
              className="w-full py-3.5 px-6 border rounded-md"
            />
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company-name" className="block mb-1 font-medium">
            Company Name (Optional)
          </label>
          <input
            type="text"
            className="w-full py-3.5 px-6 border rounded-md"
          />
        </div>

        {/* Country / Region */}
        <div>
          <label htmlFor="country" className="block mb-1 font-medium">
            Country / Region
          </label>
          <select
            id="country"
            className="w-full py-3.5 px-6 border rounded-md"
          >
            <option>Sri Lanka</option>
          </select>
        </div>

        {/* Street Address */}
        <div>
          <label htmlFor="street-address" className="block mb-1 font-medium">
            Street Address
          </label>
          <input
            type="text"
            id="street-address"
            className="w-full py-3.5 px-6 border rounded-md"
          />
        </div>

        {/* Town / City */}
        <div>
          <label htmlFor="city" className="block mb-1 font-medium">
            Town / City
          </label>
          <input
            type="text"
            id="city"
            className="w-full py-3.5 px-6 border rounded-md"
          />
        </div>

        {/* Province */}
        <div>
          <label htmlFor="province" className="block mb-1 font-medium">
            Province
          </label>
          <select
            id="province"
            className="w-full py-3.5 px-6 border rounded-md"
          >
            <option>Western Province</option>
          </select>
        </div>

        {/* ZIP Code */}
        <div>
          <label htmlFor="zip-code" className="block mb-1 font-medium">
            ZIP Code
          </label>
          <input
            type="text"
            id="zip-code"
            placeholder="ZIP Code"
            className="w-full py-3.5 px-6 border rounded-md"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            className="w-full py-3.5 px-6 border rounded-md"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="w-full py-3.5 px-6 border rounded-md"
          />
        </div>

        {/* Additional Information */}
        <div>
          <label
            htmlFor="additional-info"
            className="block mb-1 font-medium"
          >
            Additional Information
          </label>
          <textarea
            id="additional-info"
            placeholder="Additional information"
            className="w-full py-3.5 px-6 border rounded-md"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;
