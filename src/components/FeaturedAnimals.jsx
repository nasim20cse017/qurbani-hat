"use client";
import animals from "@/data/animal.json";
import AnimalCard from "./AnimalCard";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function FeaturedAnimals() {
  const featured = animals.slice(0, 4);

  return (
    <section className="py-10 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Animals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>

      <div className="card-actions w-1/4 mx-auto mt-8">
         <Link href="/all-animals">
    <Button
      className="w-[250px] btn bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition-all duration-300 rounded-md px-6 py-3 text-sm sm:text-base  hover:bg-blue-400"
    >
      View All Animals
    </Button>
  </Link>
        </div>
    </section>
  );
}