'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tripInterest: 'Multi-Day Trek',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', tripInterest: 'Multi-Day Trek', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-semibold mb-2">Get in Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Start Your Adventure Today
          </h2>
          <p className="text-lg text-foreground/70">
            Have questions? Want to book a trip? Or just want to chat about travel? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            {/* Contact Items */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-foreground/70">hello@trailtopeaks.com</p>
                  <p className="text-sm text-foreground/60 mt-1">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-foreground/70">+91 98765 43210</p>
                  <p className="text-sm text-foreground/60 mt-1">Mon-Sun, 9 AM - 9 PM IST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-foreground/70">Delhi, India</p>
                  <p className="text-sm text-foreground/60 mt-1">Covering all of India</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-12 p-6 bg-white rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-3">Stay Updated</h4>
              <p className="text-sm text-foreground/70 mb-4">Get tips, stories, and exclusive deals in your inbox.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded transition-colors font-medium text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-border p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Trip Interest */}
                <div>
                  <label htmlFor="tripInterest" className="block text-sm font-semibold text-foreground mb-2">
                    Interested In *
                  </label>
                  <select
                    id="tripInterest"
                    name="tripInterest"
                    value={formData.tripInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option>Multi-Day Trek</option>
                    <option>Budget Adventure</option>
                    <option>Group Experience</option>
                    <option>Custom Itinerary</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your adventure dreams..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mt-4 p-4 bg-accent/10 text-accent rounded-lg border border-accent/20">
                  ✓ Thanks for reaching out! We&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
