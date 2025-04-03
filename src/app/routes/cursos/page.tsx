'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaReact, FaJs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

// Tipo para os cursos
interface Curso {
  id: string;
  titulo: string;
  descricao: string;
  nivel: string;
  icon: React.ReactNode;
  cor: string;
  rota: string;
}

export default function Cursos() {
  const [filtroNivel, setFiltroNivel] = useState<string>('todos');
  
  // Lista de cursos disponíveis
  const cursos: Curso[] = [
    {
      id: 'react',
      titulo: 'React',
      descricao: 'Aprenda a construir interfaces modernas com React, desde os fundamentos até conceitos avançados.',
      nivel: 'intermediário',
      icon: <FaReact className="h-12 w-12 text-blue-500" />,
      cor: 'bg-blue-500',
      rota: '/routes/cursos/react'
    },
    {
      id: 'nextjs',
      titulo: 'Next.js',
      descricao: 'Desenvolva aplicações React com renderização do lado do servidor, geração estática e muito mais.',
      nivel: 'avançado',
      icon: <SiNextdotjs className="h-12 w-12 text-black dark:text-white" />,
      cor: 'bg-black dark:bg-white',
      rota: '/routes/cursos/nextjs'
    },
    {
      id: 'javascript',
      titulo: 'JavaScript',
      descricao: 'Domine a linguagem mais versátil da web, desde o básico até recursos modernos.',
      nivel: 'iniciante',
      icon: <FaJs className="h-12 w-12 text-yellow-400" />,
      cor: 'bg-yellow-400',
      rota: '/routes/cursos/javascript'
    },
    {
      id: 'typescript',
      titulo: 'TypeScript',
      descricao: 'Adicione tipagem estática ao JavaScript e melhore a qualidade do seu código.',
      nivel: 'intermediário',
      icon: <SiTypescript className="h-12 w-12 text-blue-600" />,
      cor: 'bg-blue-600',
      rota: '/routes/cursos/typescript'
    }
  ];

  // Filtra os cursos com base no nível selecionado
  const cursosFiltrados = filtroNivel === 'todos' 
    ? cursos 
    : cursos.filter(curso => curso.nivel === filtroNivel);

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
            Nossos Cursos
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Escolha um dos nossos cursos interativos e comece sua jornada no desenvolvimento frontend moderno.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full ${filtroNivel === 'todos' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
            onClick={() => setFiltroNivel('todos')}
          >
            Todos
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full ${filtroNivel === 'iniciante' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
            onClick={() => setFiltroNivel('iniciante')}
          >
            Iniciante
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full ${filtroNivel === 'intermediário' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
            onClick={() => setFiltroNivel('intermediário')}
          >
            Intermediário
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full ${filtroNivel === 'avançado' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
            onClick={() => setFiltroNivel('avançado')}
          >
            Avançado
          </motion.button>
        </div>

        {/* Lista de Cursos */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {cursosFiltrados.map((curso) => (
            <motion.div 
              key={curso.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${curso.cor}`}>
                    {curso.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{curso.titulo}</h3>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1
                      ${curso.nivel === 'iniciante' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                      curso.nivel === 'intermediário' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}
                    >
                      {curso.nivel.charAt(0).toUpperCase() + curso.nivel.slice(1)}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {curso.descricao}
                </p>
                <motion.div 
                  className="mt-6"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link href={curso.rota} className="inline-block w-full text-center py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                    Acessar Curso
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {cursosFiltrados.length === 0 && (
          <motion.div 
            className="text-center py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Não encontramos cursos para o nível selecionado.
            </p>
            <button 
              onClick={() => setFiltroNivel('todos')} 
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Ver todos os cursos
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
} 