import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Programs } from "../components/Programs";
import { Pricing } from "../components/Pricing";
import { Curriculum } from "../components/Curriculum";
import { TeacherBio } from "../components/TeacherBio";
import { FAQ } from "../components/FAQ";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export function VietnameseCourse() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Programs />
        <Pricing />
        <Curriculum />
        <TeacherBio />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
