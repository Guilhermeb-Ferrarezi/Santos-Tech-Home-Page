import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Unity: a interface",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer a Unity Engine como ferramenta profissional de criação de jogos, instalar e criar o primeiro projeto 3D e reconhecer para que servem as janelas principais: Hierarchy, Scene, Game, Inspector e Project.`,
  descricao: `Nesta primeira aula do mês a turma encontra a ferramenta que vai acompanhá-la pelas próximas semanas: a Unity. Ela é uma engine de jogos completa, usada de verdade no mundo profissional para criar jogos de celular, de computador e de console, além de experiências em Realidade Virtual. Para alunos do Ano 4, que já passaram pelos anos anteriores e já modelaram no Blender, a Unity é o lugar onde tudo se junta: o modelo deixa de ser uma escultura parada e vira um personagem que anda, pula e responde ao jogador. O entregável do mês é justamente mover um personagem, e esta aula é o ponto de partida dessa jornada.

Antes de criar qualquer coisa, o aluno precisa se sentir em casa na tela. A Unity tem uma interface cheia de janelas, e quem abre o programa pela primeira vez costuma se assustar com tantos botões e painéis. Por isso o foco de hoje não é programar nem montar nenhum jogo ainda, e sim reconhecer o terreno: onde fica a janela Scene, que é o espaço 3D onde montamos o cenário; a janela Game, que mostra como o jogador vai ver; a Hierarchy, que lista tudo o que existe na cena; o Inspector, que mostra os detalhes do objeto selecionado; e a janela Project, que guarda todos os arquivos do jogo.

O trabalho prático de hoje é instalar (ou abrir, se já estiver instalado) a Unity pelo Unity Hub, criar um projeto 3D novo e fazer um passeio guiado pela interface. A turma vai abrir a cena inicial, reconhecer a câmera e a luz que já vêm prontas, e descobrir para que serve cada grande janela da tela. O professor conduz mostrando no projetor e os alunos repetem em seus computadores, apontando e nomeando cada janela em voz alta. Sempre que aparecer um termo novo, o aluno usa o Claude para pedir uma explicação simples e em português.

Não há programação nem movimento de personagem nesta aula. A intenção é que o aluno termine confortável, sabendo abrir a Unity pelo Hub, criar um projeto 3D e nomear as cinco janelas principais. Vale também comparar a Unity com as ferramentas dos anos anteriores: a Scene lembra a viewport do Blender, mas aqui o objetivo não é esculpir, e sim montar um jogo que se mexe. Esse conforto inicial é o que vai permitir que, nas próximas aulas, ele navegue pela cena, importe modelos, escreva o primeiro script em C# e, enfim, faça o personagem se mover.`,
  materiais: [
    `Computadores com a Unity (versão LTS) e o Unity Hub já instalados, com suporte a C# pelo Visual Studio ou VS Code (um por aluno)`,
    `Projetor ou TV grande para o professor mostrar cada passo na tela`,
    `Conexão com a internet (para baixar a Unity pelo Hub, caso ainda não esteja instalada, e para abrir o Claude)`,
    `Acesso ao Claude aberto numa aba do navegador, para os alunos tirarem dúvidas sobre os termos novos`,
    `Pasta com imagens e vídeos de exemplo de jogos feitos com a Unity, para mostrar no início da aula`,
    `Ficha rápida com os nomes em inglês e em português das cinco janelas principais (Hierarchy, Scene, Game, Inspector e Project), colada na bancada`,
    `Folha de comparação entre a Unity e as ferramentas dos anos anteriores (Blender e outras), para apoiar a conversa final`,
  ],
  conceitosChave: [
    `Unity Engine — programa profissional para criar jogos e experiências 3D, usado em celulares, computadores, consoles e Realidade Virtual.`,
    `Unity Hub — o aplicativo que organiza as versões da Unity e todos os seus projetos; é por ele que você abre ou cria um projeto.`,
    `Cena (Scene) — o espaço 3D onde você monta o cenário e posiciona os objetos do jogo; ao criar um projeto, ela já vem com uma câmera e uma luz.`,
    `Hierarchy — a janela que lista, em forma de árvore, todos os objetos que existem na cena atual.`,
    `Inspector — a janela lateral que mostra e ajusta os detalhes e propriedades do objeto que você selecionou.`,
    `Janela Game — a janela que mostra a cena pelo olhar da câmera, ou seja, como o jogador vai enxergar o jogo quando apertar o play.`,
    `Janela Project — a área que guarda todos os arquivos do jogo, como modelos, sons, texturas e scripts, organizados em pastas.`,
  ],
  treinamento: `## O que o professor precisa saber

A Unity não se abre direto: primeiro abrimos o Unity Hub, que é um aplicativo separado onde ficam listadas as versões instaladas e os projetos. Para criar um projeto, clique em "New project" no canto superior direito do Hub, escolha o template "3D" (ou "3D Core"), dê um nome simples como Aula01 e escolha uma pasta. Depois clique em "Create project" e espere a Unity abrir, o que pode levar um ou dois minutos na primeira vez. Quando a Unity abre, a tela está dividida em janelas. As cinco principais são: Scene (o espaço 3D no centro, onde montamos o cenário), Game (uma aba ao lado da Scene, que mostra o olhar da câmera), Hierarchy (a lista de objetos da cena, à esquerda), Inspector (os detalhes do objeto selecionado, à direita) e Project (os arquivos do jogo, embaixo). A cena nova já traz dois objetos: a Main Camera e a Directional Light, ambos visíveis na Hierarchy. Hoje você não precisa programar nem mover nada: só abrir, criar o projeto e nomear cada janela. Faça esse caminho uma vez sozinho antes da aula para ganhar segurança e conferir se a Unity abre sem travar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): mostre no projetor vídeos curtos de jogos feitos com a Unity. Pergunte: "lembram do modelo que vocês fizeram no Blender? E se ele pudesse andar?". Conecte com os anos anteriores e apresente a Unity como o lugar onde os modelos viram jogo. Diga que o entregável do mês é mover um personagem e que tudo começa hoje, conhecendo a tela.

Conteúdo novo guiado (15 min): no projetor, abra o Unity Hub, clique em "New project", escolha o template "3D", nomeie como Aula01 e clique em "Create project". Quando a Unity abrir, aponte e nomeie cada janela: Scene no centro, a aba Game ao lado, Hierarchy à esquerda, Inspector à direita e Project embaixo. Clique na Main Camera na Hierarchy e mostre que o Inspector muda para exibir os detalhes dela. Não mexa em mais nada; o objetivo é só reconhecer cada janela.

Mão na massa (25 min): cada aluno repete no seu computador. Quem precisa instalar usa o Unity Hub com você circulando pela sala. Todos criam o projeto 3D, esperam a Unity abrir e localizam, apontando com o mouse, as cinco janelas e os dois objetos da Hierarchy (Main Camera e Directional Light). Peça que cliquem na câmera e vejam o Inspector mudar. Em seguida, cada aluno escreve uma pergunta no Claude, por exemplo "o que e o Inspector no Unity?", e lê a resposta em voz baixa para a dupla ao lado.

Desafio e compartilhar (10 min): desafie cada aluno a clicar na Directional Light na Hierarchy e dizer qual janela mostrou os detalhes dela (resposta: o Inspector). Feche com uma rodada rápida em que dois ou três alunos mostram a tela no projetor e dizem, com as próprias palavras, o que é a Unity e para que serve a janela Game.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que a Unity é como um estúdio de cinema dentro do computador: a Scene é o palco onde você monta o cenário, a Game é a tela do cinema mostrando o que a câmera filma, a Hierarchy é a lista de atores em cartaz, o Inspector é a ficha de cada ator e a Project é o depósito com todos os figurinos e objetos. Aproveite que a turma já conhece o Blender e diga que a janela Scene parece a viewport, mas aqui não vamos esculpir, e sim montar um jogo que se mexe. Sempre que disser uma palavra em inglês, fale o significado em português logo depois. Incentive o uso do Claude como assistente: escreva junto com a turma uma boa pergunta, mostrando que pedir explicação simples e em português é uma habilidade. Hoje bastam cinco nomes; ninguém precisa decorar tudo de uma vez.

## Erros comuns e como ajudar

O erro mais comum é o aluno tentar abrir a Unity direto e não achar o ícone; lembre que o caminho é sempre pelo Unity Hub. Outro tropeço é escolher o template errado na hora de criar o projeto; reforce que deve ser o "3D" (ou "3D Core"), nunca o "2D". Alguns se assustam com a quantidade de janelas e travam; tranquilize dizendo que hoje só vamos olhar e nomear, não mexer. Há quem mude o layout das janelas sem querer arrastando uma delas; mostre que dá para voltar ao padrão no menu "Window", depois "Layouts", escolhendo "Default". Alguns confundem a Scene com a Game; explique que a Scene é onde você monta e a Game é onde você vê o resultado pelo olhar da câmera. Por fim, se a Unity demorar a abrir na primeira vez, avise que é normal e que basta esperar, sem clicar várias vezes.`,
  exercicios: [
    {
      titulo: `Criando o primeiro projeto 3D`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe quem precisa instalar e circule confirmando que todos escolheram o template "3D" e não o "2D". Use o projetor para mostrar o botão "New project" no Unity Hub e o campo do nome do projeto.`,
      atividade: `Abra o Unity Hub, clique em "New project", escolha o template "3D", dê o nome Aula01 ao projeto e clique em "Create project". Espere a Unity abrir e mostrar a cena inicial.`,
      gabarito: `O aluno cria, pelo Unity Hub, um projeto 3D chamado Aula01 e a Unity abre com a cena inicial visível. Na Hierarchy aparecem a Main Camera e a Directional Light, e a janela Scene mostra o espaço 3D vazio com a câmera posicionada.`,
    },
    {
      titulo: `Nomeando as cinco janelas`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor as cinco janelas antes de soltar a turma. Peça que apontem com o mouse e digam o nome de cada uma em voz alta, na ordem que preferirem.`,
      atividade: `Com a Unity aberta, aponte com o mouse e nomeie em voz alta as cinco janelas principais: Scene (centro), Game (aba ao lado da Scene), Hierarchy (esquerda), Inspector (direita) e Project (embaixo).`,
      gabarito: `O aluno identifica corretamente as cinco janelas: Scene no centro, Game como aba ao lado da Scene, Hierarchy à esquerda, Inspector à direita e Project embaixo, nomeando cada uma sem trocar os nomes.`,
    },
    {
      titulo: `Selecionando objetos e lendo o Inspector`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor que ao clicar num objeto na Hierarchy o Inspector muda para exibir os detalhes dele. Desafie a turma a perceber qual janela reage ao clique. Reforce que não é para mover nem apagar nada.`,
      atividade: `Na Hierarchy, clique primeiro na Main Camera e observe o Inspector. Depois clique na Directional Light e observe de novo. Descubra qual janela mostra os detalhes do objeto selecionado. Não mova nem apague nenhum objeto.`,
      gabarito: `O aluno percebe que é o Inspector que mostra os detalhes do objeto selecionado: ao clicar na Main Camera, o Inspector exibe os dados da câmera; ao clicar na Directional Light, exibe os dados da luz. Nenhum objeto foi movido ou apagado.`,
    },
    {
      titulo: `Perguntando ao Claude em dupla`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas e abra o Claude numa aba. Ajude a turma a escrever perguntas claras e curtas. Reforce que o Claude é um assistente para entender termos novos, e que vale comparar a resposta com o que viram na tela.`,
      atividade: `Em dupla, escolham dois termos novos da aula (por exemplo Scene, Game, Hierarchy, Inspector ou Project). Escrevam ao Claude uma pergunta para cada termo, como "o que e a janela Game no Unity?", leiam as respostas e expliquem um ao outro com as próprias palavras.`,
      gabarito: `A dupla escreve ao menos duas perguntas claras ao Claude sobre janelas da Unity e recebe explicações em português. Cada aluno consegue repetir, com as próprias palavras, o que faz pelo menos uma janela. Resposta válida: a janela Game mostra a cena pelo olhar da câmera, ou seja, como o jogador vai ver o jogo.`,
    },
    {
      titulo: `Roda de conversa: Unity x anos anteriores`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza a roda com perguntas abertas e deixe dois ou três alunos mostrarem a tela no projetor. Use a folha de comparação para apoiar e corrija com gentileza quem inverter os nomes das janelas.`,
      atividade: `Em roda, cada aluno explica com suas palavras o que é a Unity e para que serve a janela Game. Comente também uma semelhança e uma diferença entre a Unity e o Blender, lembrando do que fizeram nos anos anteriores.`,
      gabarito: `Cada aluno explica que a Unity é uma engine profissional para criar jogos e que a janela Game mostra a cena pelo olhar da câmera. Respostas válidas citam que a Scene lembra a viewport do Blender (semelhança), mas que na Unity o objetivo é montar um jogo que se mexe, e não esculpir um modelo (diferença), usando comparações próprias como "estúdio de cinema digital".`,
    },
  ],
};
