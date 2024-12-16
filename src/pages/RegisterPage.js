import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      {/* Container */}
      <div className="bg-gray-900 p-8 rounded-md w-96">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/instagram.png"
            alt="Instagram Logo"
            className="w-36"
          />
        </div>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Mobile Number or Email"
          className="w-full mb-3 px-4 py-2 bg-gray-800 border border-gray-700 rounded"
        />
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-3 px-4 py-2 bg-gray-800 border border-gray-700 rounded"
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 px-4 py-2 bg-gray-800 border border-gray-700 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 bg-gray-800 border border-gray-700 rounded"
        />

        {/* Tombol Register */}
        <button className="w-full bg-blue-500 py-2 rounded font-semibold mb-4">
          Sign up
        </button>

        {/* Link ke halaman Login */}
        <p className="text-center text-sm text-gray-400">
          Have an account?{" "}
          <Link to="/login" className="text-blue-400">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
