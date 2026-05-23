import { useState } from "react";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";
import SocialAuth from "./SocialAuth";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md bg-[#1a1a1a] border border-[#E50000] shadow-md rounded-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#E50000]">Welcome Back</h1>
          <p className="text-gray-300 mt-2">Login to continue</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-xl focus:outline-none focus:border-[#E50000]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-xl focus:outline-none focus:border-[#E50000] pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#E50000] hover:text-[#C40000]"
              >
                {showPassword ? (
                  <Icon icon="mdi:eye-off" width={20} />
                ) : (
                  <Icon icon="mdi:eye" width={20} />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-gray-300 hover:text-white"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#E50000] text-white py-3 rounded-xl hover:bg-[#C40000] font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}

        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="px-4 text-xs text-gray-400 uppercase">
            Sign in with
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Social login */}

        <div className="grid grid-cols-2 gap-4">
          <SocialAuth icon="flat-color-icons:google" label="Google" />

          <SocialAuth icon="logos:apple" label="Apple" />
        </div>

        {/* Connector */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#E50000] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
