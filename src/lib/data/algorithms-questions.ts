export const algorithmsQuestions = [
  {
    id: "1",
    question: "O que é complexidade de tempo O(n)?",
    options: [
      "Complexidade constante",
      "Complexidade linear",
      "Complexidade quadrática",
      "Complexidade exponencial"
    ],
    correctOptionIndex: 1,
    explanation: "A complexidade O(n) é linear, onde o tempo de execução cresce proporcionalmente com o tamanho da entrada. Por exemplo, percorrer um array de n elementos uma vez."
  },
  {
    id: "2",
    question: "Qual é a principal vantagem de uma lista encadeada sobre um array?",
    options: [
      "Acesso mais rápido aos elementos",
      "Menor uso de memória",
      "Inserção e remoção mais eficientes",
      "Melhor para ordenação"
    ],
    correctOptionIndex: 2,
    explanation: "Listas encadeadas têm inserção e remoção mais eficientes (O(1)) pois não precisam reorganizar todos os elementos, apenas atualizar os ponteiros."
  },
  {
    id: "3",
    question: "Como funciona a busca binária?",
    options: [
      "Procura sequencialmente",
      "Divide o problema pela metade a cada iteração",
      "Procura do final para o início",
      "Procura aleatoriamente"
    ],
    correctOptionIndex: 1,
    explanation: "A busca binária divide o problema pela metade a cada iteração, resultando em uma complexidade O(log n). Requer que os dados estejam ordenados."
  },
  {
    id: "4",
    question: "O que é uma árvore binária de busca?",
    options: [
      "Uma lista com dois elementos",
      "Uma estrutura onde cada nó tem no máximo dois filhos e os valores menores ficam à esquerda",
      "Uma estrutura com altura fixa",
      "Uma estrutura sem raiz"
    ],
    correctOptionIndex: 1,
    explanation: "Uma árvore binária de busca é uma estrutura onde cada nó tem no máximo dois filhos, e os valores menores que o nó atual ficam à esquerda, enquanto os maiores ficam à direita."
  },
  {
    id: "5",
    question: "Qual é a complexidade do algoritmo QuickSort no pior caso?",
    options: [
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(2^n)"
    ],
    correctOptionIndex: 2,
    explanation: "No pior caso, quando o pivô escolhido é sempre o menor ou maior elemento, o QuickSort tem complexidade O(n²). No caso médio, é O(n log n)."
  }
]; 