import { SERVICES } from "@/lib/constants";
import SimpleServiceCard from "./SimpleServiceCard";

  const Services = () => {
    return (
      <section className={"container py-8" }>
          <div className="flex justify-between items-center mb-12">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h2 className="section-title mb-0">Services</h2>
            </div>
          </div>

          <div className={`grid gap-6 md:grid-cols-1 lg:grid-cols-2`}>
            {SERVICES.map((service, index) => 
                <SimpleServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                />

            )}
          </div>
      </section>
    );
  };

  export default Services;