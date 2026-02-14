import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Luminara Reach" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Turning visibility into meaningful connections and measurable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Services</h4>
            <nav className="flex flex-col gap-2">
              {["Search Amplification", "Social Connection", "Customer Harmony", "Strategic Outreach"].map((s) => (
                <Link
                  key={s}
                  to="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {s}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:theluminaragroup@gmail.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" /> theluminaragroup@gmail.com
              </a>
              <a href="tel:+254710852527" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" /> +254 710 852 527
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              {[
                { icon: Instagram, href: "https://instagram.com/the_luminara_group" },
                { icon: Facebook, href: "https://facebook.com/the_luminara_group" },
                { icon: Twitter, href: "https://x.com/the_luminara_group" },
                { icon: Linkedin, href: "https://linkedin.com/company/the_luminara_group" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Luminara Reach. From invisible to irresistible.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
