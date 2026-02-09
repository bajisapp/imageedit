import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/dijiedit.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "bg-[#19053a] text-white px-3 py-2 rounded-md text-sm font-medium"
      : "text-gray-300 hover:bg-white/5 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="bg-[#330f83] shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
     <Link to="/" className="flex items-center gap-2">
  <img 
    src={logo} 
    alt="DijiEdit Logo" 
    className="h-10 w-auto"
  />  
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={linkStyle}>Remove BG</NavLink>
          {/*   <NavLink to="/colorizer" className={linkStyle}>B&W to Color</NavLink> */}
            <NavLink to="/about" className={linkStyle}>About</NavLink>
            <NavLink to="/help" className={linkStyle}>Help</NavLink>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkStyle}>Remove BG</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/colorizer" className={linkStyle}>B&W to Color</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkStyle}>About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/help" className={linkStyle}>Help</NavLink>
        </div>
      )}
    </nav>
  );
}
