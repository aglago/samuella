import { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Shop | Website Templates",
  description:
    "Affordable website templates for Ghanaian businesses. Restaurants, delivery services, churches, schools, and more. Express interest to be notified when templates launch.",
};

interface Template {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  features: string[];
}

const TEMPLATES: Template[] = [
  {
    id: "chop-bar-restaurant",
    title: "Chop Bar & Restaurant",
    category: "Food & Catering",
    description:
      "Perfect for local restaurants, chop bars, and catering services. Features WhatsApp ordering integration and digital menu display.",
    price: 1800,
    features: [
      "Digital menu with prices",
      "WhatsApp order button",
      "Location & delivery zones",
      "Photo gallery",
    ],
  },
  {
    id: "delivery-logistics",
    title: "Swift Delivery",
    category: "Logistics & Delivery",
    description:
      "Built for delivery services, courier companies, and logistics businesses. Track orders and showcase service areas across Ghana.",
    price: 2500,
    features: [
      "Service area coverage",
      "Pricing calculator",
      "WhatsApp booking",
      "Real-time tracking ready",
    ],
  },
  {
    id: "property-listings",
    title: "Property Hub",
    category: "Real Estate",
    description:
      "Ideal for real estate agents, property developers, and landlords. Showcase properties for sale or rent with detailed listings.",
    price: 2800,
    features: [
      "Property listings",
      "Search & filter",
      "Photo galleries",
      "Inquiry forms",
    ],
  },
  {
    id: "fashion-boutique",
    title: "Fashion Store",
    category: "Fashion & Thrift",
    description:
      "Designed for boutiques, thrift stores, and fashion vendors. Display your collection with easy WhatsApp/Instagram ordering.",
    price: 2000,
    features: [
      "Product catalog",
      "Size & price display",
      "Social media integration",
      "New arrivals section",
    ],
  },
  {
    id: "church-ministry",
    title: "Church & Ministry",
    category: "Religious Organization",
    description:
      "For churches, ministries, and religious organizations. Share sermons, events, and connect with your congregation online.",
    price: 1500,
    features: [
      "Service schedule",
      "Sermon archive",
      "Event calendar",
      "Online giving ready",
    ],
  },
  {
    id: "school-academy",
    title: "School & Academy",
    category: "Education",
    description:
      "For schools, training centers, and educational institutions. Showcase programs, handle admissions, and share announcements.",
    price: 2200,
    features: [
      "Program catalog",
      "Admission forms",
      "Staff directory",
      "News & events",
    ],
  },
  {
    id: "pharmacy-health",
    title: "Pharmacy & Health",
    category: "Healthcare",
    description:
      "Built for pharmacies, clinics, and health stores. Display products, services, and enable easy prescription inquiries.",
    price: 2400,
    features: [
      "Product/service list",
      "Operating hours",
      "WhatsApp consultation",
      "Health tips blog",
    ],
  },
  {
    id: "event-planning",
    title: "Event Planner",
    category: "Events & Catering",
    description:
      "Perfect for event planners, MCs, DJs, and catering services. Showcase past events and packages to attract bookings.",
    price: 2000,
    features: [
      "Portfolio gallery",
      "Service packages",
      "Booking inquiry form",
      "Testimonials",
    ],
  },
];

const TemplateCard = ({ template }: { template: Template }) => {
  return (
    <div className="rounded-md border border-gray-200 p-6 transition-all duration-200 hover:border-primary hover:shadow-sm relative">
      <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider bg-gray-100 text-accent px-2 py-1 rounded">
        Coming Soon
      </span>
      <div className="mb-4">
        <span className="text-xs text-accent uppercase tracking-wider">
          {template.category}
        </span>
        <h3 className="text-xl font-semibold text-primary heading-secondary mt-1">
          {template.title}
        </h3>
      </div>

      <p className="text-secondary text-sm leading-relaxed mb-4">
        {template.description}
      </p>

      <ul className="mb-6 space-y-2">
        {template.features.map((feature, index) => (
          <li
            key={index}
            className="text-xs text-secondary flex items-center gap-2"
          >
            <span className="w-1 h-1 bg-accent rounded-full"></span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <span className="text-xs text-accent">From</span>
          <span className="text-lg font-semibold text-primary ml-1">
            GH₵{template.price.toLocaleString()}
          </span>
        </div>
        <Link
          href={`https://wa.me/233509581027?text=Hi Samuella, I'm interested in the "${template.title}" template for my business. Please notify me when it's ready!`}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-sm text-primary flex items-center gap-2 hover:text-accent transition-colors"
        >
          <span>Notify Me</span>
          <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default function ShopPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-6 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-accent mb-2 inline-block">Coming Soon</span>
            <h1 className="text-4xl md:text-5xl heading-primary mb-4">
              Website Templates
            </h1>
            <p className="text-lg text-secondary leading-relaxed">
              Affordable, professionally designed website templates built for
              Ghanaian businesses. Express interest now and be the first to know
              when your preferred template launches.
            </p>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEMPLATES.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-light border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8 text-center mx-auto block">
            How It Works
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-medium text-primary">1</span>
                </div>
                <h3 className="font-medium text-primary mb-2">Express Interest</h3>
                <p className="text-sm text-secondary">
                  Click &quot;Notify Me&quot; on templates you&apos;re interested in
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-medium text-primary">2</span>
                </div>
                <h3 className="font-medium text-primary mb-2">Get Notified</h3>
                <p className="text-sm text-secondary">
                  Be the first to know when your template is ready
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-medium text-primary">3</span>
                </div>
                <h3 className="font-medium text-primary mb-2">Launch</h3>
                <p className="text-sm text-secondary">
                  Get your customized website up and running
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Request Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-4">Can&apos;t Wait?</h2>
            <p className="text-secondary mb-6">
              Need a website right now? I can build a custom website tailored
              specifically to your business needs while you wait for templates.
            </p>
            <Link
              href="https://wa.me/233509581027?text=Hi Samuella, I need a custom website for my business. Can we discuss?"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <span>Let&apos;s discuss your project</span>
              <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
