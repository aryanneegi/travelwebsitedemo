import { CheckCircle, Leaf, Users, Compass } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Authentic Experiences',
      description: 'Real connections with local culture, not tourist traps. We design trips that matter.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'Build friendships with fellow adventurers. Travel solo, leave with a family.'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainable Travel',
      description: 'Eco-conscious adventures that respect nature and support local communities.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Budget-Friendly',
      description: 'Adventure shouldn&apos;t break the bank. Maximum experience, minimum expense.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-semibold mb-2">Our Story</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            We&apos;re Redefining Budget Travel in India
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Trail to Peaks was founded by backpackers, for backpackers. We believe that epic adventures shouldn&apos;t come with epic price tags. Our mission is to create unforgettable experiences across India&apos;s most breathtaking destinations while keeping your wallet happy and your spirit alive.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-8 bg-white rounded-lg border border-border hover:border-primary transition-colors hover:shadow-lg">
              <div className="text-primary mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 sm:mt-24 p-12 bg-gradient-to-r from-accent to-accent-light rounded-lg text-white">
          <h3 className="text-3xl sm:text-4xl font-bold mb-8">Why Choose Trail to Peaks?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Expert Local Guides</h4>
                <p className="text-white/90">Local guides who know every trail, village, and hidden gem.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Small Group Size</h4>
                <p className="text-white/90">Max 12 people per trip for intimate, personalized experiences.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Safety & Support</h4>
                <p className="text-white/90">Comprehensive safety measures and 24/7 support team.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Flexible Booking</h4>
                <p className="text-white/90">Easy cancellation and flexible dates for budget travelers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
