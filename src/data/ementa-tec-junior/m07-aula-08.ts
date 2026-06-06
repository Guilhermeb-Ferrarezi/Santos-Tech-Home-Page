import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Tudo pronto pro jogo!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança aprende a exportar sua animação como uma sprite sheet (uma folha com todos os quadrinhos juntinhos) e organiza todas as artes do mês prontas para entrar no jogo 2D.`,
  descricao: `Esta é a última aula do mês de animação! Durante quatro semanas as crianças deram vida aos seus desenhos: aprenderam a fazer um boneco respirar, descobriram o tempo certo de cada quadrinho, usaram a folha mágica do onion skin, fizeram uma moeda girar e um item flutuar no ar. Agora chegou a hora de juntar tudo e deixar pronto para o jogo.

Nesta aula vamos aprender o que é uma sprite sheet. Imagine uma cartela de figurinhas: cada figurinha é um quadrinho (frame) da animação, e todas ficam coladas numa mesma folha. O jogo lê essa folha e mostra os quadrinhos um atrás do outro, bem rapidinho, criando o movimento. Por isso, em vez de salvar cada quadrinho separado, salvamos todos juntos numa folha só, organizadinha.

O coração da aula é o menu Arquivo, opção Exportar Sprite Sheet do Aseprite. É ali que a mágica acontece: o programa pega todos os frames que a criança animou e monta a folha automaticamente. Vamos exportar como PNG (a imagem) para o jogo, e também relembrar o GIF (que aprendemos na aula passada) para a criança mostrar o movimento para a família.

Fechamos o mês com uma mostra de arte animada: cada criança apresenta suas animações do mês, todas reunidas numa pastinha do projeto. É um momento de celebração e orgulho, mostrando que agora elas têm artes de verdade, prontinhas para virar um joguinho.`,
  materiais: [
    `Computadores com o Aseprite já aberto, um para cada criança (ou em duplas).`,
    `Projetor ou TV grande conectada ao computador do professor, para demonstrar cada passo.`,
    `Arquivos de exemplo prontos: uma animação do boneco respirando e uma moeda girando, já com vários frames, para usar de modelo.`,
    `Uma pasta criada na área de trabalho de cada computador chamada Meu Jogo, vazia, para guardar as exportações.`,
    `Sprite sheet de exemplo impressa em papel (uma folha com vários quadrinhos do mesmo personagem), para mostrar na mão.`,
    `Cartela de figurinhas ou adesivos de verdade, para usar como analogia visual.`,
    `Lista de presença das animações do mês (respira, moeda, item flutuante) para conferir o que cada criança já tem pronto.`,
  ],
  conceitosChave: [
    `Sprite sheet — uma folha com todos os quadrinhos da animação colados juntinhos, igual uma cartela de figurinhas.`,
    `Exportar — tirar uma cópia do nosso trabalho do Aseprite para fora, num formato que o jogo entende.`,
    `Frame — cada quadrinho da animação, como uma foto do movimento parado.`,
    `PNG — o tipo de imagem que o jogo usa, com fundo transparente quando a gente quer.`,
    `Pasta do projeto — a caixinha no computador onde guardamos todas as artes do jogo, bem organizadas.`,
    `Organizar — deixar cada coisa no lugar certo, com nome fácil, para achar depois.`,
    `Mostra de arte — o momento de apresentar para os amigos tudo o que a gente criou no mês.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Uma sprite sheet é simplesmente uma única imagem que contém todos os frames de uma animação organizados lado a lado (em linha, em grade ou em coluna). Motores de jogos (engines) leem essa imagem e mostram um pedacinho de cada vez, criando o movimento. É mais leve e prático do que muitas imagens soltas. No Aseprite, isso fica em Arquivo (menu de cima, à esquerda) e depois Exportar Sprite Sheet. Abre uma janela com abas: Layout, Sprite, Borders e Output. Para esta idade, você vai mexer só no essencial. Em Layout, escolha Tipo: By Rows (por linhas) e marque a opção Constraints como None (sem limite). Na aba Output, clique no botão da pasta ao lado de Output File, escolha a pasta Meu Jogo e dê o nome (por exemplo, boneco_respira). Confirme em Export. Pronto: nasce o arquivo PNG com todos os frames.

Vale também lembrar o atalho rápido: Arquivo, Exportar, Exportar Como, salvando direto em PNG (exporta o frame ou a animação conforme configurado). Mas o caminho oficial da aula é Exportar Sprite Sheet, porque é o que serve para o jogo. Tenha os arquivos de exemplo abertos antes de a aula começar, para não perder tempo procurando.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Receba a turma com a cartela de figurinhas na mão. Pergunte: lembram da moeda que gira? Do item que flutua? Hoje vamos guardar TUDO numa folha só, igual essa cartela. Mostre a sprite sheet impressa e deixe as crianças apontarem cada quadrinho.

Conteúdo novo guiado (15 min): No projetor, abra a animação de exemplo no Aseprite. Aperte Enter (ou clique no botão Play, o triângulo) para mostrar o movimento. Agora diga: vamos transformar isso numa folha. Clique em Arquivo, depois Exportar Sprite Sheet. Mostre a janela devagar. Em Layout, ponha By Rows. Vá na aba Output, clique na pastinha, escolha Meu Jogo, escreva o nome. Clique em Export. Minimize o Aseprite e abra a pasta Meu Jogo para mostrar a folha que apareceu. Faça um Uau! junto com eles.

Mão na massa (25 min): Cada criança abre a própria animação do mês (a que mais gostou). Acompanhe individualmente: Arquivo, Exportar Sprite Sheet, By Rows, aba Output, pastinha, nome, Export. Quem terminar rápido exporta uma segunda animação. Passe de mesa em mesa repetindo o caminho em voz alta. Comemore cada folha que nasce.

Desafio + compartilhar (10 min): Cada criança abre sua pasta Meu Jogo e mostra no projetor (ou para o coleguinha do lado) a folha exportada. Pergunte: quantos quadrinhos tem na sua folha? Encerre dizendo que agora elas têm arte de jogo de verdade.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a figurinha: a sprite sheet é uma cartela de figurinhas do mesmo personagem, cada figurinha é um pedacinho do movimento. Exportar é como tirar uma cópia colorida do desenho para levar para casa. A pasta é a mochila onde guardamos os trabalhos para não perder. Fale sempre com gestos: aponte a tela, faça o movimento com a mão. Evite palavras difíceis: troque arquivo por desenho salvo e formato por tipo de figurinha.

## Erros comuns e como ajudar

O erro mais comum é a criança não achar onde salvou. Sempre mande salvar na pasta Meu Jogo e confira junto. Outro erro: clicar em Cancelar em vez de Export, ou fechar a janela sem exportar; fique perto na hora do clique final. Algumas tentam salvar cada frame separado, achando que perderam o resto; mostre que a folha já tem TODOS juntos. Há quem aperte Export várias vezes e crie cópias repetidas; oriente um clique só. Se o nome ficar vazio, o Aseprite reclama; ajude a digitar um nome simples sem espaços, como moeda_gira.`,
  exercicios: [
    {
      titulo: `Minha primeira folha de figurinhas`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Abra junto com a turma a animação de exemplo do boneco que respira. Diga que todos vão fazer ao mesmo tempo, devagar, esperando o professor falar cada passo. Mostre no projetor enquanto eles repetem na própria tela.`,
      atividade: `Abra a animação do boneco respira. Clique em Arquivo, depois em Exportar Sprite Sheet. Em Layout, escolha By Rows. Vá na aba Output, clique na pastinha, escolha a pasta Meu Jogo e escreva o nome boneco_respira. Clique em Export.`,
      gabarito: `Acertou quando aparece, dentro da pasta Meu Jogo, um arquivo de imagem chamado boneco_respira com todos os quadrinhos do boneco colados lado a lado numa só folha. O professor confere abrindo a pasta com a criança.`,
    },
    {
      titulo: `Caça aos quadrinhos`,
      tipo: `jogo`,
      tempo: `7 min`,
      guiaProfessor: `Projete uma sprite sheet de exemplo (a moeda que gira). Faça um joguinho de contar e apontar. Vá rápido e empolgado, deixando as crianças responderem em voz alta e apontarem a tela ou o papel.`,
      atividade: `Olhem a folha da moeda no projetor. Vamos contar juntos quantos quadrinhos tem nessa folha? Quem achar o quadrinho em que a moeda está bem fininha (de lado) levanta a mão e aponta!`,
      gabarito: `Acertou quem conta o número certo de quadrinhos da folha mostrada e aponta corretamente o frame em que a moeda aparece de lado (fininha). O professor confirma apontando junto e contando em voz alta.`,
    },
    {
      titulo: `Roda do nosso mês`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em círculo. Faça cada criança falar uma frase sobre a animação do mês de que mais gostou. Valorize todas as respostas e relembre as quatro semanas (respira, tempo certo, onion skin, moeda, item flutuante).`,
      atividade: `Cada um conta para a roda: qual foi a animação que você mais gostou de fazer neste mês? O que ela faz? Agora ela está guardada na sua folha pronta pro jogo?`,
      gabarito: `Acertou quando a criança consegue nomear uma animação que fez no mês (por exemplo, a moeda girando) e dizer o que ela faz. Não há resposta errada de gosto; o professor confirma que a criança lembra de pelo menos uma das animações trabalhadas.`,
    },
    {
      titulo: `Desenhe sua cartela`,
      tipo: `desenho no papel`,
      tempo: `10 min`,
      guiaProfessor: `Entregue uma folha com quatro quadradinhos em branco desenhados em linha. Explique que cada quadradinho é um frame e que, juntos, eles formam uma sprite sheet de papel. Mostre o exemplo da bolinha pulando no quadro.`,
      atividade: `Na sua folha com quatro quadradinhos, desenhe uma bolinha pulando: no primeiro embaixo, no segundo no meio, no terceiro lá em cima e no quarto descendo. Pronto, você fez uma sprite sheet de papel!`,
      gabarito: `Acertou quando a folha mostra a mesma bolinha em quatro posições diferentes, formando uma sequência de movimento (subindo e descendo). O professor passa o dedo de quadrinho em quadrinho e vê a bolinha mudar de lugar.`,
    },
    {
      titulo: `Mestre da pasta do jogo`,
      tipo: `desafio`,
      tempo: `9 min`,
      guiaProfessor: `Este é o desafio final, mais difícil, para quem já dominou o caminho. Peça que a criança exporte sozinha, sem o professor ditar cada passo, duas animações diferentes na mesma pasta Meu Jogo. Fique por perto só para socorro.`,
      atividade: `Sozinho agora! Exporte duas animações diferentes do seu mês como sprite sheet, salvando as duas dentro da pasta Meu Jogo, cada uma com um nome diferente. No final, abra a pasta e mostre as duas folhas para o professor.`,
      gabarito: `Acertou quando, dentro da pasta Meu Jogo, existem duas folhas de sprite sheet com nomes diferentes (por exemplo, moeda_gira e item_flutua), cada uma com os quadrinhos da animação certa. O professor confere abrindo a pasta e vendo os dois arquivos prontos para o jogo.`,
    },
  ],
};
