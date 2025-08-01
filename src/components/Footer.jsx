import { motion } from 'framer-motion';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  // Função para rolar para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: '#57ACE1',
      transition: { duration: 0.2 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 },
    },
  };

  // Links de navegação
  const navLinks = [
    { name: 'Sobre Nós', url: '#sobre' },
    { name: 'Serviços', url: '#servicos' },
    { name: 'Contato', url: '#contato' },
  ];

  // Informações de contato
  const contactInfo = [
    {
      icon: <MapPin size={16} />,
      text: 'Padre Lebret 801 g05 bloco 03',
    },
    {
      icon: <Phone size={16} />,
      text: '(44) 99104-0774',
      url: 'tel:+5544991040774',
    },
    {
      icon: <Mail size={16} />,
      text: 'ffbrunoff@yahoo.com.br',
      url: 'mailto:ffbrunoff@yahoo.com.br',
    },
  ];

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo e informações */}
          <motion.div
            className="md:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754008882827_0.png"
                alt="NTC Brasil"
                className="h-14 mb-6"
              />
            </motion.div>
            <motion.p
              className="text-gray-400 mb-6 max-w-md"
              variants={itemVariants}
            >
              Somos uma empresa especializada em construção, oferecendo soluções
              de alta qualidade que atendem às necessidades específicas de cada
              cliente.
            </motion.p>
            <motion.div className="space-y-3" variants={containerVariants}>
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-gray-400"
                  variants={itemVariants}
                >
                  <div className="text-primary mr-3">{item.icon}</div>
                  {item.url ? (
                    <a
                      href={item.url}
                      className="hover:text-primary transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Links úteis */}
          <motion.div
            className="md:col-span-3 md:ml-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h4
              className="text-lg font-semibold mb-6"
              variants={itemVariants}
            >
              Links Úteis
            </motion.h4>
            <motion.ul className="space-y-3" variants={containerVariants}>
              {navLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a
                    href={link.url}
                    className="text-gray-400 hover:text-primary transition-colors inline-block"
                    whileHover="hover"
                    variants={linkVariants}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Horário de atendimento */}
          <motion.div
            className="md:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h4
              className="text-lg font-semibold mb-6"
              variants={itemVariants}
            >
              Horário de Atendimento
            </motion.h4>
            <motion.div
              className="space-y-3 text-gray-400"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <span className="block">Segunda a Sexta:</span>
                <span className="font-medium text-white">8h às 18h</span>
              </motion.div>
              <motion.div variants={itemVariants}>
                <span className="block">Sábado:</span>
                <span className="font-medium text-white">8h às 12h</span>
              </motion.div>
              <motion.div variants={itemVariants}>
                <span className="block">Domingo:</span>
                <span className="font-medium text-white">Fechado</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Divisor */}
        <motion.div
          className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </div>

          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all"
            whileHover={iconVariants.hover}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
