import { MapPin, Backpack, Users, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Multi-Day Treks',
      price: 'From ₹8,999',
      duration: '3-7 Days',
      description: 'Immerse yourself in India&apos;s stunning mountain ranges. Well-planned routes with expert guides, camping under stars, and authentic local experiences.',
      highlights: ['Professional guides', 'Camping included', 'Meals provided', 'Small groups']
    },
    {
      icon: <Backpack className="w-8 h-8" />,
      title: 'Budget Adventure Packages',
      price: 'From ₹5,499',
      duration: '2-5 Days',
      description: 'Experience India without breaking the bank. Budget-friendly stays, local transport, and curated itineraries designed for backpackers.',
      highlights: ['Hostel stays', 'Local transport', 'Cultural immersion', 'Flexible dates']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Group Experiences',
      price: 'Custom Pricing',
      duration: 'Flexible',
      description: 'Travel with like-minded adventurers. Join our community trips and make lifelong friends while exploring India&apos;s hidden gems.',
      highlights: ['Community focus', 'Social events', 'Bonfire nights', 'Group discounts']
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Custom Itineraries',
      price: 'Bespoke Quote',
      duration: 'As Desired',
      description: 'Dream it, we&apos;ll plan it. Customize your adventure based on your interests, duration, and budget. Purely you, maximally authentic.',
      highlights: ['Personalized planning', 'Date flexibility', 'Budget options', 'Expert recommendations']
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-semibold mb-2">Our Offerings</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Adventure Packages for Every Explorer
          </h2>
          <p className="text-lg text-foreground/70">
            From quick weekend getaways to month-long expeditions, we have something for every level of adventurer.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-background rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              
              <div className="flex gap-4 mb-4 text-sm">
                <span className="text-primary font-semibold">{service.price}</span>
                <span className="text-foreground/60">{service.duration}</span>
              </div>
              
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6 space-y-2">
                {service.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {highlight}
                  </div>
                ))}
              </div>
              
              <Link
                href="#contact"
                className="inline-block w-full text-center bg-primary hover:bg-primary-dark text-white py-3 rounded-lg transition-colors font-semibold"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-foreground/70 mb-6">
            Not sure which package is right for you?
          </p>
          <Link
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
          >
            Start Planning Your Adventure
          </Link>
        </div>
      </div>
    </section>
  );
}
