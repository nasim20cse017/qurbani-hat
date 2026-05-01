import FeaturedAnimals from "@/components/FeaturedAnimals";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Tips from '@/components/Tips'
import Image from "next/image";
import { DiVim } from "react-icons/di";
import { ToastContainer } from "react-toastify";
import TopBreeds from "@/components/TopBreeds";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedAnimals></FeaturedAnimals>
      <Tips></Tips>
      <TopBreeds></TopBreeds>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
