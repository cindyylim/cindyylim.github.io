import Hero from '../src/components/Hero';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Experience from '../src/components/Experience';
import Education from '../src/components/Education';
import Contact from '../src/components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
        </>
    );
}
