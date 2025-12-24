import React from "react";
import { Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkFocus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

  return (
    <footer className="border-t border-border bg-background py-10 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-3">DigitaleDuif</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Innovatieve digitale oplossingen die écht vliegen. Uw partner in Virtual Reality, Mixed Reality, Web Development en Mobiele Apps.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Navigatie</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/diensten" className={"text-sm text-muted-foreground hover:text-primary transition-colors " + linkFocus}>
                Diensten
              </Link>
              <Link to="/projecten" className={"text-sm text-muted-foreground hover:text-primary transition-colors " + linkFocus}>
                Projecten
              </Link>
              <Link to="/contact" className={"text-sm text-muted-foreground hover:text-primary transition-colors " + linkFocus}>
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:digitaleduif@outlook.com"
                className={"flex items-center text-sm text-muted-foreground hover:text-primary transition-colors " + linkFocus}
              >
                <Mail className="mr-2 h-4 w-4" /> digitaleduif@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/company/digitaleduif"
                target="_blank"
                rel="noopener noreferrer"
                className={"flex items-center text-sm text-muted-foreground hover:text-primary transition-colors " + linkFocus}
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DigitaleDuif. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link to="/contact" className={"hover:text-primary transition-colors " + linkFocus}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;