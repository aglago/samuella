'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-3 md:flex-row justify-between ">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-semibold logo tracking-tighter">
              Samuella
            </Link>
            <p className="text-secondary mt-2">Full Stack Software Engineer</p>
            <p className="text-secondary text-sm">
              Accra, Ghana &copy; {currentYear} Samuella.
            </p>
          </div>
          
          <div className="flex gap-3 items-center md:items-end">
            {/* <Link
              href="/contact"
              className="w-full sm:w-auto bg-primary text-light px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-dark transition-colors duration-200"
            >
              <span>Hire Me</span>
              <FaArrowRight className="text-sm" />
            </Link> */}
            {/* <Link
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-primary text-primary px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-primary hover:text-black transition-colors duration-200"
            >
              <span>View Resume</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link> */}
            <Link
              href={CONTACT_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href={CONTACT_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href={CONTACT_INFO.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href={CONTACT_INFO.phone}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              <FaPhone size={18} />
            </Link>
            <Link
              href={CONTACT_INFO.email}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              <FaEnvelope size={20} />
            </Link>
            <Link
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              <FaWhatsapp size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
