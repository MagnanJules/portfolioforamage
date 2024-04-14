import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Home from './pages/Home';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import { Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import ContactForm from './pages/FormPage';
import WebProjects from './pages/Web';

function App() {
  return (
    <>
      <Navbar />
      <main>
      {/* Place non-global routes inside an HTML <main> tag */}
      <Routes>
          {/* Use Home component for the root path */}
          <Route index element={<Home />} /> 
          <Route path="projects" element={<Projects />} />
          <Route path="web" element={<WebProjects />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
