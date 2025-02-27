// app/contact/page.tsx
import Contact from '@/components/Contact';
import { Metadata } from 'next';
import { FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact | Samuella - Full Stack Web Developer',
  description: 'Get in touch with Samuella for your web development projects. Available for freelance work and full-time opportunities.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
            <p className="text-xl opacity-90 mb-8">
              Have a project in mind or want to discuss a potential collaboration? I&apos;d love to hear from you.
            </p>
            <div className="inline-flex items-center gap-3 bg-[#333333] px-4 py-2 rounded-md">
              <FaEnvelope className="text-accent text-white" />
              <span className="text-white/90">Let&apos;s start a conversation</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <Contact showHeading={false} />
    </>
  );
}
