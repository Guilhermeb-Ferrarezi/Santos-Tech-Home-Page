import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Construindo com Código",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança junta um comando que liga o Agente com loops que se repetem para construir, por código, uma pequena estrutura como uma parede ou um quadrado no Minecraft.`,
  descricao: `Nesta aula chegamos ao grande momento do mês: as crianças vão juntar tudo o que aprenderam até aqui. Nas aulas anteriores elas conheceram o comando que liga o jogo (o gatilho que faz o código começar), conheceram o Agente — aquele robôzinho ajudante que mora dentro do Minecraft — e descobriram o loop, que é o jeito de mandar o Agente repetir a mesma coisa muitas vezes sem a gente cansar de digitar. Agora vamos encaixar essas três ideias em uma única receita de blocos.

O assunto central é simples e poderoso: dá para CONSTRUIR usando código. Em vez de colocar bloco por bloco com a mão, a criança escreve uma sequência de comandos e o Agente faz o trabalho pesado. Isso importa porque é a primeira vez que elas veem o computador criando algo de verdade no mundo do jogo a partir das ordens delas. A estrutura nasce sozinha na tela, e isso costuma arrancar muitos "uau!" da turma.

O que vamos fazer na prática é montar um programinha que começa com um comando para o Agente (por exemplo, ele se posiciona e recebe um tipo de bloco para colocar) e usa um loop "repetir" para enfileirar vários blocos, formando uma parede ou um quadrado. Com o apoio do professor, a turma encaixa os blocos do MakeCode na ordem certa, aperta o gatilho dentro do Minecraft e assiste o Agente erguer a construção.

Esta é a penúltima aula do mês. Ela prepara o terreno para a aula 8, quando as crianças vão usar essas mesmas peças para finalizar o Projeto Minecraft. Por isso, o foco aqui é a alegria de ver a estrutura nascer e a ideia de que ordem certa + repetição = construção. Não precisamos de estruturas grandes nem perfeitas: o que vale é a criança entender que ela mandou e o jogo obedeceu.`,
  materiais: [
    `Um computador por criança (ou em duplas) com o Minecraft Education (ou Bedrock com Code Connection) já aberto, mundo plano carregado e o editor MakeCode acessível pelo ícone do agente/comando dentro do jogo.`,
    `Projetor ou TV ligada no computador do professor para demonstrar cada passo na tela grande.`,
    `Um mundo de exemplo já preparado: chão plano, tempo travado em dia, clima limpo e modo criativo, para evitar monstros e queda de blocos.`,
    `Um arquivo de exemplo do MakeCode já salvo no computador do professor: um programa pronto com o comando inicial do Agente e um loop "repetir" montando uma parede, para mostrar o resultado final caso a turma trave.`,
    `Cartões de blocos impressos em papel grande (um cartão "quando digito comando", um cartão "agente colocar", um cartão "repetir") para montar a ordem na parede ou no chão antes de ir para o computador.`,
    `Peças de montar (LEGO, blocos de madeira ou cubos de E.V.A.) para a roda de aquecimento, simulando o Agente empilhando blocos.`,
    `Adesivos ou carimbos de "Mestre Construtor" para celebrar quem terminar a construção.`,
  ],
  conceitosChave: [
    `Comando inicial — é o botão de "começar". A gente digita uma palavra no chat e o código acorda e roda.`,
    `Agente — o robôzinho ajudante que mora dentro do Minecraft. Ele faz o que a gente manda, como colocar blocos.`,
    `Loop (repetir) — uma caixinha que diz "faça isso de novo e de novo". A gente escolhe quantas vezes.`,
    `Bloco de código — uma pecinha colorida que encaixa em outra, como peça de montar, para formar uma ordem.`,
    `Sequência — a ordem certa das peças. Se trocar a ordem, a construção sai diferente ou nem sai.`,
    `Construção por código — quando a gente escreve a ordem e o Agente ergue a parede ou o quadrado sozinho.`,
    `Avançar — o passinho do Agente para o lado, para o próximo bloco não nascer em cima do anterior.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

Esta aula reúne três peças que a turma já viu: o comando que dispara o código, o Agente e o loop. A grande novidade é combiná-las para construir. No MakeCode, todo programa do Agente começa com um bloco de evento, geralmente "ao digitar comando" (em inglês, "on chat command"). Esse bloco fica no gaveteiro "Player" e funciona como o gatilho: quando a criança digita a palavra escolhida no chat do Minecraft, tudo que estiver dentro dele roda.

Dentro do evento, usamos blocos da gaveta "Agent" (Agente). Os principais hoje são: "agent place" (agente colocar bloco) e "agent move forward" (agente avançar). Para construir uma parede, a receita é: o Agente coloca um bloco, avança um passo, coloca outro bloco, avança de novo. Como repetir isso na mão é cansativo, envolvemos esses dois comandos num bloco "repeat" (repetir), da gaveta "Loops", escolhendo um número, por exemplo 5. Resultado: uma fileira de 5 blocos, ou seja, uma mini-parede. Se a turma estiver pronta, dá para colocar um loop dentro de outro para erguer camadas e formar um quadrado, mas isso é opcional — não force.

Antes da aula, deixe o mundo em modo criativo, dia travado e plano. Teste a sua própria receita uma vez para garantir que o Agente nasce na frente do jogador e não dentro de uma parede.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Minecraft + MakeCode)

10 min — Aquecimento: sente a turma em roda com as peças de montar. Você é o "Agente" e elas dão ordens: "coloca", "anda", "coloca", "anda". Empilhe na ordem que disserem. Pergunte: "e se a gente tivesse que falar coloca-anda dez vezes? Cansa, né? Existe uma peça que repete sozinha." Mostre o cartão "repetir".

15 min — Conteúdo guiado no projetor: abra o Minecraft, entre no mundo e abra o MakeCode (ícone de lápis/código ou tecla C). Mostre o bloco "ao digitar comando" já na tela. Vá na gaveta "Agente" e arraste "agente colocar". Depois arraste "agente avançar". Encaixe os dois. Agora vá na gaveta "Loops", pegue "repetir 4 vezes", e coloque os dois blocos do Agente DENTRO dele. Mude o número para 5. Volte ao Minecraft, digite a palavra do comando no chat e mostre a parede nascendo.

25 min — Mão na massa: cada criança (ou dupla) repete no próprio computador. Caminhe pela sala. Ajude a encaixar os blocos na ordem certa: primeiro o evento, dentro dele o "repetir", e dentro do "repetir" o "colocar" e o "avançar". Deixe cada uma testar várias vezes e mudar o número do loop e o tipo de bloco (pedra, vidro, lã colorida).

10 min — Desafio e compartilhar: proponha trocar a cor do bloco ou aumentar o loop para 8. Cada criança mostra a sua parede no projetor ou para o coleguinha. Entregue o adesivo de Mestre Construtor.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a analogia da fila de tijolos: "O Agente é um pedreirinho. Cada vez que ele coloca um tijolo, precisa dar um passinho para o lado, senão o tijolo novo cai em cima do velho." Para o loop, diga: "O repetir é uma máquina de fazer igual. A gente fala uma vez e ela faz cinco." Mostre com o corpo: bata palma e ande um passo, repita, e diga que é exatamente isso que o Agente faz. Evite palavras técnicas; fale "caixinha que repete" em vez de "loop", "robôzinho" em vez de "Agente" e "começar" em vez de "evento".

## Erros comuns e como ajudar

O erro mais comum é esquecer o "avançar": sem ele o Agente coloca todos os blocos no mesmo lugar e parece que nada acontece. Peça para a criança apontar onde está o "avançar" dentro do repetir. Outro erro é colocar os blocos do Agente fora do "repetir" — eles ficam soltos e o loop fica vazio; mostre que tudo precisa estar abraçado pela caixinha. Alguns digitam a palavra do comando errada no chat; combine uma palavra curta e fácil, como "casa". Se o Agente sumir, use "agente teletransportar para o jogador" para trazê-lo de volta. E lembre: elogie cada parede, mesmo torta — o que importa é que o código obedeceu.`,
  exercicios: [
    {
      titulo: `Fila de Tijolos com o Corpo`,
      tipo: `jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `Introduza dizendo que antes de mexer no computador a turma vai virar o Agente. Você comanda em voz alta e a criança obedece com o corpo, igualzinho ao robôzinho do jogo. Isso prepara o cérebro para a sequência colocar-avançar.`,
      atividade: `Em pé, em fila, cada criança segura uma peça de montar. Ao ouvir "colocar", ela abaixa e finge encaixar a peça no chão; ao ouvir "avançar", dá um passo para o lado. O professor repete "colocar, avançar" cinco vezes, formando uma fileira de peças no chão.`,
      gabarito: `A turma acerta quando, ao final, há cinco peças lado a lado sem nenhuma empilhada em cima da outra. Se as peças ficaram amontoadas, é sinal de que o passo "avançar" foi esquecido — exatamente o erro que veremos no código.`,
    },
    {
      titulo: `Monta a Ordem com Cartões`,
      tipo: `desenho/papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Espalhe no chão os cartões de blocos embaralhados: "quando digito comando", "repetir", "agente colocar" e "agente avançar". Conduza perguntando qual peça vem primeiro, qual abraça as outras e o que fica dentro do repetir.`,
      atividade: `Em duplas, as crianças organizam os quatro cartões na ordem certa de cima para baixo: primeiro o comando que começa, dentro dele o "repetir", e dentro do "repetir" o "colocar" e o "avançar".`,
      gabarito: `A ordem correta é: 1) "quando digito comando" no topo; 2) "repetir" logo abaixo, por dentro; 3) "agente colocar"; 4) "agente avançar", os dois últimos encaixados dentro do "repetir". Está certo se o comando estiver por fora abraçando tudo e os dois blocos do Agente estiverem dentro do repetir.`,
    },
    {
      titulo: `Minha Primeira Parede de Código`,
      tipo: `prática na ferramenta`,
      tempo: `18 minutos`,
      guiaProfessor: `Leve a turma ao computador. Refaça com elas, passo a passo no projetor, e depois deixe cada uma montar. Lembre onde clicar: gaveta "Agente" para "colocar" e "avançar", gaveta "Loops" para "repetir". Circule e ajude a encaixar.`,
      atividade: `Cada criança monta no MakeCode: bloco "ao digitar comando" com a palavra "casa"; dentro dele um "repetir 5 vezes"; dentro do repetir, "agente colocar" e depois "agente avançar". Volta ao Minecraft e digita "casa" no chat.`,
      gabarito: `Acertou quando, ao digitar "casa", o Agente ergue uma fileira de cinco blocos formando uma parede baixinha. Se todos os blocos nascem no mesmo ponto, falta o "avançar"; se nada acontece, os blocos do Agente provavelmente ficaram fora do "repetir".`,
    },
    {
      titulo: `Roda do Mestre Construtor`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma em roda perto das telas. Faça perguntas simples para cada criança contar o que descobriu e celebrar a construção. O objetivo é nomear, com as palavras delas, que ordem certa mais repetição constrói.`,
      atividade: `Cada criança responde em voz alta: "Quantos blocos a sua parede tem?", "O que faz o Agente andar para o lado?" e "O que a caixinha de repetir faz?". Quem quiser mostra a parede no projetor.`,
      gabarito: `As respostas esperadas são: o número de blocos é igual ao número do loop (por exemplo, cinco); o que faz o Agente andar é o bloco "avançar"; e a caixinha de repetir faz a mesma ação acontecer várias vezes. Qualquer resposta nessa direção, mesmo com as palavras da criança, conta como acerto.`,
    },
    {
      titulo: `Desafio: Muda a Cor e o Tamanho`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Proponha como missão extra para quem já terminou a parede. Mostre, no projetor, onde trocar o tipo de bloco no "agente colocar" e onde mudar o número do "repetir". Incentive a experimentar e comparar com o coleguinha.`,
      atividade: `A criança troca o bloco do Agente por outro de cor diferente (vidro, lã azul ou pedra) e muda o número do "repetir" de 5 para 8. Roda o comando "casa" de novo e observa a nova parede.`,
      gabarito: `Está correto quando a parede nasce com a nova cor escolhida e fica mais comprida, com oito blocos em vez de cinco. Se o número de blocos não mudou, a criança alterou o bloco errado; ajude-a a localizar o campo de número dentro do "repetir".`,
    },
  ],
};
