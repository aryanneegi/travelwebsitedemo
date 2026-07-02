import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'This was my first solo trip and I was nervous. Trail to Peaks made me feel safe, supported, and part of a community within hours. Best decision ever!',
      trip: 'Himalayan Trek'
    },
    {
      name: 'Arun Patel',
      location: 'Mumbai',
      rating: 5,
      text: 'The guides are incredible. They know every hidden spot and local secret. Worth every rupee. Already planning my next trip with them!',
      trip: 'Cultural Immersion Tour'
    },
    {
      name: 'Sophie Martinez',
      location: 'Spain (Traveling)',
      rating: 5,
      text: 'As a backpacker on a budget, this was perfect. I made friends from 8 different countries on this trip. The memories are priceless.',
      trip: 'Budget Adventure Package'
    },
    {
      name: 'Rohan Desai',
      location: 'Bangalore',
      rating: 5,
      text: 'Professional, caring, and authentic. They truly understand what budget backpackers want. The whole experience was seamless.',
      trip: 'Alpine Valley Trek'
    },
    {
      name: 'Emma Wilson',
      location: 'Australia (Traveling)',
      rating: 5,
      text: 'Trail to Peaks is not just a tour company. They are storytellers, friends, and guardians of genuine Indian adventure experiences.',
      trip: 'Starlit Desert Camping'
    },
    {
      name: 'Vikram Singh',
      location: 'Pune',
      rating: 5,
      text: 'Sustainable travel done right. You support local communities, learn from guides who love their land, and adventure without guilt.',
      trip: 'Himalayan Trek'
    }
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-semibold mb-2">Stories</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What Travelers Say
          </h2>
          <p className="text-lg text-foreground/70">
            Real experiences from real adventurers. These stories inspire us to keep doing what we do.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors hover:shadow-lg">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.location}</p>
                <p className="text-sm text-primary font-medium mt-1">{testimonial.trip}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 p-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl sm:text-5xl font-bold mb-2">500+</p>
              <p className="text-white/90 text-lg">Happy Adventurers</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold mb-2">4.9/5</p>
              <p className="text-white/90 text-lg">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold mb-2">98%</p>
              <p className="text-white/90 text-lg">Would Recommend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
