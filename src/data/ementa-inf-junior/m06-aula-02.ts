import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Para Onde Vou? Ligando os Slides",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Criar vários botões com hyperlinks que ligam três ou quatro slides entre si e testar cada botão no modo apresentação.`,
  descricao: `Na aula passada, as crianças descobriram o botão mágico: aquele clique que faz alguma coisa acontecer. Hoje damos o próximo passo gigante: vamos ensinar o botão a viajar para um slide específico. Em vez de "ir para o próximo", o botão vai aprender a dizer "me leve para o slide do gato" ou "me leve de volta para o começo". Isso se chama hyperlink, e é o coração de qualquer joguinho clicável.

A grande ideia desta aula é a ligação entre slides. Imagine que cada slide é um cômodo de uma casa e os botões são as portas. Uma porta leva à cozinha, outra ao quarto, outra à sala. Quando a criança cria um hyperlink, ela está construindo uma porta que sabe exatamente para onde vai. Ao final da aula, cada aluno terá três ou quatro slides conversando entre si, com botões que levam de um para o outro e botões que voltam para o início.

O momento mágico acontece no modo apresentação. É só ali, com o slide em tela cheia, que os botões realmente funcionam e ficam clicáveis. As crianças vão descobrir, com olhos brilhando, que um clique no lugar certo leva ao slide certo. Esse "uau" é o combustível da aula. Quando o clique leva ao lugar errado, também é ótimo: vira uma caça ao tesouro para consertar a ligação.

Esta aula é prática guiada. O professor mostra um passo no projetor, as crianças repetem no computador, todos juntos, no mesmo ritmo. Não inventamos quiz nem caminhos de "certo e errado" ainda (isso vem nas próximas aulas). Hoje o foco é só um: fazer muitos botões ligarem muitos slides, e testar tudo no modo apresentação.`,
  materiais: [
    `Um computador por criança (ou dupla) com o PowerPoint ou o Google Apresentações já aberto.`,
    `Projetor ou tela grande conectada ao computador do professor, para demonstrar cada passo.`,
    `Um arquivo de exemplo pronto, feito antes da aula, com quatro slides ligados por botões (slide Início, slide Gato, slide Cachorro, slide Peixe), para mostrar o resultado final.`,
    `Um arquivo inicial entregue a cada criança, já com três ou quatro slides coloridos e prontos (sem botões), para elas só ligarem.`,
    `Cartões de papel grandes, cada um com o nome de um slide (Início, Gato, Cachorro), para uma brincadeira fora do computador.`,
    `Adesivos ou carimbos de "Construtor de Portas" para premiar quem testar todos os botões.`,
    `Fones de ouvido não são necessários hoje; mas tenha mouses extras, pois clicar com mouse é mais fácil que com o touchpad.`,
  ],
  conceitosChave: [
    `Hyperlink — uma porta mágica: você clica e ela te leva para outro slide.`,
    `Slide — uma página da apresentação, como um cômodo da casa do jogo.`,
    `Botão — o desenho ou a palavra em que a gente clica para a porta abrir.`,
    `Ligar slides — colocar uma porta entre dois slides para poder ir de um ao outro.`,
    `Modo apresentação — a tela cheia onde os botões funcionam de verdade e dá para clicar.`,
    `Voltar ao início — um botão especial que leva sempre de volta para o primeiro slide.`,
    `Testar — clicar no botão para ver se ele leva mesmo para o lugar certo.`,
  ],
  treinamento: `## O que o professor precisa saber

Hyperlink é só uma palavra grande para "porta que leva a um lugar". No PowerPoint e no Google Apresentações, você pode prender um hyperlink a qualquer coisa: uma forma, uma imagem ou uma palavra. Quando alguém clica nessa coisa no modo apresentação, o programa pula para o slide escolhido. É isso que vamos fazer várias vezes hoje.

Duas regras de ouro: primeira, o hyperlink só funciona no modo apresentação, nunca na tela de edição. Segunda, no PowerPoint você liga a um slide específico escolhendo "Colocar neste Documento" e, no Google Apresentações, escolhendo "Slides desta apresentação". Decore esses dois nomes, porque é onde as crianças se perdem.

Prepare antes: deixe o arquivo de exemplo pronto e teste todos os botões você mesmo. Tenha também o arquivo inicial das crianças com três ou quatro slides já criados e nomeados (Início, Gato, Cachorro, Peixe), para a aula render.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra seu exemplo no projetor e entre no modo apresentação. No PowerPoint, aperte F5; no Google Apresentações, clique em "Apresentar" no canto superior direito. Clique nos botões na frente das crianças e pergunte: "Para onde fomos?". Saia do modo apresentação com a tecla Esc. Relembre o botão mágico da aula 1.

Conteúdo novo guiado (15 min): mostre como criar UM hyperlink, devagar. No PowerPoint: clique na forma do botão, vá à aba "Inserir", clique em "Link" (ou "Hiperlink"), escolha "Colocar neste Documento", selecione o slide de destino na lista e clique em OK. No Google Apresentações: clique na forma, vá ao menu "Inserir", clique em "Link", clique em "Slides desta apresentação" e escolha o slide. Faça isso uma vez você, depois com a turma falando junto o que clicar.

Mão na massa (25 min): as crianças abrem o arquivo inicial e ligam os slides, um botão por vez, no seu ritmo. Comece pelo botão do slide Início que leva ao slide Gato. Depois um botão no Gato que volta ao Início. Depois ligue Início ao Cachorro, e assim por diante, até três ou quatro ligações. A cada botão criado, mande entrar no modo apresentação e testar. Circule pela sala ajudando.

Desafio e compartilhar (10 min): peça um botão extra que ligue dois slides ainda não conectados (por exemplo, Gato direto para Cachorro). Depois cada criança mostra um botão funcionando no modo apresentação para um colega do lado. Carimbo de "Construtor de Portas" para quem testou tudo.

## Como explicar para crianças de 5 a 9 anos

Use a casa com cômodos: "Cada slide é um quartinho. O botão é a porta. O hyperlink é o feitiço que diz para a porta para onde ela leva." Faça o gesto de abrir uma porta com a mão a cada clique. Diga sempre "agora a porta sabe o caminho".

Para o modo apresentação, fale: "Os botões só acordam na tela cheia. Na tela de fazer, eles estão dormindo." Esse "acordar" ajuda muito. E celebre cada clique certo com um "PLIM, chegamos no slide do gato!". A repetição alegre é o que fixa o aprendizado nesta idade.

## Erros comuns e como ajudar

O erro número um: a criança clica no botão na tela de edição e reclama que "não funciona". Lembre com calma: só funciona no modo apresentação. Mostre de novo como entrar (F5 ou Apresentar).

O segundo erro: escolher "ir para o próximo slide" em vez do slide certo. Sente ao lado e mostre a lista de slides com os nomes, apontando o slide de destino correto. Por isso nomear os slides antes ajuda tanto.

O terceiro: clicar fora da forma e prender o link no slide inteiro ou em nada. Peça para selecionar a forma primeiro (a borda fica marcada) e só então inserir o link. Se ligaram errado, basta clicar na forma e refazer o link, sem medo de errar.`,
  exercicios: [
    {
      titulo: `Acendendo a Porta: meu primeiro hyperlink`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Guie passo a passo no projetor. No PowerPoint: selecionar a forma, aba Inserir, Link, "Colocar neste Documento", escolher o slide, OK. No Google Apresentações: selecionar a forma, menu Inserir, Link, "Slides desta apresentação", escolher o slide. Espere todos terminarem antes de seguir.`,
      atividade: `Cada criança cria UM botão no slide Início que leve ao slide Gato. Depois entra no modo apresentação e clica para ver se chegou ao gato.`,
      gabarito: `O botão do slide Início, ao ser clicado no modo apresentação, leva ao slide Gato. Caminho correto: selecionar a forma, Inserir, Link, escolher o slide Gato como destino. Sucesso quando o clique muda a tela para o slide do gato.`,
    },
    {
      titulo: `O Botão que Volta: caminho de ida e volta`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre que agora a porta precisa ir nos dois sentidos. No slide Gato, ligue um botão de volta ao slide Início, usando o mesmo caminho do exercício anterior. Reforce nomear o destino certo na lista de slides.`,
      atividade: `No slide Gato, cada criança cria um botão "Voltar" ligado ao slide Início. Teste no modo apresentação: ir do Início ao Gato e voltar ao Início, só com cliques.`,
      gabarito: `Existem dois botões funcionando: um no Início que leva ao Gato e um no Gato que volta ao Início. No modo apresentação dá para ir e voltar clicando. Destino do botão "Voltar" deve ser o slide Início.`,
    },
    {
      titulo: `Roda da Casa Mágica: cada slide é um cômodo`,
      tipo: `roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Sente a turma em roda com os cartões de papel (Início, Gato, Cachorro). Pergunte para onde cada porta deveria levar. Conduza sem computador, só com a ideia de cômodos e portas, para firmar o conceito de ligação.`,
      atividade: `As crianças escolhem dois cartões e dizem em voz alta a frase: "A porta do slide ___ me leva para o slide ___." Cada uma fala pelo menos uma ligação.`,
      gabarito: `Qualquer frase válida que ligue dois slides serve, por exemplo: "A porta do slide Início me leva para o slide Cachorro." O importante é a criança nomear um slide de partida e um de destino, mostrando que entendeu que o botão liga um slide a outro.`,
    },
    {
      titulo: `Mapa de Portas no Papel: desenhando as ligações`,
      tipo: `desenho/papel`,
      tempo: `8 min`,
      guiaProfessor: `Entregue uma folha. Peça para desenharem três ou quatro quadrados (os slides) com os nomes e setas (as portas) mostrando para onde cada botão leva. Esse mapa guia a criança na hora de criar os links no computador.`,
      atividade: `Desenhar o mapa dos próprios slides: um quadrado para cada slide, com setas indicando cada ligação que existe ou que ainda vai criar. Pintar as setas que já estão funcionando.`,
      gabarito: `O mapa mostra três ou quatro quadrados nomeados (Início, Gato, Cachorro, Peixe) com setas entre eles. Exemplo correto: seta de Início para Gato, seta de Gato para Início, seta de Início para Cachorro. Cada seta representa um hyperlink real do projeto.`,
    },
    {
      titulo: `Desafio do Construtor: ligando tudo e testando`,
      tipo: `desafio`,
      tempo: `9 min`,
      guiaProfessor: `Desafio final, dificuldade maior. Peça pelo menos três ligações no total e um botão novo entre dois slides ainda não conectados. Depois mande testar TODAS no modo apresentação e consertar a que levar ao lugar errado. Carimbo para quem testar tudo.`,
      atividade: `Criar um terceiro caminho novo (por exemplo, do Gato direto para o Cachorro) e testar todos os botões no modo apresentação, conferindo se cada clique leva ao slide certo. Consertar qualquer porta que erre o caminho.`,
      gabarito: `O projeto tem pelo menos três botões com hyperlinks funcionando, incluindo a nova ligação entre dois slides antes desconectados. No modo apresentação, todos os cliques levam ao slide certo. Se algum errar, a correção é clicar na forma e refazer o link escolhendo o slide de destino correto.`,
    },
  ],
};
