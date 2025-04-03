'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiNextdotjs } from 'react-icons/si';
import { nextjsQuestions } from '@/lib/data/nextjs-questions';
import QuestionCard from '@/components/ui/QuestionCard';
import ProgressBar from '@/components/ui/ProgressBar';
import ResultCard from '@/components/ui/ResultCard';

export default function NextjsPraticaPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean[]>([]);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setShowResult(false);
    setAnsweredCorrectly(Array(nextjsQuestions.length).fill(false));
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
    if (currentQuestionIndex < nextjsQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setShowResult(false);
    setAnsweredCorrectly(Array(nextjsQuestions.length).fill(false));
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResultCard 
            correctAnswers={correctAnswers} 
            totalQuestions={nextjsQuestions.length}
            topic="Next.js"
            onRestart={handleRestart}
          />
        </div>
      </div>
    );
  }

  const currentQuestion = nextjsQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <motion.div 
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-black dark:bg-white flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <SiNextdotjs className="h-8 w-8 text-white dark:text-black" />
          </motion.div>
          
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Prática de Next.js
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Teste seu conhecimento sobre conceitos fundamentais do Next.js
          </p>
        </div>
        
        <div className="mb-8">
          <ProgressBar 
            current={currentQuestionIndex + 1} 
            total={nextjsQuestions.length} 
          />
        </div>
        
        <AnimatePresence mode="wait">
          <QuestionCard 
            key={currentQuestion.id} 
            question={currentQuestion} 
            onNext={handleNextQuestion}
            isLast={currentQuestionIndex === nextjsQuestions.length - 1}
            onAnswer={handleAnswer}
          />
        </AnimatePresence>
      </div>
    </div>
  );
} 