import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Três Vidinhas",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança vai criar uma variável de vidas mostrada como corações na tela e fazer o herói perder uma vidinha quando encostar no inimigo.`,
  descricao: `Nesta aula as crianças descobrem a ideia de "vidas" no jogo. Quase todo mundo já viu um joguinho em que o personagem tem três coraçõezinhos no cantinho da tela e, quando toma um dano, perde um coração. É exatamente isso que vamos construir juntos, do jeito mais simples possível, usando o Scratch.

A grande novidade técnica é a variável. Uma variável é como uma caixinha que guarda um número e lembra dele durante o jogo. Vamos criar uma variável chamada "vidas", começar com o valor 3 e fazer esse número diminuir de 1 toda vez que o herói encostar no inimigo. Como as crianças desta turma leem pouco, a estratégia é mostrar o número grande na tela e dar muito apoio visual, transformando esse número em corações sempre que possível.

Esta é a segunda aula do projeto Scratch do mês, dentro do foco "Jogos com regras". Na aula passada o herói já reagia ao encostar em coisas; agora damos um passo importante: o jogo passa a guardar uma informação que muda durante a partida. Isso prepara o terreno para as próximas aulas, em que essas vidas vão acabar e teremos a tela de "Fim de Jogo".

O professor não precisa ser especialista em Scratch. Este material é um tutorial: diz onde clicar, o nome de cada botão e painel, e o que as crianças costumam errar. A meta da aula não é um jogo perfeito, e sim a alegria de ver o número de vidas diminuir na hora certa quando o herói toma um "tchoque".`,
  materiais: [
    `Computadores com o Scratch já aberto em um projeto novo (um por criança ou em duplas), de preferência com a versão offline ou o site scratch.mit.edu pronto na tela`,
    `Projetor ou TV ligada no computador do professor para demonstrar cada passo em tamanho grande`,
    `Um projeto de exemplo já montado pelo professor, com herói, inimigo e a variável "vidas" funcionando, para usar de modelo`,
    `Três corações de papel ou EVA grandes (ou desenhados no quadro) para a brincadeira de aquecimento`,
    `Folhas de desenho e lápis de cor para a atividade no papel`,
    `Adesivos ou carimbos para comemorar quando cada criança fizer a vida diminuir`,
    `Lista com o nome das crianças para o professor anotar quem já conseguiu e quem precisa de ajuda`,
  ],
  conceitosChave: [
    `Variável — uma caixinha mágica que guarda um número e lembra dele durante todo o jogo.`,
    `Vidas — quantas chances o herói ainda tem antes do jogo acabar; aqui começam em três.`,
    `Valor inicial — o número que colocamos na caixinha quando o jogo começa, que para nós é três.`,
    `Diminuir de 1 — tirar uma unidade da caixinha, igual a perder um coração quando toma dano.`,
    `Mostrar na tela — deixar o número de vidas aparecendo no cantinho para todo mundo ver.`,
    `Encostou no inimigo — o momento em que o herói toca o inimigo e perde uma vidinha.`,
    `Quando bandeira clicada — o bloco que faz tudo começar e zera as vidas para três de novo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

Uma variável é apenas uma caixinha que guarda um número e lembra dele. No Scratch, ela vive na aba "Variáveis", na coluna de blocos à esquerda (categoria laranja-escuro). Hoje criaremos uma única variável chamada "vidas". Ela precisa de três comportamentos: começar valendo 3 quando o jogo inicia, aparecer na tela e perder 1 quando o herói encosta no inimigo.

Os blocos-chave são: "definir [vidas] para (3)" (coloca o valor inicial), "mudar [vidas] por (-1)" (tira uma vidinha) e a caixinha de seleção ao lado do nome da variável, que faz o número aparecer na tela (o "monitor"). A detecção do toque usa "tocando em [inimigo]?" dentro de um bloco "se ... então", repetido dentro de um "sempre". Tudo fica no herói. Monte o exemplo em casa uma vez antes da aula; quando você mesmo vir a vida cair, vai ensinar com segurança.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Scratch)

Aquecimento (10 min): segure três corações de papel. A cada "tchoque" que você anuncia, tire um coração e pergunte quantos sobraram. Quando chegar a zero, faça cara de "fim de jogo". Isso ensina a contagem regressiva sem nenhum computador.

Conteúdo novo guiado (15 min): no projetor, abra o Scratch. Clique na aba "Variáveis" (categoria laranja). Clique no botão "Criar uma variável", digite "vidas" e confirme em "OK". Mostre que apareceu um quadradinho com o número no palco. Arraste o bloco "definir [vidas] para (0)", troque o 0 por 3 e encaixe logo abaixo de "quando [bandeira verde] clicada". Clique na bandeira e mostre o número virar 3.

Mão na massa (25 min): cada criança repete nos computadores, com você passando de mesa em mesa. Os passos são: 1) criar a variável "vidas"; 2) encaixar "definir [vidas] para (3)" sob a bandeira verde; 3) montar "sempre" e, dentro dele, "se <tocando em [inimigo]?> então"; 4) dentro do "se", colocar "mudar [vidas] por (-1)". Para o número não despencar de uma vez, ensine a empurrar o herói para longe logo depois, com um "deslize por (0.3) segundos até x: ... y: ..." ou um simples "vá para x: ... y: ...". Mande clicar na bandeira e encostar de propósito no inimigo para ver a vida cair de 3 para 2.

Desafio e compartilhar (10 min): proponha trocar o número inicial para 5 e ver cinco vidas. Depois, cada dupla mostra no projetor o herói perdendo uma vidinha. Todos contam juntos em voz alta.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a imagem da caixinha: "A variável é uma caixinha que guarda um número e nunca esquece dele." Use os corações: "Cada coração é uma chance. Tomou um tchoque, perde um coração." Diga que "mudar por menos 1" é o mesmo que "tirar um coração". Conte sempre em voz alta junto com a turma: "Três... dois... um...". Evite a palavra "decrementar"; diga "perder uma vidinha". Comemore cada queda do número com palmas, porque ver o número mudar na hora certa é a vitória do dia.

## Erros comuns e como ajudar

O erro mais comum é a vida cair muito rápido, de 3 para zero num piscar. Isso acontece porque o "sempre" tira vidas a cada instante em que os corpos se tocam. A solução para a idade é afastar o herói logo depois de perder a vida, então ele para de tocar. Outro erro é esquecer o "definir [vidas] para (3)": aí o número começa de qualquer jeito; mostre que sem ele a caixinha guarda o valor da última partida. Há quem coloque os blocos no inimigo em vez do herói; combine que "a regra de perder vida mora no herói". Por fim, alguns desmarcam sem querer a caixinha que mostra o número no palco; basta marcá-la de novo na aba "Variáveis".`,
  exercicios: [
    {
      titulo: `Tira-Coração no Quadro`,
      tipo: `roda de conversa / brincadeira`,
      tempo: `8 minutos`,
      guiaProfessor: `O professor desenha três corações no quadro (ou usa os de papel) e explica que cada coração é uma chance do herói. A cada "tchoque" anunciado, apaga um coração e pergunta à turma quantos sobraram. Conduza a contagem em voz alta com todos.`,
      atividade: `Olhem os três corações. Toda vez que eu disser "tchoque", a gente apaga um coração e fala juntos quantos ficaram. Vamos lá: tchoque! Quantos sobraram? E agora, tchoque de novo! Continuem até acabar.`,
      gabarito: `As crianças respondem na ordem certa: começa com 3, depois 2, depois 1 e por fim 0. Acertou quem acompanha a contagem regressiva e percebe que ao chegar a zero o herói fica sem chances ("fim de jogo").`,
    },
    {
      titulo: `Criando a Caixinha das Vidas`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre no projetor e peça que cada criança repita. Mostre a aba "Variáveis" (laranja), o botão "Criar uma variável", o nome "vidas" e o bloco "definir [vidas] para (3)" encaixado sob "quando bandeira verde clicada". Passe de mesa em mesa conferindo o número no palco.`,
      atividade: `No seu Scratch, clique na aba laranja "Variáveis", clique em "Criar uma variável", escreva "vidas" e dê OK. Depois arraste o bloco "definir vidas para" para baixo da bandeira verde e troque o número para 3. Clique na bandeira e veja o número aparecer.`,
      gabarito: `Está certo quando, ao clicar na bandeira verde, aparece o quadradinho "vidas" no palco mostrando o número 3. Se mostrar outro número, falta trocar o valor para 3 ou encaixar o bloco sob a bandeira.`,
    },
    {
      titulo: `O Herói Toma Tchoque`,
      tipo: `prática na ferramenta`,
      tempo: `14 minutos`,
      guiaProfessor: `Ajude cada criança a montar, no herói, um bloco "sempre" com um "se <tocando em [inimigo]?> então" dentro, e dentro do "se" o bloco "mudar [vidas] por (-1)". Para a vida não cair demais, ensine a afastar o herói logo depois. Mande encostar de propósito no inimigo.`,
      atividade: `No herói, monte assim: bloco "sempre"; dentro dele "se tocando no inimigo então"; e dentro do "se" o bloco "mudar vidas por -1". Depois faça o herói dar um pulinho para longe. Clique na bandeira e encoste no inimigo de propósito para ver a vida cair.`,
      gabarito: `Está certo quando, ao encostar no inimigo, o número de vidas cai de 3 para 2 (e segue caindo a cada novo toque). Se cair direto para zero, falta afastar o herói depois de perder a vida.`,
    },
    {
      titulo: `Meu Cantinho de Vidas`,
      tipo: `desenho / papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua folhas e lápis. Peça que cada criança desenhe a tela do seu jogo mostrando o herói, o inimigo e, no cantinho, os corações de vida. Converse sobre quantos corações cada um escolheu e por quê.`,
      atividade: `Desenhe a tela do seu jogo: o herói de um lado, o inimigo do outro e, num cantinho, os seus coraçõezinhos de vida. Faça um X em cima de um coração para mostrar o herói perdendo uma vidinha.`,
      gabarito: `Está completo o desenho que mostra herói, inimigo e os corações no canto, com pelo menos um coração marcado como perdido. O número de corações deve combinar com o valor inicial que a criança escolheu (3 ou outro).`,
    },
    {
      titulo: `Desafio das Cinco Vidas`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Proponha aumentar a dificuldade do conceito: trocar o valor inicial de 3 para 5 e ver cinco vidas. Quem terminar antes pode tentar fazer o número piscar com uma cor. Deixe cada dupla mostrar o resultado no projetor.`,
      atividade: `Mude o bloco "definir vidas para 3" para "definir vidas para 5". Clique na bandeira e confira: agora começa com cinco vidinhas. Encoste algumas vezes no inimigo e conte com a turma quantas vidas vão sobrando.`,
      gabarito: `Está certo quando o jogo começa mostrando 5 e cada toque no inimigo faz o número cair de um em um (5, 4, 3...). Acertou quem consegue explicar que mudou só o "valor inicial" dentro da caixinha das vidas.`,
    },
  ],
};
