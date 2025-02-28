import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-pattern min-h-[85vh] flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-left lg:text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Samuella.
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
            Full Stack Web Developer
          </h2>
          <p className="text-lg text-secondary mb-8">
            I build websites and apps that are beautiful, easy to use, and
            deliver real results. With my technical skills and attention to
            detail, I can help turn your ideas into digital solutions that your
            customers will love and that help your business grow.
          </p>
          <div className="flex sm:flex-row justify-center items-start lg:items-center gap-3 w-full">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-primary text-light px-3 lg:px-6 py-3 rounded flex items-center justify-center gap-2 hover:bg-dark transition-colors"
            >
              <span>Get in Touch</span>
              <FaArrowRight />
            </Link>
            <Link
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary text-light px-3 lg:px-6 py-3 rounded flex items-center justify-center gap-2 hover:bg-dark transition-colors"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
