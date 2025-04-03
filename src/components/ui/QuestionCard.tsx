'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '@/lib/data/git-questions';
import { FaCheck, FaTimes } from 'react-icons/fa';

type QuestionCardProps = {
  question: Question;
  onNext: () => void;
  isLast: boolean;
  onAnswer?: (isCorrect: boolean) => void;
};

export default function QuestionCard({ 
  question, 
  onNext, 
  isLast,
  onAnswer 
}: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (index: number) => {
    if (!isAnswered) {
      setSelectedOption(index);
      setIsAnswered(true);
      
      // Verifica se a resposta está correta
      const isCorrect = index === question.correctOptionIndex;
      
      // Notifica o componente pai se houver um callback
      if (onAnswer) {
        onAnswer(isCorrect);
      }
      
      // Mostra a explicação automaticamente após selecionar uma opção
      setTimeout(() => {
        setShowExplanation(true);
      }, 800);
    }
  };

  // Reseta o estado quando a pergunta muda
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);
  }, [question.id]);

  const isCorrect = selectedOption === question.correctOptionIndex;

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {question.question}
        </h3>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              className={`w-full text-left p-4 rounded-lg border ${
                !isAnswered 
                  ? 'border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500' 
                  : selectedOption === index 
                    ? (isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20')
                    : index === question.correctOptionIndex && selectedOption !== null
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 opacity-60'
              }`}
              onClick={() => handleOptionClick(index)}
              whileHover={!isAnswered ? { scale: 1.01 } : {}}
              disabled={isAnswered}
            >
              <div className="flex items-start">
                <div className="flex-grow">
                  {option}
                </div>
                {isAnswered && (
                  <div className="ml-3 flex-shrink-0">
                    {index === question.correctOptionIndex ? (
                      <FaCheck className="h-5 w-5 text-green-500" />
                    ) : selectedOption === index ? (
                      <FaTimes className="h-5 w-5 text-red-500" />
                    ) : null}
                  </div>
                )}
              </div>
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Explicação:
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {question.explanation}
              </p>
              
              <div className="mt-4 flex justify-end">
                <motion.button
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  onClick={onNext}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLast ? "Concluir" : "Próxima Pergunta"}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
} 