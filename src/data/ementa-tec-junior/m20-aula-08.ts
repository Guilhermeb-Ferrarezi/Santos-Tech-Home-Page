import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Galeria 3D: mostrando minha coleção",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança finaliza e organiza seu conjunto de itens 3D no Maya, prontos para entrar no jogo, e apresenta sua coleção para a turma contando como modelou e pintou cada item.`,
  descricao: `Esta é a última aula do mês e o grande dia da coleção: cada aluno vai dar os retoques finais nos itens 3D que construiu durante as quatro semanas e mostrar tudo o que criou para os amigos. É um dia de festa e de orgulho, não de aprender muita coisa nova. O foco é deixar a coleção arrumada, organizada num único lugar na tela e celebrar cada item que a criança modelou e coloriu.

Ao longo do mês, os alunos abriram o Maya pela primeira vez, criaram seu primeiro objeto 3D, montaram itens do jogo juntando formas básicas, aprenderam a pintar com vertex color, ajustaram o tamanho certo de cada peça pensando na proporção e capricharam no acabamento. Agora todos esses itens viram uma coleção de verdade: uma maçã, uma moeda, uma chave, uma poção, uma caixa de tesouro, tudo junto e prontinho para entrar no jogo. Finalizar é tão importante quanto criar: uma coleção só fica completa quando está organizada, com nomes claros e arrumada lado a lado, fácil de mostrar e de usar.

Nesta aula o professor conduz uma rodada final de organização (alinhar os itens lado a lado na cena, conferir se cada um tem cor, dar um nome carinhoso a cada peça no Outliner) e depois abre uma Galeria 3D, em que cada criança gira a câmera ao redor da sua coleção e conta, em poucas palavras, como fez cada item. O objetivo emocional é tão grande quanto o técnico: as crianças precisam sentir que terminaram algo de verdade e que são pequenas modeladoras 3D capazes de criar itens para um jogo.

Por ser uma aula de fechamento, o ritmo é leve e acolhedor. Erros viram oportunidades de conserto rápido, e cada apresentação termina com palmas. O professor deve garantir que ninguém fique de fora e que todas as coleções estejam organizadas e salvas antes da galeria, para que nenhuma criança passe pela frustração de mostrar algo bagunçado ou perdido.`,
  materiais: [
    `Computadores com o Maya já aberto e a cena de cada aluno carregada, com todos os itens 3D que a criança modelou durante o mês.`,
    `Projetor ou TV grande conectada ao computador do professor, para a Galeria 3D coletiva.`,
    `Uma cena de exemplo já finalizada e organizada (vários itens 3D coloridos, alinhados e nomeados), para o professor mostrar como fica uma coleção pronta.`,
    `Lista de checagem impressa e ilustrada (cada item tem cor, está inteiro, tem nome, está alinhado) para cada aluno marcar.`,
    `Folhas e lápis de cor para a atividade do cartaz da coleção.`,
    `Adesivos ou carimbos de "Coleção Pronta" e crachás de "Modelador 3D" para premiar cada criança.`,
    `Um pen drive ou pasta na nuvem para o professor guardar uma cópia de cada cena finalizada.`,
  ],
  conceitosChave: [
    `Coleção — o conjunto de todos os itens 3D que a criança fez no mês, juntos no mesmo lugar, como um álbum de figurinhas em 3D.`,
    `Organizar — arrumar os itens lado a lado e em ordem, igual a guardar os brinquedos certinhos numa prateleira.`,
    `Outliner — a listinha no lado da tela do Maya que mostra o nome de cada objeto da cena, como um caderninho com o nome de cada item.`,
    `Renomear — trocar o nome esquisito que o Maya dá (tipo pCube1) por um nome de verdade, como "moeda" ou "chave".`,
    `Câmera — o nosso olho dentro do Maya; girando a câmera a gente passeia em volta dos itens para mostrar todos os lados.`,
    `Galeria 3D — o momento em que cada criança gira a câmera e apresenta sua coleção de itens para a turma.`,
    `Modelador 3D — quem cria objetos em três dimensões no computador; hoje cada aluno é um modelador 3D de verdade.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula encerra um projeto de quatro semanas no Maya. Tecnicamente, ela é a mais simples do mês: quase nada novo é criado. O trabalho é organizar a coleção, conferir que cada item está pronto e apresentar. Você precisa saber abrir a cena de cada aluno: no Maya, vá em File (menu no canto superior esquerdo), depois Open Scene ou Recent Files, e escolha o arquivo da criança. Antes da aula, abra e confira cada cena você mesmo, para já saber quais precisam de ajuste.

Três coisas você vai usar o tempo todo. Primeiro, o Outliner: é o painel com a lista de nomes dos objetos. Se ele não estiver visível, abra em Windows, Outliner. Para renomear um item, dê dois cliques no nome dentro do Outliner e digite o nome novo (por exemplo, "moeda"). Segundo, mover e alinhar itens: aperte a tecla W para ligar a ferramenta Move (mover), clique num objeto e arraste pelas setinhas coloridas para deixá-lo ao lado dos outros. Terceiro, girar a câmera: segure a tecla Alt e arraste com o botão esquerdo do mouse para rodar em volta da coleção; aperte a tecla F para enquadrar tudo na tela. Esses três gestos (renomear, mover, girar) são o coração da aula. Lembre que o objetivo central hoje é emocional: cada criança precisa terminar a aula com orgulho da coleção.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): reúna a turma perto do projetor. Mostre a cena de exemplo já finalizada e gire a câmera ao redor dos itens (segure Alt e arraste). Diga: "Hoje vamos arrumar a coleção de vocês e mostrar tudo o que fizeram!" Relembre rapidinho os itens que cada um criou no mês.

Conteúdo novo guiado (15 min): no seu Maya projetado, ensine a organizar. Abra o Outliner (Windows, Outliner) e mostre a lista de nomes. Dê dois cliques num nome esquisito (pCube1) e renomeie para "caixa". Depois aperte W, clique num item e arraste pelas setinhas para alinhar lado a lado. Por fim, aperte F para enquadrar e segure Alt arrastando para girar e mostrar todos os lados.

Mão na massa (25 min): cada aluno vai ao seu computador com a cena aberta. Eles renomeiam cada item no Outliner, alinham as peças lado a lado com a ferramenta Move (W) e usam a lista de checagem para conferir cor, item inteiro, nome e alinhamento. Circule pela sala. Quando achar um problema (item sem cor, peça torta, nome faltando), conserte junto com a criança em passos curtos e salve com File, Save Scene.

Desafio + compartilhar (10 min): comece a Galeria 3D. Um por vez, projete a cena da criança. Ela aperta F para enquadrar e gira a câmera (Alt + arrastar) enquanto conta como fez um item. Todos batem palmas e o modelador ganha o crachá de "Modelador 3D".

## Como explicar para crianças

Use a analogia do álbum de figurinhas: "Cada item é uma figurinha em 3D, e hoje a gente vai colar todas juntas no álbum e mostrar para os amigos!" O Outliner é "o caderninho com o nome de cada item". Renomear é "dar um nome de verdade para cada peça, porque pCube1 ninguém entende". Alinhar é "colocar os itens em fila, igual brinquedos na prateleira". Girar a câmera é "passear em volta para ver todos os lados". Fale sempre que terminar uma coleção é coisa de gente grande e que eles conseguiram.

## Erros comuns e como ajudar

As crianças costumam querer criar itens novos no último dia ("quero fazer mais uma espada!"). Acolha, mas redirecione: "Hoje a gente deixa pronto; ideias novas a gente guarda para o próximo mês." Outro erro comum é arrastar o item para muito longe e ele sumir da tela; ensine a apertar F para enquadrar de novo. Algumas confundem girar a câmera com mover o objeto: lembre que Alt + arrastar gira o olho e não mexe na peça. Outras esquecem de salvar; passe salvando você mesmo (File, Save Scene) nas máquinas. Se uma criança ficar tímida na galeria, apresente junto, segurando a fala por ela. E sempre termine cada apresentação com palmas, sem comparar coleções entre si.`,
  exercicios: [
    {
      titulo: `Girando o olho ao redor da coleção`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor como segurar a tecla Alt e arrastar com o botão esquerdo do mouse para girar a câmera ao redor dos itens, e como apertar F para enquadrar tudo. Diga que é como passear em volta da coleção para ver todos os lados.`,
      atividade: `Cada aluno abre sua cena, aperta a tecla F para enquadrar os itens e segura Alt arrastando o mouse para girar a câmera devagar em volta da sua coleção, observando cada peça por todos os lados.`,
      gabarito: `A câmera gira ao redor dos itens e eles aparecem inteiros na tela depois do F. Se a criança consegue dar uma volta completa em torno da coleção sem perder as peças de vista, encontrou e usou os comandos certos.`,
    },
    {
      titulo: `Dando nome a cada item no Outliner`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Abra o Outliner (Windows, Outliner) no projetor e mostre os nomes esquisitos (pCube1, pSphere1). Dê dois cliques num nome e renomeie para algo de verdade, como "moeda". Peça que cada criança faça o mesmo com todos os seus itens.`,
      atividade: `O aluno abre o Outliner, dá dois cliques no nome de cada item e digita um nome de verdade (como "maçã", "chave", "poção"), trocando todos os nomes esquisitos por nomes que dá para entender.`,
      gabarito: `Cada item da coleção aparece no Outliner com um nome claro em vez de pCube1 ou pSphere1. Se nenhum item ficou com nome esquisito, o aluno acertou o exercício.`,
    },
    {
      titulo: `Arrumando os itens lado a lado`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Relembre a ferramenta Move apertando W. Mostre como clicar num item e arrastar pelas setinhas coloridas para deixá-lo em fila com os outros. Lembre de apertar F se algum item sumir para longe. Ajude quem arrastar demais.`,
      atividade: `O aluno aperta W para ligar a ferramenta Move e arrasta cada item pelas setinhas, deixando toda a coleção alinhada em fila, lado a lado, sem peças amontoadas nem perdidas longe.`,
      gabarito: `Os itens ficam organizados em fila, todos visíveis e separados, sem sobrepor uns aos outros. Se a coleção está alinhada e cabe na tela ao apertar F, o aluno organizou corretamente.`,
    },
    {
      titulo: `O cartaz da minha coleção`,
      tipo: `desenho / papel`,
      tempo: `10 min`,
      guiaProfessor: `Distribua folhas e lápis de cor. Peça que cada criança desenhe um cartaz da sua coleção: dois ou três itens favoritos e o nome da coleção. Diga que é o pôster para convidar os amigos a verem a Galeria 3D.`,
      atividade: `O aluno desenha num cartaz dois ou três itens da sua coleção com as cores certas e escreve (ou pede ajuda para escrever) um nome para a coleção bem grande no topo.`,
      gabarito: `O cartaz mostra ao menos dois itens reais da coleção, com cores parecidas com as do Maya, e um nome para a coleção. Se o desenho representa itens que a criança realmente modelou, está certo.`,
    },
    {
      titulo: `Galeria 3D: eu sou modelador!`,
      tipo: `roda de conversa / apresentação`,
      tempo: `12 min`,
      guiaProfessor: `Organize a turma em roda perto do projetor. Um por vez, projete a cena da criança. Ajude-a a apertar F e girar a câmera (Alt + arrastar) enquanto conta como fez um item ("Esta moeda eu fiz com um círculo e pintei de amarelo"). Todos batem palmas e o criador recebe o crachá.`,
      atividade: `Cada aluno apresenta sua coleção girando a câmera em volta dos itens e contando, em uma ou duas frases, como modelou e pintou pelo menos um dos itens, enquanto a turma assiste e torce.`,
      gabarito: `O aluno consegue girar a câmera mostrando a coleção e contar como fez ao menos um item (a forma que usou e a cor que pintou). Toda criança apresentar e receber o crachá de "Modelador 3D" significa que a galeria deu certo.`,
    },
  ],
};
