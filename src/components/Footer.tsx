import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 p-4 mt-auto w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} All rights reserved. Designed by Kim Jung
          Hyeon
        </p>
        <div className="flex justify-center mt-2 space-x-4">
          <a
            href="mailto:junghyeonkim.dev@gmail.com"
            className="hover:underline dark:text-blue-400"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://github.com/fabric0de"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline dark:text-blue-400"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Contact me at{" "}
          <a
            href="mailto:junghyeonkim.dev@gmail.com"
            className="hover:underline dark:text-blue-400"
          >
            junghyeonkim.dev@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
