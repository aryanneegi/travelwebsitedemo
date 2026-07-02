import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-mountain.png"
        alt="Mountain landscape"
        fill
        className="absolute inset-0 object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Discover India<br />Your Way
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
          Authentic, affordable adventure travel experiences. Connect with nature, culture, and fellow travelers across India's most stunning destinations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
          >
            Explore Trips
            <ArrowRight size={20} />
          </Link>
          
          <Link
            href="#about"
            className="inline-flex items-center justify-center bg-white hover:bg-muted text-primary px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
          <div className="text-white">
            <p className="text-3xl sm:text-4xl font-bold">500+</p>
            <p className="text-sm sm:text-base text-white/80">Happy Travelers</p>
          </div>
          <div className="text-white">
            <p className="text-3xl sm:text-4xl font-bold">20+</p>
            <p className="text-sm sm:text-base text-white/80">Routes Explored</p>
          </div>
          <div className="text-white">
            <p className="text-3xl sm:text-4xl font-bold">4.9★</p>
            <p className="text-sm sm:text-base text-white/80">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
