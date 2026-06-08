import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Do conceito ao desenho: arte para games",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender como artistas usam IA para criar conceitos de personagens, cenários e itens de jogo, escolher um tema para a galeria e esboçar com palavras as ideias que serão transformadas em arte.`,
  descricao: `Nesta aula, os alunos descobrem o que faz um artista de jogos antes de qualquer imagem existir: o trabalho de conceito. Em todo jogo, antes do desenho final, alguém pensa "como é esse herói?", "que clima tem essa floresta?", "que formato tem essa poção mágica?". Esse trabalho se chama arte conceitual (concept art), e é exatamente aqui que a IA do DALL-E se torna uma parceira poderosa. Em vez de gastar horas desenhando uma ideia só para ver se funciona, o aluno descreve a ideia em palavras e a IA mostra várias versões em segundos.

O assunto central é a diferença entre três famílias de arte de jogo: personagens (quem aparece no jogo, como o herói, o vilão e os bichos), cenários (onde a ação acontece, como a caverna, a cidade ou o espaço) e itens (as coisas que o jogador pega ou usa, como espadas, moedas, chaves e poções). Os alunos vão perceber que cada família pede um jeito diferente de descrever: um personagem pede pose e expressão; um cenário pede clima e horário; um item pede formato e material. Saber disso deixa o prompt muito mais certeiro.

O grande momento da aula é a escolha do tema da galeria. Até agora os alunos treinaram prompts soltos; a partir de hoje eles passam a trabalhar com um propósito. Cada aluno escolhe um mundo (por exemplo: "reino de gelo", "cidade do futuro", "ilha dos piratas") e, dentro dele, lista quais personagens, cenários e itens quer criar. Esse mundo será o fio condutor das próximas aulas, até a galeria final do mês.

Ao terminar, cada aluno não sai necessariamente com imagens prontas, mas com algo igualmente valioso: um esboço de palavras, ou seja, um pequeno roteiro com o tema escolhido e a lista de ideias descritas em frases curtas. É o mapa que vai guiar a produção de arte das próximas semanas. Esta aula ensina que a melhor arte de IA começa com uma boa ideia bem descrita, e não com cliques aleatórios.`,
  materiais: [
    `Computadores com acesso ao ChatGPT + DALL-E (geração de imagem por IA), um por aluno, com a conta já logada antes da aula`,
    `Conta no ChatGPT (plano que habilite a criação de imagens) verificada e funcionando em cada máquina`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada passo`,
    `Pasta com arquivos de exemplo: 6 a 8 imagens de arte conceitual de jogos (personagens, cenários e itens) para inspirar a turma`,
    `Folha impressa "Mapa da minha galeria" com três colunas (Personagens, Cenários, Itens) para o aluno preencher com palavras`,
    `Slide com a lista de temas-exemplo (reino de gelo, cidade do futuro, ilha dos piratas, floresta mágica) para ajudar quem travar na escolha`,
    `Caneta ou lápis para cada aluno anotar o esboço de palavras`,
  ],
  conceitosChave: [
    `Arte conceitual (concept art) — o desenho de ideia que vem antes da arte final, para testar como um personagem, cenário ou item pode ficar.`,
    `Personagem — quem aparece e age no jogo, como o herói, o vilão, os bichos e os ajudantes.`,
    `Cenário — o lugar onde a ação acontece, como a caverna, a cidade, a floresta ou o espaço.`,
    `Item — a coisa que o jogador pega ou usa, como espada, moeda, chave, poção ou escudo.`,
    `Tema — a ideia central que dá unidade ao mundo, por exemplo "reino de gelo" ou "cidade do futuro".`,
    `Esboço de palavras — uma lista curta de frases que descreve as ideias antes de virarem imagem; é o roteiro da galeria.`,
    `Referência — uma imagem que serve de inspiração e ajuda a explicar para a IA o estilo que queremos.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista nem dominar o DALL-E para dar esta aula. O coração dela é o pensamento por trás da imagem: primeiro a ideia em palavras, depois o desenho. No ChatGPT, a criação de imagem acontece dentro da própria conversa: você digita o pedido na caixa de mensagem (embaixo) e, se quiser uma imagem, basta começar com algo como "Crie uma imagem de...". Aparece um ícone de imagem na resposta enquanto a IA desenha, e em alguns segundos a arte surge. Você pode clicar na imagem para ampliá-la e há um botão de baixar (uma seta para baixo) no canto. Para esta aula, o aluno quase não vai gerar imagem: o foco é planejar. Tenha em mente os três tipos de arte (personagem, cenário, item) e tenha a folha "Mapa da minha galeria" em mãos.

## Passo a passo da aula

Aquecimento e revisão (10 min): Mostre no projetor 6 a 8 exemplos de arte de jogos e pergunte, para cada um: "isso é um personagem, um cenário ou um item?". Retome rápido o que aprenderam nas aulas anteriores sobre escrever prompts. Conduza a pergunta-chave: "antes de desenhar, o artista pensa. O que será que ele pensa?".

Conteúdo novo guiado (15 min): Explique as três famílias e o que cada uma pede no prompt. No ChatGPT, abra uma conversa nova e demonstre UM exemplo de cada: digite "Crie uma imagem de um cavaleiro corajoso, em pose heroica, arte conceitual de game" (personagem); depois "Crie uma imagem de uma caverna de cristais azuis, clima misterioso, arte de cenário de game" (cenário); por fim "Crie uma imagem de uma espada mágica com lâmina de gelo, fundo branco, ícone de item de game" (item). Mostre como a forma de descrever muda conforme o tipo. Apresente a ideia de tema e mostre a folha "Mapa da minha galeria".

Mão na massa (25 min): Cada aluno escolhe seu tema e preenche a folha com palavras, sem gerar imagens ainda. A meta é listar pelo menos 2 personagens, 2 cenários e 2 itens, cada um descrito em uma frase curta. Quem terminar pode testar UMA ideia no ChatGPT para ver se a descrição funciona. Circule pela sala ajudando a transformar ideias vagas em frases descritivas.

Desafio e compartilhar (10 min): Cada aluno conta à turma o tema escolhido e uma das ideias da lista. Dois ou três voluntários geram a imagem da ideia no projetor para todos verem o conceito ganhar forma.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que a arte conceitual é como o "rascunho da redação": a gente testa antes de passar a limpo. Compare o tema a uma "festa à fantasia": se o tema é pirata, tudo combina com pirata. Explique que personagem responde "quem?", cenário responde "onde?" e item responde "o quê?". Mostre sempre antes de pedir para fazer, e fale devagar enquanto digita na tela. Reforce que uma boa frase tem o objeto, uma característica e o estilo (por exemplo "um dragão pequeno e fofo, estilo desenho animado"). Evite termos difíceis; prefira "tipo de arte" a "categoria visual".

## Erros comuns e como ajudar

O erro mais comum é o aluno querer gerar imagens logo, pulando o planejamento; lembre que hoje o ouro é a lista de palavras, não a quantidade de imagens. Outro erro é escolher um tema grande demais ("um jogo inteiro"); ajude a fechar em um mundo só ("reino de gelo"). Muitos escrevem frases vagas como "um herói legal"; peça que acrescentem como ele é, o que veste e a pose. Alguns misturam estilos sem perceber (um item realista num mundo de desenho); reforce que tudo precisa combinar com o tema. Por fim, há quem trave na escolha do tema; ofereça a lista de temas-exemplo do slide e deixe a pessoa escolher um para começar.`,
  exercicios: [
    {
      titulo: `Caça ao tipo de arte`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre as imagens de exemplo no projetor uma a uma. Garanta que cada aluno saiba diferenciar personagem, cenário e item antes de seguir. Confira as respostas em voz alta.`,
      atividade: `Olhe as imagens de exemplo na tela e, para cada uma, escreva na sua folha se é um personagem, um cenário ou um item.`,
      gabarito: `O aluno classifica corretamente todas as imagens: pessoas e bichos como personagens, lugares como cenários e objetos que o jogador usa como itens. Acertar a maioria já mostra que entendeu a diferença.`,
    },
    {
      titulo: `Escolho meu mundo`,
      tipo: `projeto curto`,
      tempo: `7 minutos`,
      guiaProfessor: `Apresente a lista de temas-exemplo do slide para quem travar. Ajude cada aluno a fechar um tema único e anotá-lo no topo da folha "Mapa da minha galeria".`,
      atividade: `Escolha um tema para a sua galeria (por exemplo: reino de gelo, cidade do futuro, ilha dos piratas) e escreva-o no topo da sua folha.`,
      gabarito: `O aluno tem um único tema claro escrito na folha, específico o bastante para guiar a arte (um mundo, não "um jogo inteiro"). O tema serve como base para as próximas listas.`,
    },
    {
      titulo: `Esboço de palavras`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Circule pela sala transformando ideias vagas em frases descritivas. Lembre a fórmula objeto + característica + estilo. Verifique se cada lista tem ao menos 2 personagens, 2 cenários e 2 itens.`,
      atividade: `No seu tema, escreva pelo menos 2 personagens, 2 cenários e 2 itens, cada um em uma frase curta com uma característica (ex.: "um pinguim guerreiro com capa azul").`,
      gabarito: `A folha tem no mínimo 6 ideias divididas nas três colunas, todas combinando com o tema e descritas com pelo menos uma característica cada. As frases dizem o quê e como, não só o nome.`,
    },
    {
      titulo: `Teste do conceito em dupla`,
      tipo: `em dupla`,
      tempo: `6 minutos`,
      guiaProfessor: `Forme duplas. Oriente que cada um leia a frase do colega e sugira uma melhoria antes de gerar. Garanta que comecem o pedido com "Crie uma imagem de...".`,
      atividade: `Troque sua folha com a do colega, escolham juntos uma ideia de cada um e gerem essa imagem no ChatGPT para ver se a descrição funcionou.`,
      gabarito: `A dupla gerou duas imagens (uma de cada ideia) e consegue dizer se a arte combinou com a frase escrita. Quando não combinou, apontam qual palavra faltou para melhorar o conceito.`,
    },
    {
      titulo: `Roda de conversa: meu mundo`,
      tipo: `roda de conversa`,
      tempo: `4 minutos`,
      guiaProfessor: `Reúna a turma em roda. Conduza com perguntas abertas e anote no quadro temas e ideias interessantes para retomar nas próximas aulas. Valorize a variedade.`,
      atividade: `Em roda, cada aluno diz seu tema e conta uma ideia da lista (um personagem, cenário ou item) que está mais animado para desenhar.`,
      gabarito: `Cada aluno apresenta um tema definido e ao menos uma ideia descrita com clareza. A turma percebe que temas diferentes pedem personagens, cenários e itens diferentes, e que tudo precisa combinar com o mundo escolhido.`,
    },
  ],
};
