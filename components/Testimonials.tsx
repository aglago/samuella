const TESTIMONIALS: {
  quote: string;
  name: string;
  role: string;
  company: string;
}[] = [];

const Testimonials = () => {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title mb-0">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-md border border-gray-100 p-6 transition-all duration-200 hover:border-primary"
            >
              <p className="text-secondary leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-medium text-primary">{testimonial.name}</p>
                <p className="text-sm text-accent">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
