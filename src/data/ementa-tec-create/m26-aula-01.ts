import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Explorando o Roblox Studio",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer a interface do Roblox Studio (Explorer, Properties, Workspace e câmera), criar um arquivo de jogo novo e posicionar Parts básicas, entendendo o sistema de eixos e o grid.`,
  descricao: `Esta é a primeira aula do mês em que a turma começa a montar de verdade o próprio jogo. A ferramenta deste mês é o Roblox Studio com a linguagem Lua, e antes de escrever qualquer código ou construir cenário o aluno precisa se sentir em casa dentro do programa. O Roblox Studio é o editor oficial e gratuito usado por criadores do mundo inteiro para publicar jogos jogados por milhões de pessoas. O que mais empolga os adolescentes é perceber que a mesma ferramenta que eles vão usar hoje é a que profissionais usam para lançar jogos de verdade na plataforma.

Antes de criar qualquer coisa, o aluno precisa reconhecer as áreas da tela. O Studio tem muitos painéis, e quem abre pela primeira vez costuma se perder. Por isso o foco de hoje não é fazer um jogo bonito, e sim nomear o terreno: o Explorer, que é a lista de tudo o que existe no jogo; o Properties, que mostra e ajusta os detalhes do objeto selecionado; o Workspace, que é o mundo 3D onde o jogo acontece; e as ferramentas de navegação da câmera, que permitem voar pelo cenário.

O trabalho prático de hoje é criar um arquivo de jogo novo a partir de um template (modelo) básico, aprender a mover a câmera com o teclado e o mouse, e inserir as primeiras Parts. Part é o bloco fundamental do Roblox: um cubo simples que pode virar chão, parede, plataforma ou qualquer peça do cenário. O aluno vai inserir Parts, movê-las pelo Workspace e perceber como elas se encaixam no grid (a grade invisível que ajuda a alinhar tudo) e como os três eixos X, Y e Z organizam o espaço 3D.

Não há scripts em Lua nesta aula, nem o cenário pronto. A intenção é que o aluno termine confortável: sabendo abrir o Studio, criar um arquivo novo, navegar com a câmera, reconhecer o Explorer e o Properties e posicionar uma Part no lugar certo. Esse domínio inicial é o que vai permitir que, nas próximas aulas, ele construa o mundo do jogo, traga os modelos 3D do Maya e, mais adiante, dê vida a tudo com código.`,
  materiais: [
    `Computadores com o Roblox Studio instalado e uma conta Roblox conectada (um por aluno); editor de código instalado para as aulas de script das próximas semanas`,
    `Projetor ou TV grande para o professor mostrar cada passo na tela em tempo real`,
    `Conexão com a internet (o Roblox Studio precisa de login para abrir e salvar os projetos)`,
    `Arquivo de exemplo .rbxl com um cenário simples já montado, para mostrar onde a turma vai chegar até o fim do mês`,
    `Folha impressa com o nome dos painéis (Explorer, Properties, Workspace) e os atalhos de câmera (W, A, S, D, E, Q e botão direito do mouse)`,
    `Ficha rápida com os três eixos (X, Y e Z) e suas cores no Studio, para os alunos consultarem`,
    `Mouse com botão direito funcionando em cada bancada (a navegação da câmera depende dele)`,
  ],
  conceitosChave: [
    `Roblox Studio — editor oficial e gratuito da Roblox para criar, testar e publicar jogos em 3D.`,
    `Explorer — painel em forma de lista que mostra tudo o que existe no jogo, organizado em pastas e itens.`,
    `Properties — painel que mostra e permite ajustar os detalhes do objeto que está selecionado, como tamanho, cor e posição.`,
    `Workspace — o mundo 3D do jogo; tudo que aparece nele é o que o jogador vai ver e tocar.`,
    `Part — o bloco básico de construção do Roblox, um objeto simples que vira chão, parede, plataforma ou peça do cenário.`,
    `Eixos X, Y e Z — as três direções do espaço 3D: X é a largura, Y é a altura e Z é a profundidade.`,
    `Grid — a grade invisível que ajuda a encaixar e alinhar as Parts em passos certinhos, evitando posições tortas.`,
  ],
  treinamento: `## O que o professor precisa saber

O Roblox Studio é gratuito e baixado em create.roblox.com. Para usar é preciso estar conectado a uma conta Roblox. Ao abrir, aparece a tela inicial com a aba "New" (novo) e vários templates; o mais simples é o "Baseplate", que já vem com uma plataforma cinza quadriculada e nada mais. Clique nele para criar o arquivo de jogo novo. As áreas que você vai nomear hoje são quatro: o Workspace é a janela 3D grande no centro (a plataforma cinza está nela); o Explorer é o painel da direita em forma de lista, onde tudo aparece organizado (se ele não estiver visível, abra em View e clique em "Explorer"); o Properties fica logo abaixo do Explorer e mostra os detalhes do item selecionado (abra em View e "Properties" se faltar); e a faixa de cima é a Toolbar, com os botões para inserir e mover objetos. Para inserir uma Part, vá na aba Home (ou Model), clique no botão "Part" e ela surge no centro do Workspace. A navegação da câmera é com o teclado e o mouse: segure o botão direito do mouse e use W para frente, S para trás, A para a esquerda, D para a direita, E para subir e Q para descer; mover o mouse com o botão direito segurado gira o olhar. Faça esse caminho uma vez sozinho antes da aula para ganhar segurança.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra no projetor o arquivo de exemplo .rbxl com um cenário simples já montado. Mostre à turma onde eles vão chegar até o fim do mês. Pergunte: "vocês sabiam que o jogo de vocês vai começar de um bloco só?". Conte que hoje ninguém vai programar ainda, só conhecer a ferramenta.

Conteúdo novo guiado (15 min): no projetor, abra o Roblox Studio, clique em "New" e depois em "Baseplate". Aponte e nomeie as quatro áreas: Workspace (centro), Explorer (lista à direita), Properties (abaixo do Explorer) e a Toolbar (faixa de cima). Ensine a câmera: segure o botão direito do mouse e use as teclas W, A, S, D, E e Q. Depois clique no botão "Part" para inserir um bloco e mostre o item "Part" aparecendo dentro do Workspace no Explorer.

Mão na massa (25 min): cada aluno repete no seu computador. Todos criam um arquivo "Baseplate", praticam voar com a câmera (W, A, S, D, E, Q com o botão direito segurado) e inserem três Parts. Peça que cliquem em cada Part e observem no Properties o campo "Position", com os três números de X, Y e Z. Circule pela sala confirmando que todos navegam pela câmera e enxergam a Part no Explorer e no Properties.

Desafio e compartilhar (10 min): desafie cada aluno a empilhar duas Parts uma em cima da outra, usando a câmera para olhar de lado e conferir o encaixe no grid. Feche com dois ou três alunos mostrando a tela no projetor e dizendo, com as próprias palavras, o que é o Explorer e para que serve o Workspace.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que o Workspace é o palco do jogo, onde tudo acontece, e que o Explorer é a lista de presença que mostra quem está em cena. O Properties é a ficha de identidade do objeto: nela você lê e muda o tamanho, a cor e o lugar dele. A Part é como uma peça de Lego: um bloco simples que, juntando vários, vira qualquer coisa. Para os eixos, mostre com as mãos: X é o braço esticado para o lado (largura), Y é o braço para cima (altura) e Z é o braço apontando para frente (profundidade). Sempre que disser uma palavra em inglês, fale o significado logo depois. Lembre que ninguém precisa decorar tudo hoje, porque vamos voltar nessas áreas todas as aulas.

## Erros comuns e como ajudar

O erro mais comum é o aluno soltar o botão direito do mouse e achar que a câmera "travou"; mostre que as teclas W, A, S, D só movem a câmera enquanto o botão direito estiver segurado. Outro tropeço é fechar o Explorer ou o Properties sem querer; ensine a reabrir pelo menu View. Alguns inserem Parts demais e se perdem; mostre que dá para apagar selecionando a Part e apertando Delete, ou desfazer com Ctrl Z. Há quem mova a Part para muito longe e "perca" o bloco de vista; ensine a selecionar o item no Explorer e usar a câmera para reaproximar. Por fim, alguns confundem os eixos; reforce devagar, com as mãos, que Y é sempre a altura. Se um aluno não conseguir conectar a conta Roblox, resolva o login antes de tudo, pois sem ele o Studio não abre o projeto.`,
  exercicios: [
    {
      titulo: `Criando o arquivo de jogo`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Confirme que todos estão conectados à conta Roblox antes de começar. Mostre no projetor a aba "New" e o template "Baseplate". Circule garantindo que cada aluno chegou à plataforma cinza quadriculada.`,
      atividade: `Abra o Roblox Studio, clique na aba "New" (novo) e escolha o template "Baseplate". Espere o arquivo abrir e localize a plataforma cinza quadriculada no centro da tela.`,
      gabarito: `O Studio cria um arquivo de jogo novo e mostra o Workspace com a plataforma cinza quadriculada (Baseplate) no centro. O aluno reconhece que esse é o mundo 3D vazio onde o jogo vai começar.`,
    },
    {
      titulo: `Voando com a câmera`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor a câmera em movimento antes de soltar a turma. Reforce que as teclas só funcionam com o botão direito do mouse segurado. Circule corrigindo quem solta o botão sem perceber.`,
      atividade: `Segure o botão direito do mouse e use as teclas W (frente), S (trás), A (esquerda), D (direita), E (subir) e Q (descer) para voar pelo cenário. Pratique até conseguir olhar a plataforma de cima e de lado.`,
      gabarito: `O aluno move a câmera em todas as direções segurando o botão direito do mouse e usando W, A, S, D, E e Q. Ele consegue olhar a plataforma de vários ângulos, mostrando que domina a navegação básica.`,
    },
    {
      titulo: `Inserindo a primeira Part`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor o botão "Part" na Toolbar e o item aparecendo no Explorer. Peça que cada aluno clique na Part e leia o campo "Position" no Properties, com os números de X, Y e Z.`,
      atividade: `Na faixa de cima, clique no botão "Part" para inserir um bloco no Workspace. Depois clique no bloco, encontre o nome "Part" no Explorer (lista da direita) e leia o campo "Position" no Properties, com os três números X, Y e Z.`,
      gabarito: `A Part aparece no Workspace e seu nome surge na lista do Explorer. Ao selecioná-la, o aluno encontra no Properties o campo "Position" com três números, e entende que eles representam o lugar da Part nos eixos X, Y e Z.`,
    },
    {
      titulo: `Empilhando blocos no grid em dupla`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas. Um aluno dita os passos e o outro executa, depois trocam. Reforce o uso da câmera para olhar de lado e conferir se um bloco encaixou certinho em cima do outro, alinhado pelo grid.`,
      atividade: `Em dupla, um dita e o outro executa: inserir duas Parts e empilhar uma exatamente em cima da outra, usando a ferramenta Move e olhando de lado com a câmera para conferir o encaixe no grid. Depois troquem de papel.`,
      gabarito: `A dupla insere duas Parts e empilha uma sobre a outra, alinhadas pelo grid, sem o bloco de cima ficar torto ou flutuando. Os dois alunos conseguem mover ao menos uma Part cada um e usam a câmera para verificar o encaixe.`,
    },
    {
      titulo: `Roda de conversa: as áreas do Studio`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza a roda com perguntas abertas e deixe dois ou três alunos mostrarem a tela no projetor. Valorize as explicações com palavras próprias e corrija com gentileza quem trocar os nomes dos painéis.`,
      atividade: `Em roda, cada aluno explica com suas palavras o que é o Workspace, o Explorer e o Properties. Diga também qual eixo é a altura (X, Y ou Z) e comente o que achou mais legal no cenário de exemplo mostrado no início da aula.`,
      gabarito: `Cada aluno explica que o Workspace é o mundo 3D do jogo, o Explorer é a lista de tudo o que existe nele e o Properties mostra os detalhes do objeto selecionado. Todos respondem que a altura é o eixo Y, usando comparações próprias como "palco", "lista de presença" e "ficha de identidade".`,
    },
  ],
};
