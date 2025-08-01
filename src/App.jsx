import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Função para rolagem suave para as seções
  const handleScrollToSection = e => {
    if (e.target.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Ajuste para o header fixo
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    // Adiciona listener para links de navegação interna
    document.addEventListener('click', handleScrollToSection);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleScrollToSection);
    };
  }, []);

  return (
    <div className="font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
