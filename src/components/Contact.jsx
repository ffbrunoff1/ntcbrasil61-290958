import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  XCircle,
  Loader2,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    status: 'idle', // idle, loading, success, error
    message: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setFormStatus({
      status: 'loading',
      message: 'Enviando mensagem...',
    });

    try {
      const response = await fetch(
        'https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            recipientEmail: 'ffbrunoff@yahoo.com.br',
          }),
        }
      );

      if (response.ok) {
        setFormStatus({
          status: 'success',
          message:
            'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        });

        // Limpar formulário
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu um erro ao enviar sua mensagem.'
        );
      }
    } catch (error) {
      setFormStatus({
        status: 'error',
        message:
          error.message ||
          'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.',
      });
    }
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const contactInfoVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
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
              Entre em Contato
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-dark"
            variants={itemVariants}
          >
            Vamos transformar suas ideias
            <span className="text-primary"> em realidade</span>
          </motion.h2>
          <motion.p className="text-lg text-gray-600" variants={itemVariants}>
            Estamos prontos para atender às suas necessidades. Entre em contato
            conosco e descubra como podemos ajudar no seu próximo projeto.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Informações de contato */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={contactInfoVariants}>
              <h3 className="text-2xl font-semibold mb-6">
                Informações de Contato
              </h3>
              <p className="text-gray-600 mb-8">
                Estamos disponíveis para responder suas dúvidas e discutir seu
                próximo projeto. Entre em contato por telefone, e-mail ou visite
                nosso escritório.
              </p>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              variants={contactInfoVariants}
            >
              <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-dark">Endereço</h4>
                <p className="text-gray-600 mt-1">
                  Padre Lebret 801 g05 bloco 03
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              variants={contactInfoVariants}
            >
              <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-dark">Telefone</h4>
                <p className="text-gray-600 mt-1">
                  <a
                    href="tel:+5544991040774"
                    className="hover:text-primary transition-colors"
                  >
                    (44) 99104-0774
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              variants={contactInfoVariants}
            >
              <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-dark">E-mail</h4>
                <p className="text-gray-600 mt-1">
                  <a
                    href="mailto:ffbrunoff@yahoo.com.br"
                    className="hover:text-primary transition-colors"
                  >
                    ffbrunoff@yahoo.com.br
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-primary to-accent rounded-xl text-white"
              variants={contactInfoVariants}
            >
              <h4 className="font-semibold text-lg mb-2">
                Horário de Atendimento
              </h4>
              <p className="mb-2">Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </motion.div>
          </motion.div>

          {/* Formulário de contato */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>

            {formStatus.status === 'success' ? (
              <motion.div
                className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-700 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="mr-3" size={20} />
                <span>{formStatus.message}</span>
              </motion.div>
            ) : formStatus.status === 'error' ? (
              <motion.div
                className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <XCircle className="mr-3" size={20} />
                <span>{formStatus.message}</span>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="Seu e-mail"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="Como podemos ajudar?"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-accent transition-all duration-300 disabled:opacity-70"
                disabled={formStatus.status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus.status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
