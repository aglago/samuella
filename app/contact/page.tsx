// app/contact/page.tsx
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact | Samuella - Full Stack Web Developer",
  description:
    "Get in touch with Samuella for your web development projects. Available for freelance work and full-time opportunities.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary pt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
            <p className="text-xl opacity-90 mb-8">
              Have a project in mind or want to discuss a potential
              collaboration? I&apos;d love to hear from you.
            </p>
            <Link
              href="https://wa.me/233509581027?text=Hello%20from%20your%20portfolio%20website%2C%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#333333] px-4 py-2 rounded-md hover:bg-[#3da349] transition-colors cursor-pointer"
            >
              <FaWhatsapp className="text-[#49C357]" />
              <span className="text-white/90">
                Let&apos;s start a conversation
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <Contact showHeading={false} />
    </>
  );
}
