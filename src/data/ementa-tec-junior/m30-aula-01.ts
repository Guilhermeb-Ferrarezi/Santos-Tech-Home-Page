import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Meus modelos chegam ao Roblox",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Cada criança aprende a abrir o Roblox Studio, exportar um modelo próprio do MagicaVoxel ou do Blender e importá-lo para a área de trabalho 3D, vendo a sua criação aparecer na tela.`,
  descricao: `Nesta primeira aula do mês, a turma dá um passo gigante: os modelos que as crianças construíram com tanto carinho no MagicaVoxel e no Blender vão sair daqueles programas e entrar dentro do Roblox Studio. É como quando a gente desenha um personagem no papel e depois cola ele dentro de um cenário de teatro: o personagem continua o mesmo, mas agora ele ganha um palco novo para viver. O Roblox Studio é esse palco mágico onde vamos montar a nossa cena 3D do mês.

O foco desta aula é apresentar o programa e ensinar o caminho da importação. Primeiro, o professor mostra a tela do Roblox Studio no projetor e dá nomes às partes principais: a janela 3D no meio (onde tudo acontece), a árvore de itens chamada Explorer e a barra de ferramentas em cima. Depois, cada criança aprende a transformar o seu modelo num arquivo que o Roblox entende e a clicar no botão certo para trazê-lo para dentro.

Os modelos do MagicaVoxel são exportados em formato OBJ, e os do Blender também podem virar OBJ ou FBX. O Roblox Studio tem um botão especial, o Import 3D, que abre uma janelinha para escolher o arquivo do computador. Quando a criança clica em Abrir, o modelo aparece flutuando na janela 3D, e é aí que vem o momento mágico: todo mundo grita de alegria ao ver a própria criação dentro do Roblox pela primeira vez.

Esta aula é a base de todo o mês. Sem os modelos dentro do Studio, não há cena para montar. Por isso, o mais importante hoje é que cada aluno consiga importar pelo menos UM modelo seu e reconhecer onde ele guardou esse modelo na lista do Explorer. Nas próximas aulas vamos arrumar, organizar e enfeitar tudo, mas hoje a meta é simples e poderosa: ver o modelo chegar.`,
  materiais: [
    `Computadores (um por criança) com o Roblox Studio já instalado e aberto, com login feito antes da aula`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar cada passo`,
    `Arquivos dos modelos das crianças já exportados em OBJ ou FBX, guardados numa pasta fácil de achar (por exemplo, a Área de Trabalho)`,
    `Um modelo de exemplo pronto do professor (um bichinho ou um objeto simples em Voxel Art) para mostrar primeiro`,
    `MagicaVoxel e Blender abertos em ao menos um computador, caso seja preciso exportar um modelo na hora`,
    `Etiquetas ou crachás coloridos para a turma nomear os próprios modelos`,
    `Folha de checklist impressa com os passos da importação em desenhos`,
  ],
  conceitosChave: [
    `Roblox Studio — o programa onde a gente monta o nosso mundo 3D, como um palco mágico para as nossas criações.`,
    `Importar — trazer um modelo de fora para dentro do Roblox, como colar uma figurinha no álbum.`,
    `Exportar — salvar a nossa criação num arquivo especial que outro programa consegue abrir.`,
    `Arquivo OBJ — a caixinha que guarda o formato do modelo do MagicaVoxel ou do Blender para o Roblox entender.`,
    `Janela 3D (Viewport) — a telinha grande do meio onde a gente vê e mexe nas coisas em três dimensões.`,
    `Explorer — a listinha do lado direito que mostra tudo o que existe na nossa cena, como o índice de um livro.`,
    `Modelo (Model) — um pedacinho da nossa cena, como o nosso bichinho ou nossa árvore, guardado com um nome.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um especialista em Roblox para dar esta aula. Basta conhecer três lugares da tela e um botão. Antes da aula, abra o Roblox Studio no seu computador, faça login e clique em New (Novo) para criar um projeto em branco, escolhendo o modelo Baseplate (uma plataforma cinza). Você verá: no meio, a Viewport (janela 3D); à direita em cima, o painel Explorer (uma lista de itens); e à direita embaixo, o painel Properties (propriedades). Se o Explorer não aparecer, clique no menu View (no topo) e depois no botão Explorer para ligá-lo. Deixe os arquivos dos modelos das crianças numa pasta fácil, como a Área de Trabalho, com nomes claros (por exemplo, "gato-do-joao.obj").

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Reúna a turma em roda em frente ao projetor. Pergunte: "Onde estão guardados os bichinhos que vocês fizeram?" Lembre que eles foram criados no MagicaVoxel e no Blender. Mostre um modelo seu na tela desses programas. Diga que hoje eles vão "viajar" para um lugar novo chamado Roblox Studio.

Conteúdo novo guiado (15 min): No projetor, abra o Roblox Studio e clique em New, depois em Baseplate. Aponte e nomeie devagar: "Esta tela grande do meio é a janela 3D, onde tudo acontece." "Esta lista do lado direito é o Explorer, o índice da nossa cena." Agora demonstre a importação: no topo, clique na aba Home (Início) e procure o botão Import 3D (Importar 3D). Clique nele. Abre uma janela do computador: escolha o seu arquivo de exemplo (.obj) e clique em Abrir. Uma janelinha de pré-visualização aparece; clique em Import (Importar). O modelo surge na Viewport. Faça um "uau!" bem animado para contagiar.

Mão na massa (25 min): Cada criança, no seu computador, repete os passos com o próprio modelo. Caminhe pela sala. Guie um de cada vez: 1) clicar em Home; 2) clicar em Import 3D; 3) escolher o arquivo certo na pasta; 4) clicar em Abrir e depois em Import. Quando o modelo aparecer, peça que encontrem o nome dele na lista do Explorer e cliquem nele uma vez (o modelo fica destacado). Quem terminar rápido ajuda o colega do lado.

Desafio e compartilhar (10 min): Desafie quem quiser a importar um segundo modelo. Depois, faça uma "volta da galeria": cada criança mostra na tela o modelo que chegou e diz o nome dele. Termine perguntando: "O que apareceu na janela 3D quando vocês clicaram em Import?"

## Como explicar para crianças

Use a analogia do álbum de figurinhas: o MagicaVoxel é a banca onde a figurinha foi feita, e o Roblox é o álbum onde a gente cola. "Importar é colar a figurinha." Chame o arquivo OBJ de "caixinha que carrega o seu bichinho". Fale "janela 3D" apontando sempre com o dedo na tela grande. Comemore cada modelo que aparece, porque a emoção de ver a própria criação ganhar vida é o que prende a atenção das crianças nesta idade.

## Erros comuns e como ajudar

O erro mais comum é a criança escolher o arquivo errado na pasta; por isso, nomes claros ajudam muito (peça para procurar o nome dela). Outro erro: clicar duas vezes rápido e abrir duas cópias do modelo; mostre como apagar o repetido clicando nele no Explorer e apertando Delete. Às vezes o modelo aparece gigante ou minúsculo, ou sem cor; explique que está tudo bem, pois nas próximas aulas vamos ajustar o tamanho e enfeitar. Se a janela Import 3D travar ao carregar, peça paciência (modelos do Blender demoram mais) e diga para esperar a barrinha encher antes de clicar de novo. Por fim, se o Explorer sumir, vá em View e ligue o botão Explorer.`,
  exercicios: [
    {
      titulo: `Caça aos cantinhos da tela`,
      tipo: `Reconhecimento guiado`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça oralmente, com a tela no projetor. Vá apontando e deixe a turma responder em voz alta. É um aquecimento para fixar os nomes antes de qualquer clique.`,
      atividade: `Olhando para a tela do Roblox Studio, aponte com o dedo: onde fica a janela 3D (a tela grande do meio)? Onde fica o Explorer (a lista do lado direito)? Onde fica a barra de ferramentas (em cima)?`,
      gabarito: `A janela 3D fica no centro da tela. O Explorer fica no canto direito de cima, mostrando a lista de itens. A barra de ferramentas com as abas (Home, View) fica na parte de cima da tela.`,
    },
    {
      titulo: `Qual é a caixinha certa?`,
      tipo: `Pergunta e resposta`,
      tempo: `5 minutos`,
      guiaProfessor: `Pergunta rápida para checar se entenderam o que é o arquivo. Aceite respostas com as palavras das crianças; o importante é a ideia.`,
      atividade: `Responda: quando a gente salva o nosso bichinho do MagicaVoxel para levar ao Roblox, em que tipo de "caixinha" (formato de arquivo) ele vira? E o que significa a palavra importar?`,
      gabarito: `O modelo do MagicaVoxel vira um arquivo OBJ, a caixinha que guarda a criação. Importar significa trazer essa caixinha para dentro do Roblox, como colar uma figurinha no álbum.`,
    },
    {
      titulo: `Meu primeiro modelo chega`,
      tipo: `Mão na massa individual`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada criança no seu computador. Caminhe pela sala e guie um passo de cada vez. Comemore quando o modelo aparecer na janela 3D. Garanta que todos cheguem ao fim, mesmo que precisem de ajuda.`,
      atividade: `No Roblox Studio, clique na aba Home, depois no botão Import 3D. Escolha o seu arquivo na pasta, clique em Abrir e depois em Import. Veja o seu modelo aparecer na janela 3D!`,
      gabarito: `O caminho correto é: aba Home, botão Import 3D, escolher o arquivo OBJ ou FBX, clicar em Abrir e depois em Import. Sucesso quando o modelo da criança surge na janela 3D do centro da tela.`,
    },
    {
      titulo: `Achando meu modelo na lista`,
      tipo: `Investigação no Explorer`,
      tempo: `8 minutos`,
      guiaProfessor: `Depois de importar, peça para localizarem o nome do modelo no Explorer. Mostre que clicar no nome destaca o modelo na janela 3D. Ajude quem não achar a olhar a lista de cima a baixo.`,
      atividade: `Olhe a lista do Explorer no lado direito. Ache o nome do modelo que você acabou de importar e clique nele uma vez. O que acontece com o seu modelo na janela 3D quando você clica no nome?`,
      gabarito: `O nome do modelo aparece na lista do Explorer (geralmente dentro de Workspace). Ao clicar no nome, o modelo fica destacado na janela 3D, com uma borda ou seleção em volta, mostrando que aquele item é o escolhido.`,
    },
    {
      titulo: `Dois modelos e o detetive do repetido`,
      tipo: `Desafio com resolução de problema`,
      tempo: `10 minutos`,
      guiaProfessor: `Para quem terminou rápido. Importar um segundo modelo aprofunda o aprendizado e treina apagar cópias repetidas, um erro comum. Acompanhe para que ninguém apague o modelo errado.`,
      atividade: `Importe um segundo modelo seu repetindo os passos. Depois, imagine que sem querer você importou o mesmo bichinho duas vezes: como você descobre o repetido no Explorer e como você apaga só a cópia extra?`,
      gabarito: `Importa-se o segundo modelo pelo mesmo caminho (Home, Import 3D, escolher arquivo, Abrir, Import). Para apagar um repetido, encontra-se o nome duplicado na lista do Explorer, clica-se nele uma vez para selecionar e aperta-se a tecla Delete, removendo apenas aquela cópia e mantendo a original.`,
    },
  ],
};
