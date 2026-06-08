import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Showcase: minha IA em ação",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada aluno apresenta ao vivo seu mini-projeto, mostrando para a turma como a IA reconhece um gesto ou som e faz o gato do Scratch reagir.`,
  descricao: `Esta é a aula mais especial do mês: o grande showcase! Durante quatro semanas as crianças aprenderam a ensinar uma inteligência artificial com a Teachable Machine e a conectá-la ao Scratch para que o gato reagisse a gestos e sons. Agora chegou a hora de mostrar tudo isso para os colegas. Cada aluno vira, por alguns minutos, o apresentador do seu próprio jogo com IA.

O coração da aula é a apresentação ao vivo. Um por um, os alunos sobem na frente da turma (ou se sentam no computador ligado ao projetor), abrem o projeto que montaram na Aula 6 e demonstram a mágica: fazem o gesto ou o som que treinaram e a turma vê o gato do Scratch reagir na tela grande. É um momento de orgulho e de coragem, e o professor é o maior incentivador, batendo palma e ajudando quem travar.

Além de mostrar o que a IA faz, cada criança conta com suas próprias palavras o que ela ensinou para a máquina. Isso fecha o entregável do mês: "Apresentar o que a IA faz". Não é uma prova nem uma nota; é uma celebração das criações e uma forma de recordar, todos juntos, o que descobrimos sobre inteligência artificial neste mês.

O professor deve preparar o clima de festa: o projetor ligado, todos os projetos já abertos antes de a aula começar e uma plateia gentil que aplaude cada colega. No final, fazemos uma roda de conversa para lembrar a grande lição do mês: a IA não é mágica, ela só sabe o que a gente ensinou para ela.`,
  materiais: [
    `Computadores com a Teachable Machine e o Scratch já abertos, com o projeto de cada aluno carregado antes da aula começar`,
    `Projetor ou TV grande conectado a um computador, para todos verem a apresentação`,
    `Webcam e microfone funcionando em cada máquina (testados antes da aula)`,
    `Dois ou três exemplos prontos do professor, caso algum projeto de aluno não abra na hora`,
    `Uma "lista de apresentadores" simples (ordem dos nomes) colada na parede ou na lousa`,
    `Adesivos, carimbos ou um certificado simples de "Treinador de IA" para entregar no final`,
    `Folhas e lápis de cor para o desafio de desenho do encerramento`,
  ],
  conceitosChave: [
    `Showcase — é a hora de mostrar para os amigos o jogo que você criou e ver o que cada um fez.`,
    `Inteligência Artificial (IA) — é um cérebro de computador que aprende com os exemplos que a gente dá para ele.`,
    `Modelo treinado — é a "memória" que a Teachable Machine guardou depois que você mostrou vários exemplos para ela.`,
    `Classe — é cada gavetinha onde a IA guarda um tipo de coisa, como "mão aberta" ou "mão fechada".`,
    `Apresentar — é ficar na frente da turma e contar, com as suas palavras, o que você fez e como funciona.`,
    `Demonstração ao vivo — é fazer o gesto ou o som na hora para todos verem a IA respondendo de verdade.`,
    `Plateia gentil — somos nós escutando o colega em silêncio e batendo palma quando ele termina.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é uma aula de celebração, não de conteúdo novo. Seu papel é de apresentador de festa e de rede de segurança técnica. A tecnologia já foi montada nas aulas anteriores: a Teachable Machine treina um modelo de imagem ou som e gera um link de modelo; o Scratch, pela extensão correta, usa esse modelo para reconhecer e fazer o gato reagir. Você não precisa criar nada hoje, só garantir que tudo ABRA e que cada criança tenha seu momento de brilhar.

A regra de ouro: chegue cedo e deixe TODOS os projetos abertos antes do primeiro aluno entrar. Abra o Scratch de cada criança, clique na bandeira verde e teste o gesto ou som você mesmo. Se algo não funcionar, é melhor descobrir agora do que na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Receba a turma com energia de festa. Faça uma rodada rápida: cada criança diz em uma frase "minha IA reconhece ___ e o gato ___". Mostre no projetor um exemplo pronto seu: abra o Scratch, clique na bandeira verde (ícone verde no topo direito do palco), faça o gesto e deixe a turma ver o gato reagir. Diga: "Hoje cada um vai fazer isso na frente dos amigos!".

Preparação guiada (15 min): Combine as regras do showcase. Mostre a lista de apresentadores (a ordem dos nomes). Ensaie com a turma a "plateia gentil": ficamos em silêncio, olhamos e batemos palma no final. Leve cada criança rapidinho ao computador que estará ligado ao projetor e confirme que o projeto dela abre. No Scratch, confira que a bandeira verde inicia o programa e que o bloco "quando reconhecer ___" está no lugar. Na Teachable Machine, se a apresentação usar a aba de preview, deixe a aba aberta no navegador.

Mão na massa - as apresentações (25 min): Chame os alunos um a um pela lista. Cada criança faz três coisas: (1) diz o nome do projeto, (2) conta o que ensinou para a IA, ou seja, quais classes ela criou na Teachable Machine, e (3) faz a demonstração ao vivo clicando na bandeira verde e executando o gesto ou som. Fique ao lado, pronto para clicar na bandeira verde se a criança travar. Conduza uma palma para cada apresentador. Se um projeto falhar, use seu exemplo pronto e diga "vamos ver com o meu enquanto arrumamos o seu", sem drama.

Desafio e compartilhar (10 min): Roda final de conversa. Pergunte: "A IA é mágica?". Espere e conclua junto: "Não! Ela só sabe o que a gente ensinou". Entregue o certificado ou adesivo de "Treinador de IA". Como desafio, cada criança desenha numa folha "a IA dos meus sonhos" e diz uma coisa que gostaria de ensinar para ela.

## Como explicar para crianças

Use a imagem do bichinho de estimação: "Treinamos nossa IA como quem ensina um truque pro cachorro. Mostramos o exemplo várias vezes e ela aprendeu". Para a apresentação, diga: "Você é o dono do truque, então é você quem mostra pro pessoal como funciona". Lembre que errar faz parte: "Se o gato não reagir de primeira, sem problema, a gente tenta de novo, igual quando o pet está distraído".

## Erros comuns e como ajudar

O projeto não abre ou o modelo "sumiu": tenha os links dos modelos salvos e seus exemplos prontos como reserva; troque para o seu projeto e siga a festa. A criança fica com vergonha de falar: apresente junto, faça você as perguntas e deixe ela só fazer o gesto. A webcam não reconhece o gesto: peça para a criança chegar mais perto e fazer o gesto bem grande e devagar, com boa luz; lembre que o fundo precisa estar parecido com o do treino. A turma fica agitada esperando a vez: dê a cada espectador a missão de contar quantos gestos a IA acertou. O som não é reconhecido no ambiente barulhento: peça silêncio total na hora da demonstração de áudio e aproxime a criança do microfone.`,
  exercicios: [
    {
      titulo: `Aquecimento: minha IA em uma frase`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça uma rodada rápida no círculo. Ajude quem travar oferecendo o início da frase. O objetivo é que cada criança lembre o que seu projeto faz antes de apresentar.`,
      atividade: `Sentados em roda, cada criança completa a frase: "Minha IA reconhece ___ e faz o gato ___". Quem quiser, mostra o gesto ou faz o som no ar.`,
      gabarito: `Não há resposta certa única. Exemplos válidos: "Minha IA reconhece a mão aberta e faz o gato pular"; "Minha IA reconhece quando eu bato palma e faz o gato mudar de cor". O acerto é a criança conseguir dizer uma classe que treinou e uma reação do gato.`,
    },
    {
      titulo: `Checagem técnica: o projeto está pronto?`,
      tipo: `Verificação guiada em dupla professor-aluno`,
      tempo: `10 minutos`,
      guiaProfessor: `Leve cada criança ao computador do projetor por um minuto. Confira os três pontos da lista junto com ela, falando em voz alta o nome de cada botão para a criança aprender a localizar sozinha.`,
      atividade: `Com o professor, a criança confere: 1) o Scratch abre o projeto dela; 2) a bandeira verde (ícone verde no topo do palco) inicia o programa; 3) ao fazer o gesto ou som, o gato reage.`,
      gabarito: `Projeto pronto quando os três itens funcionam: o projeto abre, a bandeira verde inicia e o gato reage ao gesto ou som. Se um item falhar, a solução é: projeto não abre - usar o link do modelo salvo ou o exemplo do professor; bandeira verde não inicia - clicar de novo no ícone verde; gato não reage - aproximar-se da webcam e fazer o gesto grande e devagar.`,
    },
    {
      titulo: `Plateia gentil: combinando as regras`,
      tipo: `Dinâmica de turma`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza um pequeno ensaio. Escolha um voluntário para ser o apresentador de mentira e a turma pratica ser plateia. Reforce que palma é o presente que damos ao colega.`,
      atividade: `A turma combina e ensaia as três regras de uma boa plateia: ficar em silêncio, olhar para o colega e bater palma quando ele terminar. Um voluntário finge apresentar e todos praticam.`,
      gabarito: `As três regras corretas são: 1) silêncio enquanto o colega fala; 2) olhar e prestar atenção; 3) bater palma no final. Uma plateia gentil deixa o apresentador mais confiante e a apresentação fica mais bonita para todos.`,
    },
    {
      titulo: `Minha demonstração ao vivo`,
      tipo: `Apresentação individual (entregável do mês)`,
      tempo: `20 minutos (turma toda)`,
      guiaProfessor: `Chame um a um pela lista. Fique ao lado, pronto para clicar na bandeira verde se a criança travar. Faça você as perguntas se ela ficar tímida. Garanta uma palma para cada apresentador. Tenha seu exemplo pronto como reserva se um projeto falhar.`,
      atividade: `Cada aluno, na frente da turma, faz três coisas: 1) diz o nome do seu projeto; 2) conta o que ensinou para a IA, ou seja, quais classes criou na Teachable Machine; 3) clica na bandeira verde e faz o gesto ou som ao vivo para o gato reagir no projetor.`,
      gabarito: `A apresentação está completa quando a criança nomeia o projeto, descreve pelo menos uma classe que treinou (por exemplo "ensinei a mão aberta e a mão fechada") e realiza a demonstração ao vivo com o gato reagindo. Se a IA não reagir de primeira, tentar de novo já conta como sucesso, pois mostra que a criança entende o passo de iniciar com a bandeira verde e repetir o gesto.`,
    },
    {
      titulo: `A grande lição: a IA é mágica?`,
      tipo: `Reflexão e desafio de desenho`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a roda final com a pergunta-chave. Espere as crianças responderem antes de revelar a conclusão. Depois entregue as folhas para o desenho e deixe cada uma compartilhar sua ideia em uma frase. Encerre com o certificado de "Treinador de IA".`,
      atividade: `Em roda, a turma responde: "A IA é mágica? Como ela aprende?". Em seguida, cada criança desenha numa folha "a IA dos meus sonhos" e conta uma coisa que gostaria de ensinar para ela.`,
      gabarito: `A resposta correta da reflexão é: a IA não é mágica; ela aprende com os exemplos que nós damos para ela, igual ensinamos um truque para um bichinho. No desenho não há resposta errada; o acerto é a criança citar algo que "ensinaria" para a IA reconhecer (um gesto, um som, um objeto), mostrando que entendeu que a IA precisa de exemplos para aprender.`,
    },
  ],
};
