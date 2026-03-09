import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { CONTACT_INFO } from "@/lib/constants";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl heading-primary mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-secondary mb-8">
            Have a project in mind? I&apos;d love to hear about it. Reach out
            and let&apos;s discuss how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-light px-6 py-3 rounded-md hover:bg-dark transition-colors"
            >
              <FaWhatsapp size={18} />
              <span>Chat on WhatsApp</span>
            </Link>
            <Link
              href={CONTACT_INFO.email}
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-light transition-colors"
            >
              <FaEnvelope size={16} />
              <span>Send an Email</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
