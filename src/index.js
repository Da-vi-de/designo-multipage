import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route, } from "react-router-dom";

import Home from './pages/App';
import About from './pages/About';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import WebDesign from './pages/WebDesign';
import AppDesign from './pages/AppDesign';
import GraphicDesign from './pages/GraphicDesign';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="locations" element={<Locations />} />
        <Route path="contact" element={<Contact />} />
        <Route path='web-design' element={<WebDesign />} />
        <Route path='app-design' element={<AppDesign />} />
        <Route path='graphic-design' element={<GraphicDesign />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


