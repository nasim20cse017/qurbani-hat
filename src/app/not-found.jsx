"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      
      {/* Big 404 */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-gray-900">
        404
      </h1>

      {/* Headline */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        {/* Go Home */}
        <Link
          href={`/`}
          className="px-5 py-2.5 rounded-xl bg-black text-white hover:bg-gray-800 transition"
        >
          🏠 Home
        </Link>

        {/* Go Back */}
        <button
          onClick={() => router.back()}
          className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          ⬅ Go Back
        </button>
      </div>

      {/* Footer note */}
      <p className="mt-10 text-xs text-gray-400">
        © {new Date().getFullYear()} Qurbani Hat
      </p>
    </div>
  );
}