import React from "react";

const Contact = () => {
  return (
    <form className=" w-200">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <div className="mb-4">
        <label htmlFor="name" className="text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="rounded-md border border-gray-300 px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="rounded-md border border-gray-300 px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="rounded-md border border-gray-300 px-3 py-2 w-full h-24 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className=" items-center px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
