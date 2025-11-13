import { Target, Eye, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About MithraX Technologies</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A forward-thinking software startup dedicated to creating innovative, scalable, and user-friendly digital solutions.
            </p>
          </div>

          {/* Company Description */}
          <section className="mb-20 animate-fade-in">
            <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-soft border border-border">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                MithraX Technologies is a forward-thinking software company committed to delivering innovative digital solutions that empower businesses worldwide.
We specialize in creating custom software, web, and mobile applications designed to solve real-world challenges with smart, scalable, and efficient technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Driven by creativity and guided by precision, our team focuses on building solutions that blend performance, reliability, and user experience.
At MithraX, we believe technology should be simple, powerful, and meaningful helping organizations transform ideas into reality..
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover-lift animate-fade-in">
              <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mb-6">
                <Target className="text-primary-foreground" size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a global leader in innovative software solutions that empower businesses to grow, connect, 
                and succeed in the digital world.
                       We aim to redefine how technology shapes the future  making it smarter,
                        simpler, and more human-centered..
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-primary-foreground" size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
               At MithraX Technologies, our mission is to create impactful, reliable, 
               and scalable software that drives digital transformation.
               We strive to deliver excellence through innovation, collaboration, 
               and integrity — helping clients achieve success through technology that truly makes a difference.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border hover-lift">
                <Users className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
                <p className="text-muted-foreground">
                  Our clients' success is our success. We prioritize understanding their needs and delivering solutions that exceed expectations.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border hover-lift" style={{ animationDelay: "0.1s" }}>
                <div className="w-8 h-8 bg-primary rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                <p className="text-muted-foreground">
                  We embrace cutting-edge technologies and creative problem-solving to deliver solutions that are ahead of the curve.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border hover-lift" style={{ animationDelay: "0.2s" }}>
                <div className="w-8 h-8 bg-primary rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Quality & Excellence</h3>
                <p className="text-muted-foreground">
                  Every line of code, every design decision reflects our commitment to delivering the highest quality products.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
