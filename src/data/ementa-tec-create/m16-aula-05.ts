import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Trazendo a música da IA",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Importar a trilha sonora criada no Suno para o projeto do CapCut, colocá-la numa faixa de áudio separada, alinhá-la ao vídeo, ajustar o volume e aparar o trecho que combina com a duração da montagem.`,
  descricao: `Até agora o vídeo do aluno tem imagens, cortes e transições, mas ainda é mudo ou só com o som original dos clipes. Nesta aula a montagem ganha vida: a música que cada aluno gerou no Suno entra no projeto e passa a guiar a emoção da cena. Trilha sonora é o que transforma uma sequência de imagens num pequeno filme. Quando a música certa toca no momento certo, até um corte simples parece profissional.

O foco da aula é uma ideia central do CapCut: o áudio mora numa faixa própria, separada da faixa de vídeo. Isso significa que o aluno pode mover, cortar e regular o volume da música sem mexer nas imagens, e vice-versa. É como ter duas camadas empilhadas na linha do tempo (timeline): em cima, o vídeo; embaixo, o som. Entender essa separação é o que dá liberdade para sincronizar tudo com calma.

O aluno vai aprender três gestos práticos e poderosos. Primeiro, importar o arquivo de música (geralmente um MP3 baixado do Suno) e arrastá-lo para a faixa de áudio. Segundo, alinhar o começo da música ao começo do vídeo, ou a um ponto marcante da cena, deslizando o bloco de áudio na timeline. Terceiro, ajustar o volume para a música não abafar nada e aparar o final, cortando o pedaço de música que sobra além da duração da montagem. No fim, vídeo e música terminam juntos, como devem.

Esta aula não cria a música, isso já foi feito no Suno em aulas anteriores do curso, e ainda não trata da voz com IA, que é o tema da próxima aula. Aqui o objetivo é dominar a faixa de áudio: trazer a música para dentro, encaixá-la no tempo da cena e deixá-la no volume certo. É um passo técnico e ao mesmo tempo muito sensível, porque os adolescentes percebem na hora a diferença que o som faz no próprio trabalho.`,
  materiais: [
    `Computadores (até 10) com o CapCut instalado e o projeto de vídeo da aula anterior já aberto, com os clipes e transições prontos na timeline`,
    `Arquivo de música de cada aluno em MP3, baixado do Suno e salvo numa pasta conhecida do computador (por exemplo "Documentos/Trilhas"); tenha cópias de reserva no pen drive`,
    `Conta do CapCut ativa em cada máquina e acesso à conta do Suno caso algum aluno precise baixar a música de novo`,
    `Projetor ou TV ligado no computador do professor para demonstrar a importação, a faixa de áudio e o ajuste de volume na tela grande`,
    `Fones de ouvido por aluno (ou caixas de som de baixo volume) para que cada um ouça a própria trilha sem atrapalhar a turma`,
    `Arquivo de música de exemplo do professor (um MP3 curto e um mais longo) para demonstrar o caso em que a música precisa ser aparada`,
    `Folha ou slide com o passo a passo resumido: Importar, Arrastar para a faixa de áudio, Alinhar, Volume, Aparar`,
  ],
  conceitosChave: [
    `Faixa de áudio — a camada da timeline, separada do vídeo, onde a música e os sons ficam; permite mexer no som sem tocar nas imagens.`,
    `Timeline (linha do tempo) — a régua na parte de baixo do CapCut onde ficam empilhados vídeo e áudio, do início ao fim da montagem.`,
    `Importar — trazer um arquivo de fora (o MP3 do Suno) para dentro do projeto do CapCut, deixando-o disponível para usar.`,
    `Trilha sonora — a música de fundo que dá emoção e ritmo ao vídeo; aqui é a faixa gerada pelo aluno no Suno.`,
    `Alinhar (sincronizar) — encaixar o começo da música num ponto certo do vídeo, deslizando o bloco de áudio na timeline.`,
    `Volume — o quanto o som é alto ou baixo; ajustado pela linha de volume sobre o bloco de áudio ou pelo painel lateral.`,
    `Aparar (cortar/trim) — encurtar o bloco de música puxando a borda para dentro, para que ele termine junto com o vídeo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser editor profissional para dar esta aula. Precisa entender uma ideia simples: no CapCut, o vídeo fica numa faixa e o áudio fica em outra faixa, logo abaixo, na timeline. São camadas independentes. Antes da aula, confirme que o MP3 do Suno de cada aluno está salvo numa pasta fácil de achar e que o projeto de vídeo da aula passada abre normalmente. Faça você mesmo o caminho uma vez: importar o MP3, arrastá-lo para a faixa de áudio, alinhar, baixar o volume e aparar o final. Se você fez uma vez, consegue guiar a turma.

No CapCut, a importação acontece no painel de mídia, no canto superior esquerdo. Há um botão "Importar" (Import). O áudio importado pode aparecer na aba "Mídia" (Media) ou, em algumas versões, na aba "Áudio" (Audio). A faixa de volume é a linha horizontal sobre o bloco de áudio; também existe o painel "Áudio" no lado direito quando você seleciona o bloco. Aparar é puxar a borda direita do bloco para a esquerda.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min): Relembre a aula anterior. Pergunte "o que faltava no vídeo de vocês?". Toque um clipe sem som e o mesmo com música, no projetor, para a turma sentir a diferença. Mostre onde fica a faixa de áudio vazia, embaixo da faixa de vídeo, na timeline.

2. Conteúdo novo guiado (15 min): No projetor, demonstre o caminho completo com o seu exemplo. Clique em "Importar" (Import) no canto superior esquerdo, escolha o MP3 da pasta e confirme. O áudio aparece no painel de mídia. Arraste-o para baixo, até a faixa de áudio na timeline. Mostre que vídeo e som agora são duas camadas. Deslize o bloco de música para alinhar o começo dela ao começo do vídeo. Selecione o bloco, abra o painel "Áudio" à direita e baixe o "Volume" um pouco. Por fim, pegue a borda direita do bloco e puxe para a esquerda até a música terminar junto com o vídeo: isso é aparar.

3. Mão na massa (25 min): Cada aluno faz o mesmo no próprio projeto, com fones. Passos na tela ou no slide: Importar, Arrastar para a faixa de áudio, Alinhar, Volume, Aparar. Circule de máquina em máquina. Confira se o áudio foi para a faixa certa e não por cima do vídeo, se o começo está alinhado e se a música termina junto com a montagem. Ajude quem não acha o MP3 na pasta.

4. Desafio e compartilhar (10 min): Cada aluno toca cinco segundos do vídeo com a música encaixada para um colega ou para a turma. Pergunte: "a música combinou com a cena?". Comemore o salto de qualidade. Avise que na próxima aula entra a voz com IA, em outra faixa de áudio.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes de 10 a 15 anos, use a imagem das camadas: "o vídeo é o andar de cima e a música é o andar de baixo; você arruma um sem bagunçar o outro". Diga que a timeline é uma "régua do tempo" e que alinhar é "fazer a música começar na hora certa". Compare o volume a um botão de rádio: "alto demais abafa tudo, baixo demais some". Explique aparar como "cortar a sobra", igual a cortar o excesso de papel de presente para fechar certinho. Mostre sempre clicando na tela enquanto fala, porque eles aprendem vendo o gesto.

## Erros comuns e como ajudar

O erro mais comum é arrastar o MP3 para cima da faixa de vídeo em vez da faixa de áudio; mostre que o som tem que ir para a camada de baixo. Outro é não achar o arquivo: confirme com o aluno em qual pasta o Suno salvou e use a barra de busca da janela de importação. Muitos esquecem de baixar o volume e a música abafa tudo; ensine a olhar a linha de volume sobre o bloco. Há quem deixe a música muito mais longa que o vídeo: relembre o gesto de aparar a borda direita. Por fim, alguns alinham errado e a música entra atrasada; oriente a deslizar o bloco até o começo encostar no início do vídeo, usando o "encaixe" (snap) que o CapCut oferece.`,
  exercicios: [
    {
      titulo: `Caça ao Arquivo e Importação`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno saiba em qual pasta está o MP3 do Suno. Peça que cliquem em "Importar" (Import), no canto superior esquerdo, encontrem o arquivo e o tragam para o painel de mídia. O objetivo é só importar, ainda sem arrastar para a timeline. Ajude quem não localizar o arquivo usando a barra de busca da janela.`,
      atividade: `Abra o seu projeto, clique em "Importar", encontre o MP3 que você criou no Suno e traga-o para o painel de mídia do CapCut. Confirme que a música apareceu na sua lista de mídia.`,
      gabarito: `O aluno localizou o MP3 na pasta correta e o importou; a música passou a aparecer no painel de mídia do CapCut. Acertou quem trouxe o arquivo para dentro do projeto sem ainda colocá-lo na timeline.`,
    },
    {
      titulo: `Música na Faixa de Áudio`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Demonstre de novo o arrastar do painel de mídia até a faixa de áudio, a camada de baixo na timeline. O erro clássico é soltar por cima do vídeo; circule conferindo que o bloco de música ficou na faixa separada e que o vídeo continua intacto na faixa de cima.`,
      atividade: `Arraste a sua música do painel de mídia para a faixa de áudio, embaixo da faixa de vídeo, na timeline. Confira que o vídeo continua na camada de cima e a música na de baixo, sem uma cobrir a outra.`,
      gabarito: `A música ficou na faixa de áudio, separada e abaixo do vídeo, e os clipes de imagem permaneceram intactos. Acertou quem entendeu que som e vídeo são duas camadas independentes na timeline.`,
    },
    {
      titulo: `Alinhar e Regular o Volume`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas para revisarem o trabalho um do outro. Cada aluno alinha o começo da música ao começo do vídeo, deslizando o bloco, e depois baixa o volume pelo painel "Áudio" à direita ou pela linha de volume sobre o bloco. O colega ouve e diz se a música começa na hora certa e se o volume está agradável.`,
      atividade: `Em dupla, cada um alinha o início da música ao início do seu vídeo e ajusta o volume para não abafar a cena. Depois ouçam o trabalho um do outro e digam se o começo e o volume ficaram bons.`,
      gabarito: `O aluno deslizou o bloco para alinhar o começo da música ao vídeo e regulou o volume para um nível agradável; a dupla deu retorno útil. Acertou quem deixou a música começando no tempo certo e num volume que não abafa a cena.`,
    },
    {
      titulo: `Roda do "Antes e Depois"`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em roda. Toque, no projetor ou no fone, um trecho do vídeo de um voluntário sem música e depois com a música encaixada. Conduza a conversa sobre o que a trilha mudou na emoção da cena. Ajude a turma a perceber que som não é enfeite, é parte da história.`,
      atividade: `Na sua vez, mostre cinco segundos da sua cena sem música e depois com a música. Diga em uma frase o que a trilha mudou: ficou mais animada, mais tensa, mais emocionante?`,
      gabarito: `O aluno comparou a cena com e sem música e descreveu, com suas palavras, o efeito da trilha na emoção (mais animada, tensa ou emocionante). Acertou quem participou reconhecendo que a música muda a sensação da cena.`,
    },
    {
      titulo: `Encaixe Perfeito: Aparar o Final`,
      tipo: `Desafio`,
      tempo: `12 min`,
      guiaProfessor: `Desafie cada aluno a fazer a música terminar exatamente junto com o vídeo. Quem tem música mais longa precisa aparar a borda direita do bloco até o fim coincidir com o último clipe. Mostre o uso do encaixe (snap) para a borda grudar no fim do vídeo. Para quem terminar, sugira uma diminuição suave do volume no final (fade out), se a versão do CapCut permitir.`,
      atividade: `Faça a sua música terminar junto com o vídeo: puxe a borda direita do bloco de áudio para a esquerda até o fim da música encostar no fim da montagem. Se sobrar tempo, deixe o som diminuir suavemente no final.`,
      gabarito: `A música termina junto com o último clipe, com a borda do áudio aparada até o fim da montagem; quem teve tempo aplicou uma diminuição suave no final. Acertou quem aparou a sobra de música e deixou vídeo e som terminando juntos.`,
    },
  ],
};
