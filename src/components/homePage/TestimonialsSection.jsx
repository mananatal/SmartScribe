import React from 'react'
import { AnimatedTestimonials } from '../ui/animated-testimonials'

function TestimonialsSection() {
    const testimonials = [
        {
            "src": "https://res.cloudinary.com/def0bw74n/image/upload/v1735735978/SmartScribe/WhatsApp_Image_2025-01-01_at_18.22.07_6443ab1a_l9vkjr.jpg",
            "name": "Manan Atal",
            "designation": "Student at AITR",
            "quote": "SmartScribe revolutionized how I interact with documents. It's truly a game-changer!"
        },
        {
            "src": "https://res.cloudinary.com/def0bw74n/image/upload/v1735735883/SmartScribe/WhatsApp_Image_2024-12-30_at_20.45.25_97dcd201_jy4kci.jpg",
            "name": "Rohan Jadoun",
            "designation": "Student at AITR",
            "quote": "The AI-powered features are incredible. Extracting and organizing notes has never been easier!"
        },
        {
            "src": "https://res.cloudinary.com/def0bw74n/image/upload/v1735735540/SmartScribe/x9pt3craxvczyk0ugzr3.png",
            "name": "Niraj Jain",
            "designation": "Student at AITR",
            "quote": "A seamless and user-friendly experience. SmartScribe is a must-have tool!"
        }
    ];
    return (
        <div id='testimonials' className='bg-gray-50 py-16'>
            <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                What Our Users Say
            </h4>
            <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
    )
}

export default TestimonialsSection


