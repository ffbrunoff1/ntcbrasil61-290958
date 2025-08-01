import { motion } from 'framer-motion';
import {
  Building,
  Home,
  Landmark,
  Factory,
  Ruler,
  HardHat,
  PencilRuler,
  Hammer,
} from 'lucide-react';

export default function Services() {
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.3 },
    },
  };

  // Lista de serviços
  const services = [
    {
      icon: <Building size={24} />,
      title: 'Construção Comercial',
      description:
        'Desenvolvimento de espaços comerciais funcionais e modernos, desde pequenas lojas até grandes centros comerciais.',
    },
    {
      icon: <Home size={24} />,
      title: 'Construção Residencial',
      description:
        'Construção de residências personalizadas, condomínios e reformas residenciais com qualidade e atenção aos detalhes.',
    },
    {
      icon: <Landmark size={24} />,
      title: 'Obras Institucionais',
      description:
        'Construção de escolas, hospitais e prédios governamentais com foco em funcionalidade e acessibilidade.',
    },
    {
      icon: <Factory size={24} />,
      title: 'Instalações Industriais',
      description:
        'Desenvolvimento de plantas industriais eficientes e seguras, atendendo às necessidades específicas de cada setor.',
    },
    {
      icon: <Ruler size={24} />,
      title: 'Gestão de Projetos',
      description:
        'Coordenação e supervisão de todas as etapas do projeto, garantindo qualidade, prazo e orçamento.',
    },
    {
      icon: <HardHat size={24} />,
      title: 'Consultoria em Obras',
      description:
        'Assessoria técnica em todas as fases da construção, auxiliando na tomada de decisões e resolução de problemas.',
    },
    {
      icon: <PencilRuler size={24} />,
      title: 'Projeto Arquitetônico',
      description:
        'Elaboração de projetos arquitetônicos criativos e funcionais, alinhados às necessidades e desejos do cliente.',
    },
    {
      icon: <Hammer size={24} />,
      title: 'Reformas e Adaptações',
      description:
        'Serviços especializados em reformas, retrofit e adaptações de espaços existentes para novos usos.',
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
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
              Nossos Serviços
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-dark"
            variants={itemVariants}
          >
            Soluções completas em
            <span className="text-primary"> construção e engenharia</span>
          </motion.h2>
          <motion.p className="text-lg text-gray-600" variants={itemVariants}>
            Oferecemos uma ampla gama de serviços para atender às suas
            necessidades, desde o planejamento inicial até a conclusão final do
            projeto.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 flex flex-col h-full transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <motion.a
                href="#contato"
                className="text-primary font-medium inline-flex items-center mt-4 self-start"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                Saiba mais
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para iniciar seu próximo projeto?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar seus
            projetos em realidade com qualidade, inovação e excelência.
          </p>
          <motion.a
            href="#contato"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-md shadow-md hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicite um orçamento
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
