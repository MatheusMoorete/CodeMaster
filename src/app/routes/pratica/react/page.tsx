'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { reactQuestions } from '@/lib/data/react-questions';
import QuestionCard from '@/components/ui/QuestionCard';
import ProgressBar from '@/components/ui/ProgressBar';
import ResultCard from '@/components/ui/ResultCard';

export default function ReactPraticaPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean[]>([]);

  // Garante que os estados sejam resetados quando a página for montada
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setShowResult(false);
    setAnsweredCorrectly(Array(reactQuestions.length).fill(false));
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    const newAnsweredCorrectly = [...answeredCorrectly];
    newAnsweredCorrectly[currentQuestionIndex] = isCorrect;
    setAnsweredCorrectly(newAnsweredCorrectly);
    
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < reactQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setShowResult(false);
    setAnsweredCorrectly(Array(reactQuestions.length).fill(false));
  };

  // Se não tivermos mais perguntas, mostramos o resultado
  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResultCard 
            correctAnswers={correctAnswers} 
            totalQuestions={reactQuestions.length}
            topic="React"
            onRestart={handleRestart}
          />
        </div>
      </div>
    );
  }

  // A pergunta atual
  const currentQuestion = reactQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mb-8 text-center">
          <motion.div 
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <FaReact className="h-8 w-8 text-blue-500" />
          </motion.div>
          
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Prática de React
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Teste seu conhecimento sobre conceitos fundamentais do React
          </p>
        </div>
        
        {/* Barra de Progresso */}
        <div className="mb-8">
          <ProgressBar 
            current={currentQuestionIndex + 1} 
            total={reactQuestions.length} 
          />
        </div>
        
        {/* Cartão de Pergunta */}
        <AnimatePresence mode="wait">
          <QuestionCard 
            key={currentQuestion.id} 
            question={currentQuestion} 
            onNext={handleNextQuestion}
            isLast={currentQuestionIndex === reactQuestions.length - 1}
            onAnswer={handleAnswer}
          />
        </AnimatePresence>
      </div>
    </div>
  );
} 