export const javascriptQuestions = [
  {
    id: "1",
    question: "O que é closure em JavaScript?",
    options: [
      "Uma função que não retorna valor",
      "Uma função que tem acesso ao escopo de sua função externa",
      "Uma função que só pode ser chamada uma vez",
      "Uma função que não aceita parâmetros"
    ],
    correctOptionIndex: 1,
    explanation: "Closure é uma função que tem acesso ao escopo de sua função externa, mesmo após a função externa ter retornado. Isso permite que a função interna 'lembre' e acesse variáveis do escopo externo."
  },
  {
    id: "2",
    question: "Como funciona o protótipo em JavaScript?",
    options: [
      "É um tipo de variável",
      "É um mecanismo de herança baseado em objetos",
      "É uma função especial",
      "É um método de array"
    ],
    correctOptionIndex: 1,
    explanation: "O protótipo em JavaScript é um mecanismo de herança baseado em objetos, onde cada objeto tem um protótipo interno que permite compartilhar propriedades e métodos entre objetos."
  },
  {
    id: "3",
    question: "O que é o Event Loop no JavaScript?",
    options: [
      "Um tipo de loop for",
      "Um mecanismo que permite a execução assíncrona",
      "Uma estrutura de dados",
      "Um tipo de função"
    ],
    correctOptionIndex: 1,
    explanation: "O Event Loop é um mecanismo que permite a execução assíncrona no JavaScript, gerenciando a pilha de chamadas e a fila de callbacks para garantir que operações assíncronas sejam executadas corretamente."
  },
  {
    id: "4",
    question: "Como funcionam as Promises em JavaScript?",
    options: [
      "São funções síncronas",
      "São objetos que representam operações assíncronas",
      "São tipos de variáveis",
      "São estruturas de dados"
    ],
    correctOptionIndex: 1,
    explanation: "Promises são objetos que representam operações assíncronas, permitindo lidar com operações que podem ser concluídas no futuro, oferecendo uma maneira mais elegante de trabalhar com código assíncrono."
  },
  {
    id: "5",
    question: "O que é hoisting em JavaScript?",
    options: [
      "Um tipo de função",
      "Um mecanismo que move declarações para o topo do escopo",
      "Um tipo de variável",
      "Um método de array"
    ],
    correctOptionIndex: 1,
    explanation: "Hoisting é um mecanismo em JavaScript que move as declarações de variáveis e funções para o topo do seu escopo antes da execução do código, permitindo que sejam usadas antes de serem declaradas."
  }
]; 