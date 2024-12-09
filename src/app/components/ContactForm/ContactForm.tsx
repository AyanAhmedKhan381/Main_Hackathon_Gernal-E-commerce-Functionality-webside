import React from "react";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";

export const ContactForm2 = () => {
  return (
    <div className="w-full mx-auto text-center lg:w-[80%] mt-32 mb-20">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Get In Touch With Us
        </h1>
        <p className="text-gray-600 text-sm mt-4">
          For more information about our product & services, feel free to drop
          us <br /> an email. Our staff is always here to help you. Do not hesitate!
        </p>
      </div>
    </div>
  );
};

export default function ContactUs() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-start py-16 px-6 lg:px-20 mx-auto w-[63%]">
      {/* Left Section */}
      <div className="space-y-8 w-full lg:w-1/2">
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <FiMapPin className="text-yellow-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Address</h3>
              <p className="text-gray-700">
                236 5th SE Avenue, New <br /> York NY10000, United <br /> States
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-start space-x-4">
            <FiPhone className="text-yellow-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-700">Mobile: +(84) 546-6789</p>
              <p className="text-gray-700">Hotline: +(84) 456-6789</p>
            </div>
          </div>
          {/* Working Time */}
          <div className="flex items-start space-x-4">
            <FiClock className="text-yellow-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Working Time</h3>
              <p className="text-gray-700">Monday-Friday: 9:00 - <br /> 22:00</p>
              <p className="text-gray-700">Saturday-Sunday: 9:00 - <br /> 21:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <form className="w-full lg:w-1/2 space-y-6 mt-10 lg:mt-0 p-6 rounded-lg ">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm py-3.5 px-6 focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm py-3.5 px-6 focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="What is the topic?"
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm py-3.5 px-12 focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="How can we help you?"
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm py-3.5 px-3 focus:ring-yellow-500 focus:border-yellow-500"
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-fit bg-[#B88E2F] text-white font-semibold py-3.5 px-20 rounded-md hover:bg-yellow-600 hover:shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
