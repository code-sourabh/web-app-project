import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
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
            className="h-6 w-6"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
          <span className="text-lg font-semibold">Acme Inc</span>
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            rel="ugc"
          >
            Home
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            rel="ugc"
          >
            About
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            rel="ugc"
          >
            Features
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            rel="ugc"
          >
            Pricing
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            rel="ugc"
          >
            Contact
          </a>
        </nav>
        <button
          className="inline-flex items-center justify-center h-10 w-10 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="mobile-menu"
          data-state="closed"
        >
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
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
