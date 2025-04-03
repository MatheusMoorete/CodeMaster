'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaHome, FaRedo } from 'react-icons/fa';

interface ResultCardProps {
  correctAnswers: number;
  totalQuestions: number;
  topic: string;
  onRestart: () => void;
}

export default function ResultCard({ correctAnswers, totalQuestions, topic, onRestart }: ResultCardProps) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  // Determina a mensagem com base no percentual de acertos
  let message = '';
  let messageClass = '';
  
  if (percentage >= 90) {
    message = 'Excelente! Você domina esse assunto!';
    messageClass = 'text-green-500 dark:text-green-400';
  } else if (percentage >= 70) {
    message = 'Muito bom! Você está no caminho certo.';
    messageClass = 'text-blue-500 dark:text-blue-400';
  } else if (percentage >= 50) {
    message = 'Bom trabalho! Continue estudando para melhorar.';
    messageClass = 'text-yellow-500 dark:text-yellow-400';
  } else {
    message = 'Continue praticando para melhorar seu conhecimento.';
    messageClass = 'text-red-500 dark:text-red-400';
  }

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-8 text-center">
        <motion.div 
          className="h-32 w-32 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <FaCheckCircle className="h-16 w-16 text-indigo-600 dark:text-indigo-400" />
        </motion.div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Resultado da Prática de {topic}
        </h2>
        
        <p className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4">
          {percentage}%
        </p>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Você acertou {correctAnswers} de {totalQuestions} questões
        </p>
        
        <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full mb-4 overflow-hidden">
          <motion.div 
            className="h-full bg-indigo-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          />
        </div>
        
        <p className={`text-xl font-medium mb-8 ${messageClass}`}>
          {message}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            onClick={onRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRedo />
            Tentar Novamente
          </motion.button>
          
          <Link href="/routes/pratica" passHref>
            <motion.a
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHome />
              Outros Tópicos
            </motion.a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 