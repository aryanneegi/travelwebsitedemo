import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Gallery from '@/components/gallery';
import Testimonials from '@/components/testimonials';
import Blog from '@/components/blog';
import FAQ from '@/components/faq';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
