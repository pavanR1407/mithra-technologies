import { Code, Globe, Cloud, Palette, BarChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to match your unique business requirements and workflows.",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Modern, responsive web applications with cutting-edge technologies and intuitive user experiences.",
    },
    {
      icon: Cloud,
      title: "Cloud Integration & Maintenance",
      description: "Seamless cloud migration, integration, and ongoing maintenance to ensure optimal performance and security.",
    },
    {
      icon: Palette,
      title: "UI/UX Design & Branding",
      description: "Beautiful, user-centered designs that enhance brand identity and create memorable digital experiences.",
    },
    {
      icon: BarChart,
      title: "Data Analytics Solutions",
      description: "Transform raw data into actionable insights with powerful analytics tools and custom dashboards.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the modern technology landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* Process Section */}
          <section className="mb-20 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
              <p className="text-lg text-muted-foreground">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your business needs and goals" },
                { step: "02", title: "Design", desc: "Creating intuitive and beautiful solutions" },
                { step: "03", title: "Development", desc: "Building with best practices and quality code" },
                { step: "04", title: "Launch", desc: "Deployment, testing, and ongoing support" },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-card rounded-xl border border-border hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-primary mb-3">{phase.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center animate-fade-in">
            <div className="bg-gradient-hero rounded-2xl p-12 shadow-hover">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's build something amazing together. Contact us to discuss your project requirements.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-card text-foreground hover:bg-card/90 h-11 px-8"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
