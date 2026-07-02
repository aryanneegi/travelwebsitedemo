import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Budget Hiking Hacks: Gear, Grub, and Glory on ₹500/Day',
      excerpt: 'Learn insider tips on packing light, finding affordable local food, and maximizing your budget while trekking through Indian mountains.',
      author: 'Arjun Kumar',
      date: 'June 15, 2024',
      category: 'Budget Tips',
      image: '/trip-1.png'
    },
    {
      id: 2,
      title: 'The Best Time to Trek in India: Season by Season Guide',
      excerpt: 'Navigate the perfect seasons for trekking across different regions of India. From Himalayas to Western Ghats, timing is everything.',
      author: 'Sarah Martinez',
      date: 'June 10, 2024',
      category: 'Travel Guide',
      image: '/trip-2.png'
    },
    {
      id: 3,
      title: 'Sustainable Travel: How to Trek Responsibly and Help Local Communities',
      excerpt: 'Understand the impact of tourism on mountain communities and learn how to trek in a way that benefits locals and protects the environment.',
      author: 'Priya Sharma',
      date: 'June 5, 2024',
      category: 'Sustainability',
      image: '/trip-3.png'
    }
  ];

  return (
    <section id="blog" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-semibold mb-2">Travel Knowledge</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Blog & Travel Guides
          </h2>
          <p className="text-lg text-foreground/70">
            Expert tips, destination guides, and stories to help you plan and maximize your adventure.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <article key={article.id} className="group bg-white rounded-lg border border-border overflow-hidden hover:border-primary transition-all hover:shadow-lg">
              {/* Image */}
              <div className="h-48 bg-muted overflow-hidden relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex flex-col gap-3 border-t border-border pt-4">
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <User size={14} />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Calendar size={14} />
                    {article.date}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-dark font-semibold transition-colors"
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* All Articles CTA */}
        <div className="text-center">
          <Link
            href="#"
            className="inline-block bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg transition-colors font-semibold"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
