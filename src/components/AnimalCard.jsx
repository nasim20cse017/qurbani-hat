"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AnimalCard({ animal }) {
  const router = useRouter();

  if (!animal) return null;

  return (
    <div
      onClick={() => router.push(`/animals/${animal.id}`)}
      className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-base-200"
    >

      {/* IMAGE */}
      <figure className="relative h-52 overflow-hidden">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* BADGE */}
        <div className="absolute top-3 left-3">
          <div className="badge badge-success text-white">
            Available
          </div>
        </div>
      </figure>

      {/* CONTENT */}
      <div className="card-body p-4">

        <h2 className="card-title text-lg font-bold text-base-content">
          {animal.name}
        </h2>

        <p className="text-sm text-gray-500">
          🐾 {animal.breed} • 📍 {animal.location}
        </p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-bold text-lg">
            ৳ {animal.price?.toLocaleString()}
          </span>

          <div className="badge badge-outline">
            Premium
          </div>
        </div>

        <div className="card-actions mt-4">
          <button className="btn btn-success btn-sm w-full">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}