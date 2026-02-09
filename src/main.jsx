import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Removebackground from './pages/Removebackground.jsx';
import Help from './pages/Help.jsx';
import Privacy from './pages/Privacy.jsx';
import Colorizer from './pages/Colorizer.jsx';
import About from './pages/About.jsx';


   createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Removebackground />} />
        <Route path="about" element={<About/>} />
        <Route path="privacy" element={<Privacy />} />
        <Route path='help' element={<Help />} />
        <Route path="colorizer" element={<Colorizer/> } />
      </Route>
    </Routes>
  </BrowserRouter>
);


