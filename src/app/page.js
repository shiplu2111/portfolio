import AboutMe from "@/components/AboutMe";
import Blogs from "@/components/Blogs";
import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <AboutMe />
      <Projects />
      <Services />
      <Testimonial />
      <Blogs />
    </main>
  );
}
