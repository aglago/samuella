import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { CONTACT_INFO } from "@/lib/constants";

const PACKAGES = [
  {
    name: "One-Pager",
    price: "1,800 – 2,000",
    description: "Simple, professional presence online",
    features: [
      "Up to 1 page",
      "SEO optimised",
      "Hosting & domain for 1 year",
    ],
    addons: "Blog or extra pages at GH₵300/page",
  },
  {
    name: "Starter",
    price: "3,500 – 4,000",
    description: "Basic website with blog integration",
    features: [
      "Up to 5 pages",
      "Blog integration",
      "SEO optimised",
      "Hosting & domain for 1 year",
    ],
    addons: "Custom forms, extra pages",
  },
  {
    name: "Business",
    price: "5,500 – 6,000",
    description: "Payment integrations & expanded functionality",
    features: [
      "Up to 10 pages",
      "Payment integration",
      "SEO optimised",
      "Hosting & domain for 1 year",
    ],
    addons: "Advanced SEO, custom features",
    popular: true,
  },
  {
    name: "Pro",
    price: "7,500 – 9,000",
    description: "Full e-commerce & custom design",
    features: [
      "Up to 20 pages",
      "Full e-commerce functionality",
      "Premium design & branding",
      "SEO optimised",
      "Hosting & domain for 1 year",
    ],
    addons: "Extra features, advanced security",
  },
];

const Pricing = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title">Pricing</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PACKAGES.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-md border p-6 transition-all duration-200 hover:border-primary ${
                pkg.popular ? "border-primary" : "border-gray-200"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-4 bg-primary text-light text-xs px-2 py-1 rounded">
                  Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-primary mb-1">
                {pkg.name}
              </h3>
              <p className="text-xs text-accent mb-4">{pkg.description}</p>
              <div className="mb-4">
                <span className="text-xs text-secondary">GH₵</span>
                <span className="text-2xl font-semibold text-primary">
                  {pkg.price.split("–")[0].trim()}
                </span>
                <span className="text-sm text-secondary">+</span>
              </div>
              <ul className="space-y-2 mb-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-xs text-secondary flex items-start gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-accent border-t border-gray-100 pt-3">
                Add-ons: {pkg.addons}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={`${CONTACT_INFO.whatsapp}?text=Hi Samuella, I'm interested in your website packages. Can we discuss?`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <span>Get a quote</span>
            <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
