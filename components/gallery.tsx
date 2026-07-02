'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const trips = [
    {
      image: '/trip-1.png',
      title: 'Himalayan Trek',
      location: 'Himachal Pradesh',
      description: 'Experience the majestic peaks of the Himalayas through challenging mountain trails.'
    },
    {
      image: '/trip-2.png',
      title: 'Starlit Camping',
      location: 'Rajasthan',
      description: 'Sleep under endless stars in the Thar Desert with newfound friends and campfire stories.'
    },
    {
      image: '/trip-3.png',
      title: 'Cultural Immersion',
      location: 'Kerala',
      description: 'Connect with local communities, taste authentic cuisine, and experience India&apos;s vibrant culture.'
    },
    {
      image: '/trip-4.png',
      title: 'Alpine Valley',
      location: 'Uttarakhand',
      description: 'Trek through pristine alpine meadows with wildflowers and panoramic mountain vistas.'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % trips.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + trips.length) % trips.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-primary font-semibold mb-2">Visual Stories</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Moments from Our Journeys
          </h2>
          <p className="text-lg text-foreground/70">
            Explore the breathtaking destinations and unforgettable moments from our past adventures.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative h-96 sm:h-screen/2 lg:h-[500px] rounded-lg overflow-hidden mb-8 group">
          <Image
            src={trips[currentIndex].image}
            alt={trips[currentIndex].title}
            fill
            className="object-cover"
            priority
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-start p-6 sm:p-10">
            <div className="text-white max-w-md">
              <p className="text-primary mb-2 font-semibold">Featured Location</p>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">{trips[currentIndex].title}</h3>
              <p className="text-white/90 text-lg mb-2">{trips[currentIndex].location}</p>
              <p className="text-white/80">{trips[currentIndex].description}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {trips.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trips.map((trip, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-32 sm:h-40 rounded-lg overflow-hidden cursor-pointer transition-all ${
                idx === currentIndex ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
