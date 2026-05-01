"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import animals from "@/data/animal.json";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSession } from "@/lib/auth-client";

export default function AnimalDetailsPage() {
  const params = useParams();
  const animal = animals.find((a) => a.id === Number(params.id));
  const { data: session } = useSession();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  if (!animal)
    return <div className="text-center py-20">Animal not found.</div>;

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Booking request submitted successfully!");
    setForm({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Animal Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={animal.image}
              alt={animal.name}
              className="w-full rounded-2xl"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{animal.name}</h1>
            <p className="text-lg text-gray-600">
              {animal.breed} • {animal.type}
            </p>

            <p className="text-2xl text-success font-bold my-4">
              ৳ {animal.price.toLocaleString()}
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Weight:</strong> {animal.weight} kg
              </li>
              <li>
                <strong>Age:</strong> {animal.age} years
              </li>
              <li>
                <strong>Location:</strong> {animal.location}
              </li>
              <li>
                <strong>Category:</strong> {animal.category}
              </li>
            </ul>

            <p className="mt-4 text-gray-700">{animal.description}</p>
          </div>
        </div>

        {/* Booking Section */}
        {session?.user ? (
          <form
            onSubmit={handleBooking}
            className="mt-10 max-w-xl mx-auto space-y-4"
          >
            <h2 className="text-2xl font-bold text-center">
              Book This Animal
            </h2>

            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
            </div>

            {/* Phone */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Your phone"
                className="input input-bordered w-full"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                required
              />
            </div>

            {/* Address */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea
                placeholder="Your address"
                className="textarea textarea-bordered w-full"
                value={form.address}
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
                required
              ></textarea>
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-success w-full">
              Confirm Booking
            </button>
          </form>
        ) : (
          <div className="text-center mt-10 p-6 bg-yellow-50 rounded">
            <p className="text-lg">
              Please{" "}
              <a href="/login" className="text-blue-600 underline">
                log in
              </a>{" "}
              to book this animal.
            </p>
          </div>
        )}
      </div>

    </>
  );
}