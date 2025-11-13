import { Receipt, Package, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      icon: Receipt,
      title: "Smart Billing Software",
      description: "An intelligent billing and invoicing system designed to streamline financial operations.",
      features: [
        "Automated invoice generation and reminders",
        "Secure cloud-based data storage",
        "Real-time analytics and insights",
        "Customizable report templates",
        "Multi-currency support",
        "Integration with accounting software",
      ],
    },
    {
      icon: Package,
      title: "Cloud Inventory Manager",
      description: "A comprehensive web-based platform for modern inventory management.",
      features: [
        "Real-time stock tracking and updates",
        "Vendor management system",
        "AI-powered predictive restocking",
        "Barcode and QR code scanning",
        "Multi-location warehouse support",
        "Detailed reporting and forecasting",
      ],
    },
    {
      icon: Users,
      title: "Insight CRM",
      description: "A powerful customer relationship management solution for growing businesses.",
      features: [
        "Unified sales pipeline management",
        "Customer support ticket system",
        "Marketing automation integration",
        "Interactive dashboards and analytics",
        "Lead scoring and tracking",
        "Email and calendar integration",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative software solutions designed to transform how businesses operate and grow.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center animate-fade-in">
            <div className="bg-muted/30 rounded-2xl p-12 border border-border">
              <h2 className="text-3xl font-bold mb-4">Interested in Our Solutions?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our projects can be customized to meet your specific business needs.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
