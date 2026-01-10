import React, { memo } from "react";
import { Mail, Linkedin, ExternalLink, Bird } from "lucide-react";
import { Link } from "react-router-dom";
import { DoodleScribble, DoodleStar, FloatingDoodle } from "@/components/ui/doodles";

const Footer: React.FC = memo(function Footer() {
  const linkFocus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

  // Animated underline link style
  const animatedLink = `relative inline-block text-sm text-muted-foreground hover:text-primary transition-colors duration-150 
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary 
    after:transition-all after:duration-200 hover:after:w-full ${linkFocus}`;

  return (
    <footer className="border-t border-border bg-background py-10 relative overflow-hidden" role="contentinfo" aria-label="Site footer">
      {/* Background doodles */}
      <FloatingDoodle className="top-8 right-[10%] text-primary/10" duration={7} rotateAmount={8}>
        <DoodleStar className="w-10 h-10" />
      </FloatingDoodle>
      <FloatingDoodle className="bottom-12 left-[5%] text-primary/10" duration={8} delay={1}>
        <DoodleStar className="w-6 h-6" />
      </FloatingDoodle>
      
      <div className="container py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Bird className="h-7 w-7 text-primary" />
              <h3 className="text-xl font-black text-foreground tracking-tight">DigitaleDuif</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Innovatieve digitale oplossingen die écht vliegen. Uw partner in Virtual Reality, Mixed Reality, Web Development en Mobiele Apps.
            </p>
            <div className="mt-4 w-20 text-primary/30">
              <DoodleScribble className="w-16" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Navigatie</h4>
            <nav className="flex flex-col space-y-3" aria-label="Footer navigatie">
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
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Contact</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:digitaleduif@outlook.com"
                className={`flex items-center gap-2 ${animatedLink}`}
                aria-label="Stuur een e-mail naar digitaleduif@outlook.com"
              >
                <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" /> 
                digitaleduif@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/in/guido-van-duijvenvoorde-531712162/"
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

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
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
});

export default Footer;