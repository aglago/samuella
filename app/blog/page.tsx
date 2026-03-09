import { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Blog | Samuella",
  description:
    "Thoughts on software engineering, web development, and building digital products. Coming soon.",
};

export default function BlogPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-wider text-accent mb-2 inline-block">
            Coming Soon
          </span>
          <h1 className="text-4xl md:text-5xl heading-primary mb-4">Blog</h1>
          <p className="text-lg text-secondary leading-relaxed mb-8">
            I&apos;ll be sharing thoughts on software engineering, lessons from
            building products, and insights from working with clients. Stay
            tuned.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <span>Back to home</span>
            <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
