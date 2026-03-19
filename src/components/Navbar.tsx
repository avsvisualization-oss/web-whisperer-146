import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Interactive Tools", href: "/interactive" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-20">
        <Link to="/" className="font-display text-xl tracking-tight text-foreground">
          <span className="font-semibold">AVS</span>
          <span className="font-light text-primary">Renderings</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                link.label === "Interactive Tools"
                  ? "text-primary"
                  : location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-6 py-2.5 text-[13px] font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/80 hover:shadow-[0_0_20px_hsl(210_100%_52%/0.3)] transition-all duration-300 tracking-wide"
          >
            Start a Project
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-wide py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-base font-medium ${
                    location.pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-full text-center"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
