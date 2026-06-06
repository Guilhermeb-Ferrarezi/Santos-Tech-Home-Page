import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Desenhando o Mapa do Cenário",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Cada criança vai desenhar no papel um rascunho do cenário do seu jogo 3D, marcando onde ficam o chão, as paredes e os objetos principais, criando um pequeno mapa que vai guiar a modelagem no Maya.`,
  descricao: `Antes de construir qualquer coisa no computador, todo bom criador de jogos faz um desenho. Pense nos arquitetos que constroem casas de verdade: eles nunca começam a levantar paredes sem ter uma planta no papel. Nesta aula, nossas crianças viram pequenos arquitetos de jogos. Elas vão pegar lápis e papel e desenhar o mapa do cenário que imaginaram na aula passada, quando tiveram a grande ideia do jogo.

O mapa do cenário é como uma vista de cima, igual quando olhamos uma sala do alto, ou como o mapa de um tesouro. Nele, a criança decide onde vai ficar o chão (a base de tudo), onde sobem as paredes que cercam o lugar e onde ficam os objetos principais, como uma árvore, uma caixa, uma porta ou uma ponte. Esse desenho simples é o plano que vai dizer para nós, mais tarde, exatamente onde colocar cada forma 3D dentro do Maya.

Nesta aula o computador fica em segundo plano. O Maya pode até estar aberto no projetor para a criança lembrar como o estúdio 3D se parece, mas a estrela é o papel. Desenhar primeiro evita que a criança fique perdida na hora de modelar, porque ela já vai saber o que fazer. É o famoso "pensar antes de fazer", uma habilidade que serve para games e para a vida toda.

Ao final, cada aluno terá um mapa colorido e com legenda, mostrando o chão, as paredes e pelo menos três objetos. Esse plano visual fica guardado e será o guia das próximas aulas, quando começarmos a construir o cenário de verdade dentro do Maya.`,
  materiais: [
    `Computadores com o Maya aberto na tela inicial (para a criança relembrar o estúdio 3D no projetor)`,
    `Projetor ou TV grande conectada ao computador do professor`,
    `Folhas de papel A4 ou A3 em branco (duas ou três por criança, caso queira refazer)`,
    `Lápis de cor, canetinhas e lápis preto com borracha`,
    `Um exemplo de mapa de cenário pronto, feito pelo professor antes da aula (vista de cima, com legenda)`,
    `Cartão ou folha com a "ideia do jogo" que cada criança definiu na Aula 1`,
    `Régua pequena ou objeto reto para ajudar a traçar paredes (opcional)`,
  ],
  conceitosChave: [
    `Cenário — é o lugar onde o jogo acontece, como uma floresta, um castelo ou uma cozinha. É o palco da aventura.`,
    `Mapa do cenário — um desenho que mostra o lugar visto de cima, igual a um mapa de tesouro, para sabermos onde fica cada coisa.`,
    `Rascunho — um desenho rápido e simples, feito só para mostrar a ideia. Não precisa ficar perfeito, pode ter rabiscos.`,
    `Chão — a base do cenário, o piso onde tudo fica apoiado. Sem chão, os objetos ficariam flutuando no nada.`,
    `Paredes — as bordas que cercam o cenário e mostram até onde o lugar vai. São como as paredes de uma sala.`,
    `Objetos principais — as coisas importantes do cenário, como uma árvore, uma porta ou uma caixa, que dão vida ao lugar.`,
    `Legenda — uma listinha que explica o que cada cor ou símbolo do desenho significa, para todos entenderem o mapa.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você não precisa dominar o Maya, porque o foco é o papel. Mas é bom ter o Maya aberto no seu computador, ligado ao projetor, para que as crianças vejam o estúdio 3D e lembrem que o desenho de hoje vira construção amanhã. Um mapa de cenário é uma "vista de cima": imagine que você está flutuando no teto de uma sala e olha para baixo. Você vê o chão como um retângulo, as paredes como linhas nas bordas e os objetos como formas pequenas dentro. Prepare ANTES da aula um exemplo seu, simples e colorido, com chão, paredes e três objetos, mais uma legenda. Esse exemplo é a sua melhor ferramenta de ensino.

## Passo a passo da aula (ritmo 10/15/25/10)

PRIMEIROS 10 MINUTOS — Aquecimento e revisão. Sente as crianças em roda. Relembre a Aula 1: "Qual foi a grande ideia do seu jogo? Onde a aventura acontece?". Deixe cada uma dizer uma frase. Em seguida, mostre no projetor o Maya aberto. Aponte a área cinza do meio (o "espaço 3D" ou viewport) e diga: "Aqui é onde vamos construir o cenário. Mas antes, vamos desenhar o plano no papel."

PRÓXIMOS 15 MINUTOS — Conteúdo novo guiado. Mostre o seu exemplo de mapa. Explique a vista de cima com a analogia do teto. Desenhe ao vivo, no quadro ou numa folha sob a câmera, um retângulo grande e diga "este é o CHÃO". Trace linhas grossas nas bordas: "estas são as PAREDES". Coloque três formas dentro: um círculo (árvore), um quadradinho (caixa) e um retângulo na parede (porta). Por fim, faça a LEGENDA num canto: verde igual chão, marrom igual parede, e os nomes dos objetos. Use cores diferentes para cada tipo.

PRÓXIMOS 25 MINUTOS — Mão na massa. Entregue papel e lápis de cor. Peça que cada criança desenhe o mapa do seu próprio jogo, seguindo a ordem: primeiro o chão (um retângulo grande), depois as paredes nas bordas, depois pelo menos três objetos principais e, por último, a legenda. Circule pela sala, pergunte "onde fica a porta?", "o que tem nesse canto?". Incentive cores e nomes. Quem terminar rápido pode caprichar nos detalhes ou começar a numerar os objetos.

ÚLTIMOS 10 MINUTOS — Desafio e compartilhar. Desafio: peça que cada criança marque com uma estrela o objeto mais importante do cenário. Depois, faça uma roda rápida onde cada uma mostra o mapa e diz uma frase: "No meu jogo tem um chão de grama, paredes de pedra e uma árvore mágica". Elogie cada plano. Guarde os mapas numa pasta, pois serão usados nas próximas aulas no Maya.

## Como explicar para crianças

Use sempre analogias do mundo real. Diga que o mapa é como a "planta da casa" que os pedreiros usam, ou como o "mapa do tesouro" dos piratas. Explique a vista de cima pedindo que imaginem um passarinho voando bem alto, olhando a sala lá de cima. Repita a ordem mágica três vezes: "primeiro o chão, depois as paredes, depois os objetos". Lembre que rascunho não precisa ficar bonito, precisa ser claro. Frases curtas funcionam melhor que explicações longas.

## Erros comuns e como ajudar

Muitas crianças tentam desenhar o cenário de frente, como uma foto, em vez da vista de cima. Ajude virando a folha e mostrando de novo o exemplo do teto. Outras desenham objetos demais e o mapa vira bagunça; peça que escolham só os três mais importantes. Algumas esquecem o chão e começam pelos objetos flutuando; lembre sempre "o chão vem primeiro". Há quem queira deixar tudo perfeito e trave; tranquilize dizendo que é só um rascunho. E quem esquecer a legenda pode terminar sem saber o que cada cor significa, então passe nas mesas pedindo a listinha de cores no canto da folha.`,
  exercicios: [
    {
      titulo: `Vista de cima ou vista de frente?`,
      tipo: `Aquecimento em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor (ou em cartões) duas imagens simples da mesma sala: uma vista de frente, como uma foto, e uma vista de cima, como um mapa. Pergunte qual delas serve para fazer o mapa do cenário. Reforce a analogia do passarinho voando alto.`,
      atividade: `Olhe as duas imagens e levante a mão escolhendo qual é a vista de cima, aquela que usamos para desenhar o mapa do nosso cenário.`,
      gabarito: `A vista de cima é a correta para o mapa do cenário, porque mostra o lugar como se um passarinho olhasse lá de cima, deixando ver onde fica o chão, as paredes e os objetos. A vista de frente parece uma foto e não serve para o mapa.`,
    },
    {
      titulo: `Desenhando o chão e as paredes`,
      tipo: `Desenho guiado`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua o papel. Guie passo a passo: peça um retângulo grande no meio da folha (o chão) e depois linhas grossas nas quatro bordas (as paredes). Faça junto na sua folha sob a câmera. Verifique se todos têm chão antes de seguir.`,
      atividade: `Desenhe um retângulo grande no meio da folha para ser o seu chão. Depois faça linhas bem grossas nas quatro bordas para serem as suas paredes. Pinte o chão de uma cor e as paredes de outra.`,
      gabarito: `O desenho deve ter um retângulo grande representando o chão e quatro linhas grossas nas bordas representando as paredes, cada um com uma cor diferente. Exemplo: chão verde (grama) e paredes marrons (pedra ou madeira).`,
    },
    {
      titulo: `Colocando três objetos no cenário`,
      tipo: `Mão na massa`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que cada criança escolha três objetos principais do seu jogo e desenhe formas simples para eles dentro do mapa, sem encostar uns nos outros. Circule perguntando o que cada forma representa. Incentive nomes escritos ao lado.`,
      atividade: `Escolha três objetos importantes do seu jogo (como uma árvore, uma caixa e uma porta) e desenhe cada um como uma forma simples dentro do mapa. Escreva o nome ao lado de cada objeto.`,
      gabarito: `O mapa deve mostrar pelo menos três objetos diferentes desenhados como formas simples dentro do chão, cada um com seu nome escrito ao lado. Exemplo: um círculo chamado "árvore", um quadrado chamado "caixa" e um retângulo na parede chamado "porta".`,
    },
    {
      titulo: `Criando a legenda do mapa`,
      tipo: `Organização visual`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre de novo a legenda do seu exemplo. Explique que a legenda é a listinha que diz o que cada cor significa. Peça que façam a legenda num canto da folha, com um quadradinho colorido ao lado de cada palavra.`,
      atividade: `Num canto da sua folha, faça uma legenda: pinte um quadradinho da cor do chão e escreva "chão" ao lado, um da cor das paredes e escreva "paredes", e marque também as cores dos seus objetos.`,
      gabarito: `A legenda deve ter pelo menos três itens, cada um com um quadradinho colorido e o nome correspondente. Exemplo: quadradinho verde igual "chão", quadradinho marrom igual "paredes", quadradinho vermelho igual "porta". A legenda deve combinar com as cores usadas no mapa.`,
    },
    {
      titulo: `A estrela do cenário e a apresentação`,
      tipo: `Desafio e compartilhamento`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que cada criança marque com uma estrela o objeto mais importante do cenário e pense por que ele é especial. Depois conduza a roda final: cada um mostra o mapa e diz uma frase descrevendo o cenário. Elogie e guarde os mapas para as próximas aulas.`,
      atividade: `Desenhe uma estrela ao lado do objeto mais importante do seu cenário. Depois mostre o seu mapa para a turma e diga uma frase explicando o seu cenário, falando do chão, das paredes e da estrela.`,
      gabarito: `O mapa deve ter uma estrela marcando um objeto principal, e a criança deve conseguir dizer uma frase completa sobre o cenário. Exemplo: "No meu jogo tem um chão de areia, paredes de pedra e uma estrela na porta mágica, porque é por ela que o herói entra na aventura."`,
    },
  ],
};
