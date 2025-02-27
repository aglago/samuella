'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { CONTACT_INFO } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-light py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-3 md:flex-row justify-between lg:items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Samuella
            </Link>
            <p className="text-gray-400 mt-2">Full Stack Web Developer</p>
          </div>
          
          <div className="flex flex-col lg:items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href={CONTACT_INFO.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href={CONTACT_INFO.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href={CONTACT_INFO.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Samuella. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1 flex items-center">
              Made with <FaHeart className="text-accent mx-1" size={12} /> using Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
