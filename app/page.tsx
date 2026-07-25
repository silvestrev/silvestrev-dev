import About from '@/features/about';
import Experience from '@/features/experience';
import Footer from '@/features/footer';
import Hero from '@/features/hero';
import Projects from '@/features/projects';

const Home = () => {
  return (
    <>
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6">
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
};

export default Home;
