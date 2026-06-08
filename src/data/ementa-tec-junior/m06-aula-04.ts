import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Meu objeto 16x16: fruta, estrela ou moeda",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança desenha e salva um pequeno objeto de jogo (fruta, estrela ou moeda) em uma grade 16x16, usando o contorno e o preenchimento com a paleta de cores da aula anterior.`,
  descricao: `Nesta aula as crianças criam o primeiro item de verdade do jogo delas: um objeto pequeninho de 16 quadradinhos por 16 quadradinhos. Pode ser uma fruta suculenta, uma estrela brilhante ou uma moeda dourada. Esse objeto é o tipo de coisa que o personagem vai colecionar no jogo, então desenhar ele direitinho já deixa as crianças animadas para ver tudo funcionando mais para frente.

O assunto central é aprender a desenhar dentro de um espaço pequeno e quadrado. Em pixel art, cada quadradinho (pixel) conta muito, porque são poucos. A criança descobre que primeiro a gente faz o contorno (a borda, como o risco de um desenho de colorir) e depois preenche por dentro com a tinta. Isso é exatamente igual a colorir um desenho no papel: primeiro o risco preto, depois a cor.

Por que isso importa? Porque todo jogo precisa de itens, e itens pequenos são o jeito mais fácil de uma criança pequena ter sucesso rápido. Em 16x16 cabe pouca coisa, então o desenho fica simples e cada um consegue terminar e se orgulhar. Além disso, a criança pratica a paleta montada na aula 3, escolhendo cores no lugar certo em vez de inventar mil cores diferentes.

O que será feito: o professor mostra no projetor como abrir um quadro novo de 16x16, ligar a grade, escolher a ferramenta de lápis, desenhar o contorno do objeto e depois preencher por dentro com o balde de tinta. Cada criança faz o seu, no próprio ritmo, e no final todos salvam o arquivo e mostram o item para a turma.`,
  materiais: [
    `Computadores ligados, um por criança, com o Aseprite já aberto e um arquivo novo de 16x16 pixels criado pelo professor antes da aula.`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar cada passo.`,
    `A paleta de cores salva na aula 3 (arquivo .aseprite ou paleta exportada), carregada em cada máquina.`,
    `Três imagens de exemplo grandes e simples impressas ou no slide: uma fruta (maçã ou cereja), uma estrela e uma moeda, todas em pixel art 16x16.`,
    `Folhas de papel quadriculado (com quadrados grandes, tipo grade de 16 por 16) e lápis de cor para o exercício no papel.`,
    `Uma pasta no computador chamada Meus Sprites onde as crianças salvam os arquivos, com o nome de cada aluno já escrito.`,
    `Adesivos ou carimbos de estrelinha para premiar quem terminar e salvar o objeto.`,
  ],
  conceitosChave: [
    `Sprite — é o desenho de uma coisa do jogo, tipo um item, um bichinho ou o herói. O nosso de hoje é bem pequeno.`,
    `Grade 16x16 — um quadradão dividido em 16 quadradinhos para cada lado, como um tabuleiro pequeno onde a gente pinta.`,
    `Pixel — cada quadradinho da grade. É o tijolinho que monta o desenho; quando a gente pinta um, ele vira uma cor.`,
    `Contorno — a borda do desenho, o risco que diz onde começa e termina o objeto, igual ao traço preto de um desenho de colorir.`,
    `Preenchimento — pintar tudo por dentro do contorno, como colorir dentro das linhas com tinta.`,
    `Balde de tinta — uma ferramenta do Aseprite que pinta um monte de quadradinhos de uma vez só, sem precisar pintar um por um.`,
    `Salvar — guardar o desenho no computador para ele não sumir, como guardar um brinquedo na caixa certa.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Pixel art é desenhar com pouquinhos quadradinhos. Em uma grade 16x16 existem 256 pixels no total, e é só isso que a criança tem para trabalhar. A boa notícia: quanto menor, mais rápido de terminar e mais fácil de acertar. O segredo de um sprite bonito é a ordem certa: primeiro o contorno (a borda escura), depois o preenchimento (a cor por dentro). Se a criança preencher antes de ter a borda, o desenho fica sem forma e some no fundo.

No Aseprite, você vai usar três coisas principais nesta aula: a ferramenta Lápis (Pencil, tecla B), o Balde de tinta (Paint Bucket, tecla G) e a grade (menu View, opção Grid, e Show Grid). Antes da aula, crie em cada máquina um arquivo novo: menu File, New File, e coloque Width 16 e Height 16, depois OK. Já deixe a grade ligada e o zoom bem grande (use a tecla mais, o sinal de mais, várias vezes, ou a barra de zoom embaixo) para os quadradinhos aparecerem grandes na tela.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Aseprite)

Aquecimento (10 min): receba a turma e mostre no projetor as três imagens de exemplo (fruta, estrela, moeda). Pergunte qual cada um quer fazer. Relembre a aula passada abrindo a paleta de cores: no painel de cores à direita, mostre que aquelas cores são as que eles escolheram. Deixe cada criança decidir o objeto.

Conteúdo novo guiado (15 min): no seu computador, com o projetor ligado, mostre o arquivo 16x16 com a grade aparecendo. Diga que cada quadradinho é um pixel. Selecione a ferramenta Lápis (clique no ícone de lápis na barra de ferramentas da esquerda, ou tecla B). Escolha uma cor escura na paleta e desenhe devagar o contorno de uma moeda: um círculo simples de quadradinhos na borda. Conte em voz alta cada clique. Depois pegue o Balde de tinta (ícone de balde, ou tecla G), escolha amarelo e clique uma vez dentro do contorno: a moeda inteira pinta de uma vez. Mostre como desfazer com Editar, Desfazer (Edit, Undo, ou tecla Ctrl e Z) caso erre.

Mão na massa (25 min): cada criança vai para sua máquina e faz o próprio objeto. Circule pela sala. Lembre sempre a ordem: primeiro o contorno com o Lápis, depois o Balde por dentro. Ajude quem travar a segurar o mouse e clicar quadradinho por quadradinho. Quem terminar pode adicionar um brilho: um ou dois pixels brancos em cima para parecer que reluz.

Desafio e compartilhar (10 min): peça para todos salvarem com File, Save As, dentro da pasta Meus Sprites, com o nome deles. Depois, cada criança mostra o objeto na tela ou no projetor e diz o que é. Aplauda cada um.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Chame a grade de tabuleiro de pintar e o pixel de quadradinho mágico. Diga: a gente desenha igual quando colore no papel, primeiro o risco preto e depois a cor por dentro. Para o balde, fale: é um baldinho de tinta mágico que pinta tudo de uma vez, basta um cliquezinho dentro. Para o objeto pequeno, diga que é um tesouro pequenininho que o nosso herói vai pegar no jogo. Use bastante a palavra contorno como a casquinha do desenho.

## Erros comuns e como ajudar

Muitas crianças tentam pintar com o balde antes de fechar o contorno: a tinta escapa e pinta a tela toda. Mostre que a borda precisa estar fechadinha, sem buraco, como uma cerca sem porta aberta. Outras pintam pixel por pixel sem usar o balde, ficando cansadas; lembre delas do baldinho. Algumas apagam tudo sem querer; ensine o Ctrl e Z (Desfazer) como um botão de voltar no tempo. E há quem desenhe grande demais e estoure a grade; diga que o desenho mora dentro do tabuleiro e não pode passar da cerca.`,
  exercicios: [
    {
      titulo: `Aquecendo o dedinho: pinta-pixel`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Antes do objeto, deixe a criança soltar a mão. Mostre no projetor como pintar quadradinhos soltos com o Lápis (tecla B) só para sentir o clique do mouse na grade 16x16.`,
      atividade: `No seu arquivo 16x16, pegue o Lápis, escolha uma cor da paleta e pinte 10 quadradinhos espalhados pela grade. Depois pinte 5 quadradinhos seguidos formando uma linha reta.`,
      gabarito: `A criança acertou se conseguiu pintar quadradinhos um a um com o Lápis e fez uma linha reta de 5 pixels. Sinal de sucesso: cada clique pinta exatamente um quadradinho, sem borrar vários de uma vez.`,
    },
    {
      titulo: `Caça ao item: que objeto é esse?`,
      tipo: `jogo`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor vários sprites 16x16 bem simples (fruta, estrela, moeda, coração, gota) um de cada vez e faça a turma adivinhar em voz alta o que é cada um. Comemore cada acerto.`,
      atividade: `Olhe a imagem na tela e grite o nome do objeto que você está vendo. Depois aponte: onde está o contorno (a borda) e onde está o preenchimento (a cor de dentro)?`,
      gabarito: `Resposta esperada: a criança nomeia corretamente os objetos comuns (estrela, moeda, fruta) e aponta a borda escura como contorno e a parte colorida de dentro como preenchimento. Acerto pleno quando separa borda de miolo nos dois ou três exemplos.`,
    },
    {
      titulo: `Roda de conversa: o que meu herói coleta?`,
      tipo: `roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Sente a turma em roda. Pergunte que itens existem nos jogos que eles conhecem e por que o herói pega esses itens. Conduza ligando a resposta ao objeto que cada um vai desenhar hoje.`,
      atividade: `Conte para a turma: qual objeto você vai desenhar hoje (fruta, estrela ou moeda) e o que ele faz no seu jogo? Dá pontos? Dá vida? Deixa o herói mais rápido?`,
      gabarito: `Não há resposta única. Considere certo quando a criança escolhe um dos três objetos e diz uma função simples para ele no jogo (por exemplo, a moeda dá pontos). O importante é relacionar o desenho a um item de jogo.`,
    },
    {
      titulo: `Rascunho no papel quadriculado`,
      tipo: `desenho no papel`,
      tempo: `10 min`,
      guiaProfessor: `Entregue a folha quadriculada de 16 por 16 e lápis de cor. Peça para a criança planejar o objeto no papel antes de fazer no computador: primeiro o contorno, depois pintar por dentro, exatamente como será no Aseprite.`,
      atividade: `Na sua folha quadriculada, desenhe o contorno do seu objeto pintando os quadradinhos da borda com lápis escuro. Depois pinte os quadradinhos de dentro com a cor que você vai usar no computador.`,
      gabarito: `Acertou quem fez primeiro a borda fechada (sem buracos) e depois preencheu o miolo com cor, cabendo tudo dentro da grade de 16 por 16. O desenho deve ser reconhecível como fruta, estrela ou moeda.`,
    },
    {
      titulo: `Desafio do tesouro brilhante`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Para quem terminou o objeto no Aseprite, proponha um toque final de profissional: adicionar brilho e salvar com nome próprio. Demonstre rapidinho como colocar um ou dois pixels brancos para dar reluzido.`,
      atividade: `Termine seu objeto 16x16: contorno com o Lápis e preenchimento com o Balde de tinta. Depois adicione 1 ou 2 quadradinhos brancos em cima para dar brilho. Por fim, salve em File, Save As, na pasta Meus Sprites com o seu nome.`,
      gabarito: `Sucesso quando o objeto está com contorno fechado, preenchido com cores da paleta, tem ao menos um pixel de brilho branco e foi salvo na pasta correta com o nome da criança. O professor confirma vendo o arquivo salvo na pasta Meus Sprites.`,
    },
  ],
};
