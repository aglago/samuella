'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { CONTACT_INFO } from '@/lib/constants';

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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

  return (
    <header 
      className={`bg-[#F8F8F8] text-light shadow sticky top-0 z-10 bg-opacity-100 transition-transform duration-300 ease-in-out ${
        isVisible ? 'transform-none' : '-translate-y-full'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-2 lg:py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter logo text-primary">
          <span className="lg:hidden">S.</span>
          <span className="hidden lg:inline">Samuella.</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/shop"
            className="text-secondary hover:text-primary transition-colors text-sm"
          >
            Buy
          </Link>
          <Link
            href="/blog"
            className="text-secondary hover:text-primary transition-colors text-sm"
          >
            Blog
          </Link>
          <Link
              href={CONTACT_INFO.whatsapp}
              className="group sm:w-auto text-primary py-3 rounded-md flex items-center justify-center gap-2 hover:text-dark"
            >
              <span>Hire Me</span>
              <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;