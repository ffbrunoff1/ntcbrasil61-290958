import { motion } from 'framer-motion';
import { CheckCircle, Users, TrendingUp, Target } from 'lucide-react';

export default function About() {
  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Sobre Nós
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-dark"
            variants={itemVariants}
          >
            Seu parceiro de confiança em
            <span className="text-primary block md:inline">
              {' '}
              projetos de construção
            </span>
          </motion.h2>
          <motion.p className="text-lg text-gray-600" variants={itemVariants}>
            Na NTC Brasil, combinamos experiência, inovação e excelência técnica
            para entregar projetos de construção que superam expectativas e
            transformam visões em realidade.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo à esquerda */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl font-semibold"
              variants={itemVariants}
            >
              Por que escolher a NTC Brasil?
            </motion.h3>

            <motion.div className="space-y-4" variants={containerVariants}>
              {[
                {
                  icon: <CheckCircle className="text-primary" size={20} />,
                  title: 'Expertise em Construção',
                  description:
                    'Anos de experiência no mercado, construindo soluções duradouras e sustentáveis.',
                },
                {
                  icon: <CheckCircle className="text-primary" size={20} />,
                  title: 'Equipe Qualificada',
                  description:
                    'Profissionais altamente treinados e dedicados a oferecer o melhor serviço.',
                },
                {
                  icon: <CheckCircle className="text-primary" size={20} />,
                  title: 'Compromisso com Prazos',
                  description:
                    'Entregamos no tempo acordado, respeitando cronogramas e orçamentos.',
                },
                {
                  icon: <CheckCircle className="text-primary" size={20} />,
                  title: 'Atendimento Personalizado',
                  description:
                    'Cada cliente recebe atenção dedicada às suas necessidades específicas.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div className="ml-4">
                    <h4 className="font-medium text-dark">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Conteúdo à direita - Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {[
              {
                icon: <Users className="text-primary" size={24} />,
                title: 'Foco no Cliente',
                description:
                  'Colocamos seus objetivos e necessidades no centro de tudo o que fazemos.',
              },
              {
                icon: <TrendingUp className="text-primary" size={24} />,
                title: 'Crescimento Constante',
                description:
                  'Investimos continuamente em novas tecnologias e metodologias.',
              },
              {
                icon: <Target className="text-primary" size={24} />,
                title: 'Metas Claras',
                description:
                  'Trabalhamos com objetivos bem definidos para garantir resultados.',
              },
              {
                icon: <CheckCircle className="text-primary" size={24} />,
                title: 'Qualidade Garantida',
                description:
                  'Comprometidos com os mais altos padrões em cada projeto.',
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col"
                variants={featureVariants}
                whileHover="hover"
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
                <p className="text-gray-600 text-sm flex-grow">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Números da empresa */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 bg-white p-8 rounded-xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {[
            { value: '100+', label: 'Projetos Concluídos' },
            { value: '15+', label: 'Anos de Experiência' },
            { value: '50+', label: 'Clientes Satisfeitos' },
            { value: '30+', label: 'Profissionais' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
