'use client'

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import {motion} from "framer-motion"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import testimonials from "../components/ui/data/testimonials.json"

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

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <motion.h1
            className="text-xl font-bold flex items-center space-x-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>✨</span>
            <span>SmartScribe</span>
          </motion.h1>
          <motion.nav
            className="space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#features" className="hover:text-blue-300">Features</a>
            <a href="#about" className="hover:text-blue-300">About</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </motion.nav>
          <motion.button
            className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded flex items-center space-x-2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span>📋</span>
            <span>Dashboard</span>
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            🚀 SmartScribe: AI-Powered Note-Taking Application
          </motion.h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Revolutionize the way you interact with PDFs and documents. Upload, extract, organize, and retrieve notes with AI-powered precision.
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span>📖</span>
            <span>Learn More</span>
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h3
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ⚙️ Features
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {[{
              title: "🤖 AI-Powered Text Processing",
              description: "Extract and process text from PDFs effortlessly using intelligent AI.",
            }, {
              title: "🔍 Smart Note Retrieval",
              description: "Leverage vector-based search for fast, seamless access to notes.",
            }, {
              title: "✏️ Customizable Text Editor",
              description: "Edit and organize your notes with a user-friendly editor.",
            }].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <h3 className="text-center text-3xl font-bold mb-8">✨ What Our Users Say</h3>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h3
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ℹ️ About SmartScribe
          </motion.h3>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            SmartScribe is an AI-powered application built with Next.js that enhances productivity by transforming how you interact with PDFs and documents. From AI-driven text splitting to real-time updates, it offers a smarter way to manage your notes and documents.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
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
            <a href="#privacy" className="hover:underline">🔒 Privacy Policy</a>
            <a href="#terms" className="hover:underline">⚖️ Terms of Service</a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}