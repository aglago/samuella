'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaTwitter } from 'react-icons/fa';
import { CONTACT_INFO } from '@/lib/constants';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      // Set visibility based on scroll direction
      if (scrollDirection === 'down' && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, scrollDirection]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`bg-[#F8F8F8] text-light shadow-md sticky top-0 z-10 bg-opacity-100 transition-transform duration-300 ease-in-out ${
        isVisible ? 'transform-none' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 !py-0 lg:!py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          <Image src="/favicon.ico" width="200" height="200" alt="Samuella's Logo" className="mt-3 -ml-10"/>
        </Link>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-light focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`hover:text-accent transition-colors ${
                pathname === item.path ? 'text-accent border-b-2 border-accent' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-6">
            <a
              href={CONTACT_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={CONTACT_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={CONTACT_INFO.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-dark bg-opacity-100 p-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`hover:text-accent transition-colors ${
                  pathname === item.path ? 'text-accent' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
              <a
                href={CONTACT_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={CONTACT_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;