import { motion } from 'framer-motion';
import { ArrowRight, Building2, Clock, Award } from 'lucide-react';

export default function Hero() {
  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -10,
      boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/80 -z-10"></div>

      {/* Padrão de pontos decorativo */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <div className="absolute top-0 left-0 right-0 h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Construindo o futuro com
            <span className="block mt-2 text-white drop-shadow-lg">
              excelência e inovação
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-white/90"
            variants={itemVariants}
          >
            Seu parceiro de confiança em construção, entregando projetos que
            transformam visões em realidade com qualidade e compromisso.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="#contato"
              className="btn-primary group w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Entre em contato
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </motion.a>
            <motion.a
              href="#servicos"
              className="btn-secondary bg-gray-200 text-dark border-gray-300 hover:bg-gray-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nossos serviços
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Cards de características */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="bg-white rounded-xl p-6 shadow-xl"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Building2 className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-dark">
              Projetos Personalizados
            </h3>
            <p className="text-gray-600">
              Desenvolvemos soluções únicas para atender às necessidades
              específicas de cada cliente.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-xl"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Clock className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-dark">
              Entregas no Prazo
            </h3>
            <p className="text-gray-600">
              Comprometidos com cronogramas rigorosos, garantindo que seus
              projetos sejam entregues no tempo estipulado.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-xl"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Award className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-dark">
              Qualidade Garantida
            </h3>
            <p className="text-gray-600">
              Utilizamos materiais de primeira linha e técnicas avançadas para
              garantir a excelência em cada projeto.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
