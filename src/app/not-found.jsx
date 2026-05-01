"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 px-6 text-center">

      {/* Animated Icon */}
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full bg-green-200/40 absolute animate-ping"></div>
        <div className="w-24 h-24 flex items-center justify-center bg-green-500 text-white text-4xl rounded-full shadow-lg">
          🐄
        </div>
      </div>

      {/* 404 */}
      <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold text-gray-800 tracking-tight">
        404
      </h1>

      {/* Title */}
      <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
        Oops! Animal Not Found
      </h2>

      {/* Description */}
      <p className="mt-3 text-gray-500 max-w-md text-sm sm:text-base">
        Looks like this animal has wandered off 🐄💨  
        or the page you’re searching doesn’t exist anymore.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">

        {/* Home */}
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 hover:scale-105 transition-all"
        >
          🏠 Back to Home
        </Link>

        {/* Back */}
        <button
          onClick={() => router.back()}
          className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 hover:scale-105 transition-all"
        >
          ⬅ Go Back
        </button>
      </div>

      {/* Extra hint */}
      <p className="mt-6 text-xs text-gray-400">
        Try browsing animals from the homepage
      </p>

      {/* Footer */}
      <p className="mt-10 text-xs text-gray-400">
        © {new Date().getFullYear()} Qurbani Hat
      </p>
    </div>
  );
}