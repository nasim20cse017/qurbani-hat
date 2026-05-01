"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function UpdateProfilePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authClient.updateUser({ name, image });
      toast.success("Profile updated!");
      router.push("/my-profile");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <div className="max-w-md mx-auto px-4 py-20">
        <div className="card bg-base-200 shadow-xl p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Update Information
          </h1>

          <form onSubmit={handleUpdate} className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">New Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your new name"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Image URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">New Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter image URL"
                className="input input-bordered w-full"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className={`btn bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition-all duration-300 w-full ${loading ? "btn-disabled" : ""}`}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Updating...
                </>
              ) : (
                "Update Information"
              )}
            </button>
          </form>
        </div>
      </div>

    </>
  );
}