export const nextjsQuestions = [
  {
    id: "1",
    question: "O que é Server-Side Rendering (SSR) no Next.js?",
    options: [
      "Renderização que acontece apenas no navegador",
      "Renderização que acontece no servidor antes de enviar para o cliente",
      "Renderização que acontece em tempo real",
      "Renderização que acontece apenas em componentes estáticos"
    ],
    correctOptionIndex: 1,
    explanation: "O Server-Side Rendering (SSR) no Next.js é uma técnica onde o conteúdo é renderizado no servidor antes de ser enviado para o cliente. Isso oferece benefícios como melhor SEO, carregamento inicial mais rápido e melhor experiência do usuário."
  },
  {
    id: "2",
    question: "Qual é a diferença entre SSG e ISR no Next.js?",
    options: [
      "SSG é mais rápido que ISR",
      "ISR permite revalidação periódica de páginas estáticas",
      "SSG é mais moderno que ISR",
      "Não há diferença entre eles"
    ],
    correctOptionIndex: 1,
    explanation: "ISR (Incremental Static Regeneration) é uma evolução do SSG (Static Site Generation) que permite revalidar páginas estáticas em intervalos específicos, mantendo os benefícios do SSG enquanto oferece conteúdo atualizado."
  },
  {
    id: "3",
    question: "Como funciona o sistema de roteamento do Next.js 13+?",
    options: [
      "Usa apenas páginas na pasta pages",
      "Usa apenas o App Router",
      "Suporta tanto o Pages Router quanto o App Router",
      "Usa apenas rotas dinâmicas"
    ],
    correctOptionIndex: 2,
    explanation: "O Next.js 13+ suporta tanto o sistema tradicional de roteamento (Pages Router) quanto o novo App Router, permitindo que os desenvolvedores escolham a abordagem que melhor se adequa ao seu projeto."
  },
  {
    id: "4",
    question: "O que é o arquivo layout.tsx no App Router?",
    options: [
      "Um arquivo de configuração",
      "Um componente que define o layout compartilhado entre páginas",
      "Um arquivo de estilo",
      "Um arquivo de rotas"
    ],
    correctOptionIndex: 1,
    explanation: "O layout.tsx no App Router é um componente especial que define o layout compartilhado entre todas as páginas dentro de um diretório, permitindo manter elementos comuns como cabeçalho e rodapé."
  },
  {
    id: "5",
    question: "Como funciona o cache no Next.js?",
    options: [
      "Não há cache no Next.js",
      "Usa apenas cache do navegador",
      "Implementa múltiplas estratégias de cache (Route Cache, Data Cache, Full Route Cache)",
      "Usa apenas cache do servidor"
    ],
    correctOptionIndex: 2,
    explanation: "O Next.js implementa múltiplas estratégias de cache para otimizar o desempenho, incluindo Route Cache, Data Cache e Full Route Cache, cada um com seu propósito específico."
  }
]; 