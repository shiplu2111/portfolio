import AboutMe from "@/components/AboutMe";
import Blogs from "@/components/Blogs";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-r from-[#07233b] from-10% via-[#04192d] via-58%  to-[#050c16] to-90%">
        <Header />
        <Hero />
        <Brands />
        <AboutMe />
        <Projects />
        <Services />
        <Testimonial />
        <Blogs />
        <Footer />
      </div>
    </main>
  );
}
