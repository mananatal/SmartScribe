"use client";


import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import Navbar from "@/components/homePage/Navbar";
import HeroSection from "@/components/homePage/HeroSection";
import { FeaturesSection } from "@/components/homePage/FeaturesSection";
import TestimonialsSection from "@/components/homePage/TestimonialsSection";
import { AboutUs } from "@/components/homePage/AboutUs";
import HowItWorksSection from "@/components/homePage/HowItWorksSection";
import Footer from "@/components/homePage/Footer";

export default function Home() {
  const { user } = useUser();


  useEffect(() => {
    if(user){
      const u={
        email: user.primaryEmailAddress.emailAddress,
        userName: user.fullName,
        imageUrl: user.imageUrl,
      }
        localStorage.setItem("user",JSON.stringify(u));
    }
  }, [user]);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar handleSmoothScroll={handleSmoothScroll}/>

      {/* Hero Section */}
      <HeroSection/>

      {/* About Section */}
        <AboutUs/>     

      {/* Features Section */}
      <FeaturesSection/>

      
      {/* How it works section */}
      <HowItWorksSection/>

      {/* Testimonials Section */}
      <TestimonialsSection/>
      
      {/* Footer */}
      <Footer  handleSmoothScroll={handleSmoothScroll}/>
    </div>
  );
}
