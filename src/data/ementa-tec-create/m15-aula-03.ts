import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Dando voz aos personagens com ElevenLabs",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Conhecer o ElevenLabs e gerar as primeiras falas curtas em voz realista para um personagem do projeto, explorando vozes e ajustando a entonação.`,
  descricao: `Na aula passada o aluno aprendeu a compor a trilha do jogo no Suno. Agora é hora de dar vida aos personagens: nesta aula apresentamos o ElevenLabs, uma ferramenta de inteligência artificial que transforma texto em voz realista. Em vez de gravar a própria voz, o aluno escreve a fala e a IA lê em voz alta, com tom humano, respiração e emoção. Isso é incrível para games, porque cada personagem pode ter uma voz própria sem precisar de um estúdio.

A ideia central é simples: você digita um texto, escolhe uma voz e a IA gera um áudio. Esse processo se chama "text-to-speech" (texto para fala). O segredo está em escolher a voz certa para cada personagem (um herói corajoso soa diferente de um vilão sombrio ou de um robô engraçado) e em ajustar a entonação para que a fala não saia robótica nem sem vida. Pequenos ajustes mudam tudo: a mesma frase pode soar calma, animada ou tensa.

Nesta aula o aluno explora a galeria de vozes do ElevenLabs, testa pelo menos três vozes diferentes, entende os controles de estabilidade e clareza, e gera suas primeiras falas curtas para um personagem do seu próprio projeto de jogo. O foco é experimentar com liberdade e perceber como a escolha da voz dá personalidade ao personagem.

Ao final, cada aluno terá pelo menos uma fala curta exportada em áudio, pronta para entrar no jogo do Roblox ou no vídeo feito com IA. É o começo da construção de um elenco de vozes para o projeto do mês, que será expandido na próxima aula com narração e diálogos mais longos.`,
  materiais: [
    `Computadores com acesso à internet e ao ElevenLabs (elevenlabs.io), um por aluno`,
    `Contas no ElevenLabs já criadas e logadas antes da aula (plano gratuito é suficiente para falas curtas)`,
    `Projetor ou tela grande para o professor demonstrar passo a passo`,
    `Fones de ouvido para cada aluno, evitando que os áudios se misturem na sala`,
    `Arquivo de exemplo com 3 falas curtas prontas (uma de herói, uma de vilão, uma de robô) para comparação`,
    `Lista impressa ou no quadro com os personagens que cada aluno está desenvolvendo no projeto`,
    `Pasta compartilhada (Google Drive ou pasta local) para salvar os áudios exportados`,
  ],
  conceitosChave: [
    `Text-to-speech — tecnologia que transforma um texto escrito em fala falada por uma voz de inteligência artificial.`,
    `Voz (voice) — o "timbre" do personagem; cada voz tem características próprias de idade, gênero, sotaque e emoção.`,
    `Galeria de vozes (Voice Library) — coleção de vozes prontas dentro do ElevenLabs que o aluno pode escolher e testar.`,
    `Estabilidade (stability) — controle que deixa a voz mais constante e calma ou mais variada e emotiva.`,
    `Clareza e similaridade (clarity / similarity) — ajuste que torna a voz mais nítida e fiel ao timbre original.`,
    `Entonação — a "música" da fala: as subidas e descidas de tom que passam emoção e intenção.`,
    `Exportar (download) — salvar o áudio gerado como arquivo (geralmente MP3) para usar no jogo ou no vídeo.`,
  ],
  treinamento: `## O que o professor precisa saber

O ElevenLabs é um site (elevenlabs.io) que cria vozes realistas a partir de texto. Você não precisa ser especialista: basta saber digitar um texto, escolher uma voz e clicar em gerar. Antes da aula, faça login na sua conta e crie a de cada aluno, pois o cadastro toma tempo. Teste você mesmo uma fala curta para chegar seguro. O plano gratuito basta para falas pequenas; lembre os alunos de usar frases curtas para economizar os créditos mensais. A tela principal que vamos usar é a área "Text to Speech" (ou "Studio"), com uma caixa grande de texto, um seletor de voz e controles à direita.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula da trilha no Suno e pergunte "como seria a voz do seu personagem?". Toque o arquivo de exemplo com as três falas (herói, vilão, robô) e peça que adivinhem quem é quem só pela voz. Isso mostra que a voz cria personalidade.

Conteúdo novo guiado (15 min): no projetor, abra elevenlabs.io e entre em "Text to Speech". Mostre a caixa de texto e digite uma frase curta, por exemplo: "Você não vai passar por aqui!". Clique no seletor de voz (botão com o nome da voz no topo) e abra a "Voice Library"; ouça duas ou três vozes clicando no botão de play ao lado de cada uma. Escolha uma e clique em "Generate" (botão azul embaixo). Aponte os controles da direita: "Stability" e "Clarity + Similarity". Mova a estabilidade para baixo e gere de novo: a voz fica mais emotiva. Depois mostre o botão de download (ícone de seta para baixo) para salvar o MP3.

Mão na massa (25 min): cada aluno escolhe um personagem do próprio projeto, escreve uma fala curta (até 15 palavras) e testa pelo menos três vozes diferentes. Depois ajusta a estabilidade até gostar do resultado e exporta o áudio para a pasta compartilhada, nomeando o arquivo como "personagem-fala01". Circule pela sala, sentando ao lado de quem travar e fazendo perguntas que guiem ("essa voz combina com um vilão ou com um amigo?").

Desafio + compartilhar (10 min): peça que cada aluno gere a mesma frase com duas entonações diferentes (uma calma, uma tensa) mudando a estabilidade. Em seguida, faça uma rodada rápida: alguns alunos tocam a melhor fala e a turma comenta o que funcionou.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de "dublador robô": "imagine um ator que lê qualquer texto que você escrever, na hora, na voz que você escolher". Compare a galeria de vozes a um "elenco de personagens" esperando para serem contratados. Para a estabilidade, diga: "mais para a direita, a voz fica certinha e calma; mais para a esquerda, ela fica solta e cheia de emoção, mas pode escorregar". Para a entonação, peça que digam a frase "vamos lá!" de três jeitos com a própria boca (animado, cansado, com raiva): a IA faz a mesma coisa quando mudamos os ajustes. Reforce que frases curtas geram resultados melhores e gastam menos créditos.

## Erros comuns e como ajudar

Erro 1: textos enormes. Ensine a cortar a fala em frases curtas; mostre que isso melhora a emoção e economiza créditos. Erro 2: escolher a primeira voz sem testar. Insista no mínimo de três vozes antes de decidir. Erro 3: estabilidade no máximo deixando a voz "robótica e sem vida"; sugira baixar um pouco. Erro 4: esquecer de baixar e perder o áudio; lembre sempre de clicar no download e nomear o arquivo. Erro 5: pontuação ausente, fazendo a IA ler tudo corrido; mostre que pontos, vírgulas e exclamações criam pausas e emoção. Erro 6: créditos esgotados; combine o uso de frases curtas e oriente a planejar a fala no caderno antes de gerar.`,
  exercicios: [
    {
      titulo: `Minha primeira fala com IA`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que todos estejam logados no ElevenLabs e na aba "Text to Speech". Acompanhe a digitação e o clique em "Generate". Objetivo: vencer o medo da ferramenta com uma vitória rápida.`,
      atividade: `Digite a frase "Olá, bem-vindo ao meu jogo!", escolha qualquer voz da galeria e clique em "Generate". Ouça o resultado e clique no botão de download para salvar o áudio.`,
      gabarito: `O aluno deve ter um arquivo MP3 salvo com a frase falada por uma voz da IA. Sucesso = áudio gerado e baixado, mesmo que a voz ainda não combine com o personagem. Erros típicos: esquecer de clicar em "Generate" ou não salvar o arquivo.`,
    },
    {
      titulo: `Caça à voz certa`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Incentive o aluno a abrir a "Voice Library" e usar o play de cada voz antes de gerar. Pergunte por que uma voz combina mais com o personagem dele do que outra.`,
      atividade: `Escolha um personagem do seu projeto. Teste pelo menos três vozes diferentes com a frase "Você não me vence tão fácil!". Decida qual voz combina melhor e anote o nome dela.`,
      gabarito: `O aluno testou no mínimo três vozes e justificou a escolha com uma razão simples (ex.: "essa é grave, combina com vilão"). Não existe resposta única; o que importa é a comparação consciente e a justificativa ligada ao personagem.`,
    },
    {
      titulo: `Calma ou tensa?`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Mostre de novo o controle "Stability". Peça que um colega gere a versão calma e o outro a tensa, da mesma frase, e comparem nos fones.`,
      atividade: `Em dupla, peguem a mesma frase curta. Gerem duas versões: uma com estabilidade alta (voz calma) e outra com estabilidade baixa (voz emotiva). Ouçam as duas e descrevam em uma frase a diferença que sentiram.`,
      gabarito: `As duplas devem perceber que estabilidade alta deixa a voz mais constante e neutra, e estabilidade baixa deixa a voz mais emotiva e variada (às vezes instável). Resposta esperada do tipo: "a versão baixa soou mais nervosa e viva".`,
    },
    {
      titulo: `Roda das vozes`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza uma roda. Cada aluno toca uma fala e a turma adivinha o tipo de personagem só pela voz. Estimule comentários respeitosos sobre o que funcionou.`,
      atividade: `Cada aluno toca para a turma uma das falas que gerou, sem dizer quem é o personagem. Os colegas adivinham se é herói, vilão, ajudante ou robô e explicam por quê.`,
      gabarito: `Não há resposta certa ou errada; o objetivo é perceber que a voz comunica personalidade. Bom resultado: a turma associa características da voz (grave, aguda, calma, robótica) a tipos de personagem e percebe quando a voz combina ou não com a intenção.`,
    },
    {
      titulo: `Mini elenco do meu jogo`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Este exercício fecha a aula. Oriente a planejar duas falas no caderno antes de gerar, para economizar créditos. Verifique a nomeação dos arquivos e o salvamento na pasta compartilhada.`,
      atividade: `Escolha dois personagens do seu projeto. Para cada um, escreva uma fala curta (até 15 palavras), selecione uma voz que combine, ajuste a estabilidade e exporte o áudio. Nomeie os arquivos como "personagem01-fala01" e "personagem02-fala01" e salve na pasta da turma.`,
      gabarito: `Resultado esperado: dois arquivos MP3 salvos, com vozes diferentes e adequadas a cada personagem, e ajuste de estabilidade aplicado. Checklist: falas curtas, vozes distintas entre si, nomes de arquivo corretos e áudios audíveis. Esse material será reaproveitado na próxima aula de narração e diálogos.`,
    },
  ],
};
