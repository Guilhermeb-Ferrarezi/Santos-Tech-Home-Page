import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Meu personagem se mexe!",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança aprende a dar movimento ao seu personagem adicionando um comportamento pronto de deslocamento e vê o herói andar pela tela ao testar o jogo.`,
  descricao: `Nas aulas anteriores a turma montou o palco, colocou objetos no cenário e brincou de criar regras com o "quando... faça...". Hoje acontece a grande virada: o personagem deixa de ficar parado e começa a se mexer! Esta é, para muitas crianças, a aula mais empolgante do mês, porque é quando o jogo parece "ganhar vida" de verdade.

A ideia central é que no Construct 3 a gente não precisa escrever código difícil para fazer um objeto andar. Existem ajudinhas prontas chamadas comportamentos (em inglês, "behaviors"). É como dar um superpoder para o personagem: a gente clica, escolhe o poder de "andar livre" (o comportamento "8 Direction") e pronto, ele já obedece. O computador faz a parte chata sozinho.

Durante a aula, cada criança vai selecionar o seu personagem, abrir o painel de propriedades, adicionar o comportamento de movimento e depois apertar o botão de testar para ver o herói deslizar pela tela. Vamos descobrir juntos que o personagem se move com as setas do teclado quase por mágica, mesmo sem termos programado nenhuma seta ainda (isso será aprofundado na próxima aula). O foco de hoje é a alegria de ver o movimento acontecer e entender que comportamentos são atalhos poderosos.

Por que isso importa? Porque ensina o conceito mais importante dos games: interatividade. Um jogo só é jogo quando a gente pode mexer nas coisas. Ao final, a sala vai estar cheia de "olha o meu andando!", e essa comemoração é parte essencial do aprendizado.`,
  materiais: [
    `Computadores (1 por criança) com o Construct 3 já aberto no navegador e o projeto do jogo da turma carregado`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar cada clique`,
    `Projeto de exemplo salvo pelo professor já com um personagem (sprite) pronto no layout, caso alguma criança ainda não tenha o seu`,
    `Imagem ou figura do personagem (sprite) que cada criança usará, já importada nas aulas anteriores`,
    `Cartões impressos grandes com a palavra "Comportamento" e um desenho de superpoder (capa, raio) para apoio visual`,
    `Adesivos ou carimbos de "Herói em movimento" para premiar quem conseguir fazer o personagem andar`,
    `Lista de presença e uma folha em branco por criança para o exercício de desenho`,
  ],
  conceitosChave: [
    `Comportamento — um superpoder pronto que a gente dá pro objeto pra ele saber fazer algo sozinho, como andar.`,
    `Movimento — quando o personagem sai do lugar e anda pela tela em vez de ficar paradinho.`,
    `8 Direction — o nome do superpoder que deixa o personagem andar para os lados, para cima e para baixo.`,
    `Painel de Propriedades — a caixinha do lado da tela onde a gente vê e muda as coisas do objeto escolhido.`,
    `Testar (Preview) — apertar o botão de "play" pra brincar com o jogo e ver se está funcionando.`,
    `Velocidade (Speed) — o quão rápido ou devagar o personagem corre quando a gente manda ele andar.`,
    `Sprite — a figura do nosso personagem que aparece e se mexe dentro do jogo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

No Construct 3, fazer um objeto se mover tem dois caminhos: criar eventos manualmente (mais trabalhoso) ou usar um "behavior" (comportamento) pronto. Para crianças desta faixa, sempre o comportamento pronto. O comportamento que usaremos é o "8 Direction": ele faz o objeto andar nas oito direções respondendo automaticamente às setas do teclado, sem precisar de nenhum evento. Isso é perfeito: a criança adiciona o comportamento e o personagem já anda.

Como adicionar: selecione o sprite no layout (a área de edição central). No painel "Properties" (Propriedades), à esquerda, role até a seção "Behaviors" e clique em "Behaviors". Abre uma janelinha. Clique no botão de adicionar (sinal de mais, "+"), escolha "8 Direction" na lista (categoria "Movements") e confirme com duplo clique ou "Add". Feche a janela. Pronto. Para testar, clique no botão de "play" (Preview) no canto superior, geralmente um triângulo, ou aperte a tecla F5. Abre uma aba nova com o jogo; aperte as setas e o personagem anda.

Você pode ajustar a velocidade: com o sprite selecionado, no painel de Propriedades aparece "8Direction" com campos como "Max speed" (velocidade máxima), "Acceleration" e "Deceleration". Para esta aula, deixe o padrão; só mexa em "Max speed" se quiser mostrar rápido x devagar.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Construct 3)

10 min - Aquecimento/revisao: receba a turma e pergunte o que fizeram nas aulas passadas (colocaram objetos, criaram regras). Faça a brincadeira "estátua": as crianças andam pela sala e param quando você diz "parou". Conecte: "Hoje nosso personagem vai sair da estátua e ANDAR de verdade no jogo!".

15 min - Conteudo novo guiado: no projetor, mostre seu Construct 3. Clique no personagem no layout para selecioná-lo (aparece uma borda nele). Aponte o painel "Properties" à esquerda. Role até "Behaviors" e clique. Na janelinha, clique no "+", escolha "8 Direction", confirme. Feche. Agora clique no botão de Preview (play) ou aperte F5. Mostre o personagem andando com as setas e comemore bem alto para contagiar a turma.

25 min - Mao na massa: cada criança repete nos seus computadores. Caminhe pela sala. Garanta que cada uma: 1) clica no próprio personagem, 2) acha "Behaviors" nas Propriedades, 3) adiciona "8 Direction", 4) aperta Preview e testa as setas. Celebre cada herói que começar a andar. Quem terminar pode testar diferentes velocidades.

10 min - Desafio + compartilhar: proponha mudar a velocidade (campo "Max speed") para o personagem ficar bem rápido ou bem lento. Depois faça a roda: cada criança mostra na tela o seu herói andando e diz uma palavra de como se sente.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a analogia do superpoder: "O comportamento é como dar uma capa mágica pro nosso boneco. Sem a capa ele fica paradinho. Com a capa de andar, ele corre quando a gente manda!". Outra: "É como apertar o controle de um carrinho de brinquedo." Evite a palavra "código". Fale "ajudinha pronta", "superpoder", "botão de play". Mostre sempre antes de pedir; demonstre o clique no telão e só depois solte a turma. Comemore muito: a emoção fixa o aprendizado.

## Erros comuns e como ajudar

O mais comum: a criança não selecionou o personagem antes de procurar "Behaviors", então o painel mostra outra coisa. Ajuda: peça para clicar bem em cima do boneco até aparecer a borda. Outro: adicionar o comportamento ao objeto errado (o fundo). Confira o nome do objeto selecionado no topo das Propriedades. Outro: a criança aperta as setas mas o foco está na janela errada; peça para clicar dentro da tela do jogo primeiro. E há quem ache que "não funcionou" porque esqueceu de apertar Preview; lembre do botão de play. Se travar, salvar e recarregar costuma resolver.`,
  exercicios: [
    {
      titulo: `Dando o superpoder de andar`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Demonstre no projetor primeiro, devagar, cada clique. Depois acompanhe a turma passo a passo, esperando todos terminarem cada etapa antes de seguir. Repita o nome de cada painel em voz alta.`,
      atividade: `No seu computador: clique no seu personagem até aparecer a borda. No painel de Propriedades, ache "Behaviors" e clique. Aperte o botão de mais (+), escolha "8 Direction" e confirme. Feche a janelinha.`,
      gabarito: `A criança acertou quando, ao selecionar o personagem, o comportamento "8Direction" aparece listado no painel de Propriedades. O personagem ainda não se moveu, mas o superpoder já está instalado.`,
    },
    {
      titulo: `O herói anda pela primeira vez!`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre onde fica o botão de Preview (play) no canto de cima. Avise que abre uma aba nova. Oriente a clicar dentro da tela do jogo antes de usar as setas. Comemore alto cada personagem que andar.`,
      atividade: `Aperte o botão de play (Preview) ou a tecla F5. Quando o jogo abrir, clique uma vez na tela e use as setas do teclado para fazer seu personagem andar para os lados, para cima e para baixo.`,
      gabarito: `Acertou quando o personagem se move pela tela ao apertar as setas. Se não mexer, verifique se clicou dentro do jogo e se o comportamento foi adicionado ao personagem certo.`,
    },
    {
      titulo: `Rápido ou devagar?`,
      tipo: `desafio na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no telão o campo "Max speed" dentro de "8Direction" no painel de Propriedades. Explique que número grande é rápido e número pequeno é devagar. Deixe experimentar e testar de novo.`,
      atividade: `Selecione seu personagem. No painel de Propriedades, ache "Max speed" no comportamento. Troque o número por um bem grande, aperte play e teste. Depois troque por um bem pequeno e teste de novo.`,
      gabarito: `Acertou quem percebe que número maior deixa o personagem mais rápido e número menor o deixa mais lento, conseguindo mostrar as duas velocidades no teste.`,
    },
    {
      titulo: `Desenhando o caminho do herói`,
      tipo: `desenho no papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue uma folha por criança. Peça para desenhar o personagem e setas mostrando para onde ele pode andar. Use para reforçar a ideia de movimento em quatro direções. Não exija escrita.`,
      atividade: `Na folha, desenhe o seu personagem no meio. Em volta dele, desenhe quatro setas: uma para cima, uma para baixo, uma para a esquerda e uma para a direita, mostrando os caminhos que ele pode andar.`,
      gabarito: `Acertou quem desenha o personagem com setas indicando direções de movimento. O importante é demonstrar que entendeu que o herói pode andar para vários lados.`,
    },
    {
      titulo: `Roda do movimento`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça a turma sentar em roda. Conduza com perguntas simples e deixe cada criança falar uma vez. Reforce, ao final, que o "comportamento" foi o superpoder que fez tudo acontecer.`,
      atividade: `Em roda, cada um responde: o que precisamos adicionar para o personagem andar? Qual botão a gente aperta para testar o jogo? Conte uma coisa que você sentiu quando viu seu herói se mexer.`,
      gabarito: `Esperado: a criança diz que adicionamos um "comportamento" (o superpoder "8 Direction"), que apertamos o botão de play/Preview para testar, e expressa alguma emoção positiva sobre ver o personagem andar.`,
    },
  ],
};
