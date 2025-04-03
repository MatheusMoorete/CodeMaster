export type Question = {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
};

export const gitQuestions: Question[] = [
  {
    id: 'git-1',
    question: 'O que é um branch no Git?',
    options: [
      'Um erro que ocorre durante o push para o repositório remoto.',
      'Uma linha independente de desenvolvimento que permite trabalhar em recursos sem afetar a linha principal.',
      'Um arquivo especial que armazena as configurações do Git.',
      'Uma versão específica de um arquivo em um determinado momento.'
    ],
    correctOptionIndex: 1,
    explanation: 'Um branch (ramificação) no Git é uma linha independente de desenvolvimento. Os branches permitem que você trabalhe em diferentes recursos ou correções de bugs separadamente da linha principal (geralmente chamada de "main" ou "master"). Isso facilita a colaboração em equipe e o desenvolvimento paralelo. Quando o trabalho em um branch é concluído, ele pode ser mesclado de volta ao branch principal.'
  },
  {
    id: 'git-2',
    question: 'Como criar e mudar para um novo branch?',
    options: [
      'git create branch <nome-do-branch>',
      'git new branch <nome-do-branch>',
      'git branch <nome-do-branch> seguido por git checkout <nome-do-branch>',
      'git checkout -b <nome-do-branch>'
    ],
    correctOptionIndex: 3,
    explanation: 'O comando "git checkout -b <nome-do-branch>" é uma forma abreviada de criar um novo branch e mudar para ele em uma única operação. Alternativamente, você pode usar dois comandos: primeiro "git branch <nome-do-branch>" para criar o branch e depois "git checkout <nome-do-branch>" para mudar para ele. Em versões mais recentes do Git, você também pode usar "git switch -c <nome-do-branch>".'
  },
  {
    id: 'git-3',
    question: 'Qual a diferença entre merge e rebase?',
    options: [
      'Merge cria um novo commit que combina as alterações, enquanto rebase reescreve o histórico movendo os commits para uma nova base.',
      'Merge exclui o histórico de commits, enquanto rebase preserva todos os commits.',
      'Merge é usado apenas para repositórios locais, enquanto rebase é usado para repositórios remotos.',
      'Não há diferença, são apenas comandos alternativos para a mesma operação.'
    ],
    correctOptionIndex: 0,
    explanation: 'Merge e rebase são duas abordagens diferentes para integrar alterações de um branch para outro. O merge cria um novo commit de mesclagem que combina as mudanças de ambos os branches, preservando o histórico completo. O rebase, por outro lado, move ou "reaplica" commits de um branch para a ponta de outro branch, resultando em um histórico linear. Embora o rebase produza um histórico mais limpo, ele reescreve o histórico de commits, o que pode causar problemas se os commits já tiverem sido compartilhados com outros.'
  },
  {
    id: 'git-4',
    question: 'Como resolver conflitos durante um merge?',
    options: [
      'Executando git conflict --resolve para resolver automaticamente os conflitos.',
      'Usando git reset --hard para desfazer o merge e começar novamente.',
      'Editando manualmente os arquivos conflitantes, marcando como resolvidos com git add e concluindo o merge.',
      'Usando git push --force para sobrescrever os conflitos.'
    ],
    correctOptionIndex: 2,
    explanation: 'Quando ocorrem conflitos durante um merge, o Git marca as áreas conflitantes nos arquivos afetados com marcadores especiais (<<<<<<, =======, >>>>>>>). Para resolver esses conflitos, você precisa editar manualmente os arquivos para escolher quais alterações manter. Depois de resolver todos os conflitos, você marca os arquivos como resolvidos usando "git add <arquivo>" e finaliza o merge com "git commit". Algumas ferramentas gráficas e editores também oferecem interfaces para facilitar a resolução de conflitos.'
  },
  {
    id: 'git-5',
    question: 'O que o comando git checkout faz?',
    options: [
      'Cria uma cópia de backup do repositório.',
      'Envia alterações para o repositório remoto.',
      'Muda entre branches ou restaura arquivos da árvore de trabalho.',
      'Verifica se há erros no código antes de fazer commit.'
    ],
    correctOptionIndex: 2,
    explanation: 'O comando "git checkout" tem duas funcionalidades principais. Primeiro, ele permite mudar entre branches (ex: "git checkout develop" muda para o branch develop). Segundo, ele pode restaurar arquivos na árvore de trabalho para um estado específico (ex: "git checkout -- file.txt" descarta as alterações não commitadas em file.txt). Em versões mais recentes do Git, algumas funcionalidades do checkout foram divididas em dois novos comandos: "git switch" para mudar de branches e "git restore" para restaurar arquivos.'
  }
]; 