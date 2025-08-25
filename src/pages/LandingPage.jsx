import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import EventsSection from "../components/EventSection";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <EventsSection />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
