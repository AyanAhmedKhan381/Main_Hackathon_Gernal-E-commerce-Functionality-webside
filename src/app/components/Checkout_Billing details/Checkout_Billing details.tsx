"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { billingFormSchema, BillingFormData } from "./billingFormSchema"; // Import schema
import { useState } from "react"; // Import useState hook

const BillingForm = () => {
  const [formData, setFormData] = useState<BillingFormData | null>(null); // State to hold form data
  const [provinces, setProvinces] = useState<string[]>([]); // State to store provinces based on selected country
  console.log(formData)

  const countries = ["Sri Lanka", "India", "Pakistan"]; // List of countries
  const provincesData: { [key: string]: string[] } = {
    "Sri Lanka": ["Western Province", "Southern Province", "Central Province"],
    "India": ["Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh"],
    "Pakistan": ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"],
  };

  const {
    register,
    handleSubmit,
    reset,  // Add reset to reset the form
    formState: { errors },
  } = useForm<BillingFormData>({
    resolver: zodResolver(billingFormSchema),
  });

  // Handle country selection and set provinces accordingly
  const handleCountryChange = (country: string) => {
    setProvinces(provincesData[country] || []);
  };

  const onSubmit = (data: BillingFormData) => {
    console.log(data); // Log the form data to console (for debugging)
    setFormData(data); // Store form data in state
    reset(); // Clear the form fields after submit
    // Here you can send `formData` to an API or another function for further processing
  };

  return (
    <div className="p-6 rounded-md bg-white/80 shadow-md shadow-black/50">
      <h2 className="text-2xl font-bold mb-4">Billing details</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("firstName")}
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>
          <div className="w-full">
            <label htmlFor="last-name" className="block mb-1 font-normal">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="w-full py-3.5 px-6 border rounded-md"
              {...register("lastName")}
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company-name" className="block mb-1 font-medium">
            Company Name (Optional)
          </label>
          <input
            type="text"
            id="company-name"
            className="w-full py-3.5 px-6 border rounded-md"
            {...register("companyName")}
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
            {...register("country")}
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
        </div>

        {/* Province */}
        <div>
          <label htmlFor="province" className="block mb-1 font-medium">
            Province
          </label>
          <select
            id="province"
            className="w-full py-3.5 px-6 border rounded-md"
            {...register("province")}
          >
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
          {errors.province && <p className="text-red-500 text-sm">{errors.province.message}</p>}
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
            {...register("streetAddress")}
          />
          {errors.streetAddress && <p className="text-red-500 text-sm">{errors.streetAddress.message}</p>}
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
            {...register("city")}
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>

        {/* ZIP Code */}
        <div>
          <label htmlFor="zip-code" className="block mb-1 font-medium">
            ZIP Code
          </label>
          <input
            type="text"
            id="zip-code"
            className="w-full py-3.5 px-6 border rounded-md"
            {...register("zipCode")}
          />
          {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="w-full py-3.5 px-6 border rounded-md"
            {...register("phone")}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full py-3.5 px-6 border rounded-md"
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Additional Information */}
        <div>
          <label htmlFor="additional-info" className="block mb-1 font-medium">
            Additional Information
          </label>
          <textarea
            id="additional-info"
            className="w-full py-3.5 px-6 border rounded-md"
            {...register("additionalInfo")}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-fit py-2.5 px-14 bg-green-600 text-white text-lg font-bold rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BillingForm;
