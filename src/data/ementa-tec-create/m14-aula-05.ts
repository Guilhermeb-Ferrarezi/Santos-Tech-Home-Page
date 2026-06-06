import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Clipes com a Cara do Meu Jogo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Gerar no Veo um conjunto de clipes alinhados ao mundo, aos personagens e ao clima do próprio jogo, seguindo uma lista de cenas e mantendo um estilo visual consistente entre os vídeos.`,
  descricao: `Nesta aula, os alunos param de gerar vídeos soltos e passam a produzir clipes que têm a cara do jogo deles. A ideia é simples e poderosa: cada vídeo precisa parecer que saiu do mesmo universo. Se o jogo é uma floresta mágica de noite, todos os clipes devem ter aquela mesma floresta, a mesma luz e o mesmo clima. É isso que chamamos de estilo visual consistente, e é o que separa um amontoado de vídeos de um banco de vídeos profissional.

Para conseguir isso, a turma começa definindo uma lista de cenas necessárias. Essa lista costuma ter três tipos de clipe: a abertura (o vídeo de impacto que apresenta o mundo), o ambiente (cenas do cenário sem muita ação, para mostrar o lugar) e a ação (algo acontecendo, como um personagem correndo ou um efeito disparando). Ter a lista pronta evita que o aluno fique gerando vídeos ao acaso e o ajuda a saber exatamente o que ainda falta produzir.

O segredo técnico da consistência está no prompt. Os alunos vão criar uma base de estilo: um trecho de texto que descreve o clima, as cores, a iluminação e o tipo de arte do jogo. Essa base é colada no começo de cada prompt do Veo, mudando apenas a parte que descreve a cena específica. Assim, a floresta continua a mesma, a paleta de cores não muda e a luz fica parecida em todos os clipes, mesmo que a ação seja diferente.

Ao final da aula, cada aluno terá pelo menos três clipes novos (abertura, ambiente e ação) que conversam entre si e remetem ao mundo do jogo. Não precisam estar perfeitos: o objetivo é treinar o olhar para a coerência visual e alimentar o banco de vídeos do mês com material que realmente combina com o projeto.`,
  materiais: [
    `Computadores com acesso ao Gemini com o Veo (geração de vídeo por IA), um por aluno`,
    `Conta Google de cada aluno já logada no Gemini e com o Veo liberado antes da aula`,
    `Projetor ou TV para o professor demonstrar a tela do Gemini e cada passo da geração`,
    `Pasta de cada aluno com a referência do próprio jogo: paleta de cores, personagens e clima (imagens feitas no DALL-E e no Nano Banana, telas do cenário)`,
    `Arquivo de exemplo: uma "base de estilo" pronta (texto modelo) e três prompts de exemplo (abertura, ambiente e ação)`,
    `Folha impressa com a tabela da lista de cenas para o aluno preencher (coluna tipo de cena, descrição e estilo)`,
    `Fones de ouvido para os alunos revisarem os clipes sem atrapalhar a turma`,
  ],
  conceitosChave: [
    `Estilo visual consistente — quando todos os clipes parecem do mesmo mundo, com as mesmas cores, luz e clima.`,
    `Base de estilo — um trecho de texto fixo que descreve o clima e a arte do jogo e é colado no começo de cada prompt.`,
    `Lista de cenas — o planejamento dos vídeos que faltam, separado por tipo: abertura, ambiente e ação.`,
    `Cena de abertura — o clipe de impacto que apresenta o mundo do jogo logo no início.`,
    `Cena de ambiente — vídeo do cenário com pouca ação, feito para mostrar o lugar e o clima.`,
    `Cena de ação — clipe em que algo acontece, como um personagem se movendo ou um efeito disparando.`,
    `Paleta de cores — o conjunto de cores principais do jogo que deve se repetir em todos os clipes.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Veo para dar esta aula. O Veo fica dentro do Gemini: o aluno abre o site gemini.google.com, já logado na conta Google, e escolhe o modelo de vídeo no seletor de modelos (no topo, onde aparece a opção de gerar vídeo com o Veo). A geração funciona por prompt: você escreve a descrição da cena na barra de texto de baixo e aperta o botão de enviar (a seta). O vídeo aparece em alguns segundos e pode ser baixado no ícone de download (a setinha para baixo) ou copiado. A grande novidade desta aula não é um botão novo, e sim um jeito de escrever: usar uma "base de estilo" fixa para manter os clipes parecidos. Antes da aula, gere você mesmo um clipe de teste para confirmar que a conta está funcionando.

## Passo a passo da aula

Aquecimento e revisão (10 min): Mostre no projetor dois conjuntos de clipes: um com estilos misturados (cores e luz diferentes) e outro coerente (mesmo clima). Pergunte qual parece do mesmo jogo. Conduza até a palavra-chave: consistência. Retome rapidamente como cada aluno gerou vídeo nas aulas anteriores.

Conteúdo novo guiado (15 min): Abra o Gemini, selecione o Veo no seletor de modelos. Mostre a "base de estilo" de exemplo (clima, cores, iluminação, tipo de arte) e cole-a no começo do prompt. Em seguida, acrescente só a parte da cena. Gere uma abertura, depois troque apenas a frase da cena para gerar um ambiente, mantendo a mesma base. Mostre na tela que os dois clipes ficam parecidos. Exemplo de prompt: "Estilo: floresta mágica à noite, cores roxo e azul, luz de luar suave, arte de desenho. Cena: abertura, câmera revela a floresta de cima, partículas brilhando no ar."

Mão na massa (25 min): Cada aluno preenche a lista de cenas (abertura, ambiente, ação) na folha, escreve sua própria base de estilo a partir da referência do jogo e gera os três clipes no Veo, trocando só a descrição da cena. Oriente a baixar cada vídeo aprovado. Circule garantindo que a base de estilo não muda entre os prompts.

Desafio + compartilhar (10 min): Cada aluno escolhe os dois clipes mais parecidos entre si e mostra ao colega do lado, que diz se eles parecem do mesmo jogo. Dois voluntários apresentam no projetor.

## Como explicar de forma clara

Use a ideia de "uniforme do time": todos os clipes vestem a mesma roupa (mesmas cores e clima), mesmo fazendo coisas diferentes. Diga que a base de estilo é como uma "receita de bolo" que não muda; só o recheio (a cena) muda. Aponte na tela enquanto fala e gere um clipe ao vivo antes de pedir que façam. Evite termos difíceis: fale "começo do texto" em vez de "prefixo do prompt". Repita as três palavras da lista de cenas: abertura, ambiente, ação.

## Erros comuns e como ajudar

O erro mais comum é reescrever a base de estilo a cada vídeo, o que faz os clipes ficarem diferentes; ensine a copiar e colar sempre a mesma base. Outro erro é escrever só a cena, sem o estilo, e o vídeo sai com outra cara; lembre de colar a base primeiro. Muitos colocam coisas demais num prompt só (vários personagens e ações); oriente uma cena clara por clipe. Alguns esquecem de baixar e perdem o vídeo bom; reforce o ícone de download a cada acerto. Há quem desanime com um resultado estranho; explique que gerar de novo, ajustando uma palavra, faz parte do processo.`,
  exercicios: [
    {
      titulo: `Lista de cenas do meu jogo`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue a tabela impressa e mostre um exemplo preenchido no projetor. Garanta que cada aluno escreva pelo menos uma cena de cada tipo: abertura, ambiente e ação.`,
      atividade: `Na folha da lista de cenas, escreva três cenas que o seu jogo precisa: uma de abertura, uma de ambiente e uma de ação. Descreva em uma frase o que aparece em cada uma.`,
      gabarito: `A lista tem três linhas preenchidas, uma de cada tipo (abertura, ambiente e ação), e cada cena traz uma descrição curta e clara do que vai aparecer no clipe.`,
    },
    {
      titulo: `Minha base de estilo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre a base de estilo de exemplo e peça que o aluno olhe a referência do próprio jogo (paleta de cores e clima). Confira se a base cita cores, iluminação e tipo de arte.`,
      atividade: `Escreva a base de estilo do seu jogo: um trecho de texto com o clima, as cores principais, a luz e o tipo de arte. Gere um clipe de abertura colando essa base no começo do prompt.`,
      gabarito: `O aluno tem um texto-base que descreve clima, cores, luz e arte, e gerou um clipe de abertura que reflete esses elementos. A base ficou guardada para reutilizar nos próximos prompts.`,
    },
    {
      titulo: `Mesma base, três clipes`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Reforce que a base de estilo não pode mudar entre os vídeos; só a frase da cena muda. Circule conferindo se os alunos colam a mesma base nos três prompts.`,
      atividade: `Usando exatamente a mesma base de estilo, gere os três clipes da sua lista (abertura, ambiente e ação), trocando apenas a descrição da cena. Baixe os três.`,
      gabarito: `Existem três clipes baixados que compartilham as mesmas cores, luz e clima (a base não mudou) e diferem apenas na cena. É possível perceber que pertencem ao mesmo jogo.`,
    },
    {
      titulo: `Teste do mesmo mundo`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que cada aluno mostre seus clipes sem dizer qual é qual, e o colega julgue só pela imagem se parecem do mesmo jogo, apontando um detalhe que combina e um que destoa.`,
      atividade: `Troque com o colega e assista aos clipes dele. Diga se eles parecem do mesmo jogo e aponte um elemento que combina (cor, luz ou clima) e um que poderia ficar mais parecido.`,
      gabarito: `A dupla consegue identificar pelo menos um elemento de estilo que une os clipes e um que destoa, e o aluno anota uma ideia concreta de ajuste no prompt para a próxima geração.`,
    },
    {
      titulo: `Mini-coleção do meu jogo`,
      tipo: `projeto curto`,
      tempo: `9 minutos`,
      guiaProfessor: `Oriente o aluno a reunir os melhores clipes coerentes numa pasta e a gerar um clipe extra que ainda falta na lista. Ajude a nomear os arquivos por tipo de cena para já organizar o banco.`,
      atividade: `Monte uma mini-coleção com pelo menos três clipes do mesmo estilo do seu jogo, gere um clipe a mais para completar a lista de cenas e salve tudo numa pasta com nomes claros (abertura, ambiente, ação).`,
      gabarito: `A pasta contém ao menos quatro clipes coerentes entre si, nomeados por tipo de cena, todos remetendo ao mundo do jogo. A lista de cenas do aluno está mais completa do que no início da aula.`,
    },
  ],
};
