import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Nasce o herói: o corpo do personagem",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança desenha, quadradinho por quadradinho, a forma básica do herói do seu jogo: cabeça, corpo, braços e pernas em pixel art, seguindo um modelo guiado.`,
  descricao: `Nesta aula começa a parte mais esperada do mês: o nascimento do herói do jogo! Até agora as crianças desenharam objetos pequenos, como frutas, estrelas e moedas. Hoje elas vão criar um personagem inteiro, do tamanho de gente: cabeça, corpo, dois braços e duas pernas. É o boneco que vai correr e pular dentro do jogo delas mais para a frente.

O assunto central é entender que um personagem em pixel art é montado por partes, como um bonequinho de blocos de montar. Primeiro a gente faz a cabeça (uma bolinha quadradona), depois o corpo (um retângulo no meio), depois os braços (dois palitinhos do lado) e por fim as pernas (dois palitinhos embaixo). Cada parte é desenhada com poucos pixels, então tudo precisa ser simples e bem encaixado.

Por que isso importa? Porque um herói é o coração de qualquer jogo. As crianças vão se apegar a esse bonequinho, dar um nome a ele e querer cuidar dele com carinho. Aprender a montar a forma básica agora deixa tudo pronto para a próxima aula, quando elas vão colorir e dar rostinho ao personagem. Hoje o foco é só o contorno e a forma, ainda em uma cor só (o esqueleto do herói).

Nesta aula o professor guia a turma passo a passo, mostrando no projetor onde clicar e desenhando junto com elas. As crianças copiam o modelo na própria tela, em um quadro novo do Aseprite, usando uma grade maior (32x32 pixels) para caber o corpo inteiro. No final, cada criança terá o seu primeiro herói quadradinho, ainda sem cor, pronto para ganhar vida na aula seguinte.`,
  materiais: [
    `Computadores ligados, um por criança, com o Aseprite já aberto e na tela inicial`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar cada passo`,
    `Arquivo de exemplo do herói pronto (heroi-modelo.aseprite) salvo na área de trabalho de cada máquina`,
    `Uma folha impressa grande com a grade do herói desenhada (modelo em papel quadriculado) para cada mesa`,
    `Lápis de cor ou canetinha para a atividade de papel`,
    `Modelo do professor já desenhado e salvo, para mostrar como fica o resultado final`,
    `Cronômetro ou relógio visível para marcar os blocos de tempo da aula`,
  ],
  conceitosChave: [
    `Herói — o personagem principal do jogo, o bonequinho que a gente controla e que vive a aventura.`,
    `Sprite do personagem — o desenho do herói feito de pixels, que depois vai se mexer dentro do jogo.`,
    `Forma básica — o contorno do bonequinho montado por partes: cabeça, corpo, braços e pernas, ainda sem cor.`,
    `Grade 32x32 — a folha de quadradinhos um pouco maior que usamos para caber o corpo inteiro do herói.`,
    `Simetria — quando o lado esquerdo e o lado direito do bonequinho ficam iguais, como num espelho.`,
    `Lápis (pencil) — a ferramenta do Aseprite que pinta um quadradinho de cada vez quando a gente clica.`,
    `Zoom — chegar mais perto do desenho para enxergar cada pixel bem grande e não errar.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O herói em pixel art é, no fundo, um bonequinho de palito feito com quadradinhos. A regra de ouro para esta idade é: monte por partes, de cima para baixo. Primeiro a cabeça, depois o corpo, depois os braços e por último as pernas. Cada parte é uma forma bem simples: a cabeça é um quadrado ou círculo grosso, o corpo é um retângulo vertical, os braços e as pernas são tracinhos. Não tente fazer realismo; o charme do pixel art é justamente ser fofo e simples.

Use uma tela de 32x32 pixels (no Aseprite: menu File, opção New File, e digite 32 na largura e 32 na altura). Por que 32 e não 16? Porque um corpo inteiro com cabeça, tronco e pernas não cabe bem em 16x16. Trabalhe sempre com a ferramenta Pencil (atalho B) no tamanho 1 pixel e com a grade ligada (menu View, opção Grid, Show Grid). Mantenha o Zoom alto, por volta de 800 por cento, para que cada pixel fique grande na tela e a criança consiga mirar. Nesta aula use uma cor só, escura, para fazer apenas o contorno e o preenchimento da forma. A cor de verdade vem na aula seguinte.

Antes da aula, abra o seu modelo do herói e deixe-o no projetor. Tenha também o arquivo heroi-modelo.aseprite na área de trabalho de cada máquina, caso alguma criança queira ver de perto.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Aseprite)

10 min, aquecimento: receba a turma com a pergunta mágica: quem é o herói do seu jogo? Mostre no projetor o seu modelo pronto e diga que hoje cada um vai criar o seu. Relembre rapidinho como abrir um arquivo novo e como usar o Lápis, que eles já viram nas aulas anteriores.

15 min, conteúdo novo guiado: no projetor, crie um arquivo novo de 32x32 (File, New File, 32 por 32, OK). Ligue a grade (View, Grid, Show Grid) e dê Zoom (atalho mais, tecla +). Desenhe junto com eles, narrando cada parte: a cabeça em cima (um quadradinho de mais ou menos 8 por 8 no centro do topo), depois o corpo logo embaixo (um retângulo), depois um braço de cada lado e por fim duas pernas. Vá devagar, contando os quadradinhos em voz alta.

25 min, mão na massa: agora cada criança faz na própria máquina, copiando o modelo da tela. Circule pela sala, passe mesa por mesa. Lembre-os de começar pela cabeça e descer. Quem terminar a forma pode reforçar o contorno e deixar bem grossinho.

10 min, desafio e compartilhar: proponha o desafio de dar um nome ao herói. Depois faça a roda: cada criança vira a tela e mostra o seu bonequinho para os colegas, dizendo o nome dele.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a analogia do boneco de montar: a gente encaixa as peças de cima para baixo. Chame a cabeça de bolinha, o corpo de tronco do robô e os braços e pernas de palitinhos. Diga que o herói tem que ser igual dos dois lados, como quando a gente se olha no espelho: um braço aqui, outro igualzinho ali. Conte os quadradinhos junto com eles, batendo palma a cada pixel, para virar uma brincadeira de contar.

## Erros comuns e como ajudar

O erro mais comum é fazer a cabeça gigante e não sobrar espaço para o corpo: oriente a começar a cabeça lá no topo e bem pequena. Outro erro é o herói torto, com um braço mais alto que o outro: ensine a olhar a linha dos ombros e deixar os dois braços na mesma altura. Algumas crianças desenham fora da grade ou clicam e arrastam sem querer, fazendo riscos: mostre a tecla Z para desfazer (Edit, Undo) e peça calma, um clique por quadradinho. Se a criança apagar tudo sem querer, respire junto com ela e mostre que dá para voltar com o Undo.`,
  exercicios: [
    {
      titulo: `Aquecendo a mão: o palitinho`,
      tipo: `Prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Antes de fazer o herói inteiro, peça que cada criança treine um tracinho reto com o Lápis. O professor mostra no projetor uma linha de cima para baixo de 8 quadradinhos e pede que copiem.`,
      atividade: `Abra um arquivo novo de 32x32. Pegue o Lápis (tecla B). Faça um tracinho reto para baixo, contando 8 quadradinhos em voz alta enquanto clica um por um.`,
      gabarito: `A criança acertou se desenhou uma linha reta vertical, sem buracos, com cerca de 8 pixels seguidos. Se ficou torta ou com falhas, basta usar o Undo e refazer com calma.`,
    },
    {
      titulo: `Montando o herói quadradinho`,
      tipo: `Prática na ferramenta (guiada)`,
      tempo: `20 minutos`,
      guiaProfessor: `Este é o coração da aula. O professor desenha cada parte no projetor e espera a turma copiar antes de seguir. Vá na ordem: cabeça, corpo, braços, pernas. Conte os quadradinhos junto.`,
      atividade: `No seu arquivo de 32x32, desenhe o herói por partes: primeiro a cabeça (uma bolinha quadradona no topo), depois o corpo (um retângulo no meio), depois um braço de cada lado e, por fim, duas pernas embaixo. Use só uma cor escura.`,
      gabarito: `Acertou quem terminou com as quatro partes na forma certa: cabeça em cima, corpo no meio, dois braços e duas pernas, montados de cima para baixo e mais ou menos iguais dos dois lados. Não precisa estar perfeito, basta dar para reconhecer o bonequinho.`,
    },
    {
      titulo: `Espelho do herói`,
      tipo: `Jogo / brincadeira`,
      tempo: `8 minutos`,
      guiaProfessor: `Brincadeira em duplas para ensinar simetria com o corpo. O professor faz um movimento e as crianças imitam como num espelho, ligando a ideia ao desenho.`,
      atividade: `Em duplas, uma criança levanta o braço direito e a outra tem que levantar o braço que fica do mesmo lado, como num espelho. Depois olhem o desenho na tela: o herói também tem que ter os dois lados parecidos?`,
      gabarito: `A criança entendeu se conseguiu apontar que o lado esquerdo e o direito do herói devem ficar parecidos, como no espelho da brincadeira. A resposta esperada é sim, os dois lados precisam combinar.`,
    },
    {
      titulo: `Meu herói no papel`,
      tipo: `Desenho no papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Atividade longe da tela para descansar os olhos e fixar a ideia de montar por partes. Entregue a folha quadriculada grande com a grade do herói e lápis de cor.`,
      atividade: `Na folha de quadradinhos, pinte o seu herói parte por parte: comece pela cabeça, depois o corpo, depois os braços e as pernas. Pinte um quadradinho de cada vez, sem sair da linha.`,
      gabarito: `Acertou quem pintou um bonequinho reconhecível com cabeça, corpo, braços e pernas, respeitando os quadradinhos da grade. Quadradinhos pintados por inteiro e na ordem de cima para baixo mostram que a criança entendeu a montagem.`,
    },
    {
      titulo: `Desafio do nome e da pose`,
      tipo: `Desafio + roda de conversa`,
      tempo: `9 minutos`,
      guiaProfessor: `Encerramento que junta criatividade e fala. Cada criança batiza o herói e conta uma coisa sobre ele. O professor conduz a roda deixando todos mostrarem a tela.`,
      atividade: `Dê um nome para o seu herói. Depois, na roda, mostre a sua tela para os colegas e diga: o nome dele, e uma coisa que ele sabe fazer no jogo (correr, pular, voar).`,
      gabarito: `O desafio foi cumprido se a criança deu um nome ao herói e disse pelo menos uma habilidade dele para a turma. Qualquer nome e qualquer habilidade valem, o importante é apresentar o personagem com confiança.`,
    },
  ],
};
