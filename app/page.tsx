

import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <ProjectsSection/>
        <ContactSection/>
    </div>
    </main>
  );
}
