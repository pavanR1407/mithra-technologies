import { Link } from "react-router-dom";
import { Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-2">
                <img
                src="/favicon.png"   // or /logo.png
                alt="MithraX Logo"
               className="w-10 h-10 rounded-full"/>
               </div>
               <span className="text-xl font-bold text-foreground">MithraX Technologies</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-4">
              Innovating Tomorrow's Software, Today. Empowering businesses with smart, scalable digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-smooth">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@mithrax.tech</li>
              <li>Phone: 9043836499 
                <br />
                <br />
              
              <a
                  href="https://wa.me/918925246499?text=Hi!%20I%27d%20like%20to%20enquire%20about%20your%20services%20at%20MithraX%20Technologies....."
                      target="_blank"
                      rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-500 hover:text-green-600">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5">
                                <path d="M12 2C6.48 2 2 6.02 2 11.24c0 1.94.57 3.76 1.57 5.3L2 22l5.63-1.44A10.13 10.13 0 0 0 12 20.5c5.52 0 10-4.52 10-9.74S17.52 2 12 2zm0 17.88c-1.6 0-3.16-.4-4.56-1.18l-.33-.18-3.34.86.9-3.1-.21-.32A7.76 7.76 0 0 1 4.25 11.2c0-4.27 3.49-7.74 7.75-7.74s7.75 3.47 7.75 7.74-3.49 7.74-7.75 7.74zm4.26-5.84c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.52.12s-.6.75-.74.9c-.14.15-.27.17-.5.05-.23-.12-.97-.36-1.84-1.14-.68-.6-1.14-1.33-1.27-1.55-.13-.22-.01-.34.1-.46.1-.1.23-.27.34-.4.11-.13.15-.22.23-.37.08-.15.04-.28-.02-.4-.05-.12-.52-1.26-.71-1.72-.19-.46-.39-.4-.52-.4h-.45c-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9s.82 2.2.94 2.35c.12.15 1.62 2.55 3.93 3.46.55.24.97.38 1.3.48.55.18 1.06.15 1.46.09.45-.07 1.36-.55 1.55-1.08.19-.53.19-.98.13-1.08-.05-.1-.2-.16-.43-.28z" />
                                 </svg>
  <span>Chat on WhatsApp</span>
                  </a>
                  </li>
                  <li>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} MithraX Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
