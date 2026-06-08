import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Construindo e Apagando Voxels",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Dominar as ferramentas básicas de adicionar, apagar e pintar voxels no MagicaVoxel, construindo formas simples com controle da grade e da câmera.`,
  descricao: `Nesta aula o aluno coloca a mão na massa pela primeira vez de verdade. Depois de conhecer o ambiente do MagicaVoxel na aula anterior, agora ele aprende a construir e a desmontar formas usando as três ferramentas que vão acompanhá-lo o curso inteiro: Attach (adicionar), Erase (apagar) e Paint (pintar). A ideia é que, ao final, mexer com voxels seja tão natural quanto montar peças de LEGO na tela.

O voxel é o cubinho, a menor parte de um modelo 3D feito em blocos. Construir em voxel é empilhar e encaixar esses cubinhos dentro de uma caixa chamada grade (o workspace). Aprender a navegar nessa caixa, girando e aproximando a câmera, é tão importante quanto colocar os cubos: sem enxergar bem, o aluno coloca voxel no lugar errado e nem percebe. Por isso esta aula equilibra duas habilidades: usar as ferramentas e controlar a visão da cena.

Para praticar de forma divertida e com objetivo claro, os alunos constroem três desafios curtos e crescentes: uma pilha de cubos (entender o empilhar), uma caixa oca (entender faces e profundidade) e uma escada (combinar adicionar e apagar com precisão). Cada forma treina um músculo diferente da modelagem e prepara o terreno para, nas próximas aulas, planejarem e construírem o próprio personagem.

O clima da aula é de experimentação sem medo: errar e apagar faz parte. A ferramenta Erase e o atalho de desfazer são tão valorizados quanto o Attach. O professor reforça que todo modelo bonito nasceu de muitas tentativas e correções, e que apagar não é fracasso, é parte de construir.`,
  materiais: [
    `Computadores (um por aluno) com o MagicaVoxel já instalado e aberto num projeto novo e vazio`,
    `Projetor ou TV grande para o professor mostrar a tela e cada clique em tempo real`,
    `Arquivo de exemplo pronto (uma escada e uma caixa oca já construídas) para mostrar o objetivo final`,
    `Folha impressa de "atalhos rápidos" (Attach, Erase, Paint, desfazer, girar câmera) para cada aluno`,
    `Mouse com roda de rolagem para cada computador (facilita muito o zoom e a navegação)`,
    `Quadro branco ou slide com a imagem da grade e dos eixos para explicar profundidade`,
  ],
  conceitosChave: [
    `Voxel — o cubinho, a menor peça de um modelo feito em blocos, como um pixel em 3D.`,
    `Attach (Adicionar) — ferramenta que coloca novos voxels na cena ao clicar e arrastar.`,
    `Erase (Apagar) — ferramenta que remove voxels, deixando o espaço vazio de novo.`,
    `Paint (Pintar) — ferramenta que troca a cor de um voxel que já existe, sem adicionar nem apagar.`,
    `Grade (workspace) — a caixa que limita onde você pode construir; tem largura, altura e profundidade.`,
    `Câmera — o seu ponto de vista da cena, que você gira e aproxima para enxergar todos os lados.`,
    `Desfazer (Ctrl+Z) — atalho que volta atrás no último erro; o melhor amigo de quem está aprendendo.`,
  ],
  treinamento: `## O que o professor precisa saber

O MagicaVoxel é gratuito e funciona como um "LEGO digital". A tela tem três áreas: à esquerda a paleta de cores; no centro a grade (workspace) onde se constrói; à direita os painéis de objeto. As ferramentas principais ficam numa barra: Attach (atalho tecla "T"), Erase (tecla "R") e Paint (tecla "G"). Logo abaixo há os modos de aplicação: Voxel (1 cubo por clique), Face, Box (arrastar uma caixa) e Line. Nesta aula use sobretudo os modos Voxel e Box. Para navegar: clique e arraste com o botão esquerdo no espaço vazio gira a câmera; a roda do mouse dá zoom; o botão direito arrastando move (pan). Decore o Ctrl+Z (desfazer): você vai usar o tempo todo. Antes da aula, construa você mesmo a pilha, a caixa e a escada uma vez, para sentir a profundidade.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: Retome a aula 1 com perguntas rápidas: "O que é um voxel? Onde fica a paleta?". Mostre no projetor o arquivo de exemplo com a escada e a caixa prontas e diga: "Hoje vocês vão construir isto."

15 min — Conteúdo novo guiado: Com todos olhando o projetor, selecione a ferramenta Attach na barra (ou tecla "T") e o modo Voxel. Clique numa face da grade: nasce um cubo. Clique e arraste para criar vários de uma vez. Agora aperte Erase (tecla "R") e clique num cubo para apagá-lo. Em seguida Paint (tecla "G"): escolha uma cor na paleta à esquerda e clique num cubo existente para repintar. Mostre Ctrl+Z desfazendo. Por fim, ensine a girar a câmera arrastando no vazio e o zoom com a roda.

25 min — Mão na massa: Os alunos fazem três desafios em sequência. (1) Pilha: empilhar 5 cubos um sobre o outro usando Attach no modo Voxel. (2) Caixa oca: com o modo Box, arrastar um quadrado de chão e levantar as quatro paredes, deixando o miolo vazio (ótimo para girar a câmera e conferir). (3) Escada: alternar Attach para subir um degrau e Erase para corrigir os que saíram tortos, fazendo de 4 a 6 degraus. Circule pela sala mostrando, em cada computador, onde clicar.

10 min — Desafio + compartilhar: Lance o desafio "torre maluca": construir a forma mais alta que conseguirem em 5 minutos sem ela "vazar" da grade. Depois cada aluno gira a própria câmera e mostra a torre para a turma em 20 segundos.

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas. Voxel é "o cubinho". A grade é "a caixa de montar onde a gente brinca". Attach é "a mão que cola cubos", Erase é "a borracha", Paint é "o pincel que só troca a cor". Girar a câmera é "andar em volta da sua escultura para ver por trás". Repita que apagar é normal: "Artista de verdade apaga muito; o Ctrl+Z é nosso super-poder de voltar no tempo." Evite termos como "renderização" ou "eixos cartesianos"; fale "lado", "altura" e "fundo".

## Erros comuns e como ajudar

O erro mais comum é o aluno achar que perdeu a ferramenta quando, na verdade, a câmera só girou para um ângulo estranho: ensine a apertar a tecla de visão de frente para se reorientar. Muitos colocam voxels no lugar errado por não entender a profundidade; peça que girem a câmera antes de clicar, para ver onde o cubo vai cair. Outro tropeço é apagar a forma inteira sem querer com o modo Box no Erase; mostre o Ctrl+Z na hora e ensine a voltar ao modo Voxel para apagar um por um. Por fim, alguns clicam fora da grade e nada acontece: lembre que só dá para construir dentro da caixa.`,
  exercicios: [
    {
      titulo: `Pilha de cinco cubos`,
      tipo: `Prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça junto no projetor o primeiro cubo e deixe o aluno completar os outros quatro. Reforce o modo Voxel e o atalho "T" do Attach. Passe nas mesas conferindo se cada cubo está realmente em cima do outro, e não atrás.`,
      atividade: `Usando a ferramenta Attach no modo Voxel, empilhe cinco voxels, um exatamente sobre o outro, formando uma coluna reta dentro da grade. Gire a câmera para confirmar que ficou em pé.`,
      gabarito: `Uma coluna vertical com cinco voxels alinhados, sem cubos soltos atrás ou ao lado. Ao girar a câmera, a pilha aparece como uma torre fina e reta de altura 5.`,
    },
    {
      titulo: `Caixa oca com paredes`,
      tipo: `Desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Demonstre o modo Box para criar o chão arrastando. O ponto difícil é deixar o miolo vazio; oriente a girar a câmera e olhar de cima para conferir o buraco. Tenha Ctrl+Z pronto para quem preencher o centro sem querer.`,
      atividade: `Com a ferramenta Attach no modo Box, faça o chão arrastando um quadrado e depois levante as quatro paredes, mantendo o centro vazio. Você deve conseguir "ver dentro" da caixa ao girar a câmera.`,
      gabarito: `Uma caixa de paredes finas com o interior oco: chão, quatro paredes e topo aberto (ou fechado, se o aluno quiser). Vista de cima, vê-se o vazio no meio. Nenhum voxel preenchendo o centro.`,
    },
    {
      titulo: `Escada de degraus`,
      tipo: `Projeto curto`,
      tempo: `8 minutos`,
      guiaProfessor: `Aqui o aluno combina Attach e Erase. Mostre que cada degrau sobe um nível e avança um cubo. Incentive o uso do Erase (tecla "R") para corrigir degraus tortos, em vez de recomeçar tudo. Elogie quem apaga e ajusta.`,
      atividade: `Construa uma escada com 4 a 6 degraus: cada degrau sobe uma altura e avança um cubo para o lado. Use Attach para montar e Erase para acertar os degraus que saírem desalinhados.`,
      gabarito: `Uma escada em diagonal subindo de forma regular, cada degrau um nível acima e um cubo à frente do anterior, com 4 a 6 degraus. Degraus parelhos, sem buracos no meio nem cubos sobrando.`,
    },
    {
      titulo: `Conserta a forma do colega`,
      tipo: `Em dupla`,
      tempo: `6 minutos`,
      guiaProfessor: `Forme duplas. Um aluno "estraga" de propósito a própria escada (apaga ou move alguns cubos) e o colega conserta no computador dele. Depois trocam. Observe se usam Erase, Attach e Ctrl+Z com intenção, e não no chute.`,
      atividade: `Em dupla, um colega bagunça a própria escada apagando ou trocando alguns voxels de lugar. O outro deve consertá-la usando Attach, Erase e Paint até ela ficar correta de novo. Depois invertam os papéis.`,
      gabarito: `A escada volta a ficar regular e completa após o conserto. A dupla demonstra que sabe quando usar cada ferramenta: Attach para repor cubos, Erase para remover os que sobraram e Paint para acertar cores trocadas.`,
    },
    {
      titulo: `Por que apagar também é construir?`,
      tipo: `Roda de conversa`,
      tempo: `4 minutos`,
      guiaProfessor: `Reúna a turma longe das telas. Conduza com perguntas abertas e valorize cada resposta. O objetivo é firmar a ideia de que errar e corrigir faz parte da modelagem, reduzindo o medo de "estragar" o trabalho. Encerre conectando com a próxima aula, sobre planejar o personagem.`,
      atividade: `Em roda, cada aluno responde: "Em qual momento de hoje você precisou apagar algo para melhorar o modelo?" e "Como o Ctrl+Z e o Erase te ajudaram?". Compartilhem uma situação em que apagar deixou a forma melhor.`,
      gabarito: `Não há resposta única. Espera-se que os alunos percebam que apagar e refazer faz parte de criar, que o Erase e o Ctrl+Z dão liberdade para experimentar sem medo, e que correções deixaram suas pilhas, caixas e escadas mais bem-feitas.`,
    },
  ],
};
