import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import CloudDemo from '../components/sections/CloudDemo';
import Experience from '../components/sections/Experience';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="border-t border-gray-200 my-16"></div>
      <Skills />
      <div className="border-t border-gray-200 my-16"></div>
      <Projects />
      <div className="border-t border-gray-200 my-16"></div>
      <CloudDemo />
      <div className="border-t border-gray-200 my-16"></div>
      <Experience />
      
    </>
  );
}
