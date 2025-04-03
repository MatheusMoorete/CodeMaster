import { Question } from './git-questions';

export const reactQuestions: Question[] = [
  {
    id: 'react-1',
    question: 'O que é o Virtual DOM?',
    options: [
      'Uma DOM específica para aplicações React que é mais rápida que a DOM do navegador.',
      'Uma representação em memória da DOM real, que o React usa para melhorar a performance.',
      'Um método de renderização que pula a DOM do navegador completamente.',
      'Um conjunto de elementos HTML virtuais que não podem ser renderizados diretamente.'
    ],
    correctOptionIndex: 1,
    explanation: 'O Virtual DOM é uma representação leve em memória da DOM real do navegador. Quando o estado de um componente React muda, o React cria uma nova árvore Virtual DOM e a compara com a anterior. Em seguida, calcula a maneira mais eficiente para atualizar a DOM real, aplicando apenas as mudanças necessárias em vez de re-renderizar a página inteira. Isso reduz significativamente o trabalho no navegador e melhora a performance da aplicação.'
  },
  {
    id: 'react-2',
    question: 'Qual a diferença entre componentes controlados e não controlados?',
    options: [
      'Componentes controlados usam state, enquanto não controlados usam props.',
      'Componentes controlados são atualizados pelo React, enquanto não controlados são atualizados diretamente pela DOM.',
      'Componentes controlados têm seu estado gerenciado pelo React, enquanto não controlados mantêm seu próprio estado internamente.',
      'Componentes controlados são funcionais, enquanto não controlados são baseados em classes.'
    ],
    correctOptionIndex: 2,
    explanation: 'Em React, um componente controlado é aquele cujo valor é controlado pelo React através do state. Quando um usuário interage com um componente controlado (como digitar em um input), um evento é disparado (como onChange) que atualiza o state, e o componente é re-renderizado com esse novo valor. Já um componente não controlado mantém seu próprio estado internamente, geralmente acessado através de referências (useRef). Em formulários, componentes controlados são geralmente preferidos pois permitem validação em tempo real e maior controle sobre o comportamento da interface.'
  },
  {
    id: 'react-3',
    question: 'O que é prop drilling, e como você pode evitá-lo?',
    options: [
      'É quando props são passadas diretamente para componentes filhos, e pode ser evitado usando o Context API ou bibliotecas de gerenciamento de estado.',
      'É um problema de segurança quando props contêm dados sensíveis, e pode ser evitado com criptografia.',
      'É quando componentes têm muitas props, e pode ser evitado combinando múltiplas props em um único objeto.',
      'É quando props são renderizados diretamente no DOM, e pode ser evitado usando o Virtual DOM.'
    ],
    correctOptionIndex: 0,
    explanation: 'Prop drilling ocorre quando props precisam ser passadas através de múltiplos níveis de componentes para chegarem a um componente profundamente aninhado que realmente precisa delas. Isso pode tornar o código mais difícil de manter, pois componentes intermediários precisam aceitar e repassar props que não usam diretamente. Para evitar isso, você pode usar o Context API do React, que permite compartilhar valores entre componentes sem passá-los explicitamente através da árvore de componentes. Bibliotecas de gerenciamento de estado como Redux, Zustand, ou Recoil também são soluções comuns para este problema.'
  },
  {
    id: 'react-4',
    question: 'O que é o conceito de reconciliação no React?',
    options: [
      'É o processo de sincronizar dois diferentes estados do React através de eventos.',
      'É o processo pelo qual o React atualiza a DOM real baseado nas mudanças no Virtual DOM.',
      'É quando componentes pai e filho reconciliam suas props para manter a consistência.',
      'É o ciclo de vida interno usado pelo React para resolver conflitos entre componentes.'
    ],
    correctOptionIndex: 1,
    explanation: 'Reconciliação é o algoritmo por trás do Virtual DOM no React. Quando há mudanças no estado ou props de um componente, o React cria uma nova árvore Virtual DOM e a compara com a anterior. Este processo, chamado de "diffing", determina quais partes da DOM real precisam ser atualizadas. O React então aplica essas mudanças específicas na DOM real de maneira eficiente, em vez de atualizar toda a página. Esse processo de determinar o que mudou e atualizar apenas o necessário é o que chamamos de reconciliação.'
  },
  {
    id: 'react-5',
    question: 'Qual a diferença entre estado (state) e propriedades (props) em React?',
    options: [
      'State e props são a mesma coisa, apenas utilizados em contextos diferentes.',
      'State é usado apenas em componentes de classe, enquanto props é usado em componentes funcionais.',
      'State é mutável e gerenciado internamente pelo componente, enquanto props são imutáveis e passadas de componentes pais.',
      'State é para dados estáticos, enquanto props é para dados que mudam com o tempo.'
    ],
    correctOptionIndex: 2,
    explanation: 'Em React, props (abreviação de "properties") são dados passados para um componente por seu componente pai e são somente leitura - um componente não deve modificar suas próprias props. O state, por outro lado, é gerenciado internamente pelo componente e pode mudar ao longo do tempo, geralmente em resposta a interações do usuário ou eventos da rede. Quando o state muda, o React re-renderiza o componente. Tanto componentes funcionais (usando o hook useState) quanto componentes de classe podem ter state. A distinção fundamental é que props fluem de cima para baixo (do pai para o filho), enquanto state é local e encapsulado dentro do componente.'
  }
]; 