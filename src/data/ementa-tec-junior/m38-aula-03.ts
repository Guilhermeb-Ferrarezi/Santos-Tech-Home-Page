import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Da IA pronta para o meu projeto",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Entender como a IA já treinada conversa com o jogo por meio de blocos e planejar qual ação do próprio jogo cada aluno vai deixar a IA controlar.`,
  descricao: `Na aula passada a turma treinou uma IA no ML for Kids: ensinou o computador a reconhecer coisas mostrando vários exemplos. Hoje a pergunta muda: "Tudo bem, a IA já sabe reconhecer... mas como é que ela avisa o meu jogo?". A resposta é a ponte feita de blocos. Quando a IA reconhece alguma coisa, ela manda um recado, e o jogo responde com uma ação. É como um interruptor: a IA é o dedo que aperta e a lâmpada é a ação que acende.

Para isso a turma vai aprender um caminho de três partes que se repete em quase todo jogo com IA: primeiro vem a entrada da criança (o que o jogador faz, fala, desenha ou mostra); depois a IA pensa (compara com o que aprendeu e decide o que é mais parecido); por fim o jogo reage (faz algo acontecer na tela, como abrir uma porta, somar um ponto ou mudar a cor). O professor desenha esse fluxo no quadro com três caixas e duas setas, e a turma repete em voz alta: "entra, pensa, reage".

A parte central do dia é cada aluno olhar para o próprio projeto e escolher UMA ação que a IA vai comandar. Não é hora de programar tudo ainda — é hora de planejar com clareza. A criança decide o que será a entrada (por exemplo, mostrar um desenho de maçã para a câmera ou digitar uma palavra), o que a IA precisa reconhecer (a etiqueta que ela treinou, como "maçã" ou "banana") e qual ação o jogo faz quando reconhece (por exemplo, "ganha 1 ponto"). Esse plano vira a planta da ponte que será montada com blocos na Aula 4.

No ML for Kids esse plano aparece num lugar chamado "Make" (Fazer), onde o site mostra um espaço de blocos parecido com o Scratch. Hoje a turma só vai ABRIR e RECONHECER esse espaço, ver onde ficam os blocos especiais da IA e arrastar um bloquinho de teste — sem montar a ponte inteira. Assim, quando chegar a Aula 4, ninguém fica perdido na tela.`,
  materiais: [
    `Computadores com o ML for Kids aberto e o projeto de IA de cada aluno já treinado da Aula 2 (etiquetas prontas)`,
    `Projetor ligado para o professor demonstrar a tela do ML for Kids na frente da turma`,
    `Acesso à internet para entrar no site machinelearningforkids.co.uk com a conta da turma`,
    `Quadro branco ou lousa para desenhar o fluxo "entra, pensa, reage" com três caixas e duas setas`,
    `Folha "Planta da minha ponte" impressa, com três espaços: Entrada / IA reconhece / Jogo reage`,
    `Um projeto de exemplo já montado pelo professor (uma IA simples que reconhece "feliz" ou "triste" e muda a carinha na tela)`,
    `Lápis, borracha e canetinhas coloridas para preencher a planta`,
  ],
  conceitosChave: [
    `Ponte de blocos — o caminho que liga a IA ao jogo; quando a IA reconhece algo, ela manda o recado e o jogo faz uma ação.`,
    `Entrada — o que a criança faz para o jogo: mostrar um desenho, falar, digitar uma palavra ou clicar.`,
    `Reconhecer — quando a IA olha a entrada e diz "isso é mais parecido com..." escolhendo uma das etiquetas que aprendeu.`,
    `Etiqueta — o nome de cada grupo que a IA treinou, como "maçã" ou "banana"; é por ela que a IA responde.`,
    `Ação — o que o jogo faz quando a IA reconhece: somar ponto, abrir porta, mudar a cor ou tocar um som.`,
    `Fluxo — a ordem em que as coisas acontecem: entra, pensa, reage, sempre nessa sequência.`,
    `Espaço de blocos (Make) — a parte do ML for Kids parecida com o Scratch, onde se encaixam os blocos para montar a ponte.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de planejamento, não de programação pesada. O objetivo é a criança entender que a IA não controla o jogo sozinha: ela só reconhece e avisa, e quem decide o que acontece somos nós, com blocos. Guarde na cabeça uma frase: "a IA reconhece, o bloco decide". Você não precisa ser especialista em IA. Basta conhecer o caminho de três passos — entrada, a IA pensa, o jogo reage — e saber onde fica o espaço de blocos no ML for Kids.

No site, depois de entrar no projeto que a turma treinou, há três botões grandes: "Train" (Treinar), "Learn & Test" (Aprender e Testar) e "Make" (Fazer). Hoje o botão importante é o "Make". Ao clicar nele, o site pergunta em qual ferramenta você quer montar os blocos; escolha "Scratch 3" (Scratch três). Abre uma tela igual ao Scratch, e do lado esquerdo, no fim da lista de categorias, aparecem blocos novos com o NOME DO SEU PROJETO. São os blocos especiais da IA. O mais importante chama "recognise ... (label)", que quer dizer "reconhecer e me dizer a etiqueta". Hoje a turma só precisa achar e reconhecer esses blocos, não montar tudo.

Antes da aula, monte um exemplo pronto e simples: uma IA que reconhece se um desenho é "feliz" ou "triste" e troca a carinha na tela. Ter isso pronto deixa a demonstração rápida e concreta.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Relembre a Aula 2 perguntando "o que a nossa IA aprendeu a reconhecer?". Faça a brincadeira do interruptor: você é a IA e diz "reconheci uma maçã!"; a turma, que é o jogo, grita a ação "ganha um ponto!". Repita trocando a etiqueta. Assim eles sentem que a IA avisa e o jogo reage.

Conteúdo novo guiado (15 min): No quadro, desenhe três caixas com setas: "Entrada" -> "IA pensa" -> "Jogo reage". Explique cada uma com o exemplo da carinha. No projetor, abra o ML for Kids, entre no projeto de exemplo, clique no botão "Make" (Fazer) e escolha "Scratch 3". Mostre devagar onde, no canto inferior esquerdo, aparecem os blocos com o nome do projeto. Aponte o bloco "recognise" e leia junto: "re-co-nhe-cer". Não monte o jogo todo; só mostre onde mora a ponte.

Mão na massa (25 min): Entregue a "Planta da minha ponte". Cada criança preenche os três espaços do próprio projeto: Entrada (o que o jogador faz), IA reconhece (qual etiqueta), Jogo reage (qual ação). Depois cada aluno entra no seu projeto no ML for Kids, clica em "Make" e "Scratch 3" e, só de teste, arrasta para o meio da tela um bloco da IA, sem ligar a nada. Circule mesa a mesa lendo as plantas e elogiando ideias claras.

Desafio + compartilhar (10 min): Cada aluno mostra a planta e lê em voz alta: "Quando eu... a IA reconhece... e o jogo...". O desafio é que a frase tenha as três partes na ordem certa. Guarde as plantas: elas serão a base da Aula 4, quando a ponte de blocos será montada de verdade.

## Como explicar para crianças

Use o interruptor e a lâmpada: "a IA é o dedo que aperta, a ação do jogo é a lâmpada que acende". Use também o porteiro: a IA é o porteiro que olha quem chegou e grita o nome; o jogo é quem decide se abre a porta. Repita o bordão "entra, pensa, reage" batendo palma em cada palavra. Deixe claro que a IA só reconhece — não inventa a ação sozinha; quem manda na ação são os blocos que a criança vai montar.

## Erros comuns e como ajudar

Achar que a IA faz tudo sozinha: lembre que a IA só avisa, e o bloco é que faz acontecer. Querer montar a ponte inteira hoje: explique que hoje é a planta e que a construção é na próxima aula. Inverter a ordem do fluxo (reage antes de pensar): leve de volta ao quadro e refaça "entra, pensa, reage". Escolher uma ação difícil demais: ajude a trocar por algo simples, como somar um ponto ou trocar a cor. Procurar os blocos da IA no lugar errado: mostre que eles ficam no fim da lista de categorias, com o nome do projeto. Esquecer de salvar o projeto: lembre de clicar para salvar antes de fechar.`,
  exercicios: [
    {
      titulo: `Entra, pensa, reage`,
      tipo: `Jogo corporal em grupo`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme três grupos: "Entrada", "IA" e "Jogo". Você narra uma situação ("a criança mostrou um desenho de gato"). O grupo Entrada levanta a mão, o grupo IA diz a etiqueta ("gato!") e o grupo Jogo grita a ação ("mia!"). Repita trocando os exemplos e os papéis.`,
      atividade: `No seu grupo, faça a sua parte na ordem certa: quem é Entrada levanta a mão, quem é IA fala o nome do que reconheceu e quem é Jogo faz a ação. Esperem sempre a sua vez na sequência.`,
      gabarito: `A ordem correta é sempre Entrada, depois IA, depois Jogo. Exemplo certo: mão levantada -> "gato!" -> "mia!". Está errado quando o Jogo reage antes de a IA falar. O objetivo é a turma sentir que a ação só vem depois que a IA reconhece.`,
    },
    {
      titulo: `Caça aos blocos da IA`,
      tipo: `Exploração guiada no computador`,
      tempo: `6 minutos`,
      guiaProfessor: `Peça que cada aluno entre no próprio projeto, clique no botão "Make" (Fazer) e escolha "Scratch 3" (Scratch três). Ajude a encontrar, no fim da lista de categorias da esquerda, os blocos com o nome do projeto. Cada um arrasta um bloco da IA para o meio da tela só para testar.`,
      atividade: `No seu projeto, clique em "Make" e depois em "Scratch 3". Procure na lista da esquerda os blocos com o nome do seu projeto e arraste um deles para o meio da tela. Não precisa ligar em nada ainda.`,
      gabarito: `O aluno acertou quando achou os blocos especiais (que aparecem no fim da lista de categorias, com o nome do projeto) e arrastou um para a área de montagem. O bloco mais importante é o "recognise ... (label)", que reconhece a entrada e devolve a etiqueta. Não há ligação a fazer; basta localizar e arrastar.`,
    },
    {
      titulo: `Qual é a entrada certa?`,
      tipo: `Associação no papel`,
      tempo: `6 minutos`,
      guiaProfessor: `Na folha, há projetos de um lado e entradas do outro. A criança liga cada projeto à entrada que faz sentido. Reforce que entrada é o que o jogador faz para a IA olhar (mostrar, falar, digitar). Leia as opções em voz alta para quem tem dúvida.`,
      atividade: `Ligue cada projeto à entrada certa: o jogo que reconhece desenhos de frutas; o jogo que reconhece palavras digitadas; o jogo que reconhece sons de animais. Escolha entre: mostrar um desenho para a câmera, digitar uma palavra, falar perto do microfone.`,
      gabarito: `Jogo de desenhos de frutas -> mostrar um desenho para a câmera. Jogo de palavras digitadas -> digitar uma palavra. Jogo de sons de animais -> falar perto do microfone. A entrada certa é sempre a forma como o jogador entrega a informação para a IA olhar.`,
    },
    {
      titulo: `A planta da minha ponte`,
      tipo: `Planejamento individual`,
      tempo: `9 minutos`,
      guiaProfessor: `Entregue a folha "Planta da minha ponte" com três espaços: Entrada, IA reconhece, Jogo reage. Cada aluno preenche pensando no próprio projeto. Oriente a escolher UMA ação simples. Circule lendo as plantas e ajudando quem escolheu algo complicado demais a simplificar.`,
      atividade: `Na sua planta, escreva três coisas do seu jogo: 1) o que o jogador faz (Entrada); 2) qual etiqueta a IA precisa reconhecer; 3) qual ação o jogo faz quando reconhece. Use só uma ação, bem simples.`,
      gabarito: `Não há resposta única, mas a planta está correta quando tem as três partes preenchidas e ligadas. Exemplo bom: Entrada = "mostrar desenho de maçã"; IA reconhece = "maçã"; Jogo reage = "ganha 1 ponto". Exemplo a corrigir: ação difícil demais (como "criar uma fase nova") ou faltar uma das três partes. A ação deve ser simples e única.`,
    },
    {
      titulo: `Conta a sua ponte`,
      tipo: `Apresentação oral e revisão`,
      tempo: `10 minutos`,
      guiaProfessor: `Cada aluno mostra a planta e lê a frase no formato "Quando eu..., a IA reconhece..., e o jogo...". Confira se as três partes aparecem na ordem certa. Os colegas dão uma dica gentil. Guarde as plantas para a Aula 4.`,
      atividade: `Mostre sua planta para a turma e leia em voz alta: "Quando eu (entrada), a IA reconhece (etiqueta), e o jogo (ação)". Depois ouça uma dica de um colega e diga se sua ponte já está bem planejada.`,
      gabarito: `A apresentação está completa quando a frase tem as três partes na ordem entra, pensa, reage. Exemplo correto: "Quando eu mostro um desenho de banana, a IA reconhece banana, e o jogo solta um som de macaco". Está incompleta se faltar a entrada, a etiqueta ou a ação, ou se a ordem estiver trocada. A planta pronta vira a base da ponte de blocos da próxima aula.`,
    },
  ],
};
