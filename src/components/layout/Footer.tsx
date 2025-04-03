'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner dark:bg-gray-900 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center justify-center">
          <Link href="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            CodeMaster
          </Link>
          
          <p className="text-gray-600 dark:text-gray-400 text-center mb-2">
            Aprenda e pratique conceitos de programação de forma interativa
          </p>
          
          <motion.div 
            className="flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm"
            whileHover={{ scale: 1.05 }}
          >
            Desenvolvido por Matheus Morete Espinoso
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 