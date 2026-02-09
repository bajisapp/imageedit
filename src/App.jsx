import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from "react-router-dom";

export default function App() {
  return (
     <div className="flex flex-col min-h-screen bg-[#19053a] text-white">
  
      <Navbar />
      
      <main className=" ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
