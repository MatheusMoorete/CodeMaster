'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGitAlt, FaReact, FaJs, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

const topics = [
  {
    name: 'Git',
    description: 'Aprenda sobre controle de versão e colaboração em projetos',
    icon: FaGitAlt,
    color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600',
    href: '/routes/pratica/git'
  },
  {
    name: 'React',
    description: 'Explore os conceitos fundamentais do React',
    icon: FaReact,
    color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600',
    href: '/routes/pratica/react'
  },
  {
    name: 'Next.js',
    description: 'Aprenda sobre o framework React para produção',
    icon: SiNextdotjs,
    color: 'bg-black dark:bg-white text-white dark:text-black',
    href: '/routes/pratica/nextjs'
  },
  {
    name: 'JavaScript',
    description: 'Conceitos fundamentais da linguagem JavaScript',
    icon: FaJs,
    color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-400',
    href: '/routes/pratica/javascript'
  },
  {
    name: 'TypeScript',
    description: 'JavaScript com tipagem estática',
    icon: SiTypescript,
    color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600',
    href: '/routes/pratica/typescript'
  },
  {
    name: 'Algoritmos',
    description: 'Aprenda sobre algoritmos e estruturas de dados',
    icon: FaCode,
    color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600',
    href: '/routes/pratica/algorithms'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            CodeMaster
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Pratique seus conhecimentos em programação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={topic.href}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <div className="p-6 flex flex-col flex-grow">
                    <div className={`w-12 h-12 rounded-full ${topic.color} flex items-center justify-center mb-4`}>
                      <topic.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {topic.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {topic.description}
                    </p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 mt-auto">
                      Praticar Agora
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
