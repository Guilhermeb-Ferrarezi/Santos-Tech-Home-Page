import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "A Caixinha Mágica que Guarda Coisas",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança cria sua primeira variável no MakeCode e vê o valor guardado aparecer no chat do Minecraft, entendendo a variável como uma caixinha que guarda um número ou um nome.`,
  descricao: `Nesta aula apresentamos a ideia mais importante de toda a programação de games: a variável. Para uma criança pequena, variável é uma palavra difícil, então usamos uma imagem simples e mágica: a variável é uma caixinha que guarda alguma coisa dentro. Dentro da caixinha pode morar um número (como a quantidade de maçãs) ou um nome (como o nome do jogador). O computador olha dentro da caixinha sempre que precisa saber o que está guardado ali.

Por que isso importa? Porque tudo que um jogo lembra fica guardado em caixinhas: os pontos, a vida, o nome do herói, quantas moedas você pegou. Sem caixinhas, o jogo esqueceria tudo a cada segundo. Quando a criança entende que pode criar uma caixinha, dar um nome para ela e colocar um valor lá dentro, ela dá o primeiro passo para fazer um jogo que lembra das coisas. Este é o alicerce das próximas aulas do mês, em que vamos trocar o que está na caixinha e fazer o mundo reagir.

O que vamos fazer na prática: no MakeCode (a ferramenta de blocos coloridos que conversa com o Minecraft), cada criança vai criar uma variável, escolher um nome carinhoso para ela, colocar um valor dentro e mandar o Minecraft mostrar esse valor no chat. É a hora mágica em que a criança digita algo nos blocos e vê aparecer escrito na tela do jogo. Esse momento de causa e efeito encanta e fixa o conceito.

Para fechar, fazemos uma brincadeira guiada de colocar e trocar o conteúdo da caixinha, para que a criança perceba que a caixinha continua a mesma, mas o que está dentro pode mudar. Esse é o segredo da próxima aula, e plantamos a semente aqui.`,
  materiais: [
    `Computadores (1 por aluno ou em duplas) com Minecraft Education ou Bedrock + Code Connection já abertos e conectados ao MakeCode`,
    `Projetor ou TV grande para o professor mostrar a tela e fazer a demonstração guiada`,
    `Uma caixa de verdade (de sapato ou de presente) com uma etiqueta em branco colada na frente, para a analogia física`,
    `Cartões de papel com números (1, 5, 10) e cartões com nomes (Léo, Ana, Bento) para colocar dentro da caixa de verdade`,
    `Mundo do Minecraft já criado e em modo criativo, plano e tranquilo (sem monstros), salvo como modelo da turma`,
    `Folhas de desenho e lápis de cor para o exercício de papel`,
    `Adesivos ou carimbos de recompensa para celebrar a primeira variável criada`,
  ],
  conceitosChave: [
    `Variável — uma caixinha mágica do computador que guarda uma coisa dentro, como um número ou um nome.`,
    `Nome da variável — a etiqueta que colamos na caixinha para saber qual caixinha é qual; cada caixinha tem o seu nome.`,
    `Valor — o que está guardado dentro da caixinha agora; pode ser um número (como 10) ou uma palavra (como Léo).`,
    `Guardar (atribuir) — o ato de colocar uma coisa dentro da caixinha usando o bloco que difine o valor da variável.`,
    `Mostrar no chat — pedir para o Minecraft escrever na tela o que está guardado dentro da caixinha.`,
    `MakeCode — o lugar dos blocos coloridos que a gente encaixa para mandar o Minecraft fazer coisas.`,
    `Chat do Minecraft — a janelinha de mensagens do jogo onde aparecem os textos que a gente mandou mostrar.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Uma variável é um espaço com nome onde o computador guarda um valor que pode ser lido e trocado depois. No MakeCode for Minecraft, criar uma variável é simples: tudo acontece com blocos que se encaixam como peças de montar. Você não precisa dominar Minecraft para dar esta aula; precisa apenas conhecer três coisas. Primeiro, abrir o MakeCode conectado ao jogo (no Minecraft, pressione a tecla C ou clique no ícone do agente para abrir o Code Connection e depois o MakeCode no navegador). Segundo, na coluna esquerda do MakeCode existe a categoria Variáveis (Variables). Ao clicar nela, aparece o botão Criar uma variável (Make a Variable). Terceiro, o bloco roxo definir [nome] para [valor] (set ... to ...) é o que coloca algo dentro da caixinha, e o bloco verde do chat enviar mensagem (player ... say / chat) é o que mostra o valor na tela. Antes da aula, faça você mesmo uma vez: crie uma variável chamada pontos, defina para 10, e mostre no chat. Se aparecer 10 no jogo, está pronto.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre a caixa de verdade com a etiqueta em branco. Escreva pontos na etiqueta e coloque o cartão 10 dentro. Pergunte: o que tem na caixinha pontos? Tire o 10 e coloque o 5. Agora mudou! A caixinha é a mesma, o que está dentro mudou. Esta é a variável.

Conteúdo novo guiado (15 min): no projetor, abra o MakeCode conectado ao Minecraft. Clique na categoria Variáveis na coluna esquerda. Clique em Criar uma variável e digite pontos. Arraste para a área de blocos o bloco roxo definir pontos para 0 e troque o 0 por 10 clicando no campo do número. Depois, da categoria Jogador (Player) ou Chat, arraste o bloco enviar mensagem e encaixe dentro dele a variável pontos (arraste a bolinha roxa pontos da categoria Variáveis). Encaixe tudo dentro do bloco ao iniciar / quando o chat (on chat command) para rodar. Volte ao Minecraft e veja o 10 aparecer no chat.

Mão na massa (25 min): cada criança repete no seu computador, com você circulando. Eles criam a variável, escolhem o nome (deixe ser divertido: maças, estrelas), definem um número e mostram no chat. Quem terminar, troca o número e roda de novo para ver mudar.

Desafio + compartilhar (10 min): peça que troquem o conteúdo por um nome (uma palavra entre aspas, como o próprio nome do aluno) em vez de número. Cada criança mostra para a turma o que apareceu no chat dela.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use sempre a palavra caixinha, não variável, nas primeiras explicações. Diga: vamos criar uma caixinha mágica e dar um nome para ela. Compare com a lancheira (a lancheira tem um nome do dono e dentro pode ter coisas diferentes a cada dia). Mostre fisicamente abrir a caixa, colocar e trocar. Fale devagar e repita: criar a caixinha, dar o nome, botar dentro, mostrar. Celebre cada valor que aparece no chat como uma mágica.

## Erros comuns e como ajudar

As crianças costumam esquecer de encaixar os blocos dentro do bloco que roda (ao iniciar ou quando o chat), então nada aparece; mostre que o bloco precisa estar abraçado pelo bloco amarelo. Outra confusão é trocar o nome da caixinha com o que está dentro; reforce que o nome fica na etiqueta e o valor fica dentro. Alguns digitam um nome com espaço ou esquecem de clicar em Criar uma variável; ajude clicando junto. Se o chat não mostrar, verifique se o Minecraft ainda está conectado ao MakeCode (o cadeado ou o ícone de conexão). Tenha paciência: errar e tentar de novo faz parte da mágica.`,
  exercicios: [
    {
      titulo: `A caixinha de verdade`,
      tipo: `Roda de conversa com objeto físico`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda e mostre a caixa de verdade com a etiqueta em branco. Escreva um nome na etiqueta na frente deles e vá colocando e trocando os cartões dentro. Faça muitas perguntas e deixe as crianças responderem em voz alta. O objetivo é só sentir a ideia, sem computador ainda.`,
      atividade: `Olhem a caixinha. Vou colar a etiqueta com o nome maças. Agora coloco o cartão 5 dentro. O que tem na caixinha maças? Isso, tem 5! Agora tiro o 5 e coloco o 10. E agora, o que tem na caixinha? A caixinha continua sendo maças, mas o que está dentro mudou!`,
      gabarito: `A criança responde corretamente o valor que está dentro da caixa em cada momento (primeiro 5, depois 10) e percebe, ao ser perguntada, que o nome da caixinha (maças) não muda quando o conteúdo muda. Acertou quando consegue dizer separadamente o nome e o que está dentro.`,
    },
    {
      titulo: `Minha primeira caixinha no MakeCode`,
      tipo: `Prática guiada na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Com o MakeCode aberto em cada máquina, conduza passo a passo no projetor e espere a turma acompanhar. Diga onde clicar: categoria Variáveis, botão Criar uma variável, bloco definir para. Circule ajudando a encaixar os blocos dentro do bloco que roda.`,
      atividade: `Clique em Variáveis na coluna da esquerda. Clique em Criar uma variável e escreva pontos. Arraste o bloco roxo definir pontos para e troque o número para 7. Pegue o bloco de mostrar mensagem do chat e coloque a bolinha roxa pontos dentro dele. Encaixe tudo no bloco que roda e volte ao Minecraft para ver.`,
      gabarito: `No chat do Minecraft aparece o número 7. A criança criou a variável pontos, definiu o valor 7 e mostrou no chat, com os blocos corretamente encaixados dentro do bloco de execução. Acertou quando o 7 aparece na tela do jogo.`,
    },
    {
      titulo: `Troca-troca da caixinha`,
      tipo: `Jogo de trocar valores na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Transforme a repetição em brincadeira. Cada vez que você bater palma, a criança troca o número dentro da variável e roda de novo no Minecraft para ver o valor mudar no chat. É treino de definir o valor e de causa e efeito.`,
      atividade: `Mantenha sua caixinha pontos pronta. Quando eu bater uma palma, troque o número de dentro: clique no campo e digite outro número. Depois rode no Minecraft e veja o que apareceu no chat. Vamos trocar três vezes: 1, depois 20, depois 100!`,
      gabarito: `A cada troca, o chat do Minecraft mostra exatamente o novo número digitado (1, depois 20, depois 100). Acertou quando o valor que aparece no chat sempre bate com o último número que a criança colocou dentro da caixinha.`,
    },
    {
      titulo: `Desenhe sua caixinha mágica`,
      tipo: `Desenho em papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua folha e lápis de cor. Peça que cada criança desenhe uma caixa, escreva (ou peça ajuda para escrever) o nome na etiqueta e desenhe ou escreva o que está guardado dentro. Vale número ou palavra. Reforce a separação entre etiqueta (nome) e conteúdo (valor).`,
      atividade: `Desenhe uma caixinha bem bonita. Coloque uma etiqueta na frente e escreva o nome dela (por exemplo, estrelas ou vidas). Agora desenhe ou escreva o que está guardado dentro da sua caixinha: pode ser um número ou uma palavra.`,
      gabarito: `O desenho mostra claramente duas partes: uma etiqueta com um nome (na frente da caixa) e um conteúdo distinto dentro da caixa (um número ou uma palavra). Acertou quando o nome e o valor estão separados e a criança consegue apontar e dizer qual é qual.`,
    },
    {
      titulo: `Guardando um nome (desafio)`,
      tipo: `Desafio na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Este é o passo mais difícil: guardar uma palavra em vez de número. Mostre que, para texto, usamos o bloco de texto com aspas, encaixado no definir. Faça um exemplo no projetor com o seu nome e depois deixe cada criança colocar o próprio nome e mostrar no chat.`,
      atividade: `Crie uma caixinha chamada jogador. No bloco definir jogador para, encaixe um bloco de texto e escreva o seu nome entre as aspas. Mostre a caixinha jogador no chat. Quando você rodar no Minecraft, o seu nome vai aparecer na tela!`,
      gabarito: `No chat do Minecraft aparece o nome que a criança escreveu (por exemplo, Ana). A variável jogador guardou uma palavra (texto) em vez de número e foi mostrada corretamente. Acertou quando o nome do aluno surge escrito no chat do jogo.`,
    },
  ],
};
