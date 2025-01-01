"use client";

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/homePage/Navbar";
import HeroSection from "@/components/homePage/HeroSection";
import { FeaturesSection } from "@/components/homePage/FeaturesSection";
import TestimonialsSection from "@/components/homePage/TestimonialsSection";
import { AboutUs } from "@/components/homePage/AboutUs";
import HowItWorksSection from "@/components/homePage/HowItWorksSection";

export default function Home() {
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);

  const checkUser = async () => {
    await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      imageUrl: user?.imageUrl,
    });
  };

  useEffect(() => {
    user && checkUser();
  }, [user]);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <HeroSection/>
      

      {/* Features Section */}
      <FeaturesSection/>

      {/* Testimonials Section */}
      <TestimonialsSection/>
      

      {/* About Section */}
      <AboutUs/>
      
      {/* How it works section */}
      <HowItWorksSection/>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 ">
        <div className="container mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © 2024 SmartScribe. All rights reserved. ✨
          </motion.p>
          <motion.div
            className="space-x-4 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#privacy" className="hover:underline">
              🔒 Privacy Policy
            </a>
            <a href="#terms" className="hover:underline">
              ⚖️ Terms of Service
            </a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
