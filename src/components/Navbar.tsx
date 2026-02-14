import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import logo from "@/assets/logo.png";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
];

const Navbar = () => {
  const { mode, cycleTheme } = useTheme();

  const ThemeIcon = mode === "system" ? Monitor : mode === "light" ? Moon : Sun;
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Luminara Reach logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-primary">Luminara</span>
          <span className="text-xl font-light text-foreground">Reach</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={cycleTheme}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label={`Theme: ${mode}`}
          >
            <ThemeIcon className="h-4 w-4" />
          </button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">Reach Out</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={cycleTheme}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted"
            aria-label={`Theme: ${mode}`}
          >
            <ThemeIcon className="h-4 w-4" />
          </button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-foreground" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Reach Out
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
