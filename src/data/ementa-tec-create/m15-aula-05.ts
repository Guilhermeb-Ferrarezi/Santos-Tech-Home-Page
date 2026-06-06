import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "O poder dos efeitos sonoros",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender o que são efeitos sonoros (SFX) e gerar sons curtos com IA — como passos, cliques, moedas e explosões — distinguindo claramente efeito, trilha e voz.`,
  descricao: `Nesta aula, os alunos descobrem um ingrediente que costuma passar despercebido, mas que faz toda a diferença: o efeito sonoro, também chamado de SFX (do inglês "sound effects"). É o "ploc" da moeda, o "clique" de um botão, o "tum" de um passo e o "bum" de uma explosão. Esses sons curtos são o que dão vida a jogos e vídeos: quando o personagem pula e não acontece som nenhum, o cérebro sente que algo está faltando. Quando o pulo vem com um "uup" certinho, tudo fica mais real e mais divertido.

O foco do mês até aqui foi trilha (a música de fundo) e voz (personagens e narração). Agora entra a terceira peça do áudio: o efeito. A grande ideia da aula é deixar essa diferença muito clara. A trilha é longa e toca por baixo de tudo, criando clima. A voz são as falas dos personagens. O efeito é curto, pontual e responde a uma ação que acontece na tela: alguém clicou, pegou uma moeda, abriu uma porta. Os três juntos formam o som completo de um jogo.

Os alunos vão usar a IA para gerar esses sons curtos. No ElevenLabs existe a função de Sound Effects (efeitos sonoros), onde você descreve em palavras o som que quer e a IA cria o áudio. O Suno, que eles já conhecem das aulas anteriores, é ótimo para música, mas para sons curtos e pontuais o ElevenLabs é a ferramenta certa. Eles aprenderão a escrever pedidos (prompts) bem específicos, como "passo em piso de madeira" ou "moeda caindo em uma mesa", e a baixar cada som como um arquivo separado.

Ao final, cada aluno terá uma pequena coleção de efeitos prontos — alguns passos, um clique, uma moeda e talvez uma explosão — guardados com nomes claros para usar depois no vídeo e no jogo. Não se trata de fazer música, e sim de fabricar pequenos sons que reagem às ações. Essa coleção será a base da biblioteca de sons que eles vão montar e organizar na próxima aula.`,
  materiais: [
    `Computadores com acesso ao ElevenLabs (música e voz por IA), um por aluno, com a função de Sound Effects (efeitos sonoros) disponível`,
    `Conta no ElevenLabs já criada e com login feito antes da aula, e conta no Suno para a revisão`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada passo`,
    `Fones de ouvido para cada aluno escutar os efeitos sem atrapalhar a turma`,
    `Pasta com arquivos de exemplo: 3 a 5 efeitos prontos (passo, clique, moeda, explosão) e um trecho de jogo com e sem efeitos para comparar`,
    `Folha impressa ou slide com a lista de prompts sugeridos e os nomes para salvar cada arquivo`,
    `Uma pasta vazia no computador, com o nome "Efeitos", para o aluno guardar os sons baixados`,
  ],
  conceitosChave: [
    `Efeito sonoro (SFX) — um som curto e pontual que responde a uma ação na tela, como um clique, um passo ou uma moeda caindo.`,
    `Trilha — a música de fundo, longa, que toca por baixo de tudo e cria o clima da cena.`,
    `Voz — as falas dos personagens e a narração, feitas a partir de texto no ElevenLabs.`,
    `Prompt de efeito — a descrição em palavras do som que você quer que a IA crie, quanto mais específica, melhor.`,
    `Duração — o tamanho do som em segundos; efeitos são curtos, geralmente de 1 a 3 segundos.`,
    `Exportar/Baixar — salvar o som gerado como um arquivo de áudio no computador, para usar depois.`,
    `Biblioteca de sons — a coleção de efeitos organizada por nome, pronta para ser reaproveitada no vídeo e no jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em áudio. Esta aula usa uma função simples do ElevenLabs chamada Sound Effects (efeitos sonoros). Nela, você digita uma frase descrevendo o som e a IA gera o áudio em poucos segundos. Para chegar lá, faça login no ElevenLabs e procure no menu da esquerda o item "Sound Effects" (em algumas versões aparece como "Efeitos sonoros" ou dentro de "Audio Tools"). A tela tem uma caixa de texto grande para o prompt, um controle de duração (Duration) e um botão "Generate" (Gerar). Depois de gerar, aparecem algumas opções de som; cada uma tem um botão de tocar (play) e um de baixar (Download), que costuma ser um ícone de seta para baixo. A diferença para o Suno é importante: o Suno faz música com começo, meio e fim; o ElevenLabs Sound Effects faz sons curtos e pontuais. Para esta aula, o ElevenLabs é a ferramenta principal.

## Passo a passo da aula

Aquecimento (10 min): Toque o trecho de jogo de exemplo duas vezes — uma sem efeitos e outra com efeitos. Pergunte à turma o que mudou. Conduza a percepção de que os sons curtos (passo, moeda, clique) deixam tudo mais vivo. Revise rapidamente o que já fizeram no mês: trilha no Suno e voz no ElevenLabs. Anuncie que hoje entra a terceira peça: o efeito.

Conteúdo novo guiado (15 min): No projetor, abra o ElevenLabs e clique em "Sound Effects" no menu da esquerda. Na caixa de texto, escreva um prompt simples em inglês ou português, por exemplo: "passos em piso de madeira, devagar". Ajuste a duração para uns 2 segundos e clique em "Generate". Toque as opções com o play, escolha a melhor e clique em "Download" para salvar na pasta "Efeitos". Repita com mais dois prompts: "moeda caindo na mesa" e "clique curto de botão". Mostre como renomear o arquivo de forma clara, por exemplo "moeda.mp3".

Mão na massa (25 min): Cada aluno gera ao menos quatro efeitos diferentes — sugira passo, clique, moeda e explosão. Para cada um, escrevem o prompt, geram, escutam com os fones, baixam o melhor e renomeiam com nome claro. Circule pela sala ajudando a melhorar os prompts e a salvar tudo na pasta certa.

Desafio + compartilhar (10 min): Cada aluno toca seu efeito favorito para a turma e diz qual ação do jogo ele combina (pular, pegar item, abrir porta). Dois ou três voluntários mostram no projetor.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que o efeito é como o "barulho" que sai quando você faz algo: bater na mesa, estalar o dedo, fechar a porta. A trilha é a música que toca por trás; a voz é alguém falando; o efeito é o "tec", o "ploc", o "bum". Para o prompt, ensine a regra do "o quê + onde + como": o quê (passo), onde (piso de madeira), como (devagar). Quanto mais detalhe, mais a IA acerta. Mostre antes de mandar fazer e fale os nomes dos botões em voz alta enquanto aponta na tela. Lembre que efeito é curto: se vier um som longo demais, é porque a duração está alta.

## Erros comuns e como ajudar

O erro mais comum é confundir efeito com música e tentar gerar tudo no Suno; reforce que efeitos curtos saem no ElevenLabs Sound Effects. Outro é escrever prompts vagos como "som legal", que geram resultados estranhos; oriente a descrever a ação concreta. Muitos esquecem de baixar e perdem o som ao trocar de tela; lembre de clicar em "Download" antes de gerar o próximo. Há quem salve tudo com nomes iguais ou sem nome; insista em renomear cada arquivo ("passo.mp3", "moeda.mp3"). Alguns colocam duração muito alta e o efeito fica arrastado; mostre como baixar a duração para 1 ou 2 segundos. Por fim, há quem gere um único som e ache que acabou; incentive a testar variações e escolher a melhor.`,
  exercicios: [
    {
      titulo: `Efeito, trilha ou voz?`,
      tipo: `roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Toque ou descreva alguns sons e peça a classificação. Conduza com calma e corrija com gentileza, reforçando a diferença entre os três tipos.`,
      atividade: `Em roda, para cada som que o professor tocar (uma música de fundo, uma fala, um clique, uma moeda), diga em voz alta se é trilha, voz ou efeito.`,
      gabarito: `A música de fundo é trilha; a fala é voz; o clique e a moeda são efeitos. O aluno acerta a maioria e consegue explicar que o efeito é curto e responde a uma ação.`,
    },
    {
      titulo: `Meu primeiro efeito`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno encontre "Sound Effects" no menu, escreva um prompt simples e clique em "Generate". Confira se baixaram o arquivo na pasta "Efeitos".`,
      atividade: `No ElevenLabs, abra "Sound Effects", escreva o prompt "clique curto de botão", gere o som, escute com os fones, baixe o melhor e renomeie como "clique.mp3".`,
      gabarito: `Existe um arquivo "clique.mp3" na pasta "Efeitos". Ao tocar, ouve-se um clique curto e nítido. O aluno gerou pelo ElevenLabs, não pelo Suno.`,
    },
    {
      titulo: `Quatro sons para o jogo`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Oriente a usar a regra "o quê + onde + como" em cada prompt. Ajude a melhorar descrições vagas e confira se cada efeito foi baixado e renomeado.`,
      atividade: `Gere quatro efeitos diferentes — passo, moeda, abrir porta e explosão — escrevendo um prompt detalhado para cada um. Baixe o melhor de cada e salve com nomes claros.`,
      gabarito: `A pasta tem quatro arquivos com nomes claros ("passo.mp3", "moeda.mp3", "porta.mp3", "explosao.mp3"). Cada som combina com a ação descrita e tem duração curta.`,
    },
    {
      titulo: `Desafio: o som misterioso`,
      tipo: `desafio`,
      tempo: `5 minutos`,
      guiaProfessor: `Incentive prompts criativos e específicos. Reforce que duração curta e descrição detalhada ajudam a IA a acertar um som difícil.`,
      atividade: `Escolha uma ação incomum (um robô andando, uma poção borbulhando ou um portal abrindo) e tente fazer a IA gerar esse efeito com o prompt mais detalhado possível.`,
      gabarito: `O aluno gera um efeito reconhecível para a ação escolhida e explica como melhorou o prompt (mais detalhes, ajuste de duração) até chegar a um som convincente.`,
    },
    {
      titulo: `Troca de efeitos em dupla`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente cada aluno a escutar os efeitos do colega e adivinhar a ação, depois dar uma sugestão de melhoria sem julgar a pessoa.`,
      atividade: `Troque de lugar com o colega, escute os efeitos dele sem ver os nomes e tente adivinhar a ação de cada um. Depois sugira um prompt que deixaria um dos sons melhor.`,
      gabarito: `A dupla acerta a maioria das ações ao ouvir, e cada aluno dá ao colega ao menos uma sugestão de prompt mais detalhado, explicando por que ela melhoraria o som.`,
    },
  ],
};
