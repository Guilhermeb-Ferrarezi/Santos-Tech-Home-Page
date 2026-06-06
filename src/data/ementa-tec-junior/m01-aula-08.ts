import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Nossa Obra Pronta: Projeto Minecraft",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança finaliza e personaliza sua mini-construção feita por código, escolhendo o bloco e o tamanho, testa o comando completo do começo ao fim e mostra a obra pronta para a turma.`,
  descricao: `Esta é a última aula do mês e o grande dia de fechamento do Projeto Minecraft (parte 1). Durante as semanas anteriores, as crianças aprenderam a falar com o jogo por comandos, conheceram o Agente, ensinaram o Agente a andar e a repetir movimentos com o loop, e começaram a construir com código. Agora chegou a hora de juntar tudo: cada aluno vai deixar a sua mini-construção pronta, com a sua cara, e provar que o código funciona do início ao fim.

Personalizar é a palavra-chave da aula. Em vez de todos fazerem a mesma coisa, cada criança escolhe o tipo de bloco (madeira, pedra, vidro, lã colorida) e o tamanho da construção (uma torre baixinha, uma parede mais larga, um quadrado maior ou menor). Isso é importante porque mostra a elas que o mesmo código pode gerar resultados diferentes só trocando um número ou um bloco. O resultado é a primeira noção de que o programador tem escolhas e poder de decisão.

Testar do começo ao fim significa apertar o botão de rodar o código, observar o Agente ou a construção acontecendo no mundo, e conferir se ficou como o aluno imaginou. Se não ficou, a criança aprende a voltar ao código, ajustar e rodar de novo. Esse ciclo de tentar, ver o que aconteceu e melhorar é o coração da programação, e nesta aula ele aparece de forma simples e divertida.

A aula termina com uma roda de apresentação: cada criança mostra a sua obra para os colegas e conta o que escolheu. Esse momento valoriza o esforço de todos, fecha o projeto do mês com orgulho e prepara o terreno para a parte 2 do Projeto Minecraft que virá mais adiante.`,
  materiais: [
    `Computadores (um por criança ou em duplas) com Minecraft Education ou Minecraft Bedrock e o editor MakeCode já abertos no mesmo mundo.`,
    `Projetor ou TV grande conectado ao computador do professor, para demonstrar os passos e depois exibir as obras das crianças.`,
    `Um mundo Minecraft em modo Criativo, plano e vazio, já preparado antes da aula (sem monstros, com dia fixo se possível).`,
    `Arquivo de exemplo: um código simples de construção já montado no MakeCode do professor (uma torre ou um quadrado de blocos) para servir de modelo.`,
    `Cartões ou folhas com desenhos dos tipos de bloco (madeira, pedra, vidro, lã colorida) para a criança escolher apontando.`,
    `Folhas de papel e lápis de cor para o exercício de desenho da obra.`,
    `Adesivos ou carimbos de "Obra Pronta" para premiar cada criança ao final da apresentação.`,
  ],
  conceitosChave: [
    `Personalizar — deixar a construção com a sua cara, escolhendo a cor do bloco e o tamanho do jeito que você gosta.`,
    `Bloco — o tijolinho do Minecraft; pode ser de madeira, pedra, vidro ou lã colorida, e você escolhe qual usar no seu código.`,
    `Tamanho — quantos blocos a sua construção vai ter; um número maior faz uma obra maior, um número menor faz uma obra menor.`,
    `Testar — apertar o botão de rodar e olhar no jogo se a construção ficou do jeito que você queria.`,
    `Ajustar — quando não ficou legal, voltar no código, trocar um número ou um bloco e rodar de novo até ficar bom.`,
    `Código completo — todos os comandos juntos, na ordem certa, que fazem a obra do começo ao fim quando você aperta rodar.`,
    `Apresentar — mostrar a sua obra pronta para a turma e contar o que você escolheu e como fez.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Esta aula não traz comando novo: ela consolida o que já foi visto. O aluno vai abrir o código que começou na aula 7 (construir com código) e deixá-lo pronto, mudando duas coisas simples: o tipo de bloco e o tamanho (um número). No MakeCode, o bloco usado para construir é geralmente o "place" (colocar bloco) ou, quando há repetição, um "repeat" (repetir) que enfileira blocos. Você não precisa dominar Minecraft: basta saber abrir o MakeCode, arrastar blocos, trocar o desenho do bloco e mudar um número. Tudo é visual, encaixando peças como Lego.

Para abrir o editor: dentro do Minecraft, aperte a tecla C ou clique no ícone do Agente/Code Builder na barra; isso abre o MakeCode no navegador interno. O código fica em blocos coloridos no centro da tela. À esquerda há as gavetas (Player, Blocks, Agent, Loops). Para rodar, o aluno volta ao jogo e digita o comando no chat (tecla T ou Enter) ou aperta o botão verde de "play" no MakeCode, conforme a versão.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): no projetor, mostre uma construção sua já pronta no jogo. Pergunte: "O que vocês acham que dá pra mudar aqui?" Aceite respostas como "a cor", "o tamanho". Abra o MakeCode e mostre rapidinho onde fica o número do tamanho e o desenho do bloco. Relembre que já sabem fazer o Agente andar e repetir.

Conteúdo novo guiado (15 min): com o projetor ligado, demonstre a personalização. Primeiro, clique no bloco "place" (ou no bloco dentro do "repeat") e clique no quadradinho do bloco; abre uma paleta; escolha, por exemplo, lã azul. Depois clique no número do "repeat" (ex.: 5) e troque por 7 para a obra ficar maior. Aperte rodar e mostre a diferença no jogo. Faça devagar, narrando cada clique: "clico aqui, escolho a cor, troco o número, aperto rodar".

Mão na massa (25 min): cada criança abre o próprio código, escolhe o bloco (use os cartões para ajudar a decidir), troca o número do tamanho e roda. Circule pela sala. Incentive testar mais de uma cor e mais de um tamanho. Quem terminar, ajuda o colega do lado. O objetivo é que todos tenham uma obra pronta e testada.

Desafio + compartilhar (10 min): faça a roda de apresentação. Conecte o computador de cada criança ao projetor (ou peça que mostrem na própria tela) e cada uma diz: "Eu escolhi o bloco ___ e o tamanho ___." Aplauda todos. Entregue o adesivo de "Obra Pronta".

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de "deixar com a sua cara", como escolher a cor da mochila ou da roupa. O número do tamanho é como pedir "mais" ou "menos": número grande, obra grande; número pequeno, obra pequena. Trocar o bloco é como trocar a cor do giz de cera. Testar é como apertar o botão do brinquedo pra ver ele funcionar. Fale pouco e mostre muito: aponte na tela, faça junto, deixe a criança clicar.

## Erros comuns e como ajudar

As crianças costumam mudar o código e esquecer de apertar rodar de novo, achando que mudou sozinho; lembre sempre "trocou, roda de novo". Outra confusão é clicar no lugar errado e arrastar um bloco para fora; mostre o botão de desfazer (a setinha curva no topo) ou peça ajuda. Algumas escolhem números enormes (ex.: 50) e a obra fica gigante ou demora; sugira números de 3 a 10. Há quem fique com vergonha de apresentar; deixe falar só uma frase ou apenas apontar a cor. Se o código não roda, confira se estão no mundo certo e se o Agente não bateu na parede; basta voltar e rodar de novo.`,
  exercicios: [
    {
      titulo: `Escolha a Cor do Seu Bloco`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Introduza dizendo que hoje cada um deixa a obra com a sua cara. Mostre no projetor como clicar no quadradinho do bloco dentro do código para abrir a paleta de blocos. Faça um exemplo trocando para lã vermelha e rodando. Depois, libere as crianças para escolherem a própria cor. Circule garantindo que cada uma apertou rodar depois de trocar.`,
      atividade: `Abra o seu código no MakeCode. Clique no quadradinho do bloco da construção. Na paleta que abrir, escolha o seu bloco favorito (madeira, pedra, vidro ou lã colorida). Aperte rodar e olhe a sua construção mudar de cor no jogo.`,
      gabarito: `A criança acertou quando a construção no mundo Minecraft aparece feita do bloco que ela escolheu, e ela consegue dizer qual bloco usou. Se a cor não mudou, provavelmente faltou apertar rodar depois de trocar o bloco.`,
    },
    {
      titulo: `Maior ou Menor? Mude o Número`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Explique que um número no código controla o tamanho da obra. Demonstre clicando no número do bloco "repeat" e trocando de 5 para 8, depois rodando, mostrando que ficou maior. Sugira que usem números entre 3 e 10 para não ficar gigante. Ajude quem digitar números muito grandes a reduzir.`,
      atividade: `No seu código, ache o número do tamanho (dentro do bloco repetir). Troque por outro número entre 3 e 10. Aperte rodar e veja se a sua obra ficou maior ou menor. Tente de novo com outro número para comparar.`,
      gabarito: `A criança acertou quando troca o número, roda e percebe a construção ficar maior ou menor de acordo com o número escolhido, conseguindo explicar "número maior, obra maior". O importante é ela ligar o número ao tamanho.`,
    },
    {
      titulo: `Caça ao Botão Rodar`,
      tipo: `jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `Transforme o teste do código em uma brincadeira. A cada rodada, você diz uma mudança rápida ("troquem a cor!", "deixem menor!", "deixem maior!") e a criança precisa fazer a mudança e apertar rodar o mais rápido que conseguir, sem correr o risco de errar. Quem rodou e mostrou a mudança ganha um ponto da turma. É cooperativo, não competitivo.`,
      atividade: `Quando o professor falar uma ordem (trocar cor, deixar maior ou deixar menor), faça a mudança no seu código e aperte rodar bem rápido. Levante a mão quando a sua obra mudar no jogo. Vamos somar pontos da turma toda junta.`,
      gabarito: `A criança acertou quando, a cada ordem, faz a alteração correta no código e aperta rodar, mostrando a mudança no jogo. O reforço principal é o hábito de "mudou o código, roda de novo". Todos ganham os pontos juntos.`,
    },
    {
      titulo: `Desenhe a Sua Obra Pronta`,
      tipo: `desenho/papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua papel e lápis de cor. Peça que cada criança desenhe a construção que fez no jogo, usando a cor do bloco que escolheu e mostrando se é grande ou pequena. Esse desenho ajuda a criança a registrar e ter orgulho da obra, e dá uma pausa da tela. Passe elogiando e perguntando "qual bloco você usou?".`,
      atividade: `Pegue uma folha e lápis de cor. Desenhe a construção que você fez no Minecraft. Use a mesma cor do bloco que você escolheu e mostre no desenho se ela ficou grande ou pequena. Escreva ou desenhe o seu nome no cantinho.`,
      gabarito: `O desenho está correto quando representa a obra da criança de forma reconhecível: a cor do desenho combina com o bloco escolhido e o tamanho do desenho lembra se a obra ficou grande ou pequena. Não se avalia talento artístico, e sim a relação entre o desenho e as escolhas dela.`,
    },
    {
      titulo: `Mostra da Turma: Minha Obra, Minha Escolha`,
      tipo: `roda de conversa / desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o fechamento do projeto. Coloque a turma em roda. Conecte cada computador ao projetor ou peça que mostrem na própria tela. Cada criança testa o código do começo ao fim na frente dos colegas e diz uma frase sobre o que escolheu. Conduza com perguntas simples: "Qual bloco você usou? Sua obra ficou grande ou pequena?". Aplauda todos e entregue o adesivo de Obra Pronta. Para os tímidos, aceite só apontar a cor.`,
      atividade: `Chegou a sua vez de mostrar a sua obra. Aperte rodar para a turma ver a construção acontecer do começo ao fim. Depois fale uma frase: "Eu escolhi o bloco ___ e o tamanho ___." Aplauda os colegas quando for a vez deles.`,
      gabarito: `O aluno concluiu a aula com sucesso quando roda o código inteiro sem travar, a construção aparece pronta no jogo, e ele consegue dizer pelo menos qual bloco e qual tamanho escolheu. Isso confirma o entregável do Projeto Minecraft parte 1: uma mini-construção por código, personalizada e testada.`,
    },
  ],
};
