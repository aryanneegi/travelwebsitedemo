import { Mountain, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">Trail to Peaks</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Authentic, affordable adventure travel experiences across India. Connect with nature, culture, and fellow travelers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: 'Blog', href: '#blog' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Travel Tips', href: '#blog' },
                { label: 'Testimonials', href: '#testimonials' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm">
                <Mail size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                <a href="mailto:hello@trailtopeaks.com" className="text-white/70 hover:text-white transition-colors">
                  hello@trailtopeaks.com
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                <a href="tel:+919876543210" className="text-white/70 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                <span className="text-white/70">Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            {['instagram', 'facebook', 'youtube', 'twitter'].map((social) => (
              <a
                key={social}
                href={`#${social}`}
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors text-sm font-semibold"
              >
                {social[0].toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/70">
            <p>
              © {currentYear} Trail to Peaks. All rights reserved.
            </p>
            <div className="flex gap-6 sm:justify-end">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
