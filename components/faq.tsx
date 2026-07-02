'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What experience level do I need for your treks?',
      answer: 'Our treks cater to all levels! We have easy, moderate, and challenging routes. Each trek description clearly mentions difficulty level. We recommend a basic fitness level for most treks, but our guides are experienced in helping people of varying abilities.'
    },
    {
      question: 'What is included in the package price?',
      answer: 'Most packages include accommodation, meals, professional guides, and group activities. Flights and some personal expenses are typically not included. Check individual package details for specifics. We always provide a detailed breakdown before booking.'
    },
    {
      question: 'Do you offer refunds or rescheduling?',
      answer: 'Yes! We offer flexible cancellation up to 2 weeks before the trip for a full refund. Between 1-2 weeks, you can reschedule for a future date. Within 1 week, a 50% refund is available. We want you to feel secure booking with us.'
    },
    {
      question: 'Is travel insurance mandatory?',
      answer: 'While not mandatory, we strongly recommend travel insurance covering activities like trekking. It protects you against unexpected emergencies. Many insurance providers offer affordable plans specifically for adventure travel in India.'
    },
    {
      question: 'How large are the groups?',
      answer: 'We keep groups small and intimate—maximum 12 people per trek. This ensures a personalized experience, better connections with fellow travelers, and minimal environmental impact. Small groups make the adventure more special!'
    },
    {
      question: 'What about permits and documentation?',
      answer: 'For most Indian treks, no special permits are required. We handle all logistics. For certain restricted areas, we arrange permits on your behalf. We&apos;ll guide you on documentation needs during the booking process.'
    },
    {
      question: 'Can I join if I&apos;m traveling solo?',
      answer: 'Absolutely! Solo travelers are our favorite. You&apos;ll be paired with a group and make instant friends. Many of our best stories come from solo adventurers who ended up traveling together on future trips.'
    },
    {
      question: 'What safety measures are in place?',
      answer: 'Safety is paramount. Our guides are trained in first aid and wilderness safety. We carry emergency communication devices, maintain small group sizes, and constantly assess conditions. We also provide comprehensive pre-trip safety briefings.'
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-primary font-semibold mb-2">Questions?</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70">
            Common questions about our trips, booking process, and adventure experience.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden transition-all hover:border-primary hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-background hover:bg-muted transition-colors text-left"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-border">
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 p-8 bg-gradient-to-r from-accent/10 to-accent-light/10 rounded-lg border border-accent/20 text-center">
          <p className="text-lg text-foreground mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <p className="text-foreground/70 mb-6">
            Contact us directly via email or schedule a call with our adventure planning team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@trailtopeaks.com"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Email Us
            </a>
            <a
              href="#contact"
              className="inline-block bg-white hover:bg-muted border border-primary text-primary px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
