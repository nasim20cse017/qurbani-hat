"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimalCard from "@/components/AnimalCard";
import animals from "@/data/animal.json";
import { useEffect, useState } from "react";

export default function AllAnimalsPage() {
    const [sortOption, setSortOption] = useState("default");
    const [sortedAnimals, setSortedAnimals] = useState([]);

    useEffect(() => {
        let sorted = [...animals];

        if (sortOption === "low-to-high") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortOption === "high-to-low") {
            sorted.sort((a, b) => b.price - a.price);
        }

        setSortedAnimals(sorted);
    }, [sortOption]);

    return (
        <div className="min-h-screen bg-base-100">


            {/* HERO SECTION */}
            <div className="bg-gradient-to-r from-green-100 via-base-100 to-emerald-100 ">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
                        🐄 All Animals
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Explore healthy, verified livestock for your Qurbani booking
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10">

                {/* FILTER BAR */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                    <div className="flex items-center justify-between border border-base-300 rounded-xl px-4 py-3 bg-base-100 w-fit">

                        <div className="flex items-center gap-2">
                            <p className="text-md font-bold text-black">Total Animals :</p>
                            <h3 className="text-xl text-green-500 font-bold">
                                {animals.length}
                            </h3>
                        </div>



                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto ">

                        <div className="flex items-center gap-2 border border-base-300 rounded-lg px-3 py-2 bg-base-100 w-full md:w-auto">

                            <span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
                                Sort By :
                            </span>

                            <select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                                className="bg-transparent  text-sm focus:outline-none cursor-pointer"
                            >
                                <option value="default">Default</option>
                                <option value="low-to-high">Price: Low → High</option>
                                <option value="high-to-low">Price: High → Low</option>
                            </select>

                        </div>

                    </div>

                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sortedAnimals?.map((animal) => (
                        <AnimalCard key={animal.id} animal={animal} />
                    ))}
                </div>
            </div>

        </div>
    );
}