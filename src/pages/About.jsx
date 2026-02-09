import React from 'react'
import logo from '../assets/dijiedit.png';

export default function About() {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">About DijiEdit</h2>
       <img 
           src={logo} 
           alt="DijiEdit Logo" 
           className="h-30 w-auto"
         />  
        <p className="text-gray-600 mb-4">
          <strong>DijiEdit</strong> is an AI-powered image editing platform designed to make photo enhancement simple, fast, and accessible to everyone. 
          Our goal is to help creators, designers, businesses, and everyday users transform their images in just a few clicks.
        </p>

        <p className="text-gray-600 mb-4">
          We use advanced artificial intelligence technology to automatically remove backgrounds, enhance images, and bring old black & white photos back to life with color. 
          No complex software or design skills are required — just upload your image and let AI do the work.
        </p>

        <p className="text-gray-600 mb-4">
          Whether you're creating social media content, product photos, marketing materials, or personal projects, DijiEdit helps you save time and achieve professional results effortlessly.
        </p>

        <p className="text-gray-600">
          We are continuously improving our tools and adding new features to make image editing smarter and easier. Thank you for choosing DijiEdit!
        </p>
      </div>
    </div>
  )
}
