import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4">
          <a
            href="https://github.com/MagnanJules"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400 transition duration-300"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/jules-magnan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center mt-4">
        <p className="text-center">&copy; 2024 My WebSite. Young Wizard.</p>
      </div>
    </footer>
  );
}

export default Footer;
