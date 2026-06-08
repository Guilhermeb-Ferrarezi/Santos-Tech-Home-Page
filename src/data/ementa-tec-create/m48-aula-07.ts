import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Preparar a Apresentação e o Portfólio",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Montar o material do Demo Day — pitch do jogo, demonstração jogável e portfólio atualizado com os projetos dos quatro anos da trilha — usando o Claude para estruturar o roteiro e revisar as descrições.`,
  descricao: `Esta é a penúltima aula do curso, a véspera do Demo Day. O jogo final feito na Unreal Engine já está empacotado e jogável (aula 6); agora o trabalho muda de natureza. Não vamos mais programar mecânicas em C++ nem ajustar materiais: vamos preparar a forma como o aluno vai mostrar tudo o que construiu. Apresentar bem é uma habilidade tão importante quanto programar, porque um projeto que ninguém entende é um projeto que ninguém valoriza.

Três entregas guiam a aula. A primeira é o pitch: uma fala curta de cerca de um minuto que responde o que é o jogo, qual é a ideia central e por que ele é divertido. A segunda é a demonstração jogável: o aluno escolhe um trecho de dois a três minutos que mostra a melhor mecânica sem travar nem depender de sorte. A terceira é o portfólio: uma página ou pasta que reúne os quatro anos da trilha — a experiência em Realidade Virtual no Unity, o jogo no Unity com assets do Blender e o jogo na Unreal com assets do Maya, fechando agora com o jogo final.

O Claude entra como assistente de comunicação. Ele é ótimo para transformar uma lista bagunçada de ideias em um roteiro com começo, meio e fim, para sugerir uma ordem clara de slides e para revisar a descrição de cada projeto deixando o texto direto e sem erros. O aluno continua sendo o dono da fala: ele conta a verdade do próprio projeto, decide o que destacar e ensaia em voz alta. O Claude organiza e revisa; quem apresenta é o aluno.

Ao final da aula, cada aluno terá um roteiro de pitch escrito, uma demo jogável escolhida e cronometrada, e um portfólio atualizado com os quatro projetos descritos. É a aula que costura toda a trilha numa história que o aluno consegue contar com orgulho no Demo Day.`,
  materiais: [
    `Computadores com Unreal Engine + C++ e o jogo final já empacotado e jogável (um por aluno)`,
    `Acesso ao Claude (assistente) em uma aba do navegador`,
    `Projetor para o professor demonstrar a estrutura do pitch e do portfólio`,
    `Óculos VR para quem quiser incluir a experiência de Realidade Virtual do Ano 1 na demonstração`,
    `Arquivo de exemplo do professor: um roteiro de pitch modelo e uma página de portfólio simples com os quatro projetos`,
    `Cronômetro ou o timer do celular para ensaiar o tempo da fala e da demo`,
    `Pasta organizada com prints, vídeos curtos e links dos quatro projetos da trilha`,
  ],
  conceitosChave: [
    `Pitch — fala curta, de cerca de um minuto, que explica o que é o jogo, a ideia central e por que ele é divertido.`,
    `Demo Day — evento de apresentação em que cada aluno mostra o jogo final e o portfólio para a turma e convidados.`,
    `Portfólio — coleção organizada dos melhores trabalhos do aluno, usada para mostrar o que ele sabe fazer.`,
    `Roteiro — texto que organiza a apresentação em começo, meio e fim, dizendo o que falar em cada momento.`,
    `Demonstração jogável — trecho curto do jogo, de dois a três minutos, escolhido para mostrar a melhor mecânica ao vivo.`,
    `Trilha — o caminho completo dos quatro anos do curso, do primeiro projeto em VR até o jogo final na Unreal.`,
    `Revisão — leitura cuidadosa de um texto para corrigir erros e deixar a mensagem clara e direta.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Unreal nem C++ para conduzir esta aula, porque ela é sobre comunicação, não sobre código. Precisa entender três entregas e conferir que cada aluno saia com as três prontas: o pitch escrito, a demo escolhida e cronometrada, e o portfólio atualizado. Um bom pitch responde três perguntas em cerca de um minuto: o que é o jogo, qual é a ideia central e por que ele é divertido. Antes da aula, abra o roteiro modelo e a página de portfólio de exemplo, e tenha o Claude aberto numa aba. Combine que o Demo Day é amanhã (aula 8), então o foco de hoje é deixar tudo pronto e ensaiado.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Pergunte à turma: se um amigo perguntasse o que é o seu jogo, o que você responderia em uma frase? Ouça duas ou três respostas e mostre que muitas são longas demais. Apresente a meta do dia: cada um vai ter um pitch curto, uma demo escolhida e o portfólio dos quatro anos pronto.

15 min — Conteúdo novo guiado. Mostre no projetor a estrutura do pitch em três partes: abertura (uma frase forte que diz o que é o jogo), meio (a ideia central e a melhor mecânica) e fecho (por que vale a pena jogar e o que você aprendeu). Em seguida, mostre como o Claude ajuda a organizar. Projete um exemplo de pedido (prompt):

Sou aluno e fiz um jogo na Unreal Engine. Me ajude a montar um roteiro de pitch de um minuto com três partes: abertura, ideia central e fecho. Aqui estao minhas anotacoes soltas sobre o jogo: [cole aqui]. Deixe a fala curta e clara.

Explique que o Claude devolve um rascunho organizado, e que o aluno deve ajustar para soar como ele mesmo.

25 min — Mão na massa. Cada aluno faz três tarefas, nesta ordem. Primeiro, escreve as anotações do próprio jogo e pede ao Claude para virar roteiro de pitch; depois lê em voz alta e cronometra (a meta é por volta de um minuto). Segundo, abre o jogo empacotado e escolhe o trecho da demo, marcando onde começa e onde termina, sem depender de sorte. Terceiro, atualiza o portfólio com os quatro projetos da trilha (VR no Unity, jogo no Unity com Blender, jogo na Unreal com Maya e o jogo final), pedindo ao Claude para revisar a descrição de cada um. Mostre um prompt de revisão:

Revise esta descricao de projeto para o meu portfolio. Deixe clara e sem erros, em ate três frases, dizendo o que e o projeto, a ferramenta usada e o que eu aprendi: [cole aqui].

10 min — Desafio e compartilhar. Cada aluno faz o pitch de um minuto para um colega, que cronometra e dá um elogio e uma sugestão. Quem quiser apresenta para a turma. Reforce que amanhã é o Demo Day e que ensaiar hoje deixa todos mais tranquilos.

## Como explicar de forma clara (linguagem para a idade)

Compare o pitch ao trailer de um filme: ele não conta a história inteira, só mostra o melhor para dar vontade de assistir. Diga que ninguém decora um trailer enorme, então o pitch tem que caber em um minuto. Para o portfólio, use a imagem de um álbum de figurinhas: cada projeto da trilha é uma figurinha que prova o que o aluno sabe fazer, e juntas elas contam quatro anos de evolução. Sobre o Claude, repita o bordão: o Claude organiza e revisa, mas quem apresenta é você. Incentive ensaiar em voz alta, porque ler na cabeça esconde os trechos travados.

## Erros comuns e como ajudar

Pitch longo demais: peça para o aluno cortar tudo o que não responde o que é, a ideia e por que é divertido. Demo que trava ou depende de sorte: oriente escolher um trecho que ele já jogou várias vezes com segurança. Aluno que lê a fala do Claude sem ajustar: peça que ele troque pelo menos duas frases pelas palavras dele, para soar natural. Descrição de portfólio confusa: lembre o limite de três frases por projeto (o que é, a ferramenta, o que aprendeu). Vergonha de apresentar: comece pelo ensaio em dupla, que é mais seguro que falar para a turma toda.`,
  exercicios: [
    {
      titulo: `Meu jogo em uma frase`,
      tipo: `Roda de aquecimento`,
      tempo: `8 min`,
      guiaProfessor: `Peça que cada aluno resuma o próprio jogo em uma única frase. Ouça algumas e mostre, com gentileza, quais são longas demais. O objetivo é treinar a síntese antes de escrever o pitch.`,
      atividade: `Escreva uma frase só que diga o que é o seu jogo, sem explicar tudo. Leia em voz alta para um colega e veja se ele entendeu de primeira.`,
      gabarito: `Uma frase curta e clara que diga o tipo de jogo e a ideia central, sem detalhes técnicos. Exemplo aceitável: É um jogo de plataforma em 3D na Unreal em que você controla um robô que precisa consertar uma fábrica desligando interruptores. Frases longas, com muitos detalhes de mecânica ou de código, devem ser encurtadas.`,
    },
    {
      titulo: `Roteiro de pitch com o Claude`,
      tipo: `Uso do assistente`,
      tempo: `10 min`,
      guiaProfessor: `Mostre o prompt de pitch no projetor. Reforce que o aluno deve colar as próprias anotações e depois ajustar o rascunho para soar como ele. A meta é um pitch de cerca de um minuto em três partes.`,
      atividade: `Escreva suas anotações soltas sobre o jogo e peça ao Claude um roteiro de pitch de um minuto com abertura, ideia central e fecho. Depois, troque pelo menos duas frases pelas suas próprias palavras.`,
      gabarito: `Um roteiro em três partes: abertura com uma frase forte sobre o que é o jogo; meio com a ideia central e a melhor mecânica; fecho com o motivo de ser divertido e o que o aluno aprendeu. O texto deve caber em torno de um minuto de fala e conter ao menos duas frases reescritas pelo aluno, soando natural na voz dele.`,
    },
    {
      titulo: `Escolher e cronometrar a demo`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Oriente o aluno a abrir o jogo empacotado e escolher um trecho de dois a três minutos que mostre a melhor mecânica com segurança. Acompanhe a cronometragem e ajude quem escolher um trecho instável.`,
      atividade: `Abra seu jogo final, escolha um trecho de dois a três minutos para a demo e anote onde ela começa e onde termina. Jogue o trecho uma vez cronometrando, garantindo que não trava nem depende de sorte.`,
      gabarito: `Um trecho de demo definido, com ponto de início e fim anotados, que cabe em dois a três minutos e mostra a melhor mecânica do jogo. O aluno deve conseguir jogar esse trecho do começo ao fim sem travar e sem depender de eventos aleatórios. Exemplo: começa no primeiro interruptor e termina ao abrir a porta da fase, mostrando o pulo e a interação.`,
    },
    {
      titulo: `Atualizar o portfólio dos quatro anos`,
      tipo: `Prática com revisão`,
      tempo: `12 min`,
      guiaProfessor: `Mostre a página de portfólio modelo. Cada aluno reúne os quatro projetos da trilha e usa o Claude para revisar a descrição de cada um, mantendo o limite de até três frases por projeto. Confira se os nomes das ferramentas estão corretos.`,
      atividade: `Monte ou atualize seu portfólio com os quatro projetos da trilha: a experiência em VR no Unity, o jogo no Unity com assets do Blender, o jogo na Unreal com assets do Maya e o jogo final. Para cada um, peça ao Claude para revisar a descrição em até três frases, dizendo o que é, a ferramenta usada e o que você aprendeu.`,
      gabarito: `Um portfólio com os quatro projetos descritos, cada um em até três frases claras e sem erros, indicando o projeto, a ferramenta e o aprendizado. Exemplo de descrição aceitável: Experiência em Realidade Virtual feita no Unity com C#, em que o usuário explora uma sala interativa; aprendi a posicionar objetos no espaço 3D e a pensar no conforto de quem usa os óculos VR. As ferramentas devem aparecer corretas: Unity (C#), Blender, Unreal Engine (C++) e Maya.`,
    },
    {
      titulo: `Ensaio do pitch em dupla`,
      tipo: `Desafio e compartilhar`,
      tempo: `10 min`,
      guiaProfessor: `Este é o fechamento e o ensaio para o Demo Day. Forme duplas: um apresenta o pitch enquanto o outro cronometra e dá um elogio e uma sugestão; depois trocam. Valorize a clareza e a calma, não a perfeição.`,
      atividade: `Apresente seu pitch de um minuto para um colega, que vai cronometrar. Receba um elogio e uma sugestão, depois inverta os papéis. Ajuste seu roteiro com base no que ouviu.`,
      gabarito: `O aluno apresenta o pitch dentro de cerca de um minuto, falando de cabeça ou com poucas consultas ao roteiro, cobrindo o que é o jogo, a ideia central e por que é divertido. Ao final, ele deve ter ajustado pelo menos um ponto do roteiro a partir do feedback do colega. Exemplo de ajuste: cortei a parte em que eu explicava o código porque o tempo passava de um minuto e o público não precisava disso.`,
    },
  ],
};
