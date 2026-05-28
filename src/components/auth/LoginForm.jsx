import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { toast } from "react-toastify";

import { auth } from "../../firebase/firebase";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      toast.success("Account created successfully!");

      // Clear form
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Redirect
      navigate("/login");
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          toast.error("Email already exists");
          break;

        case "auth/weak-password":
          toast.error("Password should be at least 6 characters");
          break;

        case "auth/invalid-email":
          toast.error("Invalid email address");
          break;

        default:
          toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md bg-[#1a1a1a] border border-[#E50000] shadow-xl rounded-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#E50000]">Create Account</h1>

          <p className="text-gray-300 mt-2">Sign up to get started</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-xl focus:outline-none focus:border-[#E50000]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-xl focus:outline-none focus:border-[#E50000] pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#E50000]"
              >
                {showPassword ? (
                  <Icon icon="mdi:eye-off" width={20} />
                ) : (
                  <Icon icon="mdi:eye" width={20} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-xl focus:outline-none focus:border-[#E50000] pr-12"
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#E50000]"
              >
                {showConfirm ? (
                  <Icon icon="mdi:eye-off" width={20} />
                ) : (
                  <Icon icon="mdi:eye" width={20} />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E50000] text-white py-3 rounded-xl hover:bg-[#C40000] font-semibold transition disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#E50000] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
