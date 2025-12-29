import { CONTACT_INFO } from "@/lib/constants";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="mt-10 lg:mt-0 lg:min-h-[85vh] flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-left lg:text-center">
          <h1 className="text-4xl md:text-6xl heading-primary mb-6">
            Samuella.
          </h1>
          <h2 className="text-2xl md:text-3xl heading-secondary mb-4 font-medium">
            Full-Stack Software Engineer
          </h2>
          <p className="text-lg text-secondary mb-6 leading-relaxed">
            Crafting seamless digital experiences through innovative web and app
            development.
          </p>

          {/* Skills Section */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="bg-white/50 text-secondary px-4 py-2 rounded-md font-medium border border-gray-200">
                User Research
              </span>
              <span className="bg-white/50 text-secondary px-4 py-2 rounded-md font-medium border border-gray-200">
                Web Development
              </span>
              <span className="bg-white/50 text-secondary px-4 py-2 rounded-md font-medium border border-gray-200">
                Mobile Development
              </span>
              <span className="bg-white/50 text-secondary px-4 py-2 rounded-md font-medium border border-gray-200">
                System Design
              </span>
              <span className="bg-white/50 text-secondary px-4 py-2 rounded-md font-medium border border-gray-200">
                Database Management
              </span>
            </div>
          </div>

          <div className="flex flex-row lg:justify-center items-center gap-4 w-full">
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
    </section>
  );
};

export default Hero;
