import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import { DiVim } from "react-icons/di";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
