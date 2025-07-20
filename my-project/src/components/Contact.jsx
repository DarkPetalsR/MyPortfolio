import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-[#0f0f1a] text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact</h2>
      <p className="text-center text-gray-300 mb-8 max-w-xl mx-auto">
        Let’s connect and build something great together! Feel free to shoot me a message.
      </p>
      <div className="flex justify-center">
        <a
          href="ridhi.guda1@gmail.com"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          Send Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
