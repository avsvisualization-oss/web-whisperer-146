import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-lg text-foreground">
              <span className="font-semibold">avs</span>
              <span className="font-light text-muted-foreground">renderings</span>
            </Link>
            <p className="mt-5 text-[13px] text-muted-foreground max-w-sm leading-[1.7]">
              High-impact visual solutions for home builders, developers and
              marketing teams across the United States.
            </p>
          </div>

          <div>
            <h4 className="label-mono text-foreground mb-5">Company</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Portfolio", href: "/portfolio" },
                { label: "About", href: "/about" },
                { label: "Team", href: "/team" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[13px] text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="label-mono text-foreground mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-[13px] text-muted-foreground">
              <a href="mailto:info@avs-renderings.com" className="hover:text-primary transition-colors">
                info@avs-renderings.com
              </a>
              <a href="tel:+13028673810" className="hover:text-primary transition-colors">
                +1 (302) 867-3810
              </a>
              <p>Coral Gables, FL 33134</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} AVS Renderings. All rights reserved.
          </p>
          <div className="flex gap-8">
            {[
              { label: "Instagram", href: "https://www.instagram.com/avs_renderings/" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/avs-california/" },
              { label: "Vimeo", href: "https://vimeo.com/avsrenderings" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-muted-foreground hover:text-primary transition-colors tracking-wide"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
