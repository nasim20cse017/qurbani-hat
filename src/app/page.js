import FeaturedAnimals from "@/components/FeaturedAnimals";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import { DiVim } from "react-icons/di";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedAnimals></FeaturedAnimals>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
