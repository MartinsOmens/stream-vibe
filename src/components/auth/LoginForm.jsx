import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import { toast } from "react-toastify";

import { auth } from "../../firebase/firebase";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  // Email Login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      toast.success("Login successful");

      navigate("/dashboard");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("User not found");
          break;

        case "auth/wrong-password":
          toast.error("Incorrect password");
          break;

        case "auth/invalid-email":
          toast.error("Invalid email address");
          break;

        default:
          toast.error("Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      toast.success("Signed in with Google");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Github Login
  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);

      toast.success("Signed in with GitHub");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4 py-10 text-white">
      <div className="w-full max-w-md bg-[#141414] border border-[#262626] rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-[#E50000]">
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-3 text-sm">
            Sign in to continue to your account
          </p>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">

          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            <Icon icon="logos:google-icon" width={20} />

            Continue with Google
          </button>

          {/* Github */}
          <button
            onClick={handleGithubLogin}
            className="w-full flex items-center justify-center gap-3 bg-[#1f1f1f] border border-[#333] py-3 rounded-xl font-medium hover:bg-[#2a2a2a] transition"
          >
            <Icon icon="mdi:github" width={22} />

            Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-7">
          <div className="flex-1 h-px bg-[#2a2a2a]" />

          <span className="text-xs uppercase tracking-wider text-gray-500">
            Or continue with email
          </span>

          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#181818] border border-[#333] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E50000] transition"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-gray-400">
                Password
              </label>

              <button
                type="button"
                className="text-sm text-[#E50000] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#181818] border border-[#333] rounded-xl px-4 py-3 pr-12 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E50000] transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              >
                <Icon
                  icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                  width={20}
                />
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E50000] hover:bg-[#c40000] text-white py-3 rounded-xl font-semibold transition disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#E50000] hover:underline font-medium"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}