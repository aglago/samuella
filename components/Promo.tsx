import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { CONTACT_INFO } from "@/lib/constants";

const Promo = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="border-2 border-primary rounded-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-accent mb-2 inline-block">
                Limited Offer
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                The ₵500 Web Hustle
              </h2>
              <p className="text-secondary max-w-xl">
                Get a professional single-page website for your business at just
                GH₵500. Mobile responsive, fast delivery, no extras.
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-accent">
                <li>• 1 page</li>
                <li>• Mobile responsive</li>
                <li>• 5-day delivery</li>
                <li>• 1 revision</li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <Link
                href={`${CONTACT_INFO.whatsapp}?text=Hi Samuella, I'm interested in The ₵500 Web Hustle. I need a website for my business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-primary text-light px-6 py-3 rounded-md hover:bg-dark transition-colors"
              >
                <span>Claim Your Spot</span>
                <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
