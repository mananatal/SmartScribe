"use client";

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import testimonials from "../components/ui/data/testimonials.json";

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
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
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
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "#features")}
              className="hover:text-yellow-300 transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="hover:text-yellow-300 transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleSmoothScroll(e, "#testimonials")}
              className="hover:text-yellow-300 transition-colors"
            >
              Testimonials
            </a>
          </motion.nav>
          <motion.button
            className="bg-yellow-400 text-gray-800 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition-all"
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-20">
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
            Revolutionize the way you interact with PDFs and documents. Upload,
            extract, organize, and retrieve notes with AI-powered precision.
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 shadow-lg transition-transform transform hover:scale-105"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                title: "🤖 AI-Powered Text Processing",
                description:
                  "Extract and process text from PDFs effortlessly using intelligent AI.",
              },
              {
                title: "🔍 Smart Note Retrieval",
                description:
                  "Leverage vector-based search for fast, seamless access to notes.",
              },
              {
                title: "✏️ Customizable Text Editor",
                description:
                  "Edit and organize your notes with a user-friendly editor.",
              },
              {
                title: "🌟 Real-Time Collaboration",
                description:
                  "Collaborate with your team in real-time on shared documents.",
              },
              {
                title: "🔒 Secure Data Handling",
                description:
                  "Your data is encrypted and secure, ensuring privacy at every step.",
              },
              {
                title: "📂 Multi-File Support",
                description:
                  "Work with PDFs, Word documents, and more, all in one platform.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4 flex items-center justify-center">
                  <span className="text-3xl">
                    {feature.title.split(" ")[0]}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <h3 className="text-center text-3xl font-bold mb-8">
          ✨ What Our Users Say
        </h3>
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
            className="text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            SmartScribe is an AI-powered application built with Next.js that
            enhances productivity by transforming how you interact with PDFs and
            documents. From AI-driven text splitting to real-time updates, it
            offers a smarter way to manage your notes and documents.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Key Feature Cards */}
            {[
              {
                icon: "💡",
                title: "Why Choose SmartScribe?",
                description:
                  "Simplifies your workflow with state-of-the-art AI algorithms to extract key insights and stay organized effortlessly.",
              },
              {
                icon: "🌐",
                title: "Seamless Integration",
                description:
                  "Integrates with popular file formats and cloud platforms, making it perfect for both students and professionals.",
              },
              {
                icon: "🛠",
                title: "Built for Flexibility",
                description:
                  "User-friendly interface and advanced filters for personalized note management.",
              },
              {
                icon: "🚀",
                title: "Innovation at Its Core",
                description:
                  "Features vector-based search and real-time updates to keep you ahead in productivity.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <h4 className="text-xl font-semibold mb-2">
                  {feature.icon} {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 mb-4">
              Join thousands of users already revolutionizing their note-taking
              experience with SmartScribe.
            </p>
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded transition-transform transform hover:scale-105 hover:bg-blue-500 hover:shadow-lg">
              Get Started for Free
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6">
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
