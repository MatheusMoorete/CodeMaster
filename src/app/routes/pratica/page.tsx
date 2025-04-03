'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaReact, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

export default function PraticaPage() {
  const topics = [
    { 
      id: 'git',
      name: 'Git', 
      icon: <FaGitAlt className="h-12 w-12 text-red-500" />,
      description: 'Domine os conceitos de controle de versão, incluindo branches, merges, rebases e resolução de conflitos.',
      color: 'bg-red-500',
      route: '/routes/pratica/git',
      questions: 5
    },
    { 
      id: 'react',
      name: 'React', 
      icon: <FaReact className="h-12 w-12 text-blue-500" />,
      description: 'Pratique conceitos teóricos fundamentais como Virtual DOM, componentes, hooks e ciclo de vida dos componentes.',
      color: 'bg-blue-500',
      route: '/routes/pratica/react',
      questions: 5
    },
    { 
      id: 'nextjs',
      name: 'Next.js', 
      icon: <SiNextdotjs className="h-12 w-12 text-black dark:text-white" />,
      description: 'Teste seu conhecimento sobre SSR, SSG, ISR e o sistema de roteamento do Next.js.',
      color: 'bg-black dark:bg-white',
      route: '/routes/pratica/nextjs',
      questions: 5
    },
    { 
      id: 'javascript',
      name: 'JavaScript', 
      icon: <FaJs className="h-12 w-12 text-yellow-400" />,
      description: 'Fortaleça seu conhecimento em conceitos como closures, prototypes, promises e event loop.',
      color: 'bg-yellow-400',
      route: '/routes/pratica/javascript',
      questions: 5
    },
    { 
      id: 'typescript',
      name: 'TypeScript', 
      icon: <SiTypescript className="h-12 w-12 text-blue-600" />,
      description: 'Teste seu conhecimento em tipos, interfaces, generics e type assertions.',
      color: 'bg-blue-600',
      route: '/routes/pratica/typescript',
      questions: 5
    }
  ];

  // Animações
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Escolha um Tópico para Praticar
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Teste seus conhecimentos teóricos e aprenda mais sobre os conceitos fundamentais do desenvolvimento frontend.
          </p>
        </motion.div>

        {/* Lista de Tópicos */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {topics.map((topic) => (
            <motion.div 
              key={topic.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${topic.color}`}>
                    {topic.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{topic.name}</h3>
                    <div className="mt-1 flex items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {topic.questions} perguntas
                      </span>
                      <span className="mx-2 text-gray-300 dark:text-gray-700">•</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Conceitos teóricos
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {topic.description}
                </p>
                
                <motion.div 
                  className="mt-6"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link href={topic.route} className="inline-block w-full text-center py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                    Iniciar Prática
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 