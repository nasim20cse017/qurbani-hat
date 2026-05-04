"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import BigCow from '@/assets/Big-Cow.png'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5 sm:space-y-6">
            
            {/* Use Animate.css npm Package */}
            <h1 className="animate__animated animate__bounce animate__infinite animate__slow text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-green-900">
              Find Your Perfect{" "}
              <span className="text-green-700">Qurbani</span> Animal
            </h1>
            {/* <h1 className="">An animated element</h1> */}


            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Explore healthy cows and goats, book online, and fulfill your
              religious duty with ease.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link href='/all-animals'><Button
                href="/animals"
                className=" btn bg-green-400 text-white rounded-4xl px-6 sm:px-8 py-3 text-sm sm:text-base font-bold shadow-md hover:scale-110 hover:bg-blue-400 transition-transform"
              >
                Browse Animals
              </Button></Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px] xl:w-[540px]">
              
              <Image
                src={BigCow}
                alt="Qurbani Cow"
                width={600}
                height={600}
                className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                priority
              />

            </div>
          </div>

        </div>
      </div>

      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
}