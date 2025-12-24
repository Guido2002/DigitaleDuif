import React from "react";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkFocus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

  // Animated underline link style
  const animatedLink = `relative inline-block text-sm text-muted-foreground hover:text-primary transition-colors duration-150 
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary 
    after:transition-all after:duration-200 hover:after:w-full ${linkFocus}`;

  return (
    <footer className="border-t border-border bg-background py-10 relative overflow-hidden" role="contentinfo" aria-label="Site footer">
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
            <nav className="flex flex-col space-y-2.5" aria-label="Footer navigatie">
              <Link to="/diensten" className={animatedLink}>
                Diensten
              </Link>
              <Link to="/projecten" className={animatedLink}>
                Projecten
              </Link>
              <Link to="/contact" className={animatedLink}>
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
            <div className="flex flex-col space-y-2.5">
              <a
                href="mailto:digitaleduif@outlook.com"
                className={`flex items-center gap-2 ${animatedLink}`}
                aria-label="Stuur een e-mail naar digitaleduif@outlook.com"
              >
                <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" /> 
                digitaleduif@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/company/digitaleduif"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 group/link ${animatedLink}`}
                aria-label="Bezoek DigitaleDuif op LinkedIn (opent in nieuw tabblad)"
              >
                <Linkedin className="h-4 w-4 flex-shrink-0" aria-hidden="true" /> 
                LinkedIn
                <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-150" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DigitaleDuif. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link to="/contact" className={`hover:text-primary transition-colors duration-150 ${linkFocus}`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;