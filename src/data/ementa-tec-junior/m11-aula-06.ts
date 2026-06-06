import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Pinte do Seu Jeito",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança sai sabendo pintar seus objetos 3D com cores divertidas e montar uma cena pequena combinando pintura com mover, girar e crescer os objetos do jeitinho dela.`,
  descricao: `Nesta aula as crianças vão dar vida aos seus objetos do Maya pintando eles com cores alegres. Até agora elas aprenderam a criar formas (cubo, bola, tubo) e a mexer nessas formas: mover, girar e crescer (escalar). Agora chegou a hora mais gostosa: escolher uma cor e deixar cada brinquedo 3D bem colorido, como num quadro que a gente pinta com tinta.

Pintar no Maya não é igual passar lápis de cor no papel. No Maya a gente dá uma cor para o objeto inteiro de uma vez, como se mergulhasse o brinquedo num pote de tinta. Para isso usamos um material chamado "Lambert", que é a forma mais simples de dar cor. O professor vai mostrar onde clicar para abrir o pote de cor, escolher a cor e jogar essa cor no objeto.

O coração da aula é juntar tudo o que a turma treinou na semana. As crianças vão montar uma cena pequena (um cenário) com poucos objetos: por exemplo, uma casinha feita de cubo, uma árvore feita de bola em cima de um tubo, ou um carrinho. Cada objeto vai ganhar uma cor, vai ser posicionado, virado e crescido até ficar do jeito que a criança imaginou. O importante não é ficar perfeito, e sim a criança escolher e decidir sozinha.

Essa prática trabalha autonomia, gosto pessoal e revisão de tudo: criar forma, mover, girar, escalar e agora pintar. No fim, cada criança mostra a sua cena colorida para a turma e conta o que fez. É a preparação direta para a Aula 7, quando elas vão montar o "Meu Primeiro Brinquedo 3D" completo.`,
  materiais: [
    `Computadores com o Maya já aberto e uma cena nova vazia em cada um (um por criança)`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar`,
    `Arquivo de exemplo com uma cena pronta e colorida (uma casinha colorida) para mostrar no início`,
    `Folhas de papel e lápis de cor ou giz de cera para o exercício de planejar as cores`,
    `Cartões impressos com bolinhas de cores (vermelho, azul, verde, amarelo, roxo, laranja) para o jogo`,
    `Lista simples com os nomes das formas já criadas (cubo, esfera, cilindro) para o professor consultar`,
    `Cronômetro ou timer visível para controlar o tempo de cada parte da aula`,
  ],
  conceitosChave: [
    `Material — é a roupa de cor do objeto; é o que faz o brinquedo 3D ficar vermelho, azul ou da cor que você quiser.`,
    `Lambert — o tipo de pintura mais simples do Maya, como um pote de tinta fosca que cobre o objeto todo.`,
    `Cor — a tinta que a gente escolhe para o objeto; pode ser qualquer cor do arco-íris.`,
    `Cena — o cantinho onde a gente junta vários objetos para montar uma paisagem ou um brinquedo.`,
    `Selecionar — clicar no objeto para ele acordar e ficar pronto para receber a cor ou para ser mexido.`,
    `Cenário — a montagem final com os objetos coloridos, posicionados, virados e crescidos do seu jeito.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

No Maya, dar cor a um objeto se chama "aplicar um material". O material mais simples é o "Lambert": uma tinta fosca, sem brilho, perfeita para crianças. Existe um caminho fácil e à prova de erros: selecione o objeto, clique com o botão DIREITO do mouse em cima dele, segure e escolha "Assign New Material" no menu redondo que aparece. Na janelinha "Assign New Material", clique em "Lambert". Vai abrir o painel de propriedades do lado direito (o "Attribute Editor"). Procure a palavra "Color", clique no retângulo cinza ao lado dela e abre o seletor de cores (uma roda colorida). A criança clica na cor que quer e aperta o botão verde para confirmar. Pronto: o objeto ficou colorido.

Dica importante: o objeto só muda de cor de verdade na visão colorida. Aperte a tecla "6" no teclado com o mouse em cima da janela 3D (a viewport) para ligar o modo de cor (chamado "shaded display"). Sem isso, as crianças pintam mas não veem a cor. Teste o caminho uma vez antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Maya)

AQUECIMENTO (10 min): Abra a cena de exemplo colorida no projetor. Pergunte: "De que cor é essa casinha?". Relembre rápido o que aprenderam: peça para uma criança mover um objeto (tecla "W"), outra girar (tecla "E") e outra crescer (tecla "R"). Isso aquece a memória da semana.

CONTEÚDO NOVO GUIADO (15 min): No projetor, crie um cubo (menu "Create" depois "Polygon Primitives" depois "Cube"). Aperte "6" para ligar a cor. Clique com o botão DIREITO em cima do cubo, segure, escolha "Assign New Material", depois "Lambert". No lado direito, ache "Color", clique no quadradinho cinza, escolha um azul forte na roda de cores e confirme no botão verde. O cubo fica azul. Repita com um vermelho para mostrar que dá para trocar. Faça devagar, narrando cada clique.

MÃO NA MASSA (25 min): Cada criança abre a sua cena. Tarefa: criar 2 ou 3 objetos (cubo, esfera, cilindro pelo menu "Create"), pintar cada um de uma cor diferente seguindo o caminho do botão direito, e depois mover ("W"), girar ("E") e crescer ("R") para montar uma ceninha. Circule pela sala. Lembre sempre de apertar "6" para ver a cor. Elogie as escolhas de cor.

DESAFIO + COMPARTILHAR (10 min): Desafio: "Pinte um objeto da sua cor favorita e deixe ele bem grandão no meio da cena". Depois cada criança mostra a tela e diz: "Esse é o meu brinquedo, ele é [cor] e eu fiz assim".

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a analogia do pote de tinta: "Vamos mergulhar o brinquedo no pote de tinta mágica!". Chame o material de "roupa de cor" do objeto. A roda de cores é o "arco-íris de escolher". O botão direito do mouse é o "botão secreto que abre o menu mágico". Fale: "Primeiro a gente acorda o objeto clicando nele, depois damos a roupa colorida". Repita os nomes das teclas com gestos: "W de andar, E de rodar, R de crescer". Comemore cada cor: "Que verde lindo!".

## Erros comuns e como ajudar

Erro 1: a criança pinta mas nada muda. Quase sempre é porque o modo de cor está desligado. Vá até ela e aperte "6" com o mouse na janela 3D. Erro 2: ela clica no fundo vazio e não no objeto, então o menu não aparece certo. Mostre que precisa clicar EM CIMA do objeto. Erro 3: pintou o objeto errado por não ter selecionado. Ensine a clicar primeiro no objeto (ele fica esverdeado) e só depois usar o botão direito. Erro 4: criou objetos demais e bagunçou a tela. Limite a 3 objetos e ensine a apagar com a tecla "Delete". Erro 5: a roda de cores fechou sem confirmar. Mostre o botão verde de confirmar embaixo do seletor.`,
  exercicios: [
    {
      titulo: `Pinta-Pinta Guiado`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto com a turma, passo a passo, todos ao mesmo tempo. Diga cada clique em voz alta e espere a turma acompanhar antes de seguir. Lembre de apertar a tecla "6" para todos verem a cor.`,
      atividade: `Crie um cubo pelo menu "Create" depois "Polygon Primitives" depois "Cube". Clique com o botão direito em cima do cubo, escolha "Assign New Material" e depois "Lambert". No lado direito ache "Color", clique no quadradinho e escolha a cor amarela. Confirme no botão verde.`,
      gabarito: `O cubo de cada criança fica amarelo na tela 3D. Se ficar cinza ainda, é porque o modo de cor (tecla "6") está desligado ou a criança não confirmou a cor no botão verde. Acertou quem tem um cubo amarelo visível.`,
    },
    {
      titulo: `Jogo do Caça-Cores`,
      tipo: `jogo`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre um cartão com uma bolinha colorida e fale uma cor. A criança corre até o computador e pinta um objeto naquela cor. Quem pinta certo ganha um ponto. Faça em ritmo de brincadeira, sem pressa demais, garantindo que todos joguem.`,
      atividade: `Quando o professor mostrar a cor, pinte o seu objeto exatamente naquela cor usando o botão direito depois "Assign New Material" depois "Lambert" e a roda de cores. Vença quem acertar mais cores!`,
      gabarito: `A criança acerta quando o objeto na tela fica da mesma cor que o cartão mostrado pelo professor. Por exemplo, cartão vermelho então objeto vermelho. O professor confere olhando a tela de cada um.`,
    },
    {
      titulo: `Roda das Cores Favoritas`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em círculo. Cada criança fala a sua cor favorita e por que escolheu essa cor para o brinquedo dela. Incentive frases completas e elogie cada escolha. Conecte com a ideia de que no Maya cada um pinta do seu jeito.`,
      atividade: `Na sua vez, diga para a turma: "Minha cor favorita é [cor] e eu pintei o meu [objeto] dessa cor porque [motivo]". Escute os colegas e bata palma para cada um.`,
      gabarito: `A criança acertou quando consegue dizer uma cor e dar um motivo simples (por exemplo, "azul porque parece o céu"). Não existe resposta errada de gosto; o objetivo é falar a cor e explicar a escolha.`,
    },
    {
      titulo: `Planeje no Papel`,
      tipo: `desenho/papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue uma folha e lápis de cor. Peça que a criança desenhe a cena que vai montar no Maya e pinte cada objeto da cor que pretende usar. Esse plano vira o guia dela na hora de pintar no computador. Circule ajudando quem trava.`,
      atividade: `Desenhe no papel a sua cena com 3 objetos (por exemplo: uma casa, uma árvore e o sol). Pinte cada um com a cor que você vai usar no Maya. Esse será o seu mapa de cores!`,
      gabarito: `O desenho deve ter pelo menos 3 objetos, cada um pintado de uma cor. Acertou quem fez o plano colorido e consegue apontar e dizer qual cor cada objeto vai ter no Maya.`,
    },
    {
      titulo: `Desafio da Cena Colorida`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o desafio final que junta tudo. Peça que cada criança monte no Maya a cena que planejou no papel. Devem criar os objetos, pintar cada um, e usar mover (W), girar (E) e crescer (R). Ande pela sala lembrando das teclas e da tecla "6" para ver a cor.`,
      atividade: `Monte a sua cena no Maya seguindo o seu desenho: crie 3 objetos, pinte cada um com a sua cor, e arrume eles movendo, girando e crescendo. No fim, deixe o seu objeto favorito bem grandão no meio e mostre para a turma.`,
      gabarito: `A cena pronta tem 3 objetos coloridos (cada um com cor diferente), todos posicionados na tela, e pelo menos um deles claramente maior (escalado). Acertou quem combinou pintura com mover, girar e crescer, parecido com o plano do papel.`,
    },
  ],
};
