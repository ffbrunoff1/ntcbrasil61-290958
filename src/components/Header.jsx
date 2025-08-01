import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Verifica o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animações
  const headerVariants = {
    initial: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: '#57ACE1',
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-4"
      initial="initial"
      animate={isScrolled ? 'scrolled' : 'initial'}
      variants={headerVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754008882827_0.png"
              alt="NTC Brasil"
              className="h-12 md:h-16"
            />
          </motion.a>

          {/* Links de navegação (desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#sobre"
              className={`text-sm font-medium transition-colors ${isScrolled ? 'text-dark' : 'text-white'}`}
              whileHover="hover"
              variants={linkVariants}
            >
              Sobre Nós
            </motion.a>
            <motion.a
              href="#servicos"
              className={`text-sm font-medium transition-colors ${isScrolled ? 'text-dark' : 'text-white'}`}
              whileHover="hover"
              variants={linkVariants}
            >
              Serviços
            </motion.a>
            <motion.a
              href="#contato"
              className={`text-sm font-medium transition-colors ${isScrolled ? 'text-dark' : 'text-white'}`}
              whileHover="hover"
              variants={linkVariants}
            >
              Contato
            </motion.a>
            <motion.a
              href="tel:+5544991040774"
              className="flex items-center px-5 py-2.5 rounded-full bg-primary text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={16} className="mr-2" />
              (44) 99104-0774
            </motion.a>
          </nav>

          {/* Botão do menu (mobile) */}
          <motion.button
            className="md:hidden text-primary focus:outline-none"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Menu mobile */}
      <motion.div
        className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg"
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
      >
        <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
          <motion.a
            href="#sobre"
            className="text-lg font-medium text-dark py-2 border-b border-gray-100"
            whileHover={{ x: 5, color: '#57ACE1' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nós
          </motion.a>
          <motion.a
            href="#servicos"
            className="text-lg font-medium text-dark py-2 border-b border-gray-100"
            whileHover={{ x: 5, color: '#57ACE1' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Serviços
          </motion.a>
          <motion.a
            href="#contato"
            className="text-lg font-medium text-dark py-2 border-b border-gray-100"
            whileHover={{ x: 5, color: '#57ACE1' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </motion.a>
          <motion.a
            href="tel:+5544991040774"
            className="flex items-center justify-center px-5 py-3 mt-2 rounded-full bg-primary text-white font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={16} className="mr-2" />
            (44) 99104-0774
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
}
