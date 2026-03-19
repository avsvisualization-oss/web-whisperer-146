import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 bg-secondary text-muted-foreground text-sm font-mono-data">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            1200 Ponce de Leon, St 703, Coral Gables FL 33134
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            info@avs-renderings.com
          </span>
        </div>
        <span className="flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5" />
          +1 (302) 867-3810
        </span>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-semibold tracking-tight">
            <span className="text-foreground">avs</span>
            <span className="text-primary">renderings</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-medium px-5 py-2 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-background border-b border-border"
            >
              <div className="container py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium px-5 py-2.5 rounded-sm bg-primary text-primary-foreground text-center"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
