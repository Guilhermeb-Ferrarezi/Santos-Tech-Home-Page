import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Olá, Claude: a primeira conversa",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer o Claude, criar a conta, entender a tela de conversa e perceber como uma pergunta clara e bem escrita gera uma resposta muito melhor.`,
  descricao: `Esta é a primeira aula do mês dedicado ao Claude, a inteligência artificial que os alunos vão dominar a fundo nas próximas oito aulas. O Claude é um assistente de conversa: você escreve uma mensagem (chamada de prompt) e ele responde em texto, ajudando a explicar assuntos, dar ideias, organizar pensamentos e melhorar o que você escreve. Diferente de uma busca no Google, o Claude conversa de verdade: ele lembra do que foi dito antes na mesma conversa e responde no tom que você pedir.

Nesta aula o objetivo não é fazer nada complicado, e sim quebrar o gelo. Os alunos vão criar a conta, reconhecer cada parte da tela e fazer suas primeiras perguntas. O coração da aula é uma descoberta simples e poderosa: a qualidade da pergunta muda a qualidade da resposta. Uma pergunta vaga como "fale sobre cachorros" gera uma resposta genérica; uma pergunta clara como "explique em 3 frases por que cachorros abanam o rabo, para um aluno de 12 anos" gera algo útil e na medida certa.

Os adolescentes vão experimentar pedir explicações de assuntos da escola, pedir ideias para um trabalho e pedir ajuda para melhorar um pequeno texto. Em cada caso, eles comparam uma versão "fraca" e uma versão "forte" da mesma pergunta e veem a diferença com os próprios olhos. Essa comparação é a semente de tudo que vem no mês: nas próximas aulas eles vão aprofundar prompts, ler arquivos, analisar imagens e até criar mini-aplicativos.

O papel do professor aqui é ser um guia tranquilo. Não é preciso ser especialista em IA: basta seguir o passo a passo, projetar a tela e conversar com a turma sobre o que cada um observou. O clima ideal é de experimentação e curiosidade, com a regra de ouro do mês sempre presente: a IA é uma ferramenta para pensar junto, e quem decide o que vale é sempre a pessoa.`,
  materiais: [
    `Computadores (1 por aluno) com navegador atualizado (Chrome, Edge ou Firefox) e acesso à internet`,
    `Conta no Claude para cada aluno, em claude.ai — ideal criar antes da aula ou reservar os 10 primeiros minutos para isso`,
    `Projetor ou TV para o professor mostrar a própria tela do Claude e demonstrar cada passo`,
    `E-mails dos alunos disponíveis (institucional da escola ou pessoal, com autorização dos responsáveis) para o cadastro`,
    `Folha impressa ou slide com a lista de "perguntas fracas x perguntas fortes" para comparar`,
    `Quadro branco ou flip chart para anotar as descobertas da turma ao final`,
    `Cartaz com a "regra de ouro": a IA ajuda a pensar, mas quem decide é você`,
  ],
  conceitosChave: [
    `Claude — assistente de inteligência artificial que conversa por texto, criado pela Anthropic, usado em claude.ai.`,
    `Prompt — a mensagem ou pergunta que você escreve para o Claude; é a instrução que ele vai seguir.`,
    `Conversa (chat) — a tela onde você troca mensagens com o Claude; ela guarda o histórico do que já foi dito.`,
    `Resposta — o texto que o Claude devolve depois de ler o seu prompt.`,
    `Pergunta clara — pedido específico, com tema, tamanho e público definidos, que gera respostas melhores.`,
    `Tom — o estilo pedido na resposta (formal, divertido, simples), que muda como o Claude escreve.`,
    `Nova conversa — botão que abre um chat limpo, sem o histórico das mensagens anteriores.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em inteligência artificial para dar esta aula. O Claude é um site, claude.ai, onde a pessoa escreve uma mensagem e recebe uma resposta em texto. Pense nele como um colega muito lido que ajuda a explicar, dar ideias e revisar textos. Três fatos bastam para conduzir a aula com segurança: o Claude responde melhor quando a pergunta é específica; ele mantém o histórico dentro da mesma conversa; e ele pode errar, então o aluno sempre confere. Faça login antes da aula e deixe uma conversa de teste pronta no projetor.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min). Pergunte à turma: "O que vocês já ouviram falar de inteligência artificial?". Anote palavras no quadro. Em seguida, ajude quem ainda não tem conta: abra claude.ai, clique em "Sign up" (Cadastrar), use "Continue with Google" ou digite o e-mail, confirme o código recebido e aceite os termos. Combine que ninguém digita dados pessoais sensíveis.

2. Conteúdo novo guiado (15 min). Projete sua tela e mostre cada parte: no centro fica a caixa de texto escrito "How can I help you today?" (Como posso ajudar?); embaixo o botão de enviar (a setinha ou Enter); no canto superior o botão "New chat" (Nova conversa); à esquerda o histórico das conversas anteriores. Digite ao vivo um prompt fraco: "fale sobre vulcões". Mostre a resposta longa e genérica. Depois, na mesma caixa, digite um prompt forte: "Explique em 4 frases o que é um vulcão, para um aluno de 12 anos, com um exemplo real". Compare as duas respostas em voz alta. Diga: pergunta clara tem tema, tamanho e para quem é.

3. Mão na massa (25 min). Cada aluno faz suas três primeiras conversas. Tarefa 1: pedir uma explicação de um assunto da escola usando o formato tema + tamanho + público. Tarefa 2: pedir 5 ideias de título para um trabalho. Tarefa 3: colar uma frase própria e pedir ao Claude para deixá-la mais clara. Circule pela sala, leia as telas e provoque: "como deixar essa pergunta mais específica?". Lembre-os de usar "New chat" para começar um pedido bem diferente.

4. Desafio e compartilhar (10 min). Cada dupla escolhe a melhor resposta que conseguiu e conta para a turma qual foi a pergunta que gerou aquilo. Feche escrevendo no quadro a frase-resumo da turma sobre o que faz uma boa pergunta.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: "Pedir algo ao Claude é como pedir um lanche. Se você só fala 'me dá comida', vem qualquer coisa. Se você fala 'um sanduíche de frango, sem cebola, pra agora', vem o que você quer". Reforce a fórmula simples: tema (sobre o quê), tamanho (quantas frases) e público (para quem). Evite a palavra "algoritmo"; fale em "o Claude lê seu pedido e escreve uma resposta". Mostre que mudar o tom muda tudo: peça a mesma explicação "de um jeito divertido" e depois "de um jeito formal".

## Erros comuns e como ajudar

O erro mais frequente é a pergunta vaga; peça ao aluno para acrescentar tamanho e público. Outro é escrever tudo em uma linha confusa: ensine a quebrar o pedido em partes. Muitos esquecem que o Claude lembra do que foi dito e ficam frustrados quando o assunto "gruda"; mostre o botão "New chat" para recomeçar. Alguns vão achar que toda resposta é verdade absoluta; reforce que a IA pode errar e que conferir é parte do trabalho. Por fim, há quem só copie a resposta sem ler: peça sempre que leiam e digam, com as próprias palavras, se ficou bom.`,
  exercicios: [
    {
      titulo: `Conhecendo a tela do Claude`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Faça com a turma, projetando sua tela. O objetivo é que cada aluno localize e nomeie as partes principais da interface antes de digitar qualquer pergunta. Vá apontando cada elemento e peça que cada um aponte na própria tela também.`,
      atividade: `No seu computador, abra claude.ai e encontre estes quatro elementos: 1) a caixa onde se escreve a mensagem; 2) o botão de enviar; 3) o botão "New chat" (Nova conversa); 4) a lista de conversas à esquerda. Escreva em uma folha onde fica cada um.`,
      gabarito: `1) A caixa de mensagem fica no centro/parte de baixo da tela, com um texto de exemplo como "How can I help you today?". 2) O botão de enviar é a setinha ao lado direito da caixa (ou a tecla Enter). 3) O "New chat" fica no canto superior, geralmente à esquerda. 4) As conversas anteriores aparecem na barra lateral esquerda. O aluno acerta se localizar e nomear corretamente os quatro itens.`,
    },
    {
      titulo: `Minha primeira pergunta clara`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Apresente a fórmula tema + tamanho + público antes de soltar a atividade. Circule e ajude quem escrever pedidos vagos a acrescentar o tamanho (quantas frases) e o público (para quem).`,
      atividade: `Escolha um assunto que você está estudando na escola. Escreva um prompt para o Claude usando a fórmula: tema + tamanho + público. Exemplo de modelo: "Explique o ciclo da água em 4 frases, para um aluno de 12 anos, com um exemplo do dia a dia". Envie e leia a resposta.`,
      gabarito: `O prompt do aluno deve conter os três elementos: um tema específico, um tamanho (ex.: "em 4 frases", "em um parágrafo") e um público (ex.: "para um aluno de 12 anos"). A resposta do Claude deve sair curta, no foco e adequada à idade. Se o aluno só escreveu "fale sobre X", peça para refazer incluindo tamanho e público.`,
    },
    {
      titulo: `Fraca x forte: caça à diferença`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. A ideia é que comparem, lado a lado, uma pergunta vaga e uma pergunta específica sobre o MESMO tema, e percebam o que mudou. Peça que abram uma "New chat" para cada versão, para não misturar.`,
      atividade: `Em dupla, escolham um tema (ex.: dinossauros). Aluno A escreve um prompt fraco: "fale sobre dinossauros". Aluno B escreve um prompt forte sobre o mesmo tema: "Liste 3 curiosidades sobre dinossauros, em frases curtas, para um cartaz da escola". Comparem as duas respostas e anotem 3 diferenças.`,
      gabarito: `As diferenças esperadas: a resposta forte é mais curta e organizada; vem no formato pedido (lista de 3 itens); está adequada ao público e ao uso (cartaz). A fraca tende a ser longa, genérica e sem foco. A dupla acerta se identificar pelo menos 3 diferenças reais, como tamanho, formato e clareza.`,
    },
    {
      titulo: `O poder do tom`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Aqui o aluno descobre que a mesma pergunta muda de cara conforme o tom pedido. Incentive-os a notar que só uma palavra ("divertido", "formal") já transforma a resposta. Peça que leiam em voz alta as duas versões para a turma se houver tempo.`,
      atividade: `Peça ao Claude para explicar o que é um vulcão de duas maneiras, na mesma conversa: primeiro "explique de um jeito divertido, para uma criança"; depois "agora explique de um jeito formal, como num livro de ciências". Compare as duas respostas e escreva qual achou melhor e por quê.`,
      gabarito: `As duas respostas devem falar do mesmo assunto, mas com estilos diferentes: a divertida usa linguagem leve, talvez comparações e humor; a formal usa termos técnicos e tom sério. O aluno acerta se perceber que o conteúdo é parecido, mas o tom muda a forma, e se justificar sua preferência com um motivo (ex.: "a divertida é mais fácil de entender").`,
    },
    {
      titulo: `Trio de pedidos: explicar, criar e melhorar`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Esta é a atividade mais completa e fecha a aula. O aluno usa o Claude para os três usos centrais do mês. Oriente-os a fazer uma "New chat" por pedido e a ler cada resposta antes de seguir. Ao final, peça que cada um conte qual dos três foi mais útil.`,
      atividade: `Faça três conversas curtas no Claude: 1) Explicar — peça uma explicação clara de um assunto da escola (use tema + tamanho + público). 2) Criar — peça 5 ideias de título para um trabalho ou vídeo seu. 3) Melhorar — cole uma frase que você escreveu e peça para deixá-la mais clara. Guarde a melhor resposta de cada um para mostrar à turma.`,
      gabarito: `O aluno deve entregar os três resultados: 1) uma explicação curta e no foco, montada com a fórmula tema + tamanho + público; 2) uma lista de pelo menos 5 títulos sobre o tema escolhido; 3) uma versão melhorada da própria frase, mais clara que a original. Acerta quem completar os três pedidos, ler as respostas e escolher uma favorita de cada explicando o porquê. O ponto-chave é demonstrar que perguntas claras geraram respostas úteis.`,
    },
  ],
};
