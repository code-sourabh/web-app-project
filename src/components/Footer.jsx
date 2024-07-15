import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blackish-blue py-12 w-full text-white">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <a className="flex items-center gap-2" href="#" rel="ugc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
            </svg>
            <span className="text-xl font-bold">Webrass</span>
          </a>
          <p className="text-muted-foreground">
            Crafting beautiful and functional websites for businesses of all sizes.
          </p>
          <div className="flex gap-4">
            <a aria-label="Twitter" href="#" rel="ugc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a aria-label="Facebook" href="#" rel="ugc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a aria-label="Instagram" href="#" rel="ugc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a aria-label="LinkedIn" href="#" rel="ugc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            Home
          </a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            About
          </a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            Services
          </a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            Portfolio
          </a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            Contact
          </a>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-semibold">Resources</h3>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            Blog
          </a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            FAQ
          </a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            Documentation
          </a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            Tutorials
          </a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            Support
          </a>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-semibold">Legal</h3>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            Terms of Service
          </a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            Privacy Policy
          </a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            Cookie Policy
          </a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            Disclaimer
          </a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#" rel="ugc">
            Sitemap
          </a>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>© 2024 Acme Inc. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <a className="hover:text-primary transition-colors" href="#" rel="ugc">
            Privacy
          </a>
          <a className="hover:text-primary transition-colors" href="#" rel="ugc">
            Terms
          </a>
          <a className="hover:text-primary transition-colors" href="#" rel="ugc">
            Sitemap
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;