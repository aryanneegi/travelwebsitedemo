'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Mountain } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#blog', label: 'Blog' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Mountain className="w-8 h-8 text-primary group-hover:text-primary-dark transition-colors" />
            <span className="text-2xl font-bold text-foreground">Trail to Peaks</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors font-medium"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-foreground hover:text-primary transition-colors text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="#contact"
              className="block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors font-medium text-center"
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
